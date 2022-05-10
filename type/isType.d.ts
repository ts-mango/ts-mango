export type Type =
  | 'String'
  | 'Number'
  | 'Object'
  | 'Function'
  | 'Boolean'
  | 'Set'
  | 'Map'
  | 'WeakMap'
  | 'WeakSet'
  | 'Date'
  | 'RegExp'
  | 'Array'
  | 'Null'
  | 'Undefined'

export interface isTypeInterface {
  (target: unknown, type: Type): boolean
}

export interface toStringInterface {
  (): void
}