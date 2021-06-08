import { StoreDefinition } from './store'

export interface ElectronApi {
  invoke<T extends { Args?: unknown, Response: unknown }> (channel: string, args?: T['Args']): Promise<T['Response']>
  send<T extends { Args?: unknown }> (channel: string, args?: T['Args']): void
  on<T extends { Args?: unknown }> (channel: string, cb: (args: T['Args']) => void): void
}

export interface StoreApi {
  get<Key extends keyof StoreDefinition> (key: Key, defaultValue?: StoreDefinition[Key]): StoreDefinition[Key]
  get<Key extends string, Value extends unknown> (key: Key, defaultValue?: Value): Value
  set<Key extends keyof StoreDefinition> (key: Key, value: StoreDefinition[Key]): void
  watch<Key extends keyof StoreDefinition> (key: Key, cb: (newValue?: StoreDefinition[Key]) => void): () => void
}
