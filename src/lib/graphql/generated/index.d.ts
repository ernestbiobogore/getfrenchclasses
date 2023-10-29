import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  chain: {
    query: QueryPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation

export declare const enumColorBucketType: {
  readonly red: 'red'
  readonly orange: 'orange'
  readonly pink: 'pink'
  readonly cyan: 'cyan'
  readonly purple: 'purple'
  readonly blue: 'blue'
  readonly yellow: 'yellow'
  readonly green: 'green'
  readonly brown: 'brown'
  readonly grey: 'grey'
  readonly white: 'white'
  readonly black: 'black'
}

export declare const enumCourseModelOrderBy: {
  readonly _createdAt_ASC: '_createdAt_ASC'
  readonly _createdAt_DESC: '_createdAt_DESC'
  readonly id_ASC: 'id_ASC'
  readonly id_DESC: 'id_DESC'
  readonly _firstPublishedAt_ASC: '_firstPublishedAt_ASC'
  readonly _firstPublishedAt_DESC: '_firstPublishedAt_DESC'
  readonly _publicationScheduledAt_ASC: '_publicationScheduledAt_ASC'
  readonly _publicationScheduledAt_DESC: '_publicationScheduledAt_DESC'
  readonly _unpublishingScheduledAt_ASC: '_unpublishingScheduledAt_ASC'
  readonly _unpublishingScheduledAt_DESC: '_unpublishingScheduledAt_DESC'
  readonly _publishedAt_ASC: '_publishedAt_ASC'
  readonly _publishedAt_DESC: '_publishedAt_DESC'
  readonly _status_ASC: '_status_ASC'
  readonly _status_DESC: '_status_DESC'
  readonly _updatedAt_ASC: '_updatedAt_ASC'
  readonly _updatedAt_DESC: '_updatedAt_DESC'
  readonly _isValid_ASC: '_isValid_ASC'
  readonly _isValid_DESC: '_isValid_DESC'
  readonly duration_ASC: 'duration_ASC'
  readonly duration_DESC: 'duration_DESC'
  readonly level_ASC: 'level_ASC'
  readonly level_DESC: 'level_DESC'
  readonly name_ASC: 'name_ASC'
  readonly name_DESC: 'name_DESC'
  readonly numberOfSections_ASC: 'numberOfSections_ASC'
  readonly numberOfSections_DESC: 'numberOfSections_DESC'
  readonly price_ASC: 'price_ASC'
  readonly price_DESC: 'price_DESC'
}

export declare const enumFaviconType: {
  readonly icon: 'icon'
  readonly appleTouchIcon: 'appleTouchIcon'
  readonly msApplication: 'msApplication'
}

export declare const enumImgixParamsAuto: {
  readonly enhance: 'enhance'
  readonly format: 'format'
  readonly redeye: 'redeye'
  readonly compress: 'compress'
}

export declare const enumImgixParamsBlendAlign: {
  readonly top: 'top'
  readonly bottom: 'bottom'
  readonly middle: 'middle'
  readonly left: 'left'
  readonly right: 'right'
  readonly center: 'center'
}

export declare const enumImgixParamsBlendCrop: {
  readonly top: 'top'
  readonly bottom: 'bottom'
  readonly left: 'left'
  readonly right: 'right'
  readonly faces: 'faces'
}

export declare const enumImgixParamsBlendFit: {
  readonly clamp: 'clamp'
  readonly clip: 'clip'
  readonly crop: 'crop'
  readonly scale: 'scale'
  readonly max: 'max'
}

export declare const enumImgixParamsBlendMode: {
  readonly color: 'color'
  readonly burn: 'burn'
  readonly dodge: 'dodge'
  readonly darken: 'darken'
  readonly difference: 'difference'
  readonly exclusion: 'exclusion'
  readonly hardlight: 'hardlight'
  readonly hue: 'hue'
  readonly lighten: 'lighten'
  readonly luminosity: 'luminosity'
  readonly multiply: 'multiply'
  readonly overlay: 'overlay'
  readonly saturation: 'saturation'
  readonly screen: 'screen'
  readonly softlight: 'softlight'
  readonly normal: 'normal'
}

export declare const enumImgixParamsBlendSize: {
  readonly inherit: 'inherit'
}

export declare const enumImgixParamsCh: {
  readonly width: 'width'
  readonly dpr: 'dpr'
  readonly saveData: 'saveData'
}

export declare const enumImgixParamsCrop: {
  readonly top: 'top'
  readonly bottom: 'bottom'
  readonly left: 'left'
  readonly right: 'right'
  readonly faces: 'faces'
  readonly entropy: 'entropy'
  readonly edges: 'edges'
  readonly focalpoint: 'focalpoint'
}

export declare const enumImgixParamsCs: {
  readonly srgb: 'srgb'
  readonly adobergb1998: 'adobergb1998'
  readonly tinysrgb: 'tinysrgb'
  readonly strip: 'strip'
}

export declare const enumImgixParamsFill: {
  readonly solid: 'solid'
  readonly blur: 'blur'
}

export declare const enumImgixParamsFit: {
  readonly clamp: 'clamp'
  readonly clip: 'clip'
  readonly crop: 'crop'
  readonly facearea: 'facearea'
  readonly fill: 'fill'
  readonly fillmax: 'fillmax'
  readonly max: 'max'
  readonly min: 'min'
  readonly scale: 'scale'
}

export declare const enumImgixParamsFlip: {
  readonly h: 'h'
  readonly v: 'v'
  readonly hv: 'hv'
}

export declare const enumImgixParamsFm: {
  readonly gif: 'gif'
  readonly jpg: 'jpg'
  readonly jp2: 'jp2'
  readonly json: 'json'
  readonly jxr: 'jxr'
  readonly pjpg: 'pjpg'
  readonly mp4: 'mp4'
  readonly png: 'png'
  readonly png8: 'png8'
  readonly png32: 'png32'
  readonly webp: 'webp'
  readonly webm: 'webm'
  readonly blurhash: 'blurhash'
  readonly avif: 'avif'
}

export declare const enumImgixParamsIptc: {
  readonly allow: 'allow'
  readonly block: 'block'
}

export declare const enumImgixParamsMarkAlign: {
  readonly top: 'top'
  readonly middle: 'middle'
  readonly bottom: 'bottom'
  readonly left: 'left'
  readonly center: 'center'
  readonly right: 'right'
}

export declare const enumImgixParamsMarkFit: {
  readonly clip: 'clip'
  readonly crop: 'crop'
  readonly fill: 'fill'
  readonly max: 'max'
  readonly scale: 'scale'
}

export declare const enumImgixParamsMarkTile: {
  readonly grid: 'grid'
}

export declare const enumImgixParamsPalette: {
  readonly css: 'css'
  readonly json: 'json'
}

export declare const enumImgixParamsTransparency: {
  readonly grid: 'grid'
}

export declare const enumImgixParamsTrim: {
  readonly auto: 'auto'
  readonly color: 'color'
}

export declare const enumImgixParamsTxtAlign: {
  readonly top: 'top'
  readonly middle: 'middle'
  readonly bottom: 'bottom'
  readonly left: 'left'
  readonly center: 'center'
  readonly right: 'right'
}

export declare const enumImgixParamsTxtClip: {
  readonly start: 'start'
  readonly middle: 'middle'
  readonly end: 'end'
  readonly ellipsis: 'ellipsis'
}

export declare const enumImgixParamsTxtFit: {
  readonly max: 'max'
}

export declare const enumItemStatus: {
  readonly draft: 'draft'
  readonly updated: 'updated'
  readonly published: 'published'
}

export declare const enumMuxThumbnailFormatType: {
  readonly jpg: 'jpg'
  readonly png: 'png'
  readonly gif: 'gif'
}

export declare const enumResolutionType: {
  readonly icon: 'icon'
  readonly small: 'small'
  readonly medium: 'medium'
  readonly large: 'large'
}

export declare const enumSiteLocale: {
  readonly en: 'en'
}

export declare const enumUploadOrderBy: {
  readonly _createdAt_ASC: '_createdAt_ASC'
  readonly _createdAt_DESC: '_createdAt_DESC'
  readonly size_ASC: 'size_ASC'
  readonly size_DESC: 'size_DESC'
  readonly resolution_ASC: 'resolution_ASC'
  readonly resolution_DESC: 'resolution_DESC'
  readonly filename_ASC: 'filename_ASC'
  readonly filename_DESC: 'filename_DESC'
  readonly basename_ASC: 'basename_ASC'
  readonly basename_DESC: 'basename_DESC'
  readonly mimeType_ASC: 'mimeType_ASC'
  readonly mimeType_DESC: 'mimeType_DESC'
  readonly format_ASC: 'format_ASC'
  readonly format_DESC: 'format_DESC'
  readonly _updatedAt_ASC: '_updatedAt_ASC'
  readonly _updatedAt_DESC: '_updatedAt_DESC'
  readonly id_ASC: 'id_ASC'
  readonly id_DESC: 'id_DESC'
}

export declare const enumUploadOrientation: {
  readonly landscape: 'landscape'
  readonly portrait: 'portrait'
  readonly square: 'square'
}

export declare const enumUploadType: {
  readonly image: 'image'
  readonly audio: 'audio'
  readonly video: 'video'
  readonly richtext: 'richtext'
  readonly presentation: 'presentation'
  readonly spreadsheet: 'spreadsheet'
  readonly pdfdocument: 'pdfdocument'
  readonly archive: 'archive'
}

export declare const enumVideoMp4Res: {
  readonly low: 'low'
  readonly medium: 'medium'
  readonly high: 'high'
}
