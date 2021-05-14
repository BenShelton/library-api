[Library Core - v0.3.1](../README.md) / [types/hag](../modules/types_hag.md) / MediaPubLink

# Interface: MediaPubLink

[types/hag](../modules/types_hag.md).MediaPubLink

One of the returned links when requesting a video from the external Media API endpoint.

These types may not be extensive but include what we need.

## Table of contents

### Properties

- [bitRate](types_hag.mediapublink.md#bitrate)
- [booknum](types_hag.mediapublink.md#booknum)
- [docid](types_hag.mediapublink.md#docid)
- [duration](types_hag.mediapublink.md#duration)
- [edition](types_hag.mediapublink.md#edition)
- [editionDescr](types_hag.mediapublink.md#editiondescr)
- [file](types_hag.mediapublink.md#file)
- [filesize](types_hag.mediapublink.md#filesize)
- [format](types_hag.mediapublink.md#format)
- [formatDescr](types_hag.mediapublink.md#formatdescr)
- [frameHeight](types_hag.mediapublink.md#frameheight)
- [frameRate](types_hag.mediapublink.md#framerate)
- [frameWidth](types_hag.mediapublink.md#framewidth)
- [hasTrack](types_hag.mediapublink.md#hastrack)
- [label](types_hag.mediapublink.md#label)
- [markers](types_hag.mediapublink.md#markers)
- [mimetype](types_hag.mediapublink.md#mimetype)
- [pub](types_hag.mediapublink.md#pub)
- [specialty](types_hag.mediapublink.md#specialty)
- [specialtyDescr](types_hag.mediapublink.md#specialtydescr)
- [subtitled](types_hag.mediapublink.md#subtitled)
- [title](types_hag.mediapublink.md#title)
- [track](types_hag.mediapublink.md#track)
- [trackImage](types_hag.mediapublink.md#trackimage)

## Properties

### bitRate

• **bitRate**: *number*

Defined in: [types/hag.d.ts:39](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L39)

___

### booknum

• **booknum**: *number*

Defined in: [types/hag.d.ts:26](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L26)

___

### docid

• **docid**: *number*

Defined in: [types/hag.d.ts:25](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L25)

___

### duration

• **duration**: *number*

Defined in: [types/hag.d.ts:38](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L38)

___

### edition

• **edition**: *string*

Defined in: [types/hag.d.ts:28](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L28)

___

### editionDescr

• **editionDescr**: *string*

Defined in: [types/hag.d.ts:29](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L29)

___

### file

• **file**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checksum` | *string* |
| `modifiedDatetime` | *string* |
| `stream` | *string* |
| `url` | *string* |

Defined in: [types/hag.d.ts:8](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L8)

___

### filesize

• **filesize**: *number*

Defined in: [types/hag.d.ts:14](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L14)

___

### format

• **format**: *string*

Defined in: [types/hag.d.ts:30](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L30)

___

### formatDescr

• **formatDescr**: *string*

Defined in: [types/hag.d.ts:31](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L31)

___

### frameHeight

• **frameHeight**: *number*

Defined in: [types/hag.d.ts:36](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L36)

___

### frameRate

• **frameRate**: *number*

Defined in: [types/hag.d.ts:37](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L37)

___

### frameWidth

• **frameWidth**: *number*

Defined in: [types/hag.d.ts:35](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L35)

___

### hasTrack

• **hasTrack**: *boolean*

Defined in: [types/hag.d.ts:23](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L23)

___

### label

• **label**: ``"240p"`` \| ``"480p"`` \| ``"720p"``

Defined in: [types/hag.d.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L21)

___

### markers

• **markers**: ``null``

Defined in: [types/hag.d.ts:20](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L20)

___

### mimetype

• **mimetype**: *string*

Defined in: [types/hag.d.ts:27](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L27)

___

### pub

• **pub**: *string*

Defined in: [types/hag.d.ts:24](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L24)

___

### specialty

• **specialty**: *string*

Defined in: [types/hag.d.ts:32](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L32)

___

### specialtyDescr

• **specialtyDescr**: *string*

Defined in: [types/hag.d.ts:33](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L33)

___

### subtitled

• **subtitled**: *boolean*

Defined in: [types/hag.d.ts:34](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L34)

___

### title

• **title**: *string*

Defined in: [types/hag.d.ts:7](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L7)

___

### track

• **track**: *number*

Defined in: [types/hag.d.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L22)

___

### trackImage

• **trackImage**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checksum` | ``null`` |
| `modifiedDatetime` | *string* |
| `url` | *string* |

Defined in: [types/hag.d.ts:15](https://github.com/BenShelton/library-api/blob/master/packages/core/types/hag.d.ts#L15)
