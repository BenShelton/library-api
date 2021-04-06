import { PublicationMapper } from '@/Mapper'

import { ImageRow, VideoRow } from 'types/database'
import { ImageDTO, VideoDTO } from 'types/dto'

describe('Mapper', () => {
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
            caption: 'caption',
            filePath: 'path',
            url: '/download/image?publication=name&file=path'
          })
        })
      })

      describe('MapImages', () => {
        test('should return multiple mapped images', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockImage: ImageDTO = { caption: '', filePath: '', url: '' }
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
        test('should return a mapped image', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const result = mapper.MapVideo({
            IssueTagNumber: 1,
            Track: 2,
            KeySymbol: 'key'
          })
          expect(result).toEqual<VideoDTO>({
            publication: 'key',
            track: 2,
            issue: 1,
            url: '/download/video?publication=key&track=2&issue=1'
          })
        })
      })

      describe('MapVideos', () => {
        test('should return multiple mapped images', () => {
          const mapper = new PublicationMapper({ filename: 'name' })
          const mockVideo: VideoDTO = { publication: '', track: 0, issue: 0, url: '' }
          const spy = jest.spyOn(mapper, 'MapVideo').mockReturnValue(mockVideo)
          const mockVideoRows: VideoRow[] = [
            { KeySymbol: 'key1', IssueTagNumber: 1, Track: 11 },
            { KeySymbol: 'key2', IssueTagNumber: 2, Track: 12 },
            { KeySymbol: 'key3', IssueTagNumber: 3, Track: 13 }
          ]
          const result = mapper.MapVideos(mockVideoRows)
          expect(spy.mock.calls).toEqual([[mockVideoRows[0]], [mockVideoRows[1]], [mockVideoRows[2]]])
          expect(result).toEqual<VideoDTO[]>([mockVideo, mockVideo, mockVideo])
        })
      })
    })
  })
})
