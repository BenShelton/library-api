[Library Core](../README.md) / [types/publication](../modules/types_publication.md) / PublicationCtor

# Interface: PublicationCtor

[types/publication](../modules/types_publication.md).PublicationCtor

Constructor params for [Publication](../classes/src.publication.md) class.

## Table of contents

### Properties

- [dir](types_publication.publicationctor.md#dir)
- [filename](types_publication.publicationctor.md#filename)
- [languageId](types_publication.publicationctor.md#languageid)
- [type](types_publication.publicationctor.md#type)

## Properties

### dir

• **dir**: `string`

The directory where the publication is located.

**`example`** 'downloads/publications'

#### Defined in

[types/publication.d.ts:25](https://github.com/BenShelton/library-api/blob/master/packages/core/types/publication.d.ts#L25)

___

### filename

• **filename**: `string`

The filename of the downloaded publication.
This must be the NameFragment as it is used the internal database too.

**`example`** 'w_E_202012'

#### Defined in

[types/publication.d.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/types/publication.d.ts#L19)

___

### languageId

• `Optional` **languageId**: `number`

The Meps Language Id of this publication.

**`default`** 0 (English)

#### Defined in

[types/publication.d.ts:35](https://github.com/BenShelton/library-api/blob/master/packages/core/types/publication.d.ts#L35)

___

### type

• **type**: [PublicationType](../modules/types_publication.md#publicationtype)

**`see`** PublicationType

#### Defined in

[types/publication.d.ts:29](https://github.com/BenShelton/library-api/blob/master/packages/core/types/publication.d.ts#L29)
