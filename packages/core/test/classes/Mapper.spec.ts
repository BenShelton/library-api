import { PublicationMapper } from '@/classes/Mapper'

import { ImageRow, VideoRow } from 'types/database'
import { ImageDTO, VideoDTO } from 'types/dto'

describe('Classes: Mapper', () => {
  describe('PublicationMapper', () => {
    describe('Methods', () => {
      describe('MapImage', () => {
        test('should return a mapped image', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const result = mapper.MapImage({
            MultimediaId: 42,
            Caption: 'caption',
            FilePath: 'path',
            ContextTitle: 'title'
          })
          expect(result).toEqual<ImageDTO>({
            id: 'name#42',
            filename: 'name',
            caption: 'caption',
            filePath: 'path'
          })
        })
      })

      describe('MapImages', () => {
        test('should return multiple mapped images', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockImage: ImageDTO = { id: 'name#42', filename: 'name', caption: '', filePath: '' }
          const spy = jest.spyOn(mapper, 'MapImage').mockReturnValue(mockImage)
          const mockImageRows: ImageRow[] = [
            { MultimediaId: 1, Caption: 'caption1', FilePath: 'path1', ContextTitle: 'title1' },
            { MultimediaId: 2, Caption: 'caption2', FilePath: 'path2', ContextTitle: 'title2' },
            { MultimediaId: 3, Caption: 'caption3', FilePath: 'path3', ContextTitle: 'title3' }
          ]
          const result = mapper.MapImages(mockImageRows)
          expect(spy.mock.calls).toEqual([[mockImageRows[0]], [mockImageRows[1]], [mockImageRows[2]]])
          expect(result).toEqual<ImageDTO[]>([mockImage, mockImage, mockImage])
        })
      })

      describe('MapVideo', () => {
        test('should return a mapped video (pub)', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const result = mapper.MapVideo({
            MultimediaId: 42,
            IssueTagNumber: 1,
            Track: 2,
            KeySymbol: 'key',
            MepsDocumentId: null
          })
          expect(result).toEqual<VideoDTO>({
            id: 'name#42',
            filename: 'name',
            type: 'pub',
            doc: 'key',
            track: 2,
            issue: 1
          })
        })

        test('should return a mapped video (doc)', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const result = mapper.MapVideo({
            MultimediaId: 42,
            IssueTagNumber: 1,
            Track: 2,
            KeySymbol: null,
            MepsDocumentId: 3
          })
          expect(result).toEqual<VideoDTO>({
            id: 'name#42',
            filename: 'name',
            type: 'doc',
            doc: 3,
            track: 2,
            issue: 1
          })
        })
      })

      describe('MapVideos', () => {
        test('should return multiple mapped videos', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockVideo: VideoDTO = { id: 'name#42', filename: 'name', type: 'pub', doc: '', track: 0, issue: 0 }
          const spy = jest.spyOn(mapper, 'MapVideo').mockReturnValue(mockVideo)
          const mockVideoRows: VideoRow[] = [
            { MultimediaId: 1, KeySymbol: 'key1', IssueTagNumber: 1, Track: 11, MepsDocumentId: null },
            { MultimediaId: 2, KeySymbol: 'key2', IssueTagNumber: 2, Track: 12, MepsDocumentId: null },
            { MultimediaId: 3, KeySymbol: 'key3', IssueTagNumber: 3, Track: 13, MepsDocumentId: null }
          ]
          const result = mapper.MapVideos(mockVideoRows)
          expect(spy.mock.calls).toEqual([[mockVideoRows[0]], [mockVideoRows[1]], [mockVideoRows[2]]])
          expect(result).toEqual<VideoDTO[]>([mockVideo, mockVideo, mockVideo])
        })
      })
    })
  })
})
