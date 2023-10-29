
var CollectionMetadata_possibleTypes = ['CollectionMetadata']
module.exports.isCollectionMetadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollectionMetadata"')
  return CollectionMetadata_possibleTypes.includes(obj.__typename)
}



var ColorField_possibleTypes = ['ColorField']
module.exports.isColorField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isColorField"')
  return ColorField_possibleTypes.includes(obj.__typename)
}



var CourseRecord_possibleTypes = ['CourseRecord']
module.exports.isCourseRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCourseRecord"')
  return CourseRecord_possibleTypes.includes(obj.__typename)
}



var FileField_possibleTypes = ['FileField']
module.exports.isFileField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFileField"')
  return FileField_possibleTypes.includes(obj.__typename)
}



var FileFieldInterface_possibleTypes = ['FileField']
module.exports.isFileFieldInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFileFieldInterface"')
  return FileFieldInterface_possibleTypes.includes(obj.__typename)
}



var GlobalSeoField_possibleTypes = ['GlobalSeoField']
module.exports.isGlobalSeoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGlobalSeoField"')
  return GlobalSeoField_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RecordInterface_possibleTypes = ['CourseRecord','SeoBlockRecord']
module.exports.isRecordInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRecordInterface"')
  return RecordInterface_possibleTypes.includes(obj.__typename)
}



var ResponsiveImage_possibleTypes = ['ResponsiveImage']
module.exports.isResponsiveImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResponsiveImage"')
  return ResponsiveImage_possibleTypes.includes(obj.__typename)
}



var SeoBlockRecord_possibleTypes = ['SeoBlockRecord']
module.exports.isSeoBlockRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSeoBlockRecord"')
  return SeoBlockRecord_possibleTypes.includes(obj.__typename)
}



var SeoField_possibleTypes = ['SeoField']
module.exports.isSeoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSeoField"')
  return SeoField_possibleTypes.includes(obj.__typename)
}



var Site_possibleTypes = ['Site']
module.exports.isSite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSite"')
  return Site_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
module.exports.isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var UploadVideoField_possibleTypes = ['UploadVideoField']
module.exports.isUploadVideoField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUploadVideoField"')
  return UploadVideoField_possibleTypes.includes(obj.__typename)
}



var focalPoint_possibleTypes = ['focalPoint']
module.exports.isfocalPoint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isfocalPoint"')
  return focalPoint_possibleTypes.includes(obj.__typename)
}
