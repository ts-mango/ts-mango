import { returnFunctionInterface } from './throttle'

export interface debounceInterface {
  (handle: Function, delay: number): returnFunctionInterface
}
