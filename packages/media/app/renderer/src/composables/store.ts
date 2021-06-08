import { onBeforeUnmount, reactive, toRaw, watch } from 'vue'

import { StoreDefinition } from 'shared/types/store'

export function useStore<Key extends keyof StoreDefinition> (key: Key) {
  const store = reactive(window.store.get<Key>(key))

  watch(store, (newValue) => {
    window.store.set(key, toRaw(newValue) as StoreDefinition[Key])
  })
  const unwatch = window.store.watch(key, (newValue) => {
    Object.assign(store, newValue)
  })
  onBeforeUnmount(() => {
    unwatch()
  })

  return {
    store
  }
}
