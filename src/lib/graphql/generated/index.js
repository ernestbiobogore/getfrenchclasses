const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://graphql.datocms.com/',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumColorBucketType = {
  red: 'red',
  orange: 'orange',
  pink: 'pink',
  cyan: 'cyan',
  purple: 'purple',
  blue: 'blue',
  yellow: 'yellow',
  green: 'green',
  brown: 'brown',
  grey: 'grey',
  white: 'white',
  black: 'black',
}

module.exports.enumCourseModelOrderBy = {
  _createdAt_ASC: '_createdAt_ASC',
  _createdAt_DESC: '_createdAt_DESC',
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
  _firstPublishedAt_ASC: '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC: '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC',
  _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC',
  _publishedAt_ASC: '_publishedAt_ASC',
  _publishedAt_DESC: '_publishedAt_DESC',
  _status_ASC: '_status_ASC',
  _status_DESC: '_status_DESC',
  _updatedAt_ASC: '_updatedAt_ASC',
  _updatedAt_DESC: '_updatedAt_DESC',
  _isValid_ASC: '_isValid_ASC',
  _isValid_DESC: '_isValid_DESC',
  duration_ASC: 'duration_ASC',
  duration_DESC: 'duration_DESC',
  level_ASC: 'level_ASC',
  level_DESC: 'level_DESC',
  name_ASC: 'name_ASC',
  name_DESC: 'name_DESC',
  numberOfSections_ASC: 'numberOfSections_ASC',
  numberOfSections_DESC: 'numberOfSections_DESC',
  price_ASC: 'price_ASC',
  price_DESC: 'price_DESC',
}

module.exports.enumFaviconType = {
  icon: 'icon',
  appleTouchIcon: 'appleTouchIcon',
  msApplication: 'msApplication',
}

module.exports.enumImgixParamsAuto = {
  enhance: 'enhance',
  format: 'format',
  redeye: 'redeye',
  compress: 'compress',
}

module.exports.enumImgixParamsBlendAlign = {
  top: 'top',
  bottom: 'bottom',
  middle: 'middle',
  left: 'left',
  right: 'right',
  center: 'center',
}

module.exports.enumImgixParamsBlendCrop = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  faces: 'faces',
}

module.exports.enumImgixParamsBlendFit = {
  clamp: 'clamp',
  clip: 'clip',
  crop: 'crop',
  scale: 'scale',
  max: 'max',
}

module.exports.enumImgixParamsBlendMode = {
  color: 'color',
  burn: 'burn',
  dodge: 'dodge',
  darken: 'darken',
  difference: 'difference',
  exclusion: 'exclusion',
  hardlight: 'hardlight',
  hue: 'hue',
  lighten: 'lighten',
  luminosity: 'luminosity',
  multiply: 'multiply',
  overlay: 'overlay',
  saturation: 'saturation',
  screen: 'screen',
  softlight: 'softlight',
  normal: 'normal',
}

module.exports.enumImgixParamsBlendSize = {
  inherit: 'inherit',
}

module.exports.enumImgixParamsCh = {
  width: 'width',
  dpr: 'dpr',
  saveData: 'saveData',
}

module.exports.enumImgixParamsCrop = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  faces: 'faces',
  entropy: 'entropy',
  edges: 'edges',
  focalpoint: 'focalpoint',
}

module.exports.enumImgixParamsCs = {
  srgb: 'srgb',
  adobergb1998: 'adobergb1998',
  tinysrgb: 'tinysrgb',
  strip: 'strip',
}

module.exports.enumImgixParamsFill = {
  solid: 'solid',
  blur: 'blur',
}

module.exports.enumImgixParamsFit = {
  clamp: 'clamp',
  clip: 'clip',
  crop: 'crop',
  facearea: 'facearea',
  fill: 'fill',
  fillmax: 'fillmax',
  max: 'max',
  min: 'min',
  scale: 'scale',
}

module.exports.enumImgixParamsFlip = {
  h: 'h',
  v: 'v',
  hv: 'hv',
}

module.exports.enumImgixParamsFm = {
  gif: 'gif',
  jpg: 'jpg',
  jp2: 'jp2',
  json: 'json',
  jxr: 'jxr',
  pjpg: 'pjpg',
  mp4: 'mp4',
  png: 'png',
  png8: 'png8',
  png32: 'png32',
  webp: 'webp',
  webm: 'webm',
  blurhash: 'blurhash',
  avif: 'avif',
}

module.exports.enumImgixParamsIptc = {
  allow: 'allow',
  block: 'block',
}

module.exports.enumImgixParamsMarkAlign = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
  right: 'right',
}

module.exports.enumImgixParamsMarkFit = {
  clip: 'clip',
  crop: 'crop',
  fill: 'fill',
  max: 'max',
  scale: 'scale',
}

module.exports.enumImgixParamsMarkTile = {
  grid: 'grid',
}

module.exports.enumImgixParamsPalette = {
  css: 'css',
  json: 'json',
}

module.exports.enumImgixParamsTransparency = {
  grid: 'grid',
}

module.exports.enumImgixParamsTrim = {
  auto: 'auto',
  color: 'color',
}

module.exports.enumImgixParamsTxtAlign = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
  right: 'right',
}

module.exports.enumImgixParamsTxtClip = {
  start: 'start',
  middle: 'middle',
  end: 'end',
  ellipsis: 'ellipsis',
}

module.exports.enumImgixParamsTxtFit = {
  max: 'max',
}

module.exports.enumItemStatus = {
  draft: 'draft',
  updated: 'updated',
  published: 'published',
}

module.exports.enumMuxThumbnailFormatType = {
  jpg: 'jpg',
  png: 'png',
  gif: 'gif',
}

module.exports.enumResolutionType = {
  icon: 'icon',
  small: 'small',
  medium: 'medium',
  large: 'large',
}

module.exports.enumSiteLocale = {
  en: 'en',
}

module.exports.enumUploadOrderBy = {
  _createdAt_ASC: '_createdAt_ASC',
  _createdAt_DESC: '_createdAt_DESC',
  size_ASC: 'size_ASC',
  size_DESC: 'size_DESC',
  resolution_ASC: 'resolution_ASC',
  resolution_DESC: 'resolution_DESC',
  filename_ASC: 'filename_ASC',
  filename_DESC: 'filename_DESC',
  basename_ASC: 'basename_ASC',
  basename_DESC: 'basename_DESC',
  mimeType_ASC: 'mimeType_ASC',
  mimeType_DESC: 'mimeType_DESC',
  format_ASC: 'format_ASC',
  format_DESC: 'format_DESC',
  _updatedAt_ASC: '_updatedAt_ASC',
  _updatedAt_DESC: '_updatedAt_DESC',
  id_ASC: 'id_ASC',
  id_DESC: 'id_DESC',
}

module.exports.enumUploadOrientation = {
  landscape: 'landscape',
  portrait: 'portrait',
  square: 'square',
}

module.exports.enumUploadType = {
  image: 'image',
  audio: 'audio',
  video: 'video',
  richtext: 'richtext',
  presentation: 'presentation',
  spreadsheet: 'spreadsheet',
  pdfdocument: 'pdfdocument',
  archive: 'archive',
}

module.exports.enumVideoMp4Res = {
  low: 'low',
  medium: 'medium',
  high: 'high',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
