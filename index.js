const context = global

context.M = global.Math
context.M.f = global.Math.floor
context.M.c = global.Math.ceil
context.M.r = global.Math.round

const Str = context.Str = global.String
const strProto = Str.prototype
strProto.splt = strProto.split

const Arr = context.Arr = global.Array
const arrProto = Arr.prototype
arrProto.splc = arrProto.splice
arrProto.jn = arrProto.join
