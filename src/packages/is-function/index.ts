import { getType } from '../get-type'

/**
 * 判断一个值是否为函数
 * @param param
 * @returns 
 */
export const isFunction = (param: unknown): boolean => {
  return ([
    '[object Function]',
    '[object GeneratorFunction]',
    '[object AsyncFunction]',
    '[object Promise]'
  ] as const).includes(getType(param))
}
