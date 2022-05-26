import { debounce } from '../ts-mango/debounce'
import { setStorage } from '../ts-mango/setStorage'
import { getStorage } from '../ts-mango/getStorage'
import { removeStorage } from '../ts-mango/removeStorage'
import { uniqueArray } from '../ts-mango/uniqueArray'
import { witTenNum } from '../ts-mango/witTenNum'
import { randomNum } from '../ts-mango/randomNum'
import { mergeArrayRepeat } from '../ts-mango/mergeArrayRepeat'
import { pastTime } from '../ts-mango/pastTime'
import { nowTime } from '../ts-mango/nowTime'
import { shallowClone } from '../ts-mango/shallowClone'
import { randomString } from '../ts-mango/randomString'
import { keepDecimal } from '../ts-mango/keepDecimal'
import { throttle } from '../ts-mango/throttle'
import { isNull } from '../ts-mango/isNull'
import { isUndefined } from '../ts-mango/isUndefined'
import { getType } from '../ts-mango/getType'
import { isNumber } from '../ts-mango/isNumber'
import { deepClone } from '../ts-mango/deepClone'
import { isOnLine } from '../ts-mango/isOnLine'
import { dateFormat } from '../ts-mango/dateFormat'
import { isString } from '../ts-mango/isString'
import { isObject } from '../ts-mango/isObject'
import { isTf } from '../ts-mango/isTf'
import { isArrHave } from '../ts-mango/isArrHave'
import { randomColor } from '../ts-mango/randomColor'

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
  isObject,
  isTf,
  isArrHave,
  randomColor
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
  isObject,
  isTf,
  isArrHave,
  randomColor
}

export default TsMango
