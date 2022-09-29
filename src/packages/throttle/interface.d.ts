export interface ThrottleInterface {
  (handler: Function, wait: number): Function
}
