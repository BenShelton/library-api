[Library Core](../README.md) / src

# Module: src

## Table of contents

### Enumerations

- [PUBLICATION\_CLASSES](../enums/src.publication_classes.md)
- [PUBLICATION\_TYPES](../enums/src.publication_types.md)

### Classes

- [CatalogDatabase](../classes/src.catalogdatabase.md)
- [CatalogMapper](../classes/src.catalogmapper.md)
- [Database](../classes/src.database.md)
- [LanguageMapper](../classes/src.languagemapper.md)
- [MediaCatalogMapper](../classes/src.mediacatalogmapper.md)
- [Publication](../classes/src.publication.md)
- [PublicationMapper](../classes/src.publicationmapper.md)

### Variables

- [CATALOG\_URL](src.md#catalog_url)
- [MEDIA\_CATALOGS\_URL](src.md#media_catalogs_url)
- [MEDIA\_URL](src.md#media_url)
- [PUBLICATION\_URL](src.md#publication_url)
- [SONG\_PUBLICATION](src.md#song_publication)

### Functions

- [checkExists](src.md#checkexists)
- [createDir](src.md#createdir)
- [downloadCatalog](src.md#downloadcatalog)
- [downloadFile](src.md#downloadfile)
- [downloadMediaCatalog](src.md#downloadmediacatalog)
- [downloadPublication](src.md#downloadpublication)
- [downloadSongStream](src.md#downloadsongstream)
- [downloadVideoStream](src.md#downloadvideostream)
- [emptyDir](src.md#emptydir)
- [getLanguageById](src.md#getlanguagebyid)
- [getLanguages](src.md#getlanguages)
- [getMediaCatalog](src.md#getmediacatalog)
- [getSongStream](src.md#getsongstream)
- [getVideoStream](src.md#getvideostream)
- [isValidDate](src.md#isvaliddate)
- [readLines](src.md#readlines)
- [updateCatalog](src.md#updatecatalog)

## Variables

### CATALOG\_URL

• `Const` **CATALOG\_URL**: ``"https://download-a.akamaihd.net/meps/jwl/current/catalogs/v3/catalog.db.gz"``

The URL of the current catalog.

#### Defined in

[src/constants.ts:11](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L11)

___

### MEDIA\_CATALOGS\_URL

• `Const` **MEDIA\_CATALOGS\_URL**: ``"https://app.jw-cdn.org/catalogs/media"``

The URL of all the media catalogs.

These are NDJSON files that list images and other metadata used for media found within publications.

#### Defined in

[src/constants.ts:25](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L25)

___

### MEDIA\_URL

• `Const` **MEDIA\_URL**: ``"https://api.hag27.com/GETPUBMEDIALINKS"``

The URL used as for checking media options.

This returns a list of options of download qualities based on the passed in params.

#### Defined in

[src/constants.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L18)

___

### PUBLICATION\_URL

• `Const` **PUBLICATION\_URL**: ``"https://download-a.akamaihd.net"``

The URL used as a base for downloading publications.

This is the site hosting most of the files.

#### Defined in

[src/constants.ts:6](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L6)

___

### SONG\_PUBLICATION

• `Const` **SONG\_PUBLICATION**: `Object`

Params for the current songbook publication, without the track.

Used internally to provide methods which only require a track in order to retrieve a song.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `doc` | ``"sjjm"`` |
| `issue` | ``0`` |
| `type` | ``"pub"`` |

#### Defined in

[src/constants.ts:48](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L48)

## Functions

### checkExists

▸ **checkExists**(`path`): `Promise`<boolean\>

Checks if a file exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file. |

#### Returns

`Promise`<boolean\>

`true` if the file exists, `false` if it does not.

#### Defined in

[src/utils.ts:29](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L29)

___

### createDir

▸ **createDir**(`dir`): `Promise`<string \| undefined\>

Creates the specified directory. Will create parent directories if missing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory to create. |

#### Returns

`Promise`<string \| undefined\>

#### Defined in

[src/utils.ts:10](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L10)

___

### downloadCatalog

▸ **downloadCatalog**(`path`): `Promise`<void\>

Downloads the catalog & writes it to the specified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to write the catalog file to. |

#### Returns

`Promise`<void\>

#### Defined in

[src/download.ts:46](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L46)

___

### downloadFile

▸ **downloadFile**(`url`, `path`): `Promise`<void\>

A helper function that downloads the requested URL and writes it to the specified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the file to download. |
| `path` | `string` | The path to write the file to. |

#### Returns

`Promise`<void\>

#### Defined in

[src/download.ts:32](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L32)

___

### downloadMediaCatalog

▸ **downloadMediaCatalog**(`languageCode`, `path`): `Promise`<void\>

NOTE: You probably want to be using [getMediaCatalog](src.md#getmediacatalog) instead.

Downloads a Media Catalog & writes it to the specified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `languageCode` | `string` | - |
| `path` | `string` | The path to write the catalog file to. |

#### Returns

`Promise`<void\>

#### Defined in

[src/download.ts:64](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L64)

___

### downloadPublication

▸ **downloadPublication**(`url`, `path`): `Promise`<void\>

NOTE: You probably want to be using `getPublication` in [Database](../classes/src.database.md) which does this for you.

Downloads a publication from a URL & extracts it to the specified directory path.

The resulting structure will be:
```
/path
  /manifest.json
  /contents
    /(NameFragment).db
    /(multiple .jpg files)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The publication URL. |
| `path` | `string` | The path to write the catalog file to. This is usually the publication NameFragment. |

#### Returns

`Promise`<void\>

#### Defined in

[src/download.ts:91](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L91)

___

### downloadSongStream

▸ **downloadSongStream**(`track`, `path`, `languageId?`): `Promise`<``true`` \| ``null``\>

Does the same as [downloadVideoStream](src.md#downloadvideostream) but only requires passing a song number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `track` | `number` | `undefined` | The song number to use. |
| `path` | `string` | `undefined` | The path to write the song to. |
| `languageId` | `number` | 0 | The Meps Language Id to use. Defaults to `0` (English). |

#### Returns

`Promise`<``true`` \| ``null``\>

See [downloadVideoStream](src.md#downloadvideostream).

#### Defined in

[src/download.ts:183](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L183)

___

### downloadVideoStream

▸ **downloadVideoStream**(`videoArgs`, `path`): `Promise`<``true`` \| ``null``\>

Does the same as [getVideoStream](src.md#getvideostream) but writes the stream to a file instead of returning the stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `videoArgs` | `Parameters`<typeof [getVideoStream](src.md#getvideostream)\>[``0``] | - |
| `path` | `string` | The path to write the video to. |

#### Returns

`Promise`<``true`` \| ``null``\>

`true` if the file was written successfully, `null` if the video could not be found.

#### Defined in

[src/download.ts:152](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L152)

___

### emptyDir

▸ **emptyDir**(`dir`): `Promise`<void\>

Removes the entire specified directory, similar to `rm -rf {dir}`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory to remove. |

#### Returns

`Promise`<void\>

#### Defined in

[src/utils.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L19)

___

### getLanguageById

▸ **getLanguageById**(`id`): [LanguageDTO](../interfaces/types_dto.languagedto.md) \| ``null``

Searches for the specified language based on the provided id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The Meps Language Id to search for. |

#### Returns

[LanguageDTO](../interfaces/types_dto.languagedto.md) \| ``null``

The language if it was found, `null` if it does not exist.

#### Defined in

[src/language.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/src/language.ts#L22)

___

### getLanguages

▸ **getLanguages**(): [LanguageDTO](../interfaces/types_dto.languagedto.md)[]

Retrieves a list of all languages currently supported.

#### Returns

[LanguageDTO](../interfaces/types_dto.languagedto.md)[]

An array of languages.

#### Defined in

[src/language.ts:11](https://github.com/BenShelton/library-api/blob/master/packages/core/src/language.ts#L11)

___

### getMediaCatalog

▸ **getMediaCatalog**(`dir`, `languageId`): `Promise`<MediaCatalog \| ``null``\>

**`todo`** Check for latest version, currently just checks existence of file.

Retrieves a media catalog file and returns a {@link MediaCatalog} instance if it exists.
Will download the file if it is not yet downloaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory where media catalogs are to be stored. |
| `languageId` | `number` | The Meps Language Id to use. |

#### Returns

`Promise`<MediaCatalog \| ``null``\>

A {@link MediaCatalog} if it exists, `null` if not found.

#### Defined in

[src/catalog.ts:37](https://github.com/BenShelton/library-api/blob/master/packages/core/src/catalog.ts#L37)

___

### getSongStream

▸ **getSongStream**(`track`, `languageId?`): `Promise`<NodeJS.ReadableStream \| ``null``\>

Does the same as [getVideoStream](src.md#getvideostream) but only requires passing a song number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `track` | `number` | `undefined` | The song number to use. |
| `languageId` | `number` | 0 | The Meps Language Id to use. Defaults to `0` (English). |

#### Returns

`Promise`<NodeJS.ReadableStream \| ``null``\>

See [getVideoStream](src.md#getvideostream).

#### Defined in

[src/download.ts:170](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L170)

___

### getVideoStream

▸ **getVideoStream**(`__namedParameters`): `Promise`<NodeJS.ReadableStream \| ``null``\>

Searches the external Media API endpoint for the requested video and retrieves the highest quality (720p) version of it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.doc` | `string` \| `number` |
| `__namedParameters.issue` | `string` \| `number` |
| `__namedParameters.languageId?` | `number` |
| `__namedParameters.track` | `string` \| `number` |
| `__namedParameters.type` | [VideoDTO](../interfaces/types_dto.videodto.md)[``"type"``] |

#### Returns

`Promise`<NodeJS.ReadableStream \| ``null``\>

A Stream of the video file or `null` if the video cannot be found.

#### Defined in

[src/download.ts:116](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L116)

___

### isValidDate

▸ **isValidDate**(`date`): date is string

Validates that the passed in `date` is a string of `yyyy-mm-dd` format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `unknown` | The date to validate. |

#### Returns

date is string

`true` if the date is valid, `false` if not.

#### Defined in

[src/utils.ts:61](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L61)

___

### readLines

▸ **readLines**(`path`, `cb`): `Promise`<void\>

Reads a file line by line and allows running a callback for each line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file. |
| `cb` | (`line`: `string`) => `void` | The callback to apply for each line. |

#### Returns

`Promise`<void\>

#### Defined in

[src/utils.ts:44](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L44)

___

### updateCatalog

▸ **updateCatalog**(`path`): `Promise`<boolean\>

**`todo`** Check for latest version, currently just checks existence of file.

Checks whether the currently downloaded catalog is the latest version & updates it if not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to download the catalog to. |

#### Returns

`Promise`<boolean\>

`true` if the catalog was updated, `false` if it was already the latest version.

#### Defined in

[src/catalog.ts:17](https://github.com/BenShelton/library-api/blob/master/packages/core/src/catalog.ts#L17)
