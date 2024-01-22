const DATOCMS_API_KEY = "8bf0dc495ce6124869718db1a4bc73";
const DATOCMS_API_ENDPOINT = "https://graphql.datocms.com/";
const DATOCMS_ENVIRONMENT_NAME = "main";
class GenqlError extends Error {
  errors = [];
  /**
   * Partial data returned by the server
   */
  data;
  constructor(errors, data) {
    let message = Array.isArray(errors) ? errors.map((x) => x?.message || "").join("\n") : "";
    if (!message) {
      message = "GraphQL error";
    }
    super(message);
    this.errors = errors;
    this.data = data;
  }
}
function dispatchQueueBatch(client2, queue) {
  let batchedQuery = queue.map((item) => item.request);
  if (batchedQuery.length === 1) {
    batchedQuery = batchedQuery[0];
  }
  client2.fetcher(batchedQuery).then((responses) => {
    if (queue.length === 1 && !Array.isArray(responses)) {
      if (responses.errors && responses.errors.length) {
        queue[0].reject(
          new GenqlError(responses.errors, responses.data)
        );
        return;
      }
      queue[0].resolve(responses);
      return;
    } else if (responses.length !== queue.length) {
      throw new Error("response length did not match query length");
    }
    for (let i = 0; i < queue.length; i++) {
      if (responses[i].errors && responses[i].errors.length) {
        queue[i].reject(
          new GenqlError(responses[i].errors, responses[i].data)
        );
      } else {
        queue[i].resolve(responses[i]);
      }
    }
  });
}
function dispatchQueue(client2, options) {
  const queue = client2._queue;
  const maxBatchSize = options.maxBatchSize || 0;
  client2._queue = [];
  if (maxBatchSize > 0 && maxBatchSize < queue.length) {
    for (let i = 0; i < queue.length / maxBatchSize; i++) {
      dispatchQueueBatch(
        client2,
        queue.slice(i * maxBatchSize, (i + 1) * maxBatchSize)
      );
    }
  } else {
    dispatchQueueBatch(client2, queue);
  }
}
class QueryBatcher {
  fetcher;
  _options;
  _queue;
  constructor(fetcher, {
    batchInterval = 6,
    shouldBatch = true,
    maxBatchSize = 0
  } = {}) {
    this.fetcher = fetcher;
    this._options = {
      batchInterval,
      shouldBatch,
      maxBatchSize
    };
    this._queue = [];
  }
  /**
   * Fetch will send a graphql request and return the parsed json.
   * @param {string}      query          - the graphql query.
   * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
   * @param {[string]}    operationName  - the graphql operationName.
   * @param {Options}     overrides      - the client options overrides.
   *
   * @return {promise} resolves to parsed json of server response
   *
   * @example
   * client.fetch(`
   *    query getHuman($id: ID!) {
   *      human(id: $id) {
   *        name
   *        height
   *      }
   *    }
   * `, { id: "1001" }, 'getHuman')
   *    .then(human => {
   *      // do something with human
   *      console.log(human);
   *    });
   */
  fetch(query, variables, operationName, overrides = {}) {
    const request = {
      query
    };
    const options = Object.assign({}, this._options, overrides);
    if (variables) {
      request.variables = variables;
    }
    if (operationName) {
      request.operationName = operationName;
    }
    const promise = new Promise((resolve, reject) => {
      this._queue.push({
        request,
        resolve,
        reject
      });
      if (this._queue.length === 1) {
        if (options.shouldBatch) {
          setTimeout(
            () => dispatchQueue(this, options),
            options.batchInterval
          );
        } else {
          dispatchQueue(this, options);
        }
      }
    });
    return promise;
  }
  /**
   * Fetch will send a graphql request and return the parsed json.
   * @param {string}      query          - the graphql query.
   * @param {Variables}   variables      - any variables you wish to inject as key/value pairs.
   * @param {[string]}    operationName  - the graphql operationName.
   * @param {Options}     overrides      - the client options overrides.
   *
   * @return {Promise<Array<Result>>} resolves to parsed json of server response
   *
   * @example
   * client.forceFetch(`
   *    query getHuman($id: ID!) {
   *      human(id: $id) {
   *        name
   *        height
   *      }
   *    }
   * `, { id: "1001" }, 'getHuman')
   *    .then(human => {
   *      // do something with human
   *      console.log(human);
   *    });
   */
  forceFetch(query, variables, operationName, overrides = {}) {
    const request = {
      query
    };
    const options = Object.assign({}, this._options, overrides, {
      shouldBatch: false
    });
    if (variables) {
      request.variables = variables;
    }
    if (operationName) {
      request.operationName = operationName;
    }
    const promise = new Promise((resolve, reject) => {
      const client2 = new QueryBatcher(this.fetcher, this._options);
      client2._queue = [
        {
          request,
          resolve,
          reject
        }
      ];
      dispatchQueue(client2, options);
    });
    return promise;
  }
}
const DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40
};
const createFetcher = ({
  url,
  headers = {},
  fetcher,
  fetch: _fetch,
  batch = false,
  ...rest
}) => {
  if (!url && !fetcher) {
    throw new Error("url or fetcher is required");
  }
  if (!fetcher) {
    fetcher = async (body) => {
      let headersObject = typeof headers == "function" ? await headers() : headers;
      headersObject = headersObject || {};
      if (typeof fetch === "undefined" && !_fetch) {
        throw new Error(
          "Global `fetch` function is not available, pass a fetch polyfill to Genql `createClient`"
        );
      }
      let fetchImpl = _fetch || fetch;
      const res = await fetchImpl(url, {
        headers: {
          "Content-Type": "application/json",
          ...headersObject
        },
        method: "POST",
        body: JSON.stringify(body),
        ...rest
      });
      if (!res.ok) {
        throw new Error(`${res.statusText}: ${await res.text()}`);
      }
      const json = await res.json();
      return json;
    };
  }
  if (!batch) {
    return async (body) => {
      const json = await fetcher(body);
      if (Array.isArray(json)) {
        return json.map((json2) => {
          if (json2?.errors?.length) {
            throw new GenqlError(json2.errors || [], json2.data);
          }
          return json2.data;
        });
      } else {
        if (json?.errors?.length) {
          throw new GenqlError(json.errors || [], json.data);
        }
        return json.data;
      }
    };
  }
  const batcher = new QueryBatcher(
    async (batchedQuery) => {
      const json = await fetcher(batchedQuery);
      return json;
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch
  );
  return async ({ query, variables }) => {
    const json = await batcher.fetch(query, variables);
    if (json?.data) {
      return json.data;
    }
    throw new Error(
      "Genql batch fetcher returned unexpected result " + JSON.stringify(json)
    );
  };
};
const parseRequest = (request, ctx, path) => {
  if (typeof request === "object" && "__args" in request) {
    const args = request.__args;
    let fields = { ...request };
    delete fields.__args;
    const argNames = Object.keys(args);
    if (argNames.length === 0) {
      return parseRequest(fields, ctx, path);
    }
    const field = getFieldFromPath(ctx.root, path);
    const argStrings = argNames.map((argName) => {
      ctx.varCounter++;
      const varName = `v${ctx.varCounter}`;
      const typing = field.args && field.args[argName];
      if (!typing) {
        throw new Error(
          `no typing defined for argument \`${argName}\` in path \`${path.join(
            "."
          )}\``
        );
      }
      ctx.variables[varName] = {
        value: args[argName],
        typing
      };
      return `${argName}:$${varName}`;
    });
    return `(${argStrings})${parseRequest(fields, ctx, path)}`;
  } else if (typeof request === "object" && Object.keys(request).length > 0) {
    const fields = request;
    const fieldNames = Object.keys(fields).filter((k) => Boolean(fields[k]));
    if (fieldNames.length === 0) {
      throw new Error(
        `field selection should not be empty: ${path.join(".")}`
      );
    }
    const type = path.length > 0 ? getFieldFromPath(ctx.root, path).type : ctx.root;
    const scalarFields = type.scalar;
    let scalarFieldsFragment;
    if (fieldNames.includes("__scalar")) {
      const falsyFieldNames = new Set(
        Object.keys(fields).filter((k) => !Boolean(fields[k]))
      );
      if (scalarFields?.length) {
        ctx.fragmentCounter++;
        scalarFieldsFragment = `f${ctx.fragmentCounter}`;
        ctx.fragments.push(
          `fragment ${scalarFieldsFragment} on ${type.name}{${scalarFields.filter((f) => !falsyFieldNames.has(f)).join(",")}}`
        );
      }
    }
    const fieldsSelection = fieldNames.filter((f) => !["__scalar", "__name"].includes(f)).map((f) => {
      const parsed = parseRequest(fields[f], ctx, [...path, f]);
      if (f.startsWith("on_")) {
        ctx.fragmentCounter++;
        const implementationFragment = `f${ctx.fragmentCounter}`;
        const typeMatch = f.match(/^on_(.+)/);
        if (!typeMatch || !typeMatch[1])
          throw new Error("match failed");
        ctx.fragments.push(
          `fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`
        );
        return `...${implementationFragment}`;
      } else {
        return `${f}${parsed}`;
      }
    }).concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : []).join(",");
    return `{${fieldsSelection}}`;
  } else {
    return "";
  }
};
const generateGraphqlOperation = (operation, root, fields) => {
  const ctx = {
    root,
    varCounter: 0,
    variables: {},
    fragmentCounter: 0,
    fragments: []
  };
  const result = parseRequest(fields, ctx, []);
  const varNames = Object.keys(ctx.variables);
  const varsString = varNames.length > 0 ? `(${varNames.map((v) => {
    const variableType = ctx.variables[v].typing[1];
    return `$${v}:${variableType}`;
  })})` : "";
  const operationName = fields?.__name || "";
  return {
    query: [
      `${operation} ${operationName}${varsString}${result}`,
      ...ctx.fragments
    ].join(","),
    variables: Object.keys(ctx.variables).reduce(
      (r, v) => {
        r[v] = ctx.variables[v].value;
        return r;
      },
      {}
    ),
    ...operationName ? { operationName: operationName.toString() } : {}
  };
};
const getFieldFromPath = (root, path) => {
  let current;
  if (!root)
    throw new Error("root type is not provided");
  if (path.length === 0)
    throw new Error(`path is empty`);
  path.forEach((f) => {
    const type = current ? current.type : root;
    if (!type.fields)
      throw new Error(`type \`${type.name}\` does not have fields`);
    const possibleTypes = Object.keys(type.fields).filter((i) => i.startsWith("on_")).reduce(
      (types2, fieldName) => {
        const field2 = type.fields && type.fields[fieldName];
        if (field2)
          types2.push(field2.type);
        return types2;
      },
      [type]
    );
    let field = null;
    possibleTypes.forEach((type2) => {
      const found = type2.fields && type2.fields[f];
      if (found)
        field = found;
    });
    if (!field)
      throw new Error(
        `type \`${type.name}\` does not have a field \`${f}\``
      );
    current = field;
  });
  return current;
};
const createClient$1 = ({
  queryRoot,
  mutationRoot,
  subscriptionRoot,
  ...options
}) => {
  const fetcher = createFetcher(options);
  const client2 = {};
  if (queryRoot) {
    client2.query = (request) => {
      if (!queryRoot)
        throw new Error("queryRoot argument is missing");
      const resultPromise = fetcher(
        generateGraphqlOperation("query", queryRoot, request)
      );
      return resultPromise;
    };
  }
  if (mutationRoot) {
    client2.mutation = (request) => {
      if (!mutationRoot)
        throw new Error("mutationRoot argument is missing");
      const resultPromise = fetcher(
        generateGraphqlOperation("mutation", mutationRoot, request)
      );
      return resultPromise;
    };
  }
  return client2;
};
const linkTypeMap = (typeMap2) => {
  const indexToName = Object.assign(
    {},
    ...Object.keys(typeMap2.types).map((k, i) => ({ [i]: k }))
  );
  let intermediaryTypeMap = Object.assign(
    {},
    ...Object.keys(typeMap2.types || {}).map(
      (k) => {
        const type = typeMap2.types[k];
        const fields = type || {};
        return {
          [k]: {
            name: k,
            // type scalar properties
            scalar: Object.keys(fields).filter((f) => {
              const [type2] = fields[f] || [];
              return type2 && typeMap2.scalars.includes(type2);
            }),
            // fields with corresponding `type` and `args`
            fields: Object.assign(
              {},
              ...Object.keys(fields).map(
                (f) => {
                  const [typeIndex, args] = fields[f] || [];
                  if (typeIndex == null) {
                    return {};
                  }
                  return {
                    [f]: {
                      // replace index with type name
                      type: indexToName[typeIndex],
                      args: Object.assign(
                        {},
                        ...Object.keys(args || {}).map(
                          (k2) => {
                            if (!args || !args[k2]) {
                              return;
                            }
                            const [
                              argTypeName,
                              argTypeString
                            ] = args[k2];
                            return {
                              [k2]: [
                                indexToName[argTypeName],
                                argTypeString || indexToName[argTypeName]
                              ]
                            };
                          }
                        )
                      )
                    }
                  };
                }
              )
            )
          }
        };
      }
    )
  );
  const res = resolveConcreteTypes(intermediaryTypeMap);
  return res;
};
const resolveConcreteTypes = (linkedTypeMap) => {
  Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
    const type = linkedTypeMap[typeNameFromKey];
    if (!type.fields) {
      return;
    }
    const fields = type.fields;
    Object.keys(fields).forEach((f) => {
      const field = fields[f];
      if (field.args) {
        const args = field.args;
        Object.keys(args).forEach((key) => {
          const arg = args[key];
          if (arg) {
            const [typeName2] = arg;
            if (typeof typeName2 === "string") {
              if (!linkedTypeMap[typeName2]) {
                linkedTypeMap[typeName2] = { name: typeName2 };
              }
              arg[0] = linkedTypeMap[typeName2];
            }
          }
        });
      }
      const typeName = field.type;
      if (typeof typeName === "string") {
        if (!linkedTypeMap[typeName]) {
          linkedTypeMap[typeName] = { name: typeName };
        }
        field.type = linkedTypeMap[typeName];
      }
    });
  });
  return linkedTypeMap;
};
const types = {
  "scalars": [
    1,
    3,
    6,
    9,
    12,
    13,
    16,
    18,
    21,
    22,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    52,
    53,
    55,
    57,
    58,
    61,
    62,
    66,
    72,
    78,
    83,
    86,
    103,
    108,
    109,
    113,
    117
  ],
  "types": {
    "ActionBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "link": [
        86
      ],
      "text": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "Boolean": {},
    "BooleanFilter": {
      "eq": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "BooleanType": {},
    "CardBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "content": [
        76
      ],
      "cta": [
        0
      ],
      "id": [
        55
      ],
      "media": [
        19
      ],
      "title": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "CollectionMetadata": {
      "count": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "ColorBucketType": {},
    "ColorField": {
      "alpha": [
        53
      ],
      "blue": [
        53
      ],
      "cssRgb": [
        86
      ],
      "green": [
        53
      ],
      "hex": [
        86
      ],
      "red": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "CourseModelFilter": {
      "_createdAt": [
        11
      ],
      "id": [
        56
      ],
      "_firstPublishedAt": [
        68
      ],
      "_publicationScheduledAt": [
        68
      ],
      "_unpublishingScheduledAt": [
        68
      ],
      "_publishedAt": [
        68
      ],
      "_status": [
        85
      ],
      "_updatedAt": [
        92
      ],
      "_isValid": [
        2
      ],
      "duration": [
        54
      ],
      "faq": [
        59
      ],
      "level": [
        87
      ],
      "name": [
        87
      ],
      "numberOfEnrolledStudents": [
        54
      ],
      "numberOfSections": [
        54
      ],
      "price": [
        54
      ],
      "slug": [
        84
      ],
      "tag": [
        87
      ],
      "OR": [
        8
      ],
      "AND": [
        8
      ],
      "__typename": [
        86
      ]
    },
    "CourseModelOrderBy": {},
    "CourseRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "duration": [
        53
      ],
      "faq": [
        17
      ],
      "featuresCards": [
        4
      ],
      "id": [
        55
      ],
      "level": [
        86
      ],
      "name": [
        86
      ],
      "numberOfEnrolledStudents": [
        53
      ],
      "numberOfSections": [
        53
      ],
      "price": [
        53
      ],
      "seo": [
        80
      ],
      "singleTestimonial": [
        90
      ],
      "slug": [
        86
      ],
      "tag": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "CreatedAtFilter": {
      "gt": [
        13
      ],
      "lt": [
        13
      ],
      "gte": [
        13
      ],
      "lte": [
        13
      ],
      "eq": [
        13
      ],
      "neq": [
        13
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "CustomData": {},
    "DateTime": {},
    "FaqBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "answer": [
        76
      ],
      "id": [
        55
      ],
      "question": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "FaqItemModelFilter": {
      "_createdAt": [
        11
      ],
      "id": [
        56
      ],
      "_firstPublishedAt": [
        68
      ],
      "_publicationScheduledAt": [
        68
      ],
      "_unpublishingScheduledAt": [
        68
      ],
      "_publishedAt": [
        68
      ],
      "_status": [
        85
      ],
      "_updatedAt": [
        92
      ],
      "_isValid": [
        2
      ],
      "title": [
        87
      ],
      "OR": [
        15
      ],
      "AND": [
        15
      ],
      "__typename": [
        86
      ]
    },
    "FaqItemModelOrderBy": {},
    "FaqItemRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "faqBlocks": [
        14
      ],
      "id": [
        55
      ],
      "title": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "FaviconType": {},
    "FileField": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_updatedAt": [
        13
      ],
      "alt": [
        86,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "author": [
        86
      ],
      "basename": [
        86
      ],
      "blurUpThumb": [
        86,
        {
          "punch": [
            21,
            "Float!"
          ],
          "size": [
            52,
            "Int!"
          ],
          "quality": [
            52,
            "Int!"
          ],
          "imgixParams": [
            27
          ]
        }
      ],
      "blurhash": [
        86
      ],
      "colors": [
        7
      ],
      "copyright": [
        86
      ],
      "customData": [
        12,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "exifInfo": [
        12
      ],
      "filename": [
        86
      ],
      "focalPoint": [
        118,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "format": [
        86
      ],
      "height": [
        53
      ],
      "id": [
        103
      ],
      "md5": [
        86
      ],
      "mimeType": [
        86
      ],
      "notes": [
        86
      ],
      "responsiveImage": [
        73,
        {
          "imgixParams": [
            27
          ],
          "sizes": [
            86
          ],
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "size": [
        53
      ],
      "smartTags": [
        86
      ],
      "tags": [
        86
      ],
      "thumbhash": [
        86
      ],
      "title": [
        86,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "url": [
        86,
        {
          "imgixParams": [
            27
          ]
        }
      ],
      "video": [
        115
      ],
      "width": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "FileFieldInterface": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_updatedAt": [
        13
      ],
      "alt": [
        86,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "author": [
        86
      ],
      "basename": [
        86
      ],
      "blurUpThumb": [
        86,
        {
          "punch": [
            21,
            "Float!"
          ],
          "size": [
            52,
            "Int!"
          ],
          "quality": [
            52,
            "Int!"
          ],
          "imgixParams": [
            27
          ]
        }
      ],
      "blurhash": [
        86
      ],
      "colors": [
        7
      ],
      "copyright": [
        86
      ],
      "customData": [
        12,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "exifInfo": [
        12
      ],
      "filename": [
        86
      ],
      "focalPoint": [
        118,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "format": [
        86
      ],
      "height": [
        53
      ],
      "id": [
        103
      ],
      "md5": [
        86
      ],
      "mimeType": [
        86
      ],
      "notes": [
        86
      ],
      "responsiveImage": [
        73,
        {
          "imgixParams": [
            27
          ],
          "sizes": [
            86
          ],
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "size": [
        53
      ],
      "smartTags": [
        86
      ],
      "tags": [
        86
      ],
      "thumbhash": [
        86
      ],
      "title": [
        86,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "url": [
        86,
        {
          "imgixParams": [
            27
          ]
        }
      ],
      "video": [
        115
      ],
      "width": [
        53
      ],
      "on_FileField": [
        19
      ],
      "__typename": [
        86
      ]
    },
    "Float": {},
    "FloatType": {},
    "GlobalSeoField": {
      "facebookPageUrl": [
        86
      ],
      "fallbackSeo": [
        81
      ],
      "siteName": [
        86
      ],
      "titleSuffix": [
        86
      ],
      "twitterAccount": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "HeadingBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "heading": [
        86
      ],
      "id": [
        55
      ],
      "subheading": [
        86,
        {
          "markdown": [
            1
          ]
        }
      ],
      "__typename": [
        86
      ]
    },
    "HomepageRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "about": [
        4
      ],
      "ctaAction": [
        0
      ],
      "ctaHeading": [
        24
      ],
      "faq": [
        17
      ],
      "faqHeading": [
        24
      ],
      "featureCards": [
        4
      ],
      "featuresCta": [
        0
      ],
      "featuresHeading": [
        24
      ],
      "heroCta": [
        0
      ],
      "heroSubtitle": [
        86,
        {
          "markdown": [
            1
          ]
        }
      ],
      "heroTestimonialPictures": [
        19
      ],
      "heroTestimonialTitle": [
        86
      ],
      "heroTitle": [
        86
      ],
      "id": [
        55
      ],
      "multipleTestimonials": [
        90
      ],
      "newCoursesRecords": [
        10
      ],
      "newCoursesTitle": [
        86
      ],
      "popularCoursesRecords": [
        10
      ],
      "popularCoursesTitle": [
        86
      ],
      "seo": [
        80
      ],
      "statsAction": [
        0
      ],
      "statsData": [
        24
      ],
      "statsHeading": [
        24
      ],
      "statsImages": [
        19
      ],
      "title": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "ImageBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "image": [
        19
      ],
      "__typename": [
        86
      ]
    },
    "ImgixParams": {
      "ar": [
        86
      ],
      "auto": [
        28
      ],
      "bgRemove": [
        3
      ],
      "bg": [
        86
      ],
      "blendAlign": [
        29
      ],
      "blendAlpha": [
        53
      ],
      "blendColor": [
        86
      ],
      "blendCrop": [
        30
      ],
      "blendFit": [
        31
      ],
      "blendH": [
        22
      ],
      "blendMode": [
        32
      ],
      "blendPad": [
        53
      ],
      "blendSize": [
        33
      ],
      "blendW": [
        22
      ],
      "blendX": [
        53
      ],
      "blendY": [
        53
      ],
      "blend": [
        86
      ],
      "blur": [
        53
      ],
      "borderBottom": [
        53
      ],
      "borderLeft": [
        53
      ],
      "borderRadiusInner": [
        86
      ],
      "borderRadius": [
        86
      ],
      "borderRight": [
        53
      ],
      "borderTop": [
        53
      ],
      "border": [
        86
      ],
      "bri": [
        53
      ],
      "ch": [
        34
      ],
      "chromasub": [
        53
      ],
      "colorquant": [
        53
      ],
      "colors": [
        53
      ],
      "con": [
        53
      ],
      "cornerRadius": [
        86
      ],
      "crop": [
        35
      ],
      "cs": [
        36
      ],
      "dl": [
        86
      ],
      "dpi": [
        53
      ],
      "dpr": [
        22
      ],
      "duotoneAlpha": [
        53
      ],
      "duotone": [
        86
      ],
      "exp": [
        53
      ],
      "expires": [
        53
      ],
      "faceindex": [
        53
      ],
      "facepad": [
        22
      ],
      "faces": [
        53
      ],
      "fillColor": [
        86
      ],
      "fill": [
        37
      ],
      "fit": [
        38
      ],
      "flip": [
        39
      ],
      "fm": [
        40
      ],
      "fpDebug": [
        3
      ],
      "fpX": [
        22
      ],
      "fpY": [
        22
      ],
      "fpZ": [
        22
      ],
      "fps": [
        53
      ],
      "frame": [
        86
      ],
      "gam": [
        53
      ],
      "gifQ": [
        53
      ],
      "gridColors": [
        86
      ],
      "gridSize": [
        53
      ],
      "h": [
        22
      ],
      "high": [
        53
      ],
      "htn": [
        53
      ],
      "hue": [
        53
      ],
      "interval": [
        53
      ],
      "invert": [
        3
      ],
      "iptc": [
        41
      ],
      "loop": [
        53
      ],
      "lossless": [
        3
      ],
      "markAlign": [
        42
      ],
      "markAlpha": [
        53
      ],
      "markBase": [
        86
      ],
      "markFit": [
        43
      ],
      "markH": [
        22
      ],
      "markPad": [
        53
      ],
      "markRot": [
        22
      ],
      "markScale": [
        53
      ],
      "markTile": [
        44
      ],
      "markW": [
        22
      ],
      "markX": [
        53
      ],
      "markY": [
        53
      ],
      "mark": [
        86
      ],
      "maskBg": [
        86
      ],
      "mask": [
        86
      ],
      "maxH": [
        53
      ],
      "maxW": [
        53
      ],
      "minH": [
        53
      ],
      "minW": [
        53
      ],
      "monochrome": [
        86
      ],
      "nr": [
        53
      ],
      "nrs": [
        53
      ],
      "orient": [
        53
      ],
      "padBottom": [
        53
      ],
      "padLeft": [
        53
      ],
      "padRight": [
        53
      ],
      "padTop": [
        53
      ],
      "pad": [
        53
      ],
      "page": [
        53
      ],
      "palette": [
        45
      ],
      "pdfAnnotation": [
        3
      ],
      "prefix": [
        86
      ],
      "px": [
        53
      ],
      "q": [
        53
      ],
      "rect": [
        86
      ],
      "reverse": [
        3
      ],
      "rot": [
        22
      ],
      "sat": [
        53
      ],
      "sepia": [
        53
      ],
      "shad": [
        22
      ],
      "sharp": [
        22
      ],
      "skip": [
        53
      ],
      "transparency": [
        46
      ],
      "trimColor": [
        86
      ],
      "trimMd": [
        22
      ],
      "trimPad": [
        53
      ],
      "trimSd": [
        22
      ],
      "trimTol": [
        22
      ],
      "trim": [
        47
      ],
      "txtAlign": [
        48
      ],
      "txtClip": [
        49
      ],
      "txtColor": [
        86
      ],
      "txtFit": [
        50
      ],
      "txtFont": [
        86
      ],
      "txtLead": [
        53
      ],
      "txtLig": [
        53
      ],
      "txtLineColor": [
        86
      ],
      "txtLine": [
        53
      ],
      "txtPad": [
        53
      ],
      "txtShad": [
        22
      ],
      "txtSize": [
        53
      ],
      "txtTrack": [
        53
      ],
      "txtWidth": [
        53
      ],
      "txtX": [
        53
      ],
      "txtY": [
        53
      ],
      "txt": [
        86
      ],
      "usm": [
        53
      ],
      "usmrad": [
        22
      ],
      "vib": [
        53
      ],
      "w": [
        22
      ],
      "__typename": [
        86
      ]
    },
    "ImgixParamsAuto": {},
    "ImgixParamsBlendAlign": {},
    "ImgixParamsBlendCrop": {},
    "ImgixParamsBlendFit": {},
    "ImgixParamsBlendMode": {},
    "ImgixParamsBlendSize": {},
    "ImgixParamsCh": {},
    "ImgixParamsCrop": {},
    "ImgixParamsCs": {},
    "ImgixParamsFill": {},
    "ImgixParamsFit": {},
    "ImgixParamsFlip": {},
    "ImgixParamsFm": {},
    "ImgixParamsIptc": {},
    "ImgixParamsMarkAlign": {},
    "ImgixParamsMarkFit": {},
    "ImgixParamsMarkTile": {},
    "ImgixParamsPalette": {},
    "ImgixParamsTransparency": {},
    "ImgixParamsTrim": {},
    "ImgixParamsTxtAlign": {},
    "ImgixParamsTxtClip": {},
    "ImgixParamsTxtFit": {},
    "InUseFilter": {
      "eq": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "Int": {},
    "IntType": {},
    "IntegerFilter": {
      "gt": [
        53
      ],
      "lt": [
        53
      ],
      "gte": [
        53
      ],
      "lte": [
        53
      ],
      "exists": [
        3
      ],
      "eq": [
        53
      ],
      "neq": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "ItemId": {},
    "ItemIdFilter": {
      "eq": [
        55
      ],
      "neq": [
        55
      ],
      "in": [
        55
      ],
      "notIn": [
        55
      ],
      "__typename": [
        86
      ]
    },
    "ItemStatus": {},
    "JsonField": {},
    "LinkFilter": {
      "eq": [
        55
      ],
      "neq": [
        55
      ],
      "in": [
        55
      ],
      "notIn": [
        55
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "LinksFilter": {
      "eq": [
        55
      ],
      "allIn": [
        55
      ],
      "anyIn": [
        55
      ],
      "notIn": [
        55
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "MetaTagAttributes": {},
    "MuxThumbnailFormatType": {},
    "NoteBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "content": [
        76
      ],
      "id": [
        55
      ],
      "noteType": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "OrientationFilter": {
      "eq": [
        109
      ],
      "neq": [
        109
      ],
      "__typename": [
        86
      ]
    },
    "PostModelFilter": {
      "_createdAt": [
        11
      ],
      "id": [
        56
      ],
      "_firstPublishedAt": [
        68
      ],
      "_publicationScheduledAt": [
        68
      ],
      "_unpublishingScheduledAt": [
        68
      ],
      "_publishedAt": [
        68
      ],
      "_status": [
        85
      ],
      "_updatedAt": [
        92
      ],
      "_isValid": [
        2
      ],
      "routePaths": [
        60
      ],
      "slug": [
        84
      ],
      "title": [
        87
      ],
      "OR": [
        65
      ],
      "AND": [
        65
      ],
      "__typename": [
        86
      ]
    },
    "PostModelOrderBy": {},
    "PostRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "cta": [
        4
      ],
      "id": [
        55
      ],
      "modularContent": [
        76
      ],
      "routePaths": [
        79
      ],
      "seo": [
        80
      ],
      "slug": [
        86
      ],
      "title": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "PublishedAtFilter": {
      "gt": [
        13
      ],
      "lt": [
        13
      ],
      "gte": [
        13
      ],
      "lte": [
        13
      ],
      "eq": [
        13
      ],
      "neq": [
        13
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "Query": {
      "_allCoursesMeta": [
        5,
        {
          "locale": [
            83
          ],
          "filter": [
            8
          ]
        }
      ],
      "_allFaqItemsMeta": [
        5,
        {
          "locale": [
            83
          ],
          "filter": [
            15
          ]
        }
      ],
      "_allPostsMeta": [
        5,
        {
          "locale": [
            83
          ],
          "filter": [
            65
          ]
        }
      ],
      "_allRoutePathsMeta": [
        5,
        {
          "locale": [
            83
          ],
          "filter": [
            77
          ]
        }
      ],
      "_allUploadsMeta": [
        5,
        {
          "locale": [
            83
          ],
          "filter": [
            100
          ]
        }
      ],
      "_site": [
        82,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "allCourses": [
        10,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "skip": [
            53
          ],
          "first": [
            53
          ],
          "filter": [
            8
          ],
          "orderBy": [
            9,
            "[CourseModelOrderBy]"
          ]
        }
      ],
      "allFaqItems": [
        17,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "skip": [
            53
          ],
          "first": [
            53
          ],
          "filter": [
            15
          ],
          "orderBy": [
            16,
            "[FaqItemModelOrderBy]"
          ]
        }
      ],
      "allPosts": [
        67,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "skip": [
            53
          ],
          "first": [
            53
          ],
          "filter": [
            65
          ],
          "orderBy": [
            66,
            "[PostModelOrderBy]"
          ]
        }
      ],
      "allRoutePaths": [
        79,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "skip": [
            53
          ],
          "first": [
            53
          ],
          "filter": [
            77
          ],
          "orderBy": [
            78,
            "[RoutePathModelOrderBy]"
          ]
        }
      ],
      "allUploads": [
        19,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "skip": [
            53
          ],
          "first": [
            53
          ],
          "filter": [
            100
          ],
          "orderBy": [
            108,
            "[UploadOrderBy]"
          ]
        }
      ],
      "course": [
        10,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "filter": [
            8
          ],
          "orderBy": [
            9,
            "[CourseModelOrderBy]"
          ]
        }
      ],
      "faqItem": [
        17,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "filter": [
            15
          ],
          "orderBy": [
            16,
            "[FaqItemModelOrderBy]"
          ]
        }
      ],
      "homepage": [
        25,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "post": [
        67,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "filter": [
            65
          ],
          "orderBy": [
            66,
            "[PostModelOrderBy]"
          ]
        }
      ],
      "routePath": [
        79,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "filter": [
            77
          ],
          "orderBy": [
            78,
            "[RoutePathModelOrderBy]"
          ]
        }
      ],
      "upload": [
        19,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ],
          "filter": [
            100
          ],
          "orderBy": [
            108,
            "[UploadOrderBy]"
          ]
        }
      ],
      "__typename": [
        86
      ]
    },
    "RecordInterface": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "on_ActionBlockRecord": [
        0
      ],
      "on_CardBlockRecord": [
        4
      ],
      "on_CourseRecord": [
        10
      ],
      "on_FaqBlockRecord": [
        14
      ],
      "on_FaqItemRecord": [
        17
      ],
      "on_HeadingBlockRecord": [
        24
      ],
      "on_HomepageRecord": [
        25
      ],
      "on_ImageBlockRecord": [
        26
      ],
      "on_NoteBlockRecord": [
        63
      ],
      "on_PostRecord": [
        67
      ],
      "on_RichTextBlockRecord": [
        76
      ],
      "on_RoutePathRecord": [
        79
      ],
      "on_SeoBlockRecord": [
        80
      ],
      "on_TestimonialBlockRecord": [
        90
      ],
      "__typename": [
        86
      ]
    },
    "ResolutionFilter": {
      "eq": [
        72
      ],
      "neq": [
        72
      ],
      "in": [
        72
      ],
      "notIn": [
        72
      ],
      "__typename": [
        86
      ]
    },
    "ResolutionType": {},
    "ResponsiveImage": {
      "alt": [
        86
      ],
      "aspectRatio": [
        22
      ],
      "base64": [
        86
      ],
      "bgColor": [
        86
      ],
      "height": [
        53
      ],
      "sizes": [
        86
      ],
      "src": [
        86
      ],
      "srcSet": [
        86
      ],
      "title": [
        86
      ],
      "webpSrcSet": [
        86
      ],
      "width": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "RichTextBlockModelRichTextBlocksField": {
      "on_CardBlockRecord": [
        4
      ],
      "on_ImageBlockRecord": [
        26
      ],
      "on_NoteBlockRecord": [
        63
      ],
      "on_RecordInterface": [
        70
      ],
      "__typename": [
        86
      ]
    },
    "RichTextBlockModelRichTextField": {
      "blocks": [
        74
      ],
      "links": [
        86
      ],
      "value": [
        58
      ],
      "__typename": [
        86
      ]
    },
    "RichTextBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "richText": [
        75
      ],
      "__typename": [
        86
      ]
    },
    "RoutePathModelFilter": {
      "_createdAt": [
        11
      ],
      "id": [
        56
      ],
      "_firstPublishedAt": [
        68
      ],
      "_publicationScheduledAt": [
        68
      ],
      "_unpublishingScheduledAt": [
        68
      ],
      "_publishedAt": [
        68
      ],
      "_status": [
        85
      ],
      "_updatedAt": [
        92
      ],
      "_isValid": [
        2
      ],
      "name": [
        87
      ],
      "slug": [
        84
      ],
      "OR": [
        77
      ],
      "AND": [
        77
      ],
      "__typename": [
        86
      ]
    },
    "RoutePathModelOrderBy": {},
    "RoutePathRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "name": [
        86
      ],
      "slug": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "SeoBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "id": [
        55
      ],
      "seoBlock": [
        81
      ],
      "__typename": [
        86
      ]
    },
    "SeoField": {
      "description": [
        86
      ],
      "image": [
        19
      ],
      "noIndex": [
        3
      ],
      "title": [
        86
      ],
      "twitterCard": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "Site": {
      "favicon": [
        19
      ],
      "faviconMetaTags": [
        89,
        {
          "variants": [
            18,
            "[FaviconType]"
          ]
        }
      ],
      "globalSeo": [
        23,
        {
          "locale": [
            83
          ],
          "fallbackLocales": [
            83,
            "[SiteLocale!]"
          ]
        }
      ],
      "locales": [
        83
      ],
      "noIndex": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "SiteLocale": {},
    "SlugFilter": {
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "StatusFilter": {
      "eq": [
        57
      ],
      "neq": [
        57
      ],
      "in": [
        57
      ],
      "notIn": [
        57
      ],
      "__typename": [
        86
      ]
    },
    "String": {},
    "StringFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "isBlank": [
        3
      ],
      "isPresent": [
        3
      ],
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "StringMatchesFilter": {
      "pattern": [
        86
      ],
      "caseSensitive": [
        3
      ],
      "regexp": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "Tag": {
      "attributes": [
        61
      ],
      "content": [
        86
      ],
      "tag": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "TestimonialBlockRecord": {
      "_createdAt": [
        13
      ],
      "_editingUrl": [
        86
      ],
      "_firstPublishedAt": [
        13
      ],
      "_isValid": [
        3
      ],
      "_modelApiKey": [
        86
      ],
      "_publicationScheduledAt": [
        13
      ],
      "_publishedAt": [
        13
      ],
      "_seoMetaTags": [
        89,
        {
          "locale": [
            83
          ]
        }
      ],
      "_status": [
        57
      ],
      "_unpublishingScheduledAt": [
        13
      ],
      "_updatedAt": [
        13
      ],
      "author": [
        86
      ],
      "company": [
        86
      ],
      "content": [
        76
      ],
      "id": [
        55
      ],
      "image": [
        19
      ],
      "role": [
        86
      ],
      "title": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "TypeFilter": {
      "eq": [
        113
      ],
      "neq": [
        113
      ],
      "in": [
        113
      ],
      "notIn": [
        113
      ],
      "__typename": [
        86
      ]
    },
    "UpdatedAtFilter": {
      "gt": [
        13
      ],
      "lt": [
        13
      ],
      "gte": [
        13
      ],
      "lte": [
        13
      ],
      "eq": [
        13
      ],
      "neq": [
        13
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadAltFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadAuthorFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadBasenameFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "__typename": [
        86
      ]
    },
    "UploadColorsFilter": {
      "contains": [
        6
      ],
      "allIn": [
        6
      ],
      "anyIn": [
        6
      ],
      "notIn": [
        6
      ],
      "eq": [
        6
      ],
      "__typename": [
        86
      ]
    },
    "UploadCopyrightFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadCreatedAtFilter": {
      "eq": [
        13
      ],
      "neq": [
        13
      ],
      "lt": [
        13
      ],
      "lte": [
        13
      ],
      "gt": [
        13
      ],
      "gte": [
        13
      ],
      "__typename": [
        86
      ]
    },
    "UploadFilenameFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "__typename": [
        86
      ]
    },
    "UploadFilter": {
      "type": [
        91
      ],
      "inUse": [
        51
      ],
      "resolution": [
        71
      ],
      "size": [
        110
      ],
      "tags": [
        111
      ],
      "smartTags": [
        111
      ],
      "colors": [
        96
      ],
      "orientation": [
        64
      ],
      "id": [
        104
      ],
      "mimeType": [
        106
      ],
      "format": [
        101
      ],
      "height": [
        102
      ],
      "width": [
        116
      ],
      "alt": [
        93
      ],
      "title": [
        112
      ],
      "notes": [
        107
      ],
      "md5": [
        105
      ],
      "author": [
        94
      ],
      "copyright": [
        97
      ],
      "basename": [
        95
      ],
      "filename": [
        99
      ],
      "_createdAt": [
        98
      ],
      "_updatedAt": [
        114
      ],
      "OR": [
        100
      ],
      "AND": [
        100
      ],
      "__typename": [
        86
      ]
    },
    "UploadFormatFilter": {
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "UploadHeightFilter": {
      "gt": [
        53
      ],
      "lt": [
        53
      ],
      "gte": [
        53
      ],
      "lte": [
        53
      ],
      "eq": [
        53
      ],
      "neq": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "UploadId": {},
    "UploadIdFilter": {
      "eq": [
        103
      ],
      "neq": [
        103
      ],
      "in": [
        103
      ],
      "notIn": [
        103
      ],
      "__typename": [
        86
      ]
    },
    "UploadMd5Filter": {
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "UploadMimeTypeFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "UploadNotesFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadOrderBy": {},
    "UploadOrientation": {},
    "UploadSizeFilter": {
      "gt": [
        53
      ],
      "lt": [
        53
      ],
      "gte": [
        53
      ],
      "lte": [
        53
      ],
      "eq": [
        53
      ],
      "neq": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "UploadTagsFilter": {
      "contains": [
        86
      ],
      "allIn": [
        86
      ],
      "anyIn": [
        86
      ],
      "notIn": [
        86
      ],
      "eq": [
        86
      ],
      "__typename": [
        86
      ]
    },
    "UploadTitleFilter": {
      "matches": [
        88
      ],
      "notMatches": [
        88
      ],
      "eq": [
        86
      ],
      "neq": [
        86
      ],
      "in": [
        86
      ],
      "notIn": [
        86
      ],
      "exists": [
        3
      ],
      "__typename": [
        86
      ]
    },
    "UploadType": {},
    "UploadUpdatedAtFilter": {
      "eq": [
        13
      ],
      "neq": [
        13
      ],
      "lt": [
        13
      ],
      "lte": [
        13
      ],
      "gt": [
        13
      ],
      "gte": [
        13
      ],
      "__typename": [
        86
      ]
    },
    "UploadVideoField": {
      "duration": [
        52
      ],
      "framerate": [
        52
      ],
      "mp4Url": [
        86,
        {
          "res": [
            117
          ],
          "exactRes": [
            117
          ]
        }
      ],
      "muxAssetId": [
        86
      ],
      "muxPlaybackId": [
        86
      ],
      "streamingUrl": [
        86
      ],
      "thumbnailUrl": [
        86,
        {
          "format": [
            62
          ]
        }
      ],
      "__typename": [
        86
      ]
    },
    "UploadWidthFilter": {
      "gt": [
        53
      ],
      "lt": [
        53
      ],
      "gte": [
        53
      ],
      "lte": [
        53
      ],
      "eq": [
        53
      ],
      "neq": [
        53
      ],
      "__typename": [
        86
      ]
    },
    "VideoMp4Res": {},
    "focalPoint": {
      "x": [
        22
      ],
      "y": [
        22
      ],
      "__typename": [
        86
      ]
    }
  }
};
const typeMap = linkTypeMap(types);
const createClient = function(options) {
  return createClient$1({
    url: "https://graphql.datocms.com/",
    ...options,
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription
  });
};
const client = createClient({
  url: DATOCMS_API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${DATOCMS_API_KEY}`,
    "X-Environment": DATOCMS_ENVIRONMENT_NAME,
    "X-Exclude-Invalid": "true"
  }
});
const getAllCourses = async (first) => {
  const { allCourses } = await client.query({
    allCourses: {
      __args: {
        first
      },
      id: true,
      name: true,
      slug: true,
      // Info
      price: true,
      duration: true,
      numberOfSections: true,
      level: true,
      numberOfEnrolledStudents: true,
      tag: true,
      // SEO
      seo: {
        seoBlock: {
          title: true,
          description: true,
          image: {
            url: true,
            alt: true
          }
        }
      }
    }
  });
  return allCourses;
};
const cardBlockFields = {
  title: true,
  cta: {
    text: true,
    link: true
  },
  media: {
    responsiveImage: {
      src: true,
      width: true,
      height: true,
      alt: true,
      sizes: true
    },
    video: {
      mp4Url: true
    },
    alt: true
  },
  content: {
    richText: {
      value: true
    }
  }
};
const getHomePageData = async () => {
  const { homepage } = await client.query({
    homepage: {
      id: true,
      _firstPublishedAt: true,
      title: true,
      // Hero
      heroTitle: true,
      heroSubtitle: true,
      heroCta: {
        text: true,
        link: true
      },
      heroTestimonialTitle: true,
      heroTestimonialPictures: {
        url: true,
        alt: true
      },
      // Popular courses
      popularCoursesTitle: true,
      popularCoursesRecords: {
        id: true,
        name: true,
        slug: true,
        duration: true,
        numberOfSections: true,
        level: true,
        price: true,
        seo: {
          seoBlock: {
            title: true,
            description: true,
            image: {
              url: true,
              alt: true
            }
          }
        }
      },
      // New courses
      newCoursesTitle: true,
      newCoursesRecords: {
        id: true,
        name: true,
        slug: true,
        duration: true,
        numberOfSections: true,
        level: true,
        price: true,
        seo: {
          seoBlock: {
            title: true,
            description: true,
            image: {
              url: true,
              alt: true
            }
          }
        }
      },
      // Features
      featuresHeading: {
        heading: true,
        subheading: true
      },
      featuresCta: {
        text: true,
        link: true
      },
      featureCards: cardBlockFields,
      // About
      about: cardBlockFields,
      // Multiple testimonials
      multipleTestimonials: {
        id: true,
        title: true,
        image: {
          url: true,
          alt: true
        },
        content: {
          richText: {
            value: true
          }
        },
        author: true,
        role: true
      },
      // Stats
      statsHeading: {
        heading: true,
        subheading: true
      },
      statsAction: {
        text: true,
        link: true
      },
      statsImages: {
        url: true,
        alt: true
      },
      statsData: {
        heading: true,
        subheading: true
      },
      // FAQ
      faqHeading: {
        heading: true,
        subheading: true
      },
      faq: {
        title: true,
        faqBlocks: {
          id: true,
          question: true,
          answer: {
            richText: {
              value: true
            }
          }
        }
      },
      // CTA
      ctaHeading: {
        heading: true,
        subheading: true
      },
      ctaAction: {
        text: true,
        link: true
      },
      // SEO
      seo: {
        seoBlock: {
          title: true,
          description: true,
          image: {
            url: true,
            alt: true
          }
        }
      }
    }
  });
  return homepage;
};
const load = async () => {
  return {
    homepageData: await getHomePageData(),
    newCourses: (await getAllCourses(3)).filter((course) => course.tag === "new"),
    popularCourses: (await getAllCourses(3)).filter((course) => course.tag === "popular")
  };
};
export {
  load
};
