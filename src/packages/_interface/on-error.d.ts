export interface OnTypeErrorInterface {
  (name: string, msg: string): TypeError
}

export interface OnErrorInterface {
  (name: string, msg: string): Error
}
