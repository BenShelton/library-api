/**
 * Constructor params for {@link MediaCatalog} class.
 */
export interface MediaCatalogCtor {
  /**
   * The path to the downloaded Media Catalog.
   */
  path: string
  /**
   * The Meps Language Id of this publication.
   */
  languageId: number
}

interface CatalogSchemaVersionRow {
  type: 'catalogSchemaVersion'
  /**
   * The Media Catalog version.
   */
  o: number
}

interface ImageSizes {
  /**
   * The complete URL to this image on the publication servers.
   * Extra small size.
   */
  xs: string
  /**
   * The complete URL to this image on the publication servers.
   * Small size.
   */
  sm: string
  /**
   * The complete URL to this image on the publication servers.
   * Medium size.
   */
  md: string
  /**
   * The complete URL to this image on the publication servers.
   * Large size.
   */
  lg: string
  /**
   * The complete URL to this image on the publication servers.
   * Extra large size.
   *
   * Isn't always available. If not use `lg` instead.
   */
  xl?: string
}

interface LanguageRow {
  type: 'language'
  /**
   * Details about the language being used in this Media Catalog.
   */
  o: {
    /**
     * Corresponds to `Symbol` of {@link LanguageDTO}.
     */
    code: string
    locale: string
    vernacular: string
    name: string
    isLangPair: boolean
    isSignLanguage: boolean
    isRTL: boolean
  }
}

interface CategoryRowObjOnDemand {
  /**
   * Signifies this "page" of categories is a list of more categories.
   *
   * The nested categories are under `subcategories`.
   */
  type: 'container'
  key: string
  name: string
  /**
   * Nested "pages" of categories.
   */
  subcategories: CategoryRowObj[]
}

interface CategoryRowObjContainer {
  /**
   * Signifies this page is a list of media.
   *
   * The media available is under `media`.
   */
  type: 'ondemand'
  images: {
    pnr: {
      xs: string
      sm: string
      md: string
      lg: string
    }
  }
  /**
   * A list of `naturalKey` values that can be used to link to a {@link MediaItemRow}.
   */
  media: string[]
}

export type CategoryRowObj = CategoryRowObjOnDemand | CategoryRowObjContainer

interface CategoryRow {
  type: 'category'
  o: CategoryRowObj
}

interface MediaItemRow {
  type: 'media-item'
  o: {
    /**
     * The same as `naturalKey` but without the language.
     *
     * Possibly used to find the same media in a different language's Media Catalog.
     */
    languageAgnosticNaturalKey: string
    /**
     * An Id of sorts, used within category rows as a reference.
     */
    naturalKey: string
    keyParts: {
      languageCode: string
      /**
       * Refers to `track` in {@link VideoDTO}.
       */
      track: number
      formatCode: 'VIDEO' | 'AUDIO'
    } & ({
      /**
       * Refers to `doc` in {@link VideoDTO} when `type` is `'doc'`.
       */
      docID: number
    } | {
      /**
      * Refers to `doc` in {@link VideoDTO} when `type` is `'pub'`.
      */
      pubSymbol: string
      /**
       * Almost refers to `issue` in {@link VideoDTO}, however it is only the leading part.
       *
       * @example
       * video.issue = 20210500
       * detail.issueDate = '202105'
       */
      issueDate?: string
    })
    /**
     * Refers to the `key` of a {@link CategoryRowObj}.
     */
    primaryCategory: string
    /**
     * The displayed title.
     */
    title: string
    /**
     * ISO Date string.
     */
    firstPublished: string
    /**
     * Duration in seconds. Also includes millisecond precision.
     */
    duration: number
    checksums: string[]
    images: {
      /**
       * Square images. You probably want `lsr` instead.
       */
      sqr?: ImageSizes
      /**
       * Widescreen (16:9) images.
       */
      lsr?: ImageSizes
    }
  }
}

interface SignatureRow {
  type: 'signature'
  /**
   * A hash of some sort.
   */
  o: string
}

/**
 * A row of the Media Catalog NDJSON file.
 *
 * Rows can have different structures and are identified using `type`.
 */
export type MediaCatalogRow =
  | CatalogSchemaVersionRow
  | LanguageRow
  | CategoryRow
  | MediaItemRow
  | SignatureRow
