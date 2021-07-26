import { CatalogMapper, PublicationMapper } from '@/classes/Mapper'

import { ImageRow, VideoRow } from 'types/database'
import { ImageDTO, MediaDetailsDTO, VideoDTO } from 'types/dto'

describe('Classes: Mapper', () => {
  describe('PublicationMapper', () => {
    describe('Methods', () => {
      describe('MapImage', () => {
        test('should return a mapped image', () => {
          const mapper = new PublicationMapper({ filename: 'name', contentsPath: 'contents' })
          const result = mapper.MapImage({
            MultimediaId: 42,
            Caption: 'caption',
            FilePath: 'path',
            ContextTitle: 'title',
            CategoryType: 8
          })
          expect(result).toEqual<ImageDTO>({
            id: 'name#42',
            filename: 'name',
            caption: 'caption',
            filePath: 'path',
            contentsPath: 'contents',
            categoryType: 8,
            languageId: 0
          })
        })
      })

      describe('MapImages', () => {
        test('should return multiple mapped images', () => {
          const mapper = new PublicationMapper({ filename: 'name', contentsPath: 'contents' })
          const mockImage: ImageDTO = { id: 'name#42', filename: 'name', caption: '', filePath: '', contentsPath: '', categoryType: 8, languageId: 1 }
          const spy = jest.spyOn(mapper, 'MapImage').mockReturnValue(mockImage)
          const mockImageRows: ImageRow[] = [
            { MultimediaId: 1, Caption: 'caption1', FilePath: 'path1', ContextTitle: 'title1', CategoryType: 8 },
            { MultimediaId: 2, Caption: 'caption2', FilePath: 'path2', ContextTitle: 'title2', CategoryType: 8 },
            { MultimediaId: 3, Caption: 'caption3', FilePath: 'path3', ContextTitle: 'title3', CategoryType: 8 }
          ]
          const result = mapper.MapImages(mockImageRows)
          expect(spy.mock.calls).toEqual([[mockImageRows[0]], [mockImageRows[1]], [mockImageRows[2]]])
          expect(result).toEqual<ImageDTO[]>([mockImage, mockImage, mockImage])
        })
      })

      describe('MapVideo', () => {
        test('should return a mapped video (pub)', () => {
          const mapper = new PublicationMapper({ filename: 'name', contentsPath: 'contents', languageId: 1 })
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
            issue: 1,
            languageId: 1
          })
        })

        test('should return a mapped video (doc)', () => {
          const mapper = new PublicationMapper({ filename: 'name', contentsPath: 'contents' })
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
            issue: 1,
            languageId: 0
          })
        })
      })

      describe('MapVideos', () => {
        test('should return multiple mapped videos', () => {
          const mapper = new PublicationMapper({ filename: 'name', contentsPath: 'contents' })
          const mockVideo: VideoDTO = { id: 'name#42', filename: 'name', type: 'pub', doc: '', track: 0, issue: 0, languageId: 0 }
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

  describe('CatalogMapper', () => {
    describe('Methods', () => {
      describe('MapMediaDetails', () => {
        test('should return mapped media details for pub type', () => {
          const mapper = new CatalogMapper()
          const result = mapper.MapMediaDetails({
            Title: '16. Praise Jah for His Son, the Anointed',
            Id: 126346,
            NameFragment: 'images/2a/sjjm_univ_lsr_016_xl.jpg',
            Width: 1200,
            Height: 600
          })
          expect(result).toEqual<MediaDetailsDTO>({
            id: 'media#126346',
            filename: 'sjjm_univ_lsr_016_xl.jpg',
            caption: '16. Praise Jah for His Son, the Anointed',
            height: 600,
            width: 1200,
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/sjjm/univ/art/sjjm_univ_lsr_016_xl.jpg'
          })
        })

        test('should return mapped media details for doc type', () => {
          const mapper = new CatalogMapper()
          const result = mapper.MapMediaDetails({
            Title: "What's a Real Friend?",
            Id: 546,
            NameFragment: 'images/21/502013393_univ_lsr_xl.jpg',
            Width: 1200,
            Height: 600
          })
          expect(result).toEqual<MediaDetailsDTO>({
            id: 'media#546',
            filename: '502013393_univ_lsr_xl.jpg',
            caption: "What's a Real Friend?",
            height: 600,
            width: 1200,
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/502013393/univ/art/502013393_univ_lsr_xl.jpg'
          })
        })

        test('should return mapped media details for non-universal', () => {
          const mapper = new CatalogMapper()
          const result = mapper.MapMediaDetails({
            Title: '106. Cultivating the Quality of Love',
            Id: 186016,
            NameFragment: 'images/34/sjjm_E_lsr_106_xl.jpg',
            Width: 1200,
            Height: 600
          })
          expect(result).toEqual<MediaDetailsDTO>({
            id: 'media#186016',
            filename: 'sjjm_E_lsr_106_xl.jpg',
            caption: '106. Cultivating the Quality of Love',
            height: 600,
            width: 1200,
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/sjjm/E/art/sjjm_E_lsr_106_xl.jpg'
          })
        })

        test('should return mapped media details with an extra url fragment', () => {
          const mapper = new CatalogMapper()
          const result = mapper.MapMediaDetails({
            Title: "Initial Call: God's Purpose—Ge 1:28",
            Id: 991355,
            NameFragment: 'images/5f/mwbv_univ_202105_lsr_01_xl.jpg',
            Width: 1200,
            Height: 600
          })
          expect(result).toEqual<MediaDetailsDTO>({
            id: 'media#991355',
            filename: 'mwbv_univ_202105_lsr_01_xl.jpg',
            caption: "Initial Call: God's Purpose—Ge 1:28",
            height: 600,
            width: 1200,
            url: 'https://assetsnffrgf-a.akamaihd.net/assets/m/mwbv/univ/202105/art/mwbv_univ_202105_lsr_01_xl.jpg'
          })
        })
      })
    })
  })
})
