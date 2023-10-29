import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    BooleanType: any,
    CustomData: any,
    DateTime: any,
    Float: number,
    FloatType: any,
    Int: number,
    IntType: any,
    ItemId: any,
    MetaTagAttributes: any,
    String: string,
    UploadId: any,
}

export interface CollectionMetadata {
    count: Scalars['IntType']
    __typename: 'CollectionMetadata'
}

export type ColorBucketType = 'red' | 'orange' | 'pink' | 'cyan' | 'purple' | 'blue' | 'yellow' | 'green' | 'brown' | 'grey' | 'white' | 'black'

export interface ColorField {
    alpha: Scalars['IntType']
    blue: Scalars['IntType']
    cssRgb: Scalars['String']
    green: Scalars['IntType']
    hex: Scalars['String']
    red: Scalars['IntType']
    __typename: 'ColorField'
}

export type CourseModelOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'duration_ASC' | 'duration_DESC' | 'level_ASC' | 'level_DESC' | 'name_ASC' | 'name_DESC' | 'numberOfSections_ASC' | 'numberOfSections_DESC' | 'price_ASC' | 'price_DESC' | 'tag_ASC' | 'tag_DESC'


/** Record of type Course (course) */
export interface CourseRecord {
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl?: Scalars['String']
    _firstPublishedAt?: Scalars['DateTime']
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt?: Scalars['DateTime']
    _publishedAt?: Scalars['DateTime']
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt?: Scalars['DateTime']
    _updatedAt: Scalars['DateTime']
    duration?: Scalars['IntType']
    id: Scalars['ItemId']
    level?: Scalars['String']
    name?: Scalars['String']
    numberOfSections?: Scalars['IntType']
    price?: Scalars['IntType']
    seo: SeoBlockRecord[]
    slug?: Scalars['String']
    tag?: Scalars['String']
    __typename: 'CourseRecord'
}

export type FaviconType = 'icon' | 'appleTouchIcon' | 'msApplication'

export interface FileField {
    _createdAt: Scalars['DateTime']
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl?: Scalars['String']
    _updatedAt: Scalars['DateTime']
    alt?: Scalars['String']
    author?: Scalars['String']
    basename: Scalars['String']
    blurUpThumb?: Scalars['String']
    blurhash?: Scalars['String']
    colors: ColorField[]
    copyright?: Scalars['String']
    customData: Scalars['CustomData']
    exifInfo: Scalars['CustomData']
    filename: Scalars['String']
    focalPoint?: focalPoint
    format: Scalars['String']
    height?: Scalars['IntType']
    id: Scalars['UploadId']
    md5: Scalars['String']
    mimeType: Scalars['String']
    notes?: Scalars['String']
    responsiveImage?: ResponsiveImage
    size: Scalars['IntType']
    smartTags: Scalars['String'][]
    tags: Scalars['String'][]
    thumbhash?: Scalars['String']
    title?: Scalars['String']
    url: Scalars['String']
    video?: UploadVideoField
    width?: Scalars['IntType']
    __typename: 'FileField'
}

export type FileFieldInterface = (FileField) & { __isUnion?: true }

export interface GlobalSeoField {
    facebookPageUrl?: Scalars['String']
    fallbackSeo?: SeoField
    siteName?: Scalars['String']
    titleSuffix?: Scalars['String']
    twitterAccount?: Scalars['String']
    __typename: 'GlobalSeoField'
}

export type ImgixParamsAuto = 'enhance' | 'format' | 'redeye' | 'compress'

export type ImgixParamsBlendAlign = 'top' | 'bottom' | 'middle' | 'left' | 'right' | 'center'

export type ImgixParamsBlendCrop = 'top' | 'bottom' | 'left' | 'right' | 'faces'

export type ImgixParamsBlendFit = 'clamp' | 'clip' | 'crop' | 'scale' | 'max'

export type ImgixParamsBlendMode = 'color' | 'burn' | 'dodge' | 'darken' | 'difference' | 'exclusion' | 'hardlight' | 'hue' | 'lighten' | 'luminosity' | 'multiply' | 'overlay' | 'saturation' | 'screen' | 'softlight' | 'normal'

export type ImgixParamsBlendSize = 'inherit'

export type ImgixParamsCh = 'width' | 'dpr' | 'saveData'

export type ImgixParamsCrop = 'top' | 'bottom' | 'left' | 'right' | 'faces' | 'entropy' | 'edges' | 'focalpoint'

export type ImgixParamsCs = 'srgb' | 'adobergb1998' | 'tinysrgb' | 'strip'

export type ImgixParamsFill = 'solid' | 'blur'

export type ImgixParamsFit = 'clamp' | 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale'

export type ImgixParamsFlip = 'h' | 'v' | 'hv'

export type ImgixParamsFm = 'gif' | 'jpg' | 'jp2' | 'json' | 'jxr' | 'pjpg' | 'mp4' | 'png' | 'png8' | 'png32' | 'webp' | 'webm' | 'blurhash' | 'avif'

export type ImgixParamsIptc = 'allow' | 'block'

export type ImgixParamsMarkAlign = 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right'

export type ImgixParamsMarkFit = 'clip' | 'crop' | 'fill' | 'max' | 'scale'

export type ImgixParamsMarkTile = 'grid'

export type ImgixParamsPalette = 'css' | 'json'

export type ImgixParamsTransparency = 'grid'

export type ImgixParamsTrim = 'auto' | 'color'

export type ImgixParamsTxtAlign = 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right'

export type ImgixParamsTxtClip = 'start' | 'middle' | 'end' | 'ellipsis'

export type ImgixParamsTxtFit = 'max'

export type ItemStatus = 'draft' | 'updated' | 'published'

export type MuxThumbnailFormatType = 'jpg' | 'png' | 'gif'


/** The query root for this schema */
export interface Query {
    /** Returns meta information regarding a record collection */
    _allCoursesMeta: CollectionMetadata
    /** Returns meta information regarding an assets collection */
    _allUploadsMeta: CollectionMetadata
    /** Returns the single instance record */
    _site: Site
    /** Returns a collection of records */
    allCourses: CourseRecord[]
    /** Returns a collection of assets */
    allUploads: FileField[]
    /** Returns a specific record */
    course?: CourseRecord
    /** Returns a specific asset */
    upload?: FileField
    __typename: 'Query'
}

export type RecordInterface = (CourseRecord | SeoBlockRecord) & { __isUnion?: true }

export type ResolutionType = 'icon' | 'small' | 'medium' | 'large'

export interface ResponsiveImage {
    alt?: Scalars['String']
    aspectRatio: Scalars['FloatType']
    base64?: Scalars['String']
    bgColor?: Scalars['String']
    height: Scalars['IntType']
    sizes: Scalars['String']
    src: Scalars['String']
    srcSet: Scalars['String']
    title?: Scalars['String']
    webpSrcSet: Scalars['String']
    width: Scalars['IntType']
    __typename: 'ResponsiveImage'
}


/** Block of type SEO Block (seo_block) */
export interface SeoBlockRecord {
    _createdAt: Scalars['DateTime']
    /** Editing URL */
    _editingUrl?: Scalars['String']
    _firstPublishedAt?: Scalars['DateTime']
    _isValid: Scalars['BooleanType']
    _modelApiKey: Scalars['String']
    _publicationScheduledAt?: Scalars['DateTime']
    _publishedAt?: Scalars['DateTime']
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Tag[]
    _status: ItemStatus
    _unpublishingScheduledAt?: Scalars['DateTime']
    _updatedAt: Scalars['DateTime']
    id: Scalars['ItemId']
    seoBlock?: SeoField
    __typename: 'SeoBlockRecord'
}

export interface SeoField {
    description?: Scalars['String']
    image?: FileField
    title?: Scalars['String']
    twitterCard?: Scalars['String']
    __typename: 'SeoField'
}

export interface Site {
    favicon?: FileField
    faviconMetaTags: Tag[]
    globalSeo?: GlobalSeoField
    locales: SiteLocale[]
    __typename: 'Site'
}

export type SiteLocale = 'en'

export interface Tag {
    attributes?: Scalars['MetaTagAttributes']
    content?: Scalars['String']
    tag: Scalars['String']
    __typename: 'Tag'
}

export type UploadOrderBy = '_createdAt_ASC' | '_createdAt_DESC' | 'size_ASC' | 'size_DESC' | 'resolution_ASC' | 'resolution_DESC' | 'filename_ASC' | 'filename_DESC' | 'basename_ASC' | 'basename_DESC' | 'mimeType_ASC' | 'mimeType_DESC' | 'format_ASC' | 'format_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'id_ASC' | 'id_DESC'

export type UploadOrientation = 'landscape' | 'portrait' | 'square'

export type UploadType = 'image' | 'audio' | 'video' | 'richtext' | 'presentation' | 'spreadsheet' | 'pdfdocument' | 'archive'

export interface UploadVideoField {
    duration?: Scalars['Int']
    framerate?: Scalars['Int']
    mp4Url?: Scalars['String']
    muxAssetId: Scalars['String']
    muxPlaybackId: Scalars['String']
    streamingUrl: Scalars['String']
    thumbnailUrl: Scalars['String']
    __typename: 'UploadVideoField'
}

export type VideoMp4Res = 'low' | 'medium' | 'high'

export interface focalPoint {
    x: Scalars['FloatType']
    y: Scalars['FloatType']
    __typename: 'focalPoint'
}


/** Specifies how to filter Boolean fields */
export interface BooleanFilter {
/** Search for records with an exact match */
eq?: (Scalars['BooleanType'] | null)}

export interface CollectionMetadataRequest{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ColorFieldRequest{
    alpha?: boolean | number
    blue?: boolean | number
    cssRgb?: boolean | number
    green?: boolean | number
    hex?: boolean | number
    red?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CourseModelFilter {_createdAt?: (CreatedAtFilter | null),id?: (ItemIdFilter | null),_firstPublishedAt?: (PublishedAtFilter | null),_publicationScheduledAt?: (PublishedAtFilter | null),_unpublishingScheduledAt?: (PublishedAtFilter | null),_publishedAt?: (PublishedAtFilter | null),_status?: (StatusFilter | null),_updatedAt?: (UpdatedAtFilter | null),_isValid?: (BooleanFilter | null),duration?: (IntegerFilter | null),level?: (StringFilter | null),name?: (StringFilter | null),numberOfSections?: (IntegerFilter | null),price?: (IntegerFilter | null),slug?: (SlugFilter | null),tag?: (StringFilter | null),OR?: ((CourseModelFilter | null)[] | null),AND?: ((CourseModelFilter | null)[] | null)}


/** Record of type Course (course) */
export interface CourseRecordRequest{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)},TagRequest] | TagRequest
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    duration?: boolean | number
    id?: boolean | number
    level?: boolean | number
    name?: boolean | number
    numberOfSections?: boolean | number
    price?: boolean | number
    seo?: SeoBlockRecordRequest
    slug?: boolean | number
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by creation datetime */
export interface CreatedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}

export interface FileFieldRequest{
    _createdAt?: boolean | number
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl?: boolean | number
    _updatedAt?: boolean | number
    alt?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    author?: boolean | number
    basename?: boolean | number
    blurUpThumb?: [{
    /** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
    punch: Scalars['Float'],
    /** Maximum image dimension (defaults to 24px) */
    size: Scalars['Int'],
    /** Image quality (defaults to 70%) */
    quality: Scalars['Int'],
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)}]
    blurhash?: boolean | number
    colors?: ColorFieldRequest
    copyright?: boolean | number
    customData?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    exifInfo?: boolean | number
    filename?: boolean | number
    focalPoint?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},focalPointRequest] | focalPointRequest
    format?: boolean | number
    height?: boolean | number
    id?: boolean | number
    md5?: boolean | number
    mimeType?: boolean | number
    notes?: boolean | number
    responsiveImage?: [{
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null),
    /** Specify a custom `sizes` attribute for the image */
    sizes?: (Scalars['String'] | null),
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},ResponsiveImageRequest] | ResponsiveImageRequest
    size?: boolean | number
    smartTags?: boolean | number
    tags?: boolean | number
    thumbhash?: boolean | number
    title?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    url?: [{
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)}] | boolean | number
    video?: UploadVideoFieldRequest
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FileFieldInterfaceRequest{
    _createdAt?: boolean | number
    /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
    _editingUrl?: boolean | number
    _updatedAt?: boolean | number
    alt?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    author?: boolean | number
    basename?: boolean | number
    blurUpThumb?: [{
    /** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
    punch: Scalars['Float'],
    /** Maximum image dimension (defaults to 24px) */
    size: Scalars['Int'],
    /** Image quality (defaults to 70%) */
    quality: Scalars['Int'],
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)}]
    blurhash?: boolean | number
    colors?: ColorFieldRequest
    copyright?: boolean | number
    customData?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    exifInfo?: boolean | number
    filename?: boolean | number
    focalPoint?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},focalPointRequest] | focalPointRequest
    format?: boolean | number
    height?: boolean | number
    id?: boolean | number
    md5?: boolean | number
    mimeType?: boolean | number
    notes?: boolean | number
    responsiveImage?: [{
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null),
    /** Specify a custom `sizes` attribute for the image */
    sizes?: (Scalars['String'] | null),
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},ResponsiveImageRequest] | ResponsiveImageRequest
    size?: boolean | number
    smartTags?: boolean | number
    tags?: boolean | number
    thumbhash?: boolean | number
    title?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)}] | boolean | number
    url?: [{
    /** Imgix transformations to apply to the image */
    imgixParams?: (ImgixParams | null)}] | boolean | number
    video?: UploadVideoFieldRequest
    width?: boolean | number
    on_FileField?: FileFieldRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GlobalSeoFieldRequest{
    facebookPageUrl?: boolean | number
    fallbackSeo?: SeoFieldRequest
    siteName?: boolean | number
    titleSuffix?: boolean | number
    twitterAccount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImgixParams {
/**
 * Aspect Ratio
 * 
 * Specifies an aspect ratio to maintain when resizing and cropping the image
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
 */
ar?: (Scalars['String'] | null),
/**
 * Automatic
 * 
 * Applies automatic enhancements to images.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
 */
auto?: (ImgixParamsAuto[] | null),
/**
 * Background Removal
 * 
 * Removes background from image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
 */
bgRemove?: (Scalars['BooleanType'] | null),
/**
 * Background Color
 * 
 * Colors the background of padded and partially-transparent images.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
 */
bg?: (Scalars['String'] | null),
/**
 * Blend Align
 * 
 * Changes the blend alignment relative to the parent image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
 */
blendAlign?: (ImgixParamsBlendAlign[] | null),
/**
 * Blend Alpha
 * 
 * Changes the alpha of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
 */
blendAlpha?: (Scalars['IntType'] | null),
/**
 * Blend Color
 * 
 * Specifies a color to use when applying the blend.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
 */
blendColor?: (Scalars['String'] | null),
/**
 * Blend Crop
 * 
 * Specifies the type of crop for blend images.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
 */
blendCrop?: (ImgixParamsBlendCrop[] | null),
/**
 * Blend Fit
 * 
 * Specifies the fit mode for blend images.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
 */
blendFit?: (ImgixParamsBlendFit | null),
/**
 * Blend Height
 * 
 * Adjusts the height of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
 */
blendH?: (Scalars['FloatType'] | null),
/**
 * Blend Mode
 * 
 * Sets the blend mode for a blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
 */
blendMode?: (ImgixParamsBlendMode | null),
/**
 * Blend Padding
 * 
 * Applies padding to the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
 */
blendPad?: (Scalars['IntType'] | null),
/**
 * Blend Size
 * 
 * Adjusts the size of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
 */
blendSize?: (ImgixParamsBlendSize | null),
/**
 * Blend Width
 * 
 * Adjusts the width of the blend image.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
 */
blendW?: (Scalars['FloatType'] | null),
/**
 * Blend X Position
 * 
 * Adjusts the x-offset of the blend image relative to its parent.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
 */
blendX?: (Scalars['IntType'] | null),
/**
 * Blend Y Position
 * 
 * Adjusts the y-offset of the blend image relative to its parent.
 * 
 * Depends on: `blend`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
 */
blendY?: (Scalars['IntType'] | null),
/**
 * Blend
 * 
 * Specifies the location of the blend image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
 */
blend?: (Scalars['String'] | null),
/**
 * Gaussian Blur
 * 
 * Applies a gaussian blur to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
 */
blur?: (Scalars['IntType'] | null),
/**
 * Border Bottom
 * 
 * Sets bottom border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
 */
borderBottom?: (Scalars['IntType'] | null),
/**
 * Border Left
 * 
 * Sets left border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
 */
borderLeft?: (Scalars['IntType'] | null),
/**
 * Inner Border Radius
 * 
 * Sets the inner radius of the image's border in pixels.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
 */
borderRadiusInner?: (Scalars['String'] | null),
/**
 * Outer Border Radius
 * 
 * Sets the outer radius of the image's border in pixels.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
 */
borderRadius?: (Scalars['String'] | null),
/**
 * Border Right
 * 
 * Sets right border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
 */
borderRight?: (Scalars['IntType'] | null),
/**
 * Border Top
 * 
 * Sets top border of an image.
 * 
 * Depends on: `border`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
 */
borderTop?: (Scalars['IntType'] | null),
/**
 * Border Size & Color
 * 
 * Applies a border to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
 */
border?: (Scalars['String'] | null),
/**
 * Brightness
 * 
 * Adjusts the brightness of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
 */
bri?: (Scalars['IntType'] | null),
/**
 * Client Hints
 * 
 * Sets one or more Client-Hints headers
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
 */
ch?: (ImgixParamsCh[] | null),
/**
 * Chroma Subsampling
 * 
 * Specifies the output chroma subsampling rate.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
 */
chromasub?: (Scalars['IntType'] | null),
/**
 * Color Quantization
 * 
 * Limits the number of unique colors in an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
 */
colorquant?: (Scalars['IntType'] | null),
/**
 * Palette Color Count
 * 
 * Specifies how many colors to include in a palette-extraction response.
 * 
 * Depends on: `palette`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
 */
colors?: (Scalars['IntType'] | null),
/**
 * Contrast
 * 
 * Adjusts the contrast of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
 */
con?: (Scalars['IntType'] | null),
/**
 * Mask Corner Radius
 * 
 * Specifies the radius value for a rounded corner mask.
 * 
 * Depends on: `mask=corners`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
 */
cornerRadius?: (Scalars['String'] | null),
/**
 * Crop Mode
 * 
 * Specifies how to crop an image.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
 */
crop?: (ImgixParamsCrop[] | null),
/**
 * Color Space
 * 
 * Specifies the color space of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
 */
cs?: (ImgixParamsCs | null),
/**
 * Download
 * 
 * Forces a URL to use send-file in its response.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
 */
dl?: (Scalars['String'] | null),
/**
 * Dots Per Inch
 * 
 * Sets the DPI value in the EXIF header.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
 */
dpi?: (Scalars['IntType'] | null),
/**
 * Device Pixel Ratio
 * 
 * Adjusts the device-pixel ratio of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
 */
dpr?: (Scalars['FloatType'] | null),
/**
 * Duotone Alpha
 * 
 * Changes the alpha of the duotone effect atop the source image.
 * 
 * Depends on: `duotone`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
 */
duotoneAlpha?: (Scalars['IntType'] | null),
/**
 * Duotone
 * 
 * Applies a duotone effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
 */
duotone?: (Scalars['String'] | null),
/**
 * Exposure
 * 
 * Adjusts the exposure of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
 */
exp?: (Scalars['IntType'] | null),
/**
 * Url Expiration Timestamp
 * 
 * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
 */
expires?: (Scalars['IntType'] | null),
/**
 * Face Index
 * 
 * Selects a face to crop to.
 * 
 * Depends on: `fit=facearea`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
 */
faceindex?: (Scalars['IntType'] | null),
/**
 * Face Padding
 * 
 * Adjusts padding around a selected face.
 * 
 * Depends on: `fit=facearea`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
 */
facepad?: (Scalars['FloatType'] | null),
/**
 * Json Face Data
 * 
 * Specifies that face data should be included in output when combined with `fm=json`.
 * 
 * Depends on: `fm=json`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
 */
faces?: (Scalars['IntType'] | null),
/**
 * Fill Color
 * 
 * Sets the fill color for images with additional space created by the fit setting
 * 
 * Depends on: `fill=solid`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
 */
fillColor?: (Scalars['String'] | null),
/**
 * Fill Mode
 * 
 * Determines how to fill in additional space created by the fit setting
 * 
 * Depends on: `fit`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
 */
fill?: (ImgixParamsFill | null),
/**
 * Resize Fit Mode
 * 
 * Specifies how to map the source image to the output image dimensions.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
 */
fit?: (ImgixParamsFit | null),
/**
 * Flip Axis
 * 
 * Flips an image on a specified axis.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
 */
flip?: (ImgixParamsFlip | null),
/**
 * Output Format
 * 
 * Changes the format of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
 */
fm?: (ImgixParamsFm | null),
/**
 * Focal Point Debug
 * 
 * Displays crosshairs identifying the location of the set focal point
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
 */
fpDebug?: (Scalars['BooleanType'] | null),
/**
 * Focal Point X Position
 * 
 * Sets the relative horizontal value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
 */
fpX?: (Scalars['FloatType'] | null),
/**
 * Focal Point Y Position
 * 
 * Sets the relative vertical value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
 */
fpY?: (Scalars['FloatType'] | null),
/**
 * Focal Point Zoom
 * 
 * Sets the relative zoom value for the focal point of an image
 * 
 * Depends on: `fit=crop`, `crop=focalpoint`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
 */
fpZ?: (Scalars['FloatType'] | null),
/**
 * Frames Per Second
 * 
 * Specifies the framerate of the generated image.
 */
fps?: (Scalars['IntType'] | null),
/**
 * Frame Selection
 * 
 * Specifies the frame of an animated image to use.
 */
frame?: (Scalars['String'] | null),
/**
 * Gamma
 * 
 * Adjusts the gamma of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
 */
gam?: (Scalars['IntType'] | null),
/**
 * Animated Gif Quality
 * 
 * Depends on: `fm=gif`
 */
gifQ?: (Scalars['IntType'] | null),
/**
 * Grid Colors
 * 
 * Sets grid colors for the transparency checkerboard grid.
 * 
 * Depends on: `transparency`
 */
gridColors?: (Scalars['String'] | null),
/**
 * Grid Size
 * 
 * Sets grid size for the transparency checkerboard grid.
 * 
 * Depends on: `transparency`
 */
gridSize?: (Scalars['IntType'] | null),
/**
 * Image Height
 * 
 * Adjusts the height of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
 */
h?: (Scalars['FloatType'] | null),
/**
 * Highlight
 * 
 * Adjusts the highlights of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
 */
high?: (Scalars['IntType'] | null),
/**
 * Halftone
 * 
 * Applies a half-tone effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
 */
htn?: (Scalars['IntType'] | null),
/**
 * Hue Shift
 * 
 * Adjusts the hue of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
 */
hue?: (Scalars['IntType'] | null),
/**
 * Frame Interval
 * 
 * Displays every Nth frame starting with the first frame.
 */
interval?: (Scalars['IntType'] | null),
/**
 * Invert
 * 
 * Inverts the colors on the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
 */
invert?: (Scalars['BooleanType'] | null),
/**
 * Iptc Passthrough
 * 
 * Determine if IPTC data should be passed for JPEG images.
 */
iptc?: (ImgixParamsIptc | null),
/**
 * Animation Loop Count
 * 
 * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
 */
loop?: (Scalars['IntType'] | null),
/**
 * Lossless Compression
 * 
 * Specifies that the output image should be a lossless variant.
 * 
 * Depends on: `fm=webp`, `fm=jxr`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
 */
lossless?: (Scalars['BooleanType'] | null),
/**
 * Watermark Alignment Mode
 * 
 * Changes the watermark alignment relative to the parent image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
 */
markAlign?: (ImgixParamsMarkAlign[] | null),
/**
 * Watermark Alpha
 * 
 * Changes the alpha of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
 */
markAlpha?: (Scalars['IntType'] | null),
/**
 * Watermark Base Url
 * 
 * Changes base URL of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
 */
markBase?: (Scalars['String'] | null),
/**
 * Watermark Fit Mode
 * 
 * Specifies the fit mode for watermark images.
 * 
 * Depends on: `mark`, `markw`, `markh`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
 */
markFit?: (ImgixParamsMarkFit | null),
/**
 * Watermark Height
 * 
 * Adjusts the height of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
 */
markH?: (Scalars['FloatType'] | null),
/**
 * Watermark Padding
 * 
 * Applies padding to the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
 */
markPad?: (Scalars['IntType'] | null),
/**
 * Watermark Rotation
 * 
 * Rotates a watermark or tiled watermarks by a specified number of degrees.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
 */
markRot?: (Scalars['FloatType'] | null),
/**
 * Watermark Scale
 * 
 * Adjusts the scale of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
 */
markScale?: (Scalars['IntType'] | null),
/**
 * Watermark Tile
 * 
 * Adds tiled watermark.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
 */
markTile?: (ImgixParamsMarkTile | null),
/**
 * Watermark Width
 * 
 * Adjusts the width of the watermark image.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
 */
markW?: (Scalars['FloatType'] | null),
/**
 * Watermark X Position
 * 
 * Adjusts the x-offset of the watermark image relative to its parent.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
 */
markX?: (Scalars['IntType'] | null),
/**
 * Watermark Y Position
 * 
 * Adjusts the y-offset of the watermark image relative to its parent.
 * 
 * Depends on: `mark`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
 */
markY?: (Scalars['IntType'] | null),
/**
 * Watermark Image Url
 * 
 * Specifies the location of the watermark image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
 */
mark?: (Scalars['String'] | null),
/**
 * Mask Background Color
 * 
 * Colors the background of the transparent mask area of images
 * 
 * Depends on: `mask`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
 */
maskBg?: (Scalars['String'] | null),
/**
 * Mask Type
 * 
 * Defines the type of mask and specifies the URL if that type is selected.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
 */
mask?: (Scalars['String'] | null),
/**
 * Maximum Height
 * 
 * Specifies the maximum height of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
 */
maxH?: (Scalars['IntType'] | null),
/**
 * Maximum Width
 * 
 * Specifies the maximum width of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
 */
maxW?: (Scalars['IntType'] | null),
/**
 * Minimum Height
 * 
 * Specifies the minimum height of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
 */
minH?: (Scalars['IntType'] | null),
/**
 * Minimum Width
 * 
 * Specifies the minimum width of the output image in pixels.
 * 
 * Depends on: `fit=crop`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
 */
minW?: (Scalars['IntType'] | null),
/**
 * Monochrome
 * 
 * Applies a monochrome effect to the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
 */
monochrome?: (Scalars['String'] | null),
/**
 * Noise Reduction Bound
 * 
 * Reduces the noise in an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
 */
nr?: (Scalars['IntType'] | null),
/**
 * Noise Reduction Sharpen
 * 
 * Provides a threshold by which to sharpen an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
 */
nrs?: (Scalars['IntType'] | null),
/**
 * Orientation
 * 
 * Changes the image orientation.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
 */
orient?: (Scalars['IntType'] | null),
/**
 * Padding Bottom
 * 
 * Sets bottom padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
 */
padBottom?: (Scalars['IntType'] | null),
/**
 * Padding Left
 * 
 * Sets left padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
 */
padLeft?: (Scalars['IntType'] | null),
/**
 * Padding Right
 * 
 * Sets right padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
 */
padRight?: (Scalars['IntType'] | null),
/**
 * Padding Top
 * 
 * Sets top padding of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
 */
padTop?: (Scalars['IntType'] | null),
/**
 * Padding
 * 
 * Pads an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
 */
pad?: (Scalars['IntType'] | null),
/**
 * Pdf Page Number
 * 
 * Selects a page from a PDF for display.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
 */
page?: (Scalars['IntType'] | null),
/**
 * Color Palette Extraction
 * 
 * Specifies an output format for palette-extraction.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
 */
palette?: (ImgixParamsPalette | null),
/**
 * Pdf Annotation
 * 
 * Enables or disables PDF annotation.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
 */
pdfAnnotation?: (Scalars['BooleanType'] | null),
/**
 * Css Prefix
 * 
 * Specifies a CSS prefix for all classes in palette-extraction.
 * 
 * Depends on: `palette=css`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
 */
prefix?: (Scalars['String'] | null),
/**
 * Pixellate
 * 
 * Applies a pixelation effect to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
 */
px?: (Scalars['IntType'] | null),
/**
 * Output Quality
 * 
 * Adjusts the quality of an output image.
 * 
 * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
 */
q?: (Scalars['IntType'] | null),
/**
 * Source Rectangle Region
 * 
 * Crops an image to a specified rectangle.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
 */
rect?: (Scalars['String'] | null),
/**
 * Reverse
 * 
 * Reverses the frame order on the source animation.
 */
reverse?: (Scalars['BooleanType'] | null),
/**
 * Rotation
 * 
 * Rotates an image by a specified number of degrees.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
 */
rot?: (Scalars['FloatType'] | null),
/**
 * Saturation
 * 
 * Adjusts the saturation of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
 */
sat?: (Scalars['IntType'] | null),
/**
 * Sepia Tone
 * 
 * Applies a sepia effect to an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
 */
sepia?: (Scalars['IntType'] | null),
/**
 * Shadow
 * 
 * Adjusts the highlights of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
 */
shad?: (Scalars['FloatType'] | null),
/**
 * Sharpen
 * 
 * Adjusts the sharpness of the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
 */
sharp?: (Scalars['FloatType'] | null),
/**
 * Frame Skip
 * 
 * Skips every Nth frame starting with the first frame.
 */
skip?: (Scalars['IntType'] | null),
/**
 * Transparency
 * 
 * Adds checkerboard behind images which support transparency.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
 */
transparency?: (ImgixParamsTransparency | null),
/**
 * Trim Color
 * 
 * Specifies a trim color on a trim operation.
 * 
 * Depends on: `trim=color`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
 */
trimColor?: (Scalars['String'] | null),
/**
 * Trim Mean Difference
 * 
 * Specifies the mean difference on a trim operation.
 * 
 * Depends on: `trim=auto`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
 */
trimMd?: (Scalars['FloatType'] | null),
/**
 * Trim Padding
 * 
 * Pads the area of the source image before trimming.
 * 
 * Depends on: `trim`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
 */
trimPad?: (Scalars['IntType'] | null),
/**
 * Trim Standard Deviation
 * 
 * Specifies the standard deviation on a trim operation.
 * 
 * Depends on: `trim=auto`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
 */
trimSd?: (Scalars['FloatType'] | null),
/**
 * Trim Tolerance
 * 
 * Specifies the tolerance on a trim operation.
 * 
 * Depends on: `trim=color`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
 */
trimTol?: (Scalars['FloatType'] | null),
/**
 * Trim Image
 * 
 * Trims the source image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
 */
trim?: (ImgixParamsTrim | null),
/**
 * Text Align
 * 
 * Sets the vertical and horizontal alignment of rendered text relative to the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
 */
txtAlign?: (ImgixParamsTxtAlign[] | null),
/**
 * Text Clipping Mode
 * 
 * Sets the clipping properties of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
 */
txtClip?: (ImgixParamsTxtClip[] | null),
/**
 * Text Color
 * 
 * Specifies the color of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
 */
txtColor?: (Scalars['String'] | null),
/**
 * Text Fit Mode
 * 
 * Specifies the fit approach for rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
 */
txtFit?: (ImgixParamsTxtFit | null),
/**
 * Text Font
 * 
 * Selects a font for rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
 */
txtFont?: (Scalars['String'] | null),
/**
 * Text Leading
 * 
 * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
 */
txtLead?: (Scalars['IntType'] | null),
/**
 * Text Ligatures
 * 
 * Controls the level of ligature substitution
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
 */
txtLig?: (Scalars['IntType'] | null),
/**
 * Text Outline Color
 * 
 * Specifies a text outline color.
 * 
 * Depends on: `txt`, `txtline`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
 */
txtLineColor?: (Scalars['String'] | null),
/**
 * Text Outline
 * 
 * Outlines the rendered text with a specified color.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
 */
txtLine?: (Scalars['IntType'] | null),
/**
 * Text Padding
 * 
 * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
 */
txtPad?: (Scalars['IntType'] | null),
/**
 * Text Shadow
 * 
 * Applies a shadow to rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
 */
txtShad?: (Scalars['FloatType'] | null),
/**
 * Text Font Size
 * 
 * Sets the font size of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
 */
txtSize?: (Scalars['IntType'] | null),
/**
 * Text Tracking
 * 
 * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
 */
txtTrack?: (Scalars['IntType'] | null),
/**
 * Text Width
 * 
 * Sets the width of rendered text.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
 */
txtWidth?: (Scalars['IntType'] | null),
/**
 * Text X Position
 * 
 * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
 */
txtX?: (Scalars['IntType'] | null),
/**
 * Text Y Position
 * 
 * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
 * 
 * Depends on: `txt`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
 */
txtY?: (Scalars['IntType'] | null),
/**
 * Text String
 * 
 * Sets the text string to render.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
 */
txt?: (Scalars['String'] | null),
/**
 * Unsharp Mask
 * 
 * Sharpens the source image using an unsharp mask.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
 */
usm?: (Scalars['IntType'] | null),
/**
 * Unsharp Mask Radius
 * 
 * Specifies the radius for an unsharp mask operation.
 * 
 * Depends on: `usm`
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
 */
usmrad?: (Scalars['FloatType'] | null),
/**
 * Vibrance
 * 
 * Adjusts the vibrance of an image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
 */
vib?: (Scalars['IntType'] | null),
/**
 * Image Width
 * 
 * Adjusts the width of the output image.
 * 
 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
 */
w?: (Scalars['FloatType'] | null)}


/** Specifies how to filter by usage */
export interface InUseFilter {
/** Search uploads that are currently used by some record or not */
eq?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter Integer fields */
export interface IntegerFilter {
/** Filter records with a value that's strictly greater than the one specified */
gt?: (Scalars['IntType'] | null),
/** Filter records with a value that's less than the one specified */
lt?: (Scalars['IntType'] | null),
/** Filter records with a value that's greater than or equal to the one specified */
gte?: (Scalars['IntType'] | null),
/** Filter records with a value that's less or equal than the one specified */
lte?: (Scalars['IntType'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null),
/** Search for records with an exact match */
eq?: (Scalars['IntType'] | null),
/** Exclude records with an exact match */
neq?: (Scalars['IntType'] | null)}


/** Specifies how to filter by ID */
export interface ItemIdFilter {
/** Search the record with the specified ID */
eq?: (Scalars['ItemId'] | null),
/** Exclude the record with the specified ID */
neq?: (Scalars['ItemId'] | null),
/** Search records with the specified IDs */
in?: ((Scalars['ItemId'] | null)[] | null),
/** Search records that do not have the specified IDs */
notIn?: ((Scalars['ItemId'] | null)[] | null)}


/** Specifies how to filter by image orientation */
export interface OrientationFilter {
/** Search uploads with the specified orientation */
eq?: (UploadOrientation | null),
/** Exclude uploads with the specified orientation */
neq?: (UploadOrientation | null)}


/** Specifies how to filter by publication datetime */
export interface PublishedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** The query root for this schema */
export interface QueryRequest{
    /** Returns meta information regarding a record collection */
    _allCoursesMeta?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),filter?: (CourseModelFilter | null)},CollectionMetadataRequest] | CollectionMetadataRequest
    /** Returns meta information regarding an assets collection */
    _allUploadsMeta?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),filter?: (UploadFilter | null)},CollectionMetadataRequest] | CollectionMetadataRequest
    /** Returns the single instance record */
    _site?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},SiteRequest] | SiteRequest
    /** Returns a collection of records */
    allCourses?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null),
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null),
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)},CourseRecordRequest] | CourseRecordRequest
    /** Returns a collection of assets */
    allUploads?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null),
    /** Skip the first results */
    skip?: (Scalars['IntType'] | null),
    /** Limit the number of results */
    first?: (Scalars['IntType'] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)},FileFieldRequest] | FileFieldRequest
    /** Returns a specific record */
    course?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)},CourseRecordRequest] | CourseRecordRequest
    /** Returns a specific asset */
    upload?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)},FileFieldRequest] | FileFieldRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecordInterfaceRequest{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)},TagRequest] | TagRequest
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    on_CourseRecord?: CourseRecordRequest
    on_SeoBlockRecord?: SeoBlockRecordRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by upload type */
export interface ResolutionFilter {
/** Search uploads with the specified resolution */
eq?: (ResolutionType | null),
/** Exclude uploads with the specified resolution */
neq?: (ResolutionType | null),
/** Search uploads with the specified resolutions */
in?: ((ResolutionType | null)[] | null),
/** Search uploads without the specified resolutions */
notIn?: ((ResolutionType | null)[] | null)}

export interface ResponsiveImageRequest{
    alt?: boolean | number
    aspectRatio?: boolean | number
    base64?: boolean | number
    bgColor?: boolean | number
    height?: boolean | number
    sizes?: boolean | number
    src?: boolean | number
    srcSet?: boolean | number
    title?: boolean | number
    webpSrcSet?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block of type SEO Block (seo_block) */
export interface SeoBlockRecordRequest{
    _createdAt?: boolean | number
    /** Editing URL */
    _editingUrl?: boolean | number
    _firstPublishedAt?: boolean | number
    _isValid?: boolean | number
    _modelApiKey?: boolean | number
    _publicationScheduledAt?: boolean | number
    _publishedAt?: boolean | number
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null)},TagRequest] | TagRequest
    _status?: boolean | number
    _unpublishingScheduledAt?: boolean | number
    _updatedAt?: boolean | number
    id?: boolean | number
    seoBlock?: SeoFieldRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SeoFieldRequest{
    description?: boolean | number
    image?: FileFieldRequest
    title?: boolean | number
    twitterCard?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SiteRequest{
    favicon?: FileFieldRequest
    faviconMetaTags?: [{
    /** The variants to build */
    variants?: ((FaviconType | null)[] | null)},TagRequest] | TagRequest
    globalSeo?: [{
    /** The locale to use to fetch the field's content */
    locale?: (SiteLocale | null),
    /** If you want to fallback to a default translation when a translation has not been found */
    fallbackLocales?: (SiteLocale[] | null)},GlobalSeoFieldRequest] | GlobalSeoFieldRequest
    locales?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter Slug fields */
export interface SlugFilter {
/** Search for records with an exact match */
eq?: (Scalars['String'] | null),
/** Exclude records with an exact match */
neq?: (Scalars['String'] | null),
/** Filter records that have one of the specified slugs */
in?: ((Scalars['String'] | null)[] | null),
/** Filter records that do have one of the specified slugs */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by status */
export interface StatusFilter {
/** Search the record with the specified status */
eq?: (ItemStatus | null),
/** Exclude the record with the specified status */
neq?: (ItemStatus | null),
/** Search records with the specified statuses */
in?: ((ItemStatus | null)[] | null),
/** Search records without the specified statuses */
notIn?: ((ItemStatus | null)[] | null)}


/** Specifies how to filter Single-line string fields */
export interface StringFilter {
/** Filter records based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude records based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field set as blank (null or empty string) */
isBlank?: (Scalars['BooleanType'] | null),
/** Filter records with the specified field present (neither null, nor empty string) */
isPresent?: (Scalars['BooleanType'] | null),
/** Search for records with an exact match */
eq?: (Scalars['String'] | null),
/** Exclude records with an exact match */
neq?: (Scalars['String'] | null),
/** Filter records that equal one of the specified values */
in?: ((Scalars['String'] | null)[] | null),
/** Filter records that do not equal one of the specified values */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
exists?: (Scalars['BooleanType'] | null)}

export interface StringMatchesFilter {pattern: Scalars['String'],caseSensitive?: (Scalars['BooleanType'] | null),regexp?: (Scalars['BooleanType'] | null)}

export interface TagRequest{
    attributes?: boolean | number
    content?: boolean | number
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by upload type */
export interface TypeFilter {
/** Search uploads with the specified type */
eq?: (UploadType | null),
/** Exclude uploads with the specified type */
neq?: (UploadType | null),
/** Search uploads with the specified types */
in?: ((UploadType | null)[] | null),
/** Search uploads without the specified types */
notIn?: ((UploadType | null)[] | null)}


/** Specifies how to filter by update datetime */
export interface UpdatedAtFilter {
/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
gt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
lt?: (Scalars['DateTime'] | null),
/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
gte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
lte?: (Scalars['DateTime'] | null),
/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
eq?: (Scalars['DateTime'] | null),
/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
neq?: (Scalars['DateTime'] | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by default alt */
export interface UploadAltFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the uploads with the specified alt */
eq?: (Scalars['String'] | null),
/** Exclude the uploads with the specified alt */
neq?: (Scalars['String'] | null),
/** Search uploads with the specified values as default alt */
in?: ((Scalars['String'] | null)[] | null),
/** Search uploads that do not have the specified values as default alt */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter uploads with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by auhtor */
export interface UploadAuthorFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter uploads with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by basename */
export interface UploadBasenameFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null)}


/** Specifies how to filter by colors */
export interface UploadColorsFilter {
/** Filter uploads that have the specified colors */
contains?: (ColorBucketType | null),
/** Filter uploads that have all of the specified colors */
allIn?: ((ColorBucketType | null)[] | null),
/** Filter uploads that have at least one of the specified colors */
anyIn?: ((ColorBucketType | null)[] | null),
/** Filter uploads that do not have any of the specified colors */
notIn?: ((ColorBucketType | null)[] | null),
/** Search for uploads with an exact match */
eq?: ((ColorBucketType | null)[] | null)}


/** Specifies how to filter by copyright */
export interface UploadCopyrightFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by creation datetime */
export interface UploadCreatedAtFilter {
/** Search for uploads with an exact match */
eq?: (Scalars['DateTime'] | null),
/** Exclude uploads with an exact match */
neq?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less than the one specified */
lt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less or equal than the one specified */
lte?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's strictly greater than the one specified */
gt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's greater than or equal to the one specified */
gte?: (Scalars['DateTime'] | null)}


/** Specifies how to filter by filename */
export interface UploadFilenameFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null)}

export interface UploadFilter {type?: (TypeFilter | null),inUse?: (InUseFilter | null),resolution?: (ResolutionFilter | null),size?: (UploadSizeFilter | null),tags?: (UploadTagsFilter | null),smartTags?: (UploadTagsFilter | null),colors?: (UploadColorsFilter | null),orientation?: (OrientationFilter | null),id?: (UploadIdFilter | null),mimeType?: (UploadMimeTypeFilter | null),format?: (UploadFormatFilter | null),height?: (UploadHeightFilter | null),width?: (UploadWidthFilter | null),alt?: (UploadAltFilter | null),title?: (UploadTitleFilter | null),notes?: (UploadNotesFilter | null),md5?: (UploadMd5Filter | null),author?: (UploadAuthorFilter | null),copyright?: (UploadCopyrightFilter | null),basename?: (UploadBasenameFilter | null),filename?: (UploadFilenameFilter | null),_createdAt?: (UploadCreatedAtFilter | null),_updatedAt?: (UploadUpdatedAtFilter | null),OR?: ((UploadFilter | null)[] | null),AND?: ((UploadFilter | null)[] | null)}


/** Specifies how to filter by format */
export interface UploadFormatFilter {
/** Search the asset with the specified format */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified format */
neq?: (Scalars['String'] | null),
/** Search assets with the specified formats */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified formats */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by height */
export interface UploadHeightFilter {
/** Search all assets larger than the specified height */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified height */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified height */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified height */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified height */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified height */
neq?: (Scalars['IntType'] | null)}


/** Specifies how to filter by ID */
export interface UploadIdFilter {
/** Search the asset with the specified ID */
eq?: (Scalars['UploadId'] | null),
/** Exclude the asset with the specified ID */
neq?: (Scalars['UploadId'] | null),
/** Search assets with the specified IDs */
in?: ((Scalars['UploadId'] | null)[] | null),
/** Search assets that do not have the specified IDs */
notIn?: ((Scalars['UploadId'] | null)[] | null)}


/** Specifies how to filter by MD5 */
export interface UploadMd5Filter {
/** Search the asset with the specified MD5 */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified MD5 */
neq?: (Scalars['String'] | null),
/** Search assets with the specified MD5s */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified MD5s */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by mime type */
export interface UploadMimeTypeFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the asset with the specified mime type */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified mime type */
neq?: (Scalars['String'] | null),
/** Search assets with the specified mime types */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified mime types */
notIn?: ((Scalars['String'] | null)[] | null)}


/** Specifies how to filter by notes */
export interface UploadNotesFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Filter records with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by size */
export interface UploadSizeFilter {
/** Search all assets larger than the specified size (in bytes) */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified size (in bytes) */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified size (in bytes) */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified size (in bytes) */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified size (in bytes) */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified size (in bytes) */
neq?: (Scalars['IntType'] | null)}


/** Specifies how to filter by tags */
export interface UploadTagsFilter {
/** Filter uploads linked to the specified tag */
contains?: (Scalars['String'] | null),
/** Filter uploads linked to all of the specified tags */
allIn?: (Scalars['String'][] | null),
/** Filter uploads linked to at least one of the specified tags */
anyIn?: (Scalars['String'][] | null),
/** Filter uploads not linked to any of the specified tags */
notIn?: (Scalars['String'][] | null),
/** Search for uploads with an exact match */
eq?: (Scalars['String'][] | null)}


/** Specifies how to filter by default title */
export interface UploadTitleFilter {
/** Filter uploads based on a regular expression */
matches?: (StringMatchesFilter | null),
/** Exclude uploads based on a regular expression */
notMatches?: (StringMatchesFilter | null),
/** Search the asset with the specified title */
eq?: (Scalars['String'] | null),
/** Exclude the asset with the specified title */
neq?: (Scalars['String'] | null),
/** Search assets with the specified as default title */
in?: ((Scalars['String'] | null)[] | null),
/** Search assets that do not have the specified as default title */
notIn?: ((Scalars['String'] | null)[] | null),
/** Filter assets with the specified field defined (i.e. with any value) or not */
exists?: (Scalars['BooleanType'] | null)}


/** Specifies how to filter by update datetime */
export interface UploadUpdatedAtFilter {
/** Search for uploads with an exact match */
eq?: (Scalars['DateTime'] | null),
/** Exclude uploads with an exact match */
neq?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less than the one specified */
lt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's less or equal than the one specified */
lte?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's strictly greater than the one specified */
gt?: (Scalars['DateTime'] | null),
/** Filter uploads with a value that's greater than or equal to the one specified */
gte?: (Scalars['DateTime'] | null)}

export interface UploadVideoFieldRequest{
    duration?: boolean | number
    framerate?: boolean | number
    mp4Url?: [{
    /** Pick highest resolution available up to the specified argument */
    res?: (VideoMp4Res | null),
    /** Pick the exact resolution quality specified in the argument */
    exactRes?: (VideoMp4Res | null)}] | boolean | number
    muxAssetId?: boolean | number
    muxPlaybackId?: boolean | number
    streamingUrl?: boolean | number
    thumbnailUrl?: [{
    /** The file extension of the requested image format. Either png, jpg or gif */
    format?: (MuxThumbnailFormatType | null)}] | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Specifies how to filter by width */
export interface UploadWidthFilter {
/** Search all assets larger than the specified width */
gt?: (Scalars['IntType'] | null),
/** Search all assets smaller than the specified width */
lt?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified width */
gte?: (Scalars['IntType'] | null),
/** Search all assets larger or equal to the specified width */
lte?: (Scalars['IntType'] | null),
/** Search assets with the specified width */
eq?: (Scalars['IntType'] | null),
/** Search assets that do not have the specified width */
neq?: (Scalars['IntType'] | null)}

export interface focalPointRequest{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const CollectionMetadata_possibleTypes: string[] = ['CollectionMetadata']
export const isCollectionMetadata = (obj?: { __typename?: any } | null): obj is CollectionMetadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCollectionMetadata"')
  return CollectionMetadata_possibleTypes.includes(obj.__typename)
}



const ColorField_possibleTypes: string[] = ['ColorField']
export const isColorField = (obj?: { __typename?: any } | null): obj is ColorField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isColorField"')
  return ColorField_possibleTypes.includes(obj.__typename)
}



const CourseRecord_possibleTypes: string[] = ['CourseRecord']
export const isCourseRecord = (obj?: { __typename?: any } | null): obj is CourseRecord => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCourseRecord"')
  return CourseRecord_possibleTypes.includes(obj.__typename)
}



const FileField_possibleTypes: string[] = ['FileField']
export const isFileField = (obj?: { __typename?: any } | null): obj is FileField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFileField"')
  return FileField_possibleTypes.includes(obj.__typename)
}



const FileFieldInterface_possibleTypes: string[] = ['FileField']
export const isFileFieldInterface = (obj?: { __typename?: any } | null): obj is FileFieldInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFileFieldInterface"')
  return FileFieldInterface_possibleTypes.includes(obj.__typename)
}



const GlobalSeoField_possibleTypes: string[] = ['GlobalSeoField']
export const isGlobalSeoField = (obj?: { __typename?: any } | null): obj is GlobalSeoField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGlobalSeoField"')
  return GlobalSeoField_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const RecordInterface_possibleTypes: string[] = ['CourseRecord','SeoBlockRecord']
export const isRecordInterface = (obj?: { __typename?: any } | null): obj is RecordInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRecordInterface"')
  return RecordInterface_possibleTypes.includes(obj.__typename)
}



const ResponsiveImage_possibleTypes: string[] = ['ResponsiveImage']
export const isResponsiveImage = (obj?: { __typename?: any } | null): obj is ResponsiveImage => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isResponsiveImage"')
  return ResponsiveImage_possibleTypes.includes(obj.__typename)
}



const SeoBlockRecord_possibleTypes: string[] = ['SeoBlockRecord']
export const isSeoBlockRecord = (obj?: { __typename?: any } | null): obj is SeoBlockRecord => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSeoBlockRecord"')
  return SeoBlockRecord_possibleTypes.includes(obj.__typename)
}



const SeoField_possibleTypes: string[] = ['SeoField']
export const isSeoField = (obj?: { __typename?: any } | null): obj is SeoField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSeoField"')
  return SeoField_possibleTypes.includes(obj.__typename)
}



const Site_possibleTypes: string[] = ['Site']
export const isSite = (obj?: { __typename?: any } | null): obj is Site => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSite"')
  return Site_possibleTypes.includes(obj.__typename)
}



const Tag_possibleTypes: string[] = ['Tag']
export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



const UploadVideoField_possibleTypes: string[] = ['UploadVideoField']
export const isUploadVideoField = (obj?: { __typename?: any } | null): obj is UploadVideoField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUploadVideoField"')
  return UploadVideoField_possibleTypes.includes(obj.__typename)
}



const focalPoint_possibleTypes: string[] = ['focalPoint']
export const isfocalPoint = (obj?: { __typename?: any } | null): obj is focalPoint => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isfocalPoint"')
  return focalPoint_possibleTypes.includes(obj.__typename)
}


export interface CollectionMetadataPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>})
}

export interface CollectionMetadataObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>})
}

export interface ColorFieldPromiseChain{
    alpha: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    blue: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    cssRgb: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    green: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    hex: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    red: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>})
}

export interface ColorFieldObservableChain{
    alpha: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    blue: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    cssRgb: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    green: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    hex: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    red: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>})
}


/** Record of type Course (course) */
export interface CourseRecordPromiseChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Promise<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Promise<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Promise<Scalars['ItemId']>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    numberOfSections: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>}),
    seo: ({get: <R extends SeoBlockRecordRequest>(request: R, defaultValue?: FieldsSelection<SeoBlockRecord, R>[]) => Promise<FieldsSelection<SeoBlockRecord, R>[]>}),
    slug: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    tag: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** Record of type Course (course) */
export interface CourseRecordObservableChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Observable<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Observable<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Observable<Scalars['ItemId']>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    numberOfSections: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>}),
    seo: ({get: <R extends SeoBlockRecordRequest>(request: R, defaultValue?: FieldsSelection<SeoBlockRecord, R>[]) => Observable<FieldsSelection<SeoBlockRecord, R>[]>}),
    slug: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    tag: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface FileFieldPromiseChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    
/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    alt: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    basename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    blurUpThumb: ((args: {
/** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
punch: Scalars['Float'],
/** Maximum image dimension (defaults to 24px) */
size: Scalars['Int'],
/** Image quality (defaults to 70%) */
quality: Scalars['Int'],
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    blurhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    colors: ({get: <R extends ColorFieldRequest>(request: R, defaultValue?: FieldsSelection<ColorField, R>[]) => Promise<FieldsSelection<ColorField, R>[]>}),
    copyright: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    customData: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>})&({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>}),
    exifInfo: ({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    focalPoint: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => focalPointPromiseChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Promise<(FieldsSelection<focalPoint, R> | undefined)>})&(focalPointPromiseChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Promise<(FieldsSelection<focalPoint, R> | undefined)>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    height: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['UploadId']) => Promise<Scalars['UploadId']>}),
    md5: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    mimeType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    notes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    responsiveImage: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null),
/** Specify a custom `sizes` attribute for the image */
sizes?: (Scalars['String'] | null),
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => ResponsiveImagePromiseChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Promise<(FieldsSelection<ResponsiveImage, R> | undefined)>})&(ResponsiveImagePromiseChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Promise<(FieldsSelection<ResponsiveImage, R> | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    smartTags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    thumbhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    url: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    video: (UploadVideoFieldPromiseChain & {get: <R extends UploadVideoFieldRequest>(request: R, defaultValue?: (FieldsSelection<UploadVideoField, R> | undefined)) => Promise<(FieldsSelection<UploadVideoField, R> | undefined)>}),
    width: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>})
}

export interface FileFieldObservableChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    
/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    alt: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    basename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    blurUpThumb: ((args: {
/** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
punch: Scalars['Float'],
/** Maximum image dimension (defaults to 24px) */
size: Scalars['Int'],
/** Image quality (defaults to 70%) */
quality: Scalars['Int'],
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    blurhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    colors: ({get: <R extends ColorFieldRequest>(request: R, defaultValue?: FieldsSelection<ColorField, R>[]) => Observable<FieldsSelection<ColorField, R>[]>}),
    copyright: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    customData: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>})&({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>}),
    exifInfo: ({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    focalPoint: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => focalPointObservableChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Observable<(FieldsSelection<focalPoint, R> | undefined)>})&(focalPointObservableChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Observable<(FieldsSelection<focalPoint, R> | undefined)>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    height: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['UploadId']) => Observable<Scalars['UploadId']>}),
    md5: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    mimeType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    notes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    responsiveImage: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null),
/** Specify a custom `sizes` attribute for the image */
sizes?: (Scalars['String'] | null),
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => ResponsiveImageObservableChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Observable<(FieldsSelection<ResponsiveImage, R> | undefined)>})&(ResponsiveImageObservableChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Observable<(FieldsSelection<ResponsiveImage, R> | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    smartTags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    thumbhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    url: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    video: (UploadVideoFieldObservableChain & {get: <R extends UploadVideoFieldRequest>(request: R, defaultValue?: (FieldsSelection<UploadVideoField, R> | undefined)) => Observable<(FieldsSelection<UploadVideoField, R> | undefined)>}),
    width: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>})
}

export interface FileFieldInterfacePromiseChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    
/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    alt: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    basename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    blurUpThumb: ((args: {
/** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
punch: Scalars['Float'],
/** Maximum image dimension (defaults to 24px) */
size: Scalars['Int'],
/** Image quality (defaults to 70%) */
quality: Scalars['Int'],
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    blurhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    colors: ({get: <R extends ColorFieldRequest>(request: R, defaultValue?: FieldsSelection<ColorField, R>[]) => Promise<FieldsSelection<ColorField, R>[]>}),
    copyright: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    customData: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>})&({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>}),
    exifInfo: ({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Promise<Scalars['CustomData']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    focalPoint: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => focalPointPromiseChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Promise<(FieldsSelection<focalPoint, R> | undefined)>})&(focalPointPromiseChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Promise<(FieldsSelection<focalPoint, R> | undefined)>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    height: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['UploadId']) => Promise<Scalars['UploadId']>}),
    md5: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    mimeType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    notes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    responsiveImage: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null),
/** Specify a custom `sizes` attribute for the image */
sizes?: (Scalars['String'] | null),
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => ResponsiveImagePromiseChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Promise<(FieldsSelection<ResponsiveImage, R> | undefined)>})&(ResponsiveImagePromiseChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Promise<(FieldsSelection<ResponsiveImage, R> | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    smartTags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    thumbhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    url: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    video: (UploadVideoFieldPromiseChain & {get: <R extends UploadVideoFieldRequest>(request: R, defaultValue?: (FieldsSelection<UploadVideoField, R> | undefined)) => Promise<(FieldsSelection<UploadVideoField, R> | undefined)>}),
    width: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Promise<(Scalars['IntType'] | undefined)>})
}

export interface FileFieldInterfaceObservableChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    
/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    alt: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    author: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    basename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    blurUpThumb: ((args: {
/** Controls the "punch" value (~contrast) of the blurhash decoding algorithm (defaults to 1.0) */
punch: Scalars['Float'],
/** Maximum image dimension (defaults to 24px) */
size: Scalars['Int'],
/** Image quality (defaults to 70%) */
quality: Scalars['Int'],
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    blurhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    colors: ({get: <R extends ColorFieldRequest>(request: R, defaultValue?: FieldsSelection<ColorField, R>[]) => Observable<FieldsSelection<ColorField, R>[]>}),
    copyright: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    customData: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>})&({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>}),
    exifInfo: ({get: (request?: boolean|number, defaultValue?: Scalars['CustomData']) => Observable<Scalars['CustomData']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    focalPoint: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => focalPointObservableChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Observable<(FieldsSelection<focalPoint, R> | undefined)>})&(focalPointObservableChain & {get: <R extends focalPointRequest>(request: R, defaultValue?: (FieldsSelection<focalPoint, R> | undefined)) => Observable<(FieldsSelection<focalPoint, R> | undefined)>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    height: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['UploadId']) => Observable<Scalars['UploadId']>}),
    md5: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    mimeType: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    notes: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    responsiveImage: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null),
/** Specify a custom `sizes` attribute for the image */
sizes?: (Scalars['String'] | null),
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => ResponsiveImageObservableChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Observable<(FieldsSelection<ResponsiveImage, R> | undefined)>})&(ResponsiveImageObservableChain & {get: <R extends ResponsiveImageRequest>(request: R, defaultValue?: (FieldsSelection<ResponsiveImage, R> | undefined)) => Observable<(FieldsSelection<ResponsiveImage, R> | undefined)>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    smartTags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    tags: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    thumbhash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    url: ((args?: {
/** Imgix transformations to apply to the image */
imgixParams?: (ImgixParams | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    video: (UploadVideoFieldObservableChain & {get: <R extends UploadVideoFieldRequest>(request: R, defaultValue?: (FieldsSelection<UploadVideoField, R> | undefined)) => Observable<(FieldsSelection<UploadVideoField, R> | undefined)>}),
    width: ({get: (request?: boolean|number, defaultValue?: (Scalars['IntType'] | undefined)) => Observable<(Scalars['IntType'] | undefined)>})
}

export interface GlobalSeoFieldPromiseChain{
    facebookPageUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    fallbackSeo: (SeoFieldPromiseChain & {get: <R extends SeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<SeoField, R> | undefined)) => Promise<(FieldsSelection<SeoField, R> | undefined)>}),
    siteName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    titleSuffix: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    twitterAccount: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface GlobalSeoFieldObservableChain{
    facebookPageUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    fallbackSeo: (SeoFieldObservableChain & {get: <R extends SeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<SeoField, R> | undefined)) => Observable<(FieldsSelection<SeoField, R> | undefined)>}),
    siteName: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    titleSuffix: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    twitterAccount: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** The query root for this schema */
export interface QueryPromiseChain{
    
/** Returns meta information regarding a record collection */
_allCoursesMeta: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),filter?: (CourseModelFilter | null)}) => CollectionMetadataPromiseChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Promise<FieldsSelection<CollectionMetadata, R>>})&(CollectionMetadataPromiseChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Promise<FieldsSelection<CollectionMetadata, R>>}),
    
/** Returns meta information regarding an assets collection */
_allUploadsMeta: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),filter?: (UploadFilter | null)}) => CollectionMetadataPromiseChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Promise<FieldsSelection<CollectionMetadata, R>>})&(CollectionMetadataPromiseChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Promise<FieldsSelection<CollectionMetadata, R>>}),
    
/** Returns the single instance record */
_site: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => SitePromiseChain & {get: <R extends SiteRequest>(request: R, defaultValue?: FieldsSelection<Site, R>) => Promise<FieldsSelection<Site, R>>})&(SitePromiseChain & {get: <R extends SiteRequest>(request: R, defaultValue?: FieldsSelection<Site, R>) => Promise<FieldsSelection<Site, R>>}),
    
/** Returns a collection of records */
allCourses: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),
/** Skip the first results */
skip?: (Scalars['IntType'] | null),
/** Limit the number of results */
first?: (Scalars['IntType'] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)}) => {get: <R extends CourseRecordRequest>(request: R, defaultValue?: FieldsSelection<CourseRecord, R>[]) => Promise<FieldsSelection<CourseRecord, R>[]>})&({get: <R extends CourseRecordRequest>(request: R, defaultValue?: FieldsSelection<CourseRecord, R>[]) => Promise<FieldsSelection<CourseRecord, R>[]>}),
    
/** Returns a collection of assets */
allUploads: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),
/** Skip the first results */
skip?: (Scalars['IntType'] | null),
/** Limit the number of results */
first?: (Scalars['IntType'] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)}) => {get: <R extends FileFieldRequest>(request: R, defaultValue?: FieldsSelection<FileField, R>[]) => Promise<FieldsSelection<FileField, R>[]>})&({get: <R extends FileFieldRequest>(request: R, defaultValue?: FieldsSelection<FileField, R>[]) => Promise<FieldsSelection<FileField, R>[]>}),
    
/** Returns a specific record */
course: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)}) => CourseRecordPromiseChain & {get: <R extends CourseRecordRequest>(request: R, defaultValue?: (FieldsSelection<CourseRecord, R> | undefined)) => Promise<(FieldsSelection<CourseRecord, R> | undefined)>})&(CourseRecordPromiseChain & {get: <R extends CourseRecordRequest>(request: R, defaultValue?: (FieldsSelection<CourseRecord, R> | undefined)) => Promise<(FieldsSelection<CourseRecord, R> | undefined)>}),
    
/** Returns a specific asset */
upload: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)}) => FileFieldPromiseChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Promise<(FieldsSelection<FileField, R> | undefined)>})&(FileFieldPromiseChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Promise<(FieldsSelection<FileField, R> | undefined)>})
}


/** The query root for this schema */
export interface QueryObservableChain{
    
/** Returns meta information regarding a record collection */
_allCoursesMeta: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),filter?: (CourseModelFilter | null)}) => CollectionMetadataObservableChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Observable<FieldsSelection<CollectionMetadata, R>>})&(CollectionMetadataObservableChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Observable<FieldsSelection<CollectionMetadata, R>>}),
    
/** Returns meta information regarding an assets collection */
_allUploadsMeta: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),filter?: (UploadFilter | null)}) => CollectionMetadataObservableChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Observable<FieldsSelection<CollectionMetadata, R>>})&(CollectionMetadataObservableChain & {get: <R extends CollectionMetadataRequest>(request: R, defaultValue?: FieldsSelection<CollectionMetadata, R>) => Observable<FieldsSelection<CollectionMetadata, R>>}),
    
/** Returns the single instance record */
_site: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => SiteObservableChain & {get: <R extends SiteRequest>(request: R, defaultValue?: FieldsSelection<Site, R>) => Observable<FieldsSelection<Site, R>>})&(SiteObservableChain & {get: <R extends SiteRequest>(request: R, defaultValue?: FieldsSelection<Site, R>) => Observable<FieldsSelection<Site, R>>}),
    
/** Returns a collection of records */
allCourses: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),
/** Skip the first results */
skip?: (Scalars['IntType'] | null),
/** Limit the number of results */
first?: (Scalars['IntType'] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)}) => {get: <R extends CourseRecordRequest>(request: R, defaultValue?: FieldsSelection<CourseRecord, R>[]) => Observable<FieldsSelection<CourseRecord, R>[]>})&({get: <R extends CourseRecordRequest>(request: R, defaultValue?: FieldsSelection<CourseRecord, R>[]) => Observable<FieldsSelection<CourseRecord, R>[]>}),
    
/** Returns a collection of assets */
allUploads: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),
/** Skip the first results */
skip?: (Scalars['IntType'] | null),
/** Limit the number of results */
first?: (Scalars['IntType'] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)}) => {get: <R extends FileFieldRequest>(request: R, defaultValue?: FieldsSelection<FileField, R>[]) => Observable<FieldsSelection<FileField, R>[]>})&({get: <R extends FileFieldRequest>(request: R, defaultValue?: FieldsSelection<FileField, R>[]) => Observable<FieldsSelection<FileField, R>[]>}),
    
/** Returns a specific record */
course: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),filter?: (CourseModelFilter | null),orderBy?: ((CourseModelOrderBy | null)[] | null)}) => CourseRecordObservableChain & {get: <R extends CourseRecordRequest>(request: R, defaultValue?: (FieldsSelection<CourseRecord, R> | undefined)) => Observable<(FieldsSelection<CourseRecord, R> | undefined)>})&(CourseRecordObservableChain & {get: <R extends CourseRecordRequest>(request: R, defaultValue?: (FieldsSelection<CourseRecord, R> | undefined)) => Observable<(FieldsSelection<CourseRecord, R> | undefined)>}),
    
/** Returns a specific asset */
upload: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null),filter?: (UploadFilter | null),orderBy?: ((UploadOrderBy | null)[] | null)}) => FileFieldObservableChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Observable<(FieldsSelection<FileField, R> | undefined)>})&(FileFieldObservableChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Observable<(FieldsSelection<FileField, R> | undefined)>})
}

export interface RecordInterfacePromiseChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Promise<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Promise<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Promise<Scalars['ItemId']>})
}

export interface RecordInterfaceObservableChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Observable<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Observable<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Observable<Scalars['ItemId']>})
}

export interface ResponsiveImagePromiseChain{
    alt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    aspectRatio: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Promise<Scalars['FloatType']>}),
    base64: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    bgColor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    height: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>}),
    sizes: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    src: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    srcSet: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    webpSrcSet: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    width: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Promise<Scalars['IntType']>})
}

export interface ResponsiveImageObservableChain{
    alt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    aspectRatio: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Observable<Scalars['FloatType']>}),
    base64: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    bgColor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    height: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>}),
    sizes: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    src: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    srcSet: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    webpSrcSet: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    width: ({get: (request?: boolean|number, defaultValue?: Scalars['IntType']) => Observable<Scalars['IntType']>})
}


/** Block of type SEO Block (seo_block) */
export interface SeoBlockRecordPromiseChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Promise<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Promise<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Promise<Scalars['ItemId']>}),
    seoBlock: (SeoFieldPromiseChain & {get: <R extends SeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<SeoField, R> | undefined)) => Promise<(FieldsSelection<SeoField, R> | undefined)>})
}


/** Block of type SEO Block (seo_block) */
export interface SeoBlockRecordObservableChain{
    _createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    
/** Editing URL */
_editingUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    _firstPublishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _isValid: ({get: (request?: boolean|number, defaultValue?: Scalars['BooleanType']) => Observable<Scalars['BooleanType']>}),
    _modelApiKey: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    _publicationScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _publishedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    
/** Generates SEO and Social card meta tags to be used in your frontend */
_seoMetaTags: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>}),
    _status: ({get: (request?: boolean|number, defaultValue?: ItemStatus) => Observable<ItemStatus>}),
    _unpublishingScheduledAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    _updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ItemId']) => Observable<Scalars['ItemId']>}),
    seoBlock: (SeoFieldObservableChain & {get: <R extends SeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<SeoField, R> | undefined)) => Observable<(FieldsSelection<SeoField, R> | undefined)>})
}

export interface SeoFieldPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    image: (FileFieldPromiseChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Promise<(FieldsSelection<FileField, R> | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    twitterCard: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface SeoFieldObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    image: (FileFieldObservableChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Observable<(FieldsSelection<FileField, R> | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    twitterCard: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface SitePromiseChain{
    favicon: (FileFieldPromiseChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Promise<(FieldsSelection<FileField, R> | undefined)>}),
    faviconMetaTags: ((args?: {
/** The variants to build */
variants?: ((FaviconType | null)[] | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Promise<FieldsSelection<Tag, R>[]>}),
    globalSeo: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => GlobalSeoFieldPromiseChain & {get: <R extends GlobalSeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<GlobalSeoField, R> | undefined)) => Promise<(FieldsSelection<GlobalSeoField, R> | undefined)>})&(GlobalSeoFieldPromiseChain & {get: <R extends GlobalSeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<GlobalSeoField, R> | undefined)) => Promise<(FieldsSelection<GlobalSeoField, R> | undefined)>}),
    locales: ({get: (request?: boolean|number, defaultValue?: SiteLocale[]) => Promise<SiteLocale[]>})
}

export interface SiteObservableChain{
    favicon: (FileFieldObservableChain & {get: <R extends FileFieldRequest>(request: R, defaultValue?: (FieldsSelection<FileField, R> | undefined)) => Observable<(FieldsSelection<FileField, R> | undefined)>}),
    faviconMetaTags: ((args?: {
/** The variants to build */
variants?: ((FaviconType | null)[] | null)}) => {get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>})&({get: <R extends TagRequest>(request: R, defaultValue?: FieldsSelection<Tag, R>[]) => Observable<FieldsSelection<Tag, R>[]>}),
    globalSeo: ((args?: {
/** The locale to use to fetch the field's content */
locale?: (SiteLocale | null),
/** If you want to fallback to a default translation when a translation has not been found */
fallbackLocales?: (SiteLocale[] | null)}) => GlobalSeoFieldObservableChain & {get: <R extends GlobalSeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<GlobalSeoField, R> | undefined)) => Observable<(FieldsSelection<GlobalSeoField, R> | undefined)>})&(GlobalSeoFieldObservableChain & {get: <R extends GlobalSeoFieldRequest>(request: R, defaultValue?: (FieldsSelection<GlobalSeoField, R> | undefined)) => Observable<(FieldsSelection<GlobalSeoField, R> | undefined)>}),
    locales: ({get: (request?: boolean|number, defaultValue?: SiteLocale[]) => Observable<SiteLocale[]>})
}

export interface TagPromiseChain{
    attributes: ({get: (request?: boolean|number, defaultValue?: (Scalars['MetaTagAttributes'] | undefined)) => Promise<(Scalars['MetaTagAttributes'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    tag: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface TagObservableChain{
    attributes: ({get: (request?: boolean|number, defaultValue?: (Scalars['MetaTagAttributes'] | undefined)) => Observable<(Scalars['MetaTagAttributes'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    tag: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface UploadVideoFieldPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    framerate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    mp4Url: ((args?: {
/** Pick highest resolution available up to the specified argument */
res?: (VideoMp4Res | null),
/** Pick the exact resolution quality specified in the argument */
exactRes?: (VideoMp4Res | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    muxAssetId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    muxPlaybackId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    streamingUrl: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    thumbnailUrl: ((args?: {
/** The file extension of the requested image format. Either png, jpg or gif */
format?: (MuxThumbnailFormatType | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface UploadVideoFieldObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    framerate: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    mp4Url: ((args?: {
/** Pick highest resolution available up to the specified argument */
res?: (VideoMp4Res | null),
/** Pick the exact resolution quality specified in the argument */
exactRes?: (VideoMp4Res | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    muxAssetId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    muxPlaybackId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    streamingUrl: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    thumbnailUrl: ((args?: {
/** The file extension of the requested image format. Either png, jpg or gif */
format?: (MuxThumbnailFormatType | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})&({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface focalPointPromiseChain{
    x: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Promise<Scalars['FloatType']>}),
    y: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Promise<Scalars['FloatType']>})
}

export interface focalPointObservableChain{
    x: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Observable<Scalars['FloatType']>}),
    y: ({get: (request?: boolean|number, defaultValue?: Scalars['FloatType']) => Observable<Scalars['FloatType']>})
}