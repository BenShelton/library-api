# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/BenShelton/library-api/compare/v0.2.0...v0.2.1) (2021-05-10)

**Note:** Version bump only for package @library-api/media





# 0.2.0 (2021-05-10)


### Bug Fixes

* **media:** ensure loader is shown fully & scrolling is possible ([edc1069](https://github.com/BenShelton/library-api/commit/edc10699d258fd22bb1dedfe8b95444df04fe629))
* **media:** ensure loader isn't chopped in half ([c3edc74](https://github.com/BenShelton/library-api/commit/c3edc747e7e6a78a56bff32d127a9ddbd7fc89b1))
* **media:** include other packages in externals so core modules can work ([a2c0dcf](https://github.com/BenShelton/library-api/commit/a2c0dcf1e8d52b94996ffc55e681067031feaa71))
* **media:** remove outlines from buttons and selects ([c7eb724](https://github.com/BenShelton/library-api/commit/c7eb72403785ee7e78075e5a06e95f43902af6a5))
* **media:** share font-weight for all headers, correct scrolling on preview text ([f5e97a7](https://github.com/BenShelton/library-api/commit/f5e97a72c642c041e33bde8db7134d7a1dc53336))
* **media:** show pointer cursor on buttons by default ([e783276](https://github.com/BenShelton/library-api/commit/e783276bf05aad1ae12ab3fcce7742840b92d2e0))
* **media:** treat errors of loading publications as non-existent publications ([e2badfa](https://github.com/BenShelton/library-api/commit/e2badfa551a2f26d069296c38e048d2b531b3bdc))
* **media/controls:** allow null as value for selected prop ([fd0f9f4](https://github.com/BenShelton/library-api/commit/fd0f9f4a805bf316090af03c0242342c8753fc89))
* **media/display:** always allow image to take up most space possible, stop image dragging ([b3b52a5](https://github.com/BenShelton/library-api/commit/b3b52a59d9a4b4571c16d8406f73fd65ee7c7347))
* **media/display:** key video element so changed source forces it to reload ([69bb421](https://github.com/BenShelton/library-api/commit/69bb42106b3c14c3029d3d8b8f27ea9c8a96bf7e))
* **media/display:** remove outline when controlling video ([9aa6a74](https://github.com/BenShelton/library-api/commit/9aa6a74027ec97f35a4f14556db08f1f118c62a8))
* **media/display:** support vertical images ([2775032](https://github.com/BenShelton/library-api/commit/2775032d86d0412c4c640d604179a4607b165fbd))
* **media/loader:** correct name of component ([ea21039](https://github.com/BenShelton/library-api/commit/ea21039337277c885628c2b18aff4973a36cc123))
* **media/preview:** contain preview image within the container ([c30b2a1](https://github.com/BenShelton/library-api/commit/c30b2a11a988549dd1971b9b9dd6a77ba8f9c1fe))
* **media/previewimage:** don't error on selected being null ([8a4d729](https://github.com/BenShelton/library-api/commit/8a4d729b3d619e5e24419ba2735b36f6f7e1afd0))
* **media/window:** disable alwaysOnTop so Zoom can "see" the window for screen sharing ([56f708b](https://github.com/BenShelton/library-api/commit/56f708bf94614ab984d5f356343a1d8889c4bad0))


### Features

* **media:** add animated loader component ([9881c90](https://github.com/BenShelton/library-api/commit/9881c908faf5acb890fedb8ec0163aabb8809c8d))
* **media:** add basic control panel and display design outline ([38b56e7](https://github.com/BenShelton/library-api/commit/38b56e76dda89863f3db8bd8d0c7e29dadb8e448))
* **media:** add basic download and media extraction of publications ([5210fa6](https://github.com/BenShelton/library-api/commit/5210fa6e3935a403c5537af4e109930c739e1a9a))
* **media:** add control bar, adjust style of preview image ([560ace7](https://github.com/BenShelton/library-api/commit/560ace7452d12012a6f241ae339debc5b4a2bc93))
* **media:** add control for hiding displayed image ([67dbd8b](https://github.com/BenShelton/library-api/commit/67dbd8b513ede51825153b9a9bc95d9124590a21))
* **media:** add custom menu, refactor events into separate module ([b45b45e](https://github.com/BenShelton/library-api/commit/b45b45e1207d511f92f8ae39d26702344c382b0e))
* **media:** add intro page if catalog is not yet downloaded ([ff821d1](https://github.com/BenShelton/library-api/commit/ff821d1390c7f9775f4a18863b696223f086c28f))
* **media:** add preload script to expose apis to Vue ([c81da08](https://github.com/BenShelton/library-api/commit/c81da088da7ed288c61a241725ccd7c48aded03d))
* **media:** add publication selection & basic design of control panel ([99b1e05](https://github.com/BenShelton/library-api/commit/99b1e050815fe2e99c135fdebf0e80c27bcf7b8e))
* **media:** add Quicksand google font ([26c0748](https://github.com/BenShelton/library-api/commit/26c0748cad7bca71fded246f5d9e43691e72ea55))
* **media:** add settings overlay, add clear cache button ([9b2593f](https://github.com/BenShelton/library-api/commit/9b2593fa4c41e43b7a5ba8fb13071278a4fa3063))
* **media:** add single line version of logo ([ca9755c](https://github.com/BenShelton/library-api/commit/ca9755cbcf0f93bdcda9a70e6b0144476d88e86b))
* **media:** add type safety to ipc calls ([9726c56](https://github.com/BenShelton/library-api/commit/9726c56ec49073af5b26aafeb5b84643eb49a7aa))
* **media:** create dual-window display, load different page for each window ([44616a9](https://github.com/BenShelton/library-api/commit/44616a96072f31aff621249cb2d1f7d4af9e4307))
* **media:** display selected image on display window ([6ce5ad8](https://github.com/BenShelton/library-api/commit/6ce5ad86f7a178f36e922cba88298a7044626ecd))
* **media:** don't focus display window when showing media ([f4794e4](https://github.com/BenShelton/library-api/commit/f4794e41688152f9932f55e698712e7fb09f5ce5))
* **media:** download video images & send captions ([04cbdd5](https://github.com/BenShelton/library-api/commit/04cbdd54d29d1f4bb3bdb2d2b7d272a589838212))
* **media:** initial install of catalog from intro page, simple media page ([5cc6b56](https://github.com/BenShelton/library-api/commit/5cc6b560888b4b4915263c5f93052bc79fc21c16))
* **media:** scaffold new package using electron, vite & vue ([3cba103](https://github.com/BenShelton/library-api/commit/3cba1032a28f82cb2e43f71a9f0a5fd560cf27fc))
* **media:** scaffold video preview and displaying ([a24f60d](https://github.com/BenShelton/library-api/commit/a24f60d2e6c6cd6c8fbbe8a3db9c11832a52b729))
* **media:** send images as datauri for the control panel ([d1325e3](https://github.com/BenShelton/library-api/commit/d1325e382451b39836a8879e9c6d8e56629ac9b0))
* **media:** set default sizes and positions for windows ([4e67a86](https://github.com/BenShelton/library-api/commit/4e67a8628202f2d6ae5bbcc3cd54a1c2a45635d7))
* **media:** support downloading and displaying videos ([8ff08c5](https://github.com/BenShelton/library-api/commit/8ff08c5210652a28a99ba42dc4059298bf77ec91))
* **media:** track selected image using unique id ([3d5e506](https://github.com/BenShelton/library-api/commit/3d5e50656e0fd2033b336812cd40373f01249d1c))
* **media:** update download icon ([ae4881b](https://github.com/BenShelton/library-api/commit/ae4881bdf8b66853a13450c06d8eaba33af7375c))
* **media/controlpanel:** default to OCLM in the midweek ([06dd8ab](https://github.com/BenShelton/library-api/commit/06dd8ab5b09b91d7edd0fbeb81da63869a6eccab))
* **media/controlpanel:** tidy up layout and add extra styling ([79c1c3b](https://github.com/BenShelton/library-api/commit/79c1c3b1043c0969158d608cc708e0fef154ec49))
* **media/display:** make window frameless, lock aspect ratio, persist window positions in store ([71e772a](https://github.com/BenShelton/library-api/commit/71e772a1b4804640e6866ca96e2e870007910cbc))
* **media/intro:** move to separate route, add logo & update layout ([4271ecd](https://github.com/BenShelton/library-api/commit/4271ecd2af7a5e9e996c92a08ba8978a18a0e147))
* **media/ipc:** add handler for clearing downloaded files ([6f67766](https://github.com/BenShelton/library-api/commit/6f67766b794b7f6d156b149bb8e07cf9aeaa1ebd))
* **media/ipc:** allow empty args, add media:clear & display:clear events ([c9f3b87](https://github.com/BenShelton/library-api/commit/c9f3b87740535d0283e60412f688461e4195f9c7))
* **media/navbar:** update logo used in navbar ([ba12773](https://github.com/BenShelton/library-api/commit/ba1277393bdb77d76d62c791311504cb362763c6))
* **media/preload:** do not expose the entire ipcrenderer, wrap events in custom api ([e1b77ab](https://github.com/BenShelton/library-api/commit/e1b77ab9e4a48af14d45e204ae3258f426654b39))
* **media/preview:** add download icon to not yet downloaded videos ([5d36c96](https://github.com/BenShelton/library-api/commit/5d36c96561d985d1fc6e69b173d3a870f45caecc))
* **media/previewimage:** add caption and overlay ([22a0236](https://github.com/BenShelton/library-api/commit/22a0236afa776bd8793966614bfd4425a26ed35c))
* **media/previewimage:** remove overlay when control panel is blurred ([781de7a](https://github.com/BenShelton/library-api/commit/781de7a896c6a92746813729ce8ffaf29f51e028))
* **media/window:** more consistent dev tools display in dev mode ([3435a45](https://github.com/BenShelton/library-api/commit/3435a45476b5e434e17779c15a68bd2d1d61321b))
* **media/window:** quit app when control panel is closed ([9dd8f3e](https://github.com/BenShelton/library-api/commit/9dd8f3e1ec8f866e79fbb09974bea276e88b69f8))
* **media/window:** return window from create/refocus functions for use elsewhere ([f1aad7d](https://github.com/BenShelton/library-api/commit/f1aad7d0bbb7fbb55c4b1173c5cd3fe8e1da3d66))
* **media/window:** show devtools in dev mode, split refocus into 2 functions ([9bc3004](https://github.com/BenShelton/library-api/commit/9bc3004128495c00db1fd5fd4cb0f358c4a5e2a3))
