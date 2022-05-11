export interface returnFunctionInterface {
  (): void
}

export interface throttleInterface {
  (handler: Function, wait: number): returnFunctionInterface
}
