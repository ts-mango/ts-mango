import { version } from './package.json'
import { debounce } from './debounce'
import { setStorage } from './setStorage'
import { getStorage } from './getStorage'
import { removeStorage } from './removeStorage'
import { uniqueArray } from './uniqueArray'
import { witTenNum } from './witTenNum'
import { randomNum } from './randomNum'
import { mergeArrayRepeat } from './mergeArrayRepeat'
import { pastTime } from './pastTime'
import { toDates } from './toDates'
import { shallowClone } from './shallowClone'
import { randomString } from './randomString'
import { keepDecimal } from './keepDecimal'
import { throttle } from './throttle'

const TsMango: object = {
  version,
  debounce,
  setStorage,
  getStorage,
  removeStorage,
  uniqueArray,
  witTenNum,
  randomNum,
  mergeArrayRepeat,
  pastTime,
  toDates,
  shallowClone,
  randomString,
  keepDecimalPoint,
  throttle
}

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
  toDates,
  shallowClone,
  randomString,
  keepDecimalPoint,
  throttle
}

export default TsMango
