import electron, { shell } from 'electron'
import log from 'electron-log'

export function submitIssue ({ versions, message }: { versions?: { app: string, os: string }, message: string}): void {
  const { app = 'unknown', os = 'unknown' } = versions || {}
  const body = '\n' +
    '**Packages & versions**\n' +
    `Library Media ${app}\n` +
    `OS: ${os}\n\n` +
    '**Describe the bug**\n' +
    `${message}\n`
  const url = new URL('https://github.com/BenShelton/library-api/issues/new')
  url.searchParams.append('title', '[Bug] Error report for Library Media')
  url.searchParams.append('body', body)
  shell.openExternal(url.toString())
}

export function initLogger (): void {
  log.catchErrors({
    showDialog: false,
    async onError (error, versions) {
      const result = await electron.dialog.showMessageBox({
        title: 'An error occurred',
        message: error.message,
        detail: error.stack,
        type: 'error',
        buttons: ['Ignore', 'Report', 'Exit']
      })
      if (result.response === 1) {
        submitIssue({
          versions,
          message: 'Error:\n' +
          '```\n' +
          `${error.stack}\n` +
          '```'
        })
        return
      }

      if (result.response === 2) {
        electron.app.quit()
      }
    }
  })
}
