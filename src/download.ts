import fs from 'fs'
import path from 'path'
import fetch, { Response } from 'node-fetch'

import { DOWNLOAD_DIR } from './constants'

function checkStatus (res: Response): Response {
  if (res.ok) {
    return res
  } else {
    throw new Error(res.statusText)
  }
}

function pipeToFile (stream: NodeJS.ReadableStream, fileName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const dest = fs.createWriteStream(path.join(DOWNLOAD_DIR, fileName))
    const pipe = stream.pipe(dest)
    pipe.on('error', reject)
    pipe.on('finish', resolve)
  })
}

export async function downloadFile (url: string, fileName: string): Promise<void> {
  const res = await fetch(url)
  checkStatus(res)
  await pipeToFile(res.body, fileName)
}
