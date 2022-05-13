import { debounce } from './debounce'
import { setStorage } from './setStorage'
import { getStorage } from './getStorage'
import { removeStorage } from './removeStorage'
import { uniqueArray } from './uniqueArray'
import { witTenNum } from './witTenNum'
import { randomNum } from './randomNum'
import { mergeArrayRepeat } from './mergeArrayRepeat'
import { pastTime } from './pastTime'
import { nowTime } from './nowTime'
import { shallowClone } from './shallowClone'
import { randomString } from './randomString'
import { keepDecimal } from './keepDecimal'
import { throttle } from './throttle'
import { isNull } from './isNull'
import { isUndefined } from './isUndefined'
import { getType } from './getType'
import { isNumber } from './isNumber'
import { deepClone } from './deepClone'
import { isOnLine } from './isOnLine'
import { dateFormat } from './dateFormat'
import { isString } from './isString'
import { isObject } from './isObject'

const TsMango = {
  debounce,
  setStorage,
  getStorage,
  removeStorage,
  uniqueArray,
  witTenNum,
  randomNum,
  mergeArrayRepeat,
  pastTime,
  nowTime,
  shallowClone,
  randomString,
  keepDecimal,
  throttle,
  isNull,
  isUndefined,
  getType,
  isNumber,
  deepClone,
  isOnLine,
  dateFormat,
  isString,
  isObject
} as const

export {
  debounce,
  setStorage,
  getStorage,
  removeStorage,
  uniqueArray,
  witTenNum,
  randomNum,
  mergeArrayRepeat,
  pastTime,
  nowTime,
  shallowClone,
  randomString,
  keepDecimal,
  throttle,
  isNull,
  isUndefined,
  getType,
  isNumber,
  deepClone,
  isOnLine,
  dateFormat,
  isString,
  isObject
}

export default TsMango
