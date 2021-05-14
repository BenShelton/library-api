/**
 * @type { import("typedoc").TypeDocOptions }
 */
module.exports = {
  name: 'Library Core',
  includeVersion: true,
  entryPoints: [
    'src/index.ts',
    'types'
  ],
  out: '../../docs/core',
  plugin: 'typedoc-plugin-markdown',
  excludePrivate: true,
  excludeInternal: true,
  readme: 'none',
  gitRevision: 'master'
}
