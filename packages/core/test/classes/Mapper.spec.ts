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
            Caption: 'caption',
            FilePath: 'path',
            ContextTitle: 'title'
          })
          expect(result).toEqual<ImageDTO>({
            filename: 'name',
            caption: 'caption',
            filePath: 'path'
          })
        })
      })

      describe('MapImages', () => {
        test('should return multiple mapped images', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockImage: ImageDTO = { filename: 'name', caption: '', filePath: '' }
          const spy = jest.spyOn(mapper, 'MapImage').mockReturnValue(mockImage)
          const mockImageRows: ImageRow[] = [
            { Caption: 'caption1', FilePath: 'path1', ContextTitle: 'title1' },
            { Caption: 'caption2', FilePath: 'path2', ContextTitle: 'title2' },
            { Caption: 'caption3', FilePath: 'path3', ContextTitle: 'title3' }
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
            IssueTagNumber: 1,
            Track: 2,
            KeySymbol: 'key',
            MepsDocumentId: null
          })
          expect(result).toEqual<VideoDTO>({
            filename: 'name',
            type: 'pub',
            id: 'key',
            track: 2,
            issue: 1
          })
        })

        test('should return a mapped video (doc)', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const result = mapper.MapVideo({
            IssueTagNumber: 1,
            Track: 2,
            KeySymbol: null,
            MepsDocumentId: 3
          })
          expect(result).toEqual<VideoDTO>({
            filename: 'name',
            type: 'doc',
            id: 3,
            track: 2,
            issue: 1
          })
        })
      })

      describe('MapVideos', () => {
        test('should return multiple mapped videos', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockVideo: VideoDTO = { filename: 'name', type: 'pub', id: '', track: 0, issue: 0 }
          const spy = jest.spyOn(mapper, 'MapVideo').mockReturnValue(mockVideo)
          const mockVideoRows: VideoRow[] = [
            { KeySymbol: 'key1', IssueTagNumber: 1, Track: 11, MepsDocumentId: null },
            { KeySymbol: 'key2', IssueTagNumber: 2, Track: 12, MepsDocumentId: null },
            { KeySymbol: 'key3', IssueTagNumber: 3, Track: 13, MepsDocumentId: null }
          ]
          const result = mapper.MapVideos(mockVideoRows)
          expect(spy.mock.calls).toEqual([[mockVideoRows[0]], [mockVideoRows[1]], [mockVideoRows[2]]])
          expect(result).toEqual<VideoDTO[]>([mockVideo, mockVideo, mockVideo])
        })
      })
    })
  })
})
