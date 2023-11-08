import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
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

export const enumCategoryModelOrderBy = {
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
  name_ASC: 'name_ASC',
  name_DESC: 'name_DESC',
}

export const enumColorBucketType = {
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

export const enumCourseModelOrderBy = {
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
  numberOfEnrolledStudents_ASC: 'numberOfEnrolledStudents_ASC',
  numberOfEnrolledStudents_DESC: 'numberOfEnrolledStudents_DESC',
  numberOfSections_ASC: 'numberOfSections_ASC',
  numberOfSections_DESC: 'numberOfSections_DESC',
  price_ASC: 'price_ASC',
  price_DESC: 'price_DESC',
  tag_ASC: 'tag_ASC',
  tag_DESC: 'tag_DESC',
}

export const enumFaviconType = {
  icon: 'icon',
  appleTouchIcon: 'appleTouchIcon',
  msApplication: 'msApplication',
}

export const enumImgixParamsAuto = {
  enhance: 'enhance',
  format: 'format',
  redeye: 'redeye',
  compress: 'compress',
}

export const enumImgixParamsBlendAlign = {
  top: 'top',
  bottom: 'bottom',
  middle: 'middle',
  left: 'left',
  right: 'right',
  center: 'center',
}

export const enumImgixParamsBlendCrop = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  faces: 'faces',
}

export const enumImgixParamsBlendFit = {
  clamp: 'clamp',
  clip: 'clip',
  crop: 'crop',
  scale: 'scale',
  max: 'max',
}

export const enumImgixParamsBlendMode = {
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

export const enumImgixParamsBlendSize = {
  inherit: 'inherit',
}

export const enumImgixParamsCh = {
  width: 'width',
  dpr: 'dpr',
  saveData: 'saveData',
}

export const enumImgixParamsCrop = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  faces: 'faces',
  entropy: 'entropy',
  edges: 'edges',
  focalpoint: 'focalpoint',
}

export const enumImgixParamsCs = {
  srgb: 'srgb',
  adobergb1998: 'adobergb1998',
  tinysrgb: 'tinysrgb',
  strip: 'strip',
}

export const enumImgixParamsFill = {
  solid: 'solid',
  blur: 'blur',
}

export const enumImgixParamsFit = {
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

export const enumImgixParamsFlip = {
  h: 'h',
  v: 'v',
  hv: 'hv',
}

export const enumImgixParamsFm = {
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

export const enumImgixParamsIptc = {
  allow: 'allow',
  block: 'block',
}

export const enumImgixParamsMarkAlign = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
  right: 'right',
}

export const enumImgixParamsMarkFit = {
  clip: 'clip',
  crop: 'crop',
  fill: 'fill',
  max: 'max',
  scale: 'scale',
}

export const enumImgixParamsMarkTile = {
  grid: 'grid',
}

export const enumImgixParamsPalette = {
  css: 'css',
  json: 'json',
}

export const enumImgixParamsTransparency = {
  grid: 'grid',
}

export const enumImgixParamsTrim = {
  auto: 'auto',
  color: 'color',
}

export const enumImgixParamsTxtAlign = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
  right: 'right',
}

export const enumImgixParamsTxtClip = {
  start: 'start',
  middle: 'middle',
  end: 'end',
  ellipsis: 'ellipsis',
}

export const enumImgixParamsTxtFit = {
  max: 'max',
}

export const enumItemStatus = {
  draft: 'draft',
  updated: 'updated',
  published: 'published',
}

export const enumMuxThumbnailFormatType = {
  jpg: 'jpg',
  png: 'png',
  gif: 'gif',
}

export const enumPostModelOrderBy = {
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
  title_ASC: 'title_ASC',
  title_DESC: 'title_DESC',
}

export const enumResolutionType = {
  icon: 'icon',
  small: 'small',
  medium: 'medium',
  large: 'large',
}

export const enumSiteLocale = {
  en: 'en',
}

export const enumUploadOrderBy = {
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

export const enumUploadOrientation = {
  landscape: 'landscape',
  portrait: 'portrait',
  square: 'square',
}

export const enumUploadType = {
  image: 'image',
  audio: 'audio',
  video: 'video',
  richtext: 'richtext',
  presentation: 'presentation',
  spreadsheet: 'spreadsheet',
  pdfdocument: 'pdfdocument',
  archive: 'archive',
}

export const enumVideoMp4Res = {
  low: 'low',
  medium: 'medium',
  high: 'high',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
