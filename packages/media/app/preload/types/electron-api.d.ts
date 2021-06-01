interface ElectronApi {
  invoke<T extends { Args?: unknown, Response: unknown }> (channel: string, args?: T['Args']): Promise<T['Response']>
  send<T extends { Args?: unknown }> (channel: string, args?: T['Args']): void
  on<T extends { Args?: unknown }> (channel: string, cb: (args: T['Args']) => void): void
}

declare interface Window {
  electron: Readonly<ElectronApi>
  log: import('electron-log').LogFunctions
}
