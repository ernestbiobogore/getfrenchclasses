
var CategoryRecord_possibleTypes = ['CategoryRecord']
export var isCategoryRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryRecord"')
  return CategoryRecord_possibleTypes.includes(obj.__typename)
}



var CollectionMetadata_possibleTypes = ['CollectionMetadata']
export var isCollectionMetadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollectionMetadata"')
  return CollectionMetadata_possibleTypes.includes(obj.__typename)
}



var ColorField_possibleTypes = ['ColorField']
export var isColorField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isColorField"')
  return ColorField_possibleTypes.includes(obj.__typename)
}



var CourseRecord_possibleTypes = ['CourseRecord']
export var isCourseRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCourseRecord"')
  return CourseRecord_possibleTypes.includes(obj.__typename)
}



var FileField_possibleTypes = ['FileField']
export var isFileField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFileField"')
  return FileField_possibleTypes.includes(obj.__typename)
}



var FileFieldInterface_possibleTypes = ['FileField']
export var isFileFieldInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFileFieldInterface"')
  return FileFieldInterface_possibleTypes.includes(obj.__typename)
}



var GlobalSeoField_possibleTypes = ['GlobalSeoField']
export var isGlobalSeoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGlobalSeoField"')
  return GlobalSeoField_possibleTypes.includes(obj.__typename)
}



var ImageBlockRecord_possibleTypes = ['ImageBlockRecord']
export var isImageBlockRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImageBlockRecord"')
  return ImageBlockRecord_possibleTypes.includes(obj.__typename)
}



var PostModelModularContentField_possibleTypes = ['ImageBlockRecord','RichTextBlockRecord']
export var isPostModelModularContentField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostModelModularContentField"')
  return PostModelModularContentField_possibleTypes.includes(obj.__typename)
}



var PostRecord_possibleTypes = ['PostRecord']
export var isPostRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostRecord"')
  return PostRecord_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RecordInterface_possibleTypes = ['CategoryRecord','CourseRecord','ImageBlockRecord','PostRecord','RichTextBlockRecord','SeoBlockRecord']
export var isRecordInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRecordInterface"')
  return RecordInterface_possibleTypes.includes(obj.__typename)
}



var ResponsiveImage_possibleTypes = ['ResponsiveImage']
export var isResponsiveImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResponsiveImage"')
  return ResponsiveImage_possibleTypes.includes(obj.__typename)
}



var RichTextBlockModelRichTextBlocksField_possibleTypes = ['ImageBlockRecord','SeoBlockRecord']
export var isRichTextBlockModelRichTextBlocksField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRichTextBlockModelRichTextBlocksField"')
  return RichTextBlockModelRichTextBlocksField_possibleTypes.includes(obj.__typename)
}



var RichTextBlockModelRichTextField_possibleTypes = ['RichTextBlockModelRichTextField']
export var isRichTextBlockModelRichTextField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRichTextBlockModelRichTextField"')
  return RichTextBlockModelRichTextField_possibleTypes.includes(obj.__typename)
}



var RichTextBlockRecord_possibleTypes = ['RichTextBlockRecord']
export var isRichTextBlockRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRichTextBlockRecord"')
  return RichTextBlockRecord_possibleTypes.includes(obj.__typename)
}



var SeoBlockRecord_possibleTypes = ['SeoBlockRecord']
export var isSeoBlockRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSeoBlockRecord"')
  return SeoBlockRecord_possibleTypes.includes(obj.__typename)
}



var SeoField_possibleTypes = ['SeoField']
export var isSeoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSeoField"')
  return SeoField_possibleTypes.includes(obj.__typename)
}



var Site_possibleTypes = ['Site']
export var isSite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSite"')
  return Site_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
export var isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var UploadVideoField_possibleTypes = ['UploadVideoField']
export var isUploadVideoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUploadVideoField"')
  return UploadVideoField_possibleTypes.includes(obj.__typename)
}



var focalPoint_possibleTypes = ['focalPoint']
export var isfocalPoint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfocalPoint"')
  return focalPoint_possibleTypes.includes(obj.__typename)
}
