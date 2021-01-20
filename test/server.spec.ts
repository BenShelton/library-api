import * as server from 'src/server'

describe('Server', () => {
  test('should export a test variable', () => {
    expect(server.test).toBe('test')
  })
})
