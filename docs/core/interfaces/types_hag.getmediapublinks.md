[Library Core](../README.md) / [types/hag](../modules/types_hag.md) / GetMediaPubLinks

# Interface: GetMediaPubLinks

[types/hag](../modules/types_hag.md).GetMediaPubLinks

**`todo`** This only defines the English interface.

The returned data when requesting a video from the external Media API endpoint.

## Table of contents

### Properties

- [booknum](types_hag.getmediapublinks.md#booknum)
- [files](types_hag.getmediapublinks.md#files)
- [formattedDate](types_hag.getmediapublinks.md#formatteddate)
- [issue](types_hag.getmediapublinks.md#issue)
- [languages](types_hag.getmediapublinks.md#languages)
- [parentPubName](types_hag.getmediapublinks.md#parentpubname)
- [pub](types_hag.getmediapublinks.md#pub)
- [pubImage](types_hag.getmediapublinks.md#pubimage)
- [pubName](types_hag.getmediapublinks.md#pubname)
- [specialty](types_hag.getmediapublinks.md#specialty)
- [track](types_hag.getmediapublinks.md#track)

## Properties

### booknum

• **booknum**: ``null``

Defined in: [types/hag.d.ts:50](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L50)

___

### files

• **files**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `E` | *object* |
| `E.MP4` | [*MediaPubLink*](types_hag.mediapublink.md)[] |

Defined in: [types/hag.d.ts:68](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L68)

___

### formattedDate

• **formattedDate**: *string*[]

Defined in: [types/hag.d.ts:53](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L53)

___

### issue

• **issue**: *string*

Defined in: [types/hag.d.ts:52](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L52)

___

### languages

• **languages**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `E` | *object* |
| `E.direction` | *string* |
| `E.locale` | *string* |
| `E.name` | *string* |

Defined in: [types/hag.d.ts:61](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L61)

___

### parentPubName

• **parentPubName**: *string*

Defined in: [types/hag.d.ts:49](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L49)

___

### pub

• **pub**: *string*

Defined in: [types/hag.d.ts:51](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L51)

___

### pubImage

• **pubImage**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checksum` | ``null`` |
| `modifiedDatetime` | *string* |
| `url` | *string* |

Defined in: [types/hag.d.ts:56](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L56)

___

### pubName

• **pubName**: *string*

Defined in: [types/hag.d.ts:48](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L48)

___

### specialty

• **specialty**: *string*

Defined in: [types/hag.d.ts:55](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L55)

___

### track

• **track**: *number*

Defined in: [types/hag.d.ts:54](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L54)
