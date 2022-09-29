import { version } from './package.json'
import { isArray } from './is-array'
import { getType } from './get-type'
import { isNumber } from './is-number'
import { isString } from './is-string'
import { isNull } from './is-null'
import { isUndefined } from './is-undefined'
import { isObject } from './is-object'
import { judgeTrue } from './judge-true'
import { keepDecimal } from './keep-decimal'
import { arrayDeduct } from './array-deduct'
import { arrayMereDeduct } from './array-mere-deduct'
import { isArrayHave } from './is-array-have'
import { currentDate } from './current-date'
import { pastTime } from './past-time'
import { timestampCovers } from './timestamp-covers'
import { debounce } from './debounce'
import { throttle } from './throttle'
import { shallowClone } from './shallow-clone'
import { deepClone } from './deep-clone'
import { randomColor } from './random-color'
import { randomNine } from './random-nine'
import { randomNumber } from './random-number'
import { randomString } from './random-string'
import { removeStorage } from './remove-storage'
import { setStorage } from './set-storage'
import { getStorage } from './get-storage'
import { isOnLine } from './is-onLine'

const TsMango = {
  version,
  isArray,
  getType,
  isNumber,
  isString,
  isNull,
  isUndefined,
  isObject,
  judgeTrue,
  keepDecimal,
  arrayDeduct,
  arrayMereDeduct,
  isArrayHave,
  currentDate,
  pastTime,
  timestampCovers,
  debounce,
  throttle,
  shallowClone,
  deepClone,
  randomColor,
  randomNine,
  randomNumber,
  randomString,
  removeStorage,
  setStorage,
  getStorage,
  isOnLine
} as const

export {
  isArray,
  getType,
  isNumber,
  isString,
  isNull,
  isUndefined,
  isObject,
  judgeTrue,
  keepDecimal,
  arrayDeduct,
  arrayMereDeduct,
  isArrayHave,
  currentDate,
  pastTime,
  timestampCovers,
  debounce,
  throttle,
  shallowClone,
  deepClone,
  randomColor,
  randomNine,
  randomNumber,
  randomString,
  removeStorage,
  setStorage,
  getStorage,
  isOnLine
}

export default TsMango
