# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.3.0 (2021-05-11)


### Bug Fixes

* **media:** ensure loader is shown fully & scrolling is possible ([aabd018](https://github.com/BenShelton/library-api/commit/aabd018cc7852b0493a8e057942aa27d2045106c))
* **media:** ensure loader isn't chopped in half ([2bcdeaf](https://github.com/BenShelton/library-api/commit/2bcdeaf05cdf650955711edb1efcf917a7d10331))
* **media:** include other packages in externals so core modules can work ([0d823a0](https://github.com/BenShelton/library-api/commit/0d823a0ca23dd27cf789cec934905138422394c4))
* **media:** remove outlines from buttons and selects ([c57b17b](https://github.com/BenShelton/library-api/commit/c57b17b881baae9c067c1dcd8366a79c14210907))
* **media:** share font-weight for all headers, correct scrolling on preview text ([97b305e](https://github.com/BenShelton/library-api/commit/97b305e1d374d58d869f7d2f66feb256656a6ddf))
* **media:** show pointer cursor on buttons by default ([c980afb](https://github.com/BenShelton/library-api/commit/c980afbdcd24f5dc11c080a7a175b84a7dbc876c))
* **media:** treat errors of loading publications as non-existent publications ([43adadb](https://github.com/BenShelton/library-api/commit/43adadb3e363e000a523a67c21731f6488a42d3d))
* **media/controls:** allow null as value for selected prop ([795b500](https://github.com/BenShelton/library-api/commit/795b5003b173afd61f91ffba22adc665c2989768))
* **media/display:** always allow image to take up most space possible, stop image dragging ([5aae879](https://github.com/BenShelton/library-api/commit/5aae879d769a004274b6a0dff7d9b0356ed00464))
* **media/display:** key video element so changed source forces it to reload ([fcacaa0](https://github.com/BenShelton/library-api/commit/fcacaa0217f919ff60de817669838abcacf2102e))
* **media/display:** remove outline when controlling video ([9fb0e1c](https://github.com/BenShelton/library-api/commit/9fb0e1c2352147f322bd88efb69fd0ecf24dfc5b))
* **media/display:** support vertical images ([71dcb80](https://github.com/BenShelton/library-api/commit/71dcb80dfa5f6ced515c475c79b648a52b4a4983))
* **media/loader:** correct name of component ([a175763](https://github.com/BenShelton/library-api/commit/a17576301a90a54b1474c6f5382142ed7d1b9daf))
* **media/preview:** contain preview image within the container ([ae64d1a](https://github.com/BenShelton/library-api/commit/ae64d1a89bf04a9ce8eabc5e5130de1adb9e931b))
* **media/previewimage:** don't error on selected being null ([2e40450](https://github.com/BenShelton/library-api/commit/2e40450950c46916abcaa22febc51e8fcbd0b970))
* **media/window:** disable alwaysOnTop so Zoom can "see" the window for screen sharing ([84400e7](https://github.com/BenShelton/library-api/commit/84400e73445c6566e85fb6060a299e860f98a2c9))


### Features

* **media:** add animated loader component ([2b36522](https://github.com/BenShelton/library-api/commit/2b36522c1c6669f39920142b734f4762c3f2452d))
* **media:** add basic control panel and display design outline ([ef26b55](https://github.com/BenShelton/library-api/commit/ef26b556191e433f39796be29c0e5b79d37376e6))
* **media:** add basic download and media extraction of publications ([412ff04](https://github.com/BenShelton/library-api/commit/412ff047f3c07e2b12632cf301a3de765cd9caee))
* **media:** add control bar, adjust style of preview image ([73e2487](https://github.com/BenShelton/library-api/commit/73e2487757b4d90fb612648fe480c95e00a632b7))
* **media:** add control for hiding displayed image ([ea5d449](https://github.com/BenShelton/library-api/commit/ea5d449ea5fb19b5aa75f4092ff85573ec1a006e))
* **media:** add custom menu, refactor events into separate module ([4f73527](https://github.com/BenShelton/library-api/commit/4f73527eff4b1043ad7524c10c94f8dd492c0b1d))
* **media:** add intro page if catalog is not yet downloaded ([ceba7c1](https://github.com/BenShelton/library-api/commit/ceba7c1b3ba73b60247896809e8e361f198c331f))
* **media:** add preload script to expose apis to Vue ([f718a82](https://github.com/BenShelton/library-api/commit/f718a82a949e80d9cf3f6d6931b1c03b05acea5b))
* **media:** add publication selection & basic design of control panel ([93fa5b1](https://github.com/BenShelton/library-api/commit/93fa5b10178c1f2a71653872cec3ad8020692477))
* **media:** add Quicksand google font ([976ff65](https://github.com/BenShelton/library-api/commit/976ff6547f340ab48c1fd6ead5c389332272ad3f))
* **media:** add settings overlay, add clear cache button ([eee04a4](https://github.com/BenShelton/library-api/commit/eee04a47b75f88e331cd37daf8a0b2b0c4c63444))
* **media:** add single line version of logo ([395e956](https://github.com/BenShelton/library-api/commit/395e95613e0fc8f334a696596411296c6269ac17))
* **media:** add type safety to ipc calls ([cb18d20](https://github.com/BenShelton/library-api/commit/cb18d204c90c33bb650b1dca1ce839d76d755d91))
* **media:** create dual-window display, load different page for each window ([58c7126](https://github.com/BenShelton/library-api/commit/58c7126df1a46860fad30b60d2fe6b035d059404))
* **media:** display selected image on display window ([a7d7412](https://github.com/BenShelton/library-api/commit/a7d7412e1ea813f7c46000c24bc89cd8b278077d))
* **media:** don't focus display window when showing media ([e6fbd55](https://github.com/BenShelton/library-api/commit/e6fbd55718bb1387cf8316511a9ee19b86d95551))
* **media:** download video images & send captions ([4580491](https://github.com/BenShelton/library-api/commit/4580491c2b5d60fa82f2e4d30bc1c6db62d6fede))
* **media:** initial install of catalog from intro page, simple media page ([82aa5e0](https://github.com/BenShelton/library-api/commit/82aa5e0688a3fb71a525960e34f8e1944c592c00))
* **media:** scaffold new package using electron, vite & vue ([b9b1749](https://github.com/BenShelton/library-api/commit/b9b17492e07a23fd5c234e749e604d059ab8fbea))
* **media:** scaffold video preview and displaying ([af43735](https://github.com/BenShelton/library-api/commit/af4373584ab33d10a3995694d75f83d4fe58e115))
* **media:** send images as datauri for the control panel ([02748aa](https://github.com/BenShelton/library-api/commit/02748aa119b740d127f4d638356541f5af54c699))
* **media:** set default sizes and positions for windows ([5e5c32b](https://github.com/BenShelton/library-api/commit/5e5c32bafcb71926ae39bb44263a2f8d102a7538))
* **media:** support downloading and displaying videos ([146d0ec](https://github.com/BenShelton/library-api/commit/146d0ecac8093fb5bd053ca68b7fcd8568a777e4))
* **media:** track selected image using unique id ([c45bf0a](https://github.com/BenShelton/library-api/commit/c45bf0a3c4e668ce3c91e21a051e167ac50484f2))
* **media:** update download icon ([a0fecf4](https://github.com/BenShelton/library-api/commit/a0fecf47ff76bc1e3bf5171e631595433e14fc79))
* **media/controlpanel:** default to OCLM in the midweek ([bfd1656](https://github.com/BenShelton/library-api/commit/bfd1656c8735ddd0f3f5f05fd6f73a507bda1ffb))
* **media/controlpanel:** tidy up layout and add extra styling ([4631166](https://github.com/BenShelton/library-api/commit/4631166c3da8dbce63fb7fb43c4121c0acb39119))
* **media/display:** make window frameless, lock aspect ratio, persist window positions in store ([769f142](https://github.com/BenShelton/library-api/commit/769f142725200b13f346001651444c3353dbf97d))
* **media/intro:** move to separate route, add logo & update layout ([d19bf13](https://github.com/BenShelton/library-api/commit/d19bf13c1d06703dcd6b6af8406aa17da115faca))
* **media/ipc:** add handler for clearing downloaded files ([56957e3](https://github.com/BenShelton/library-api/commit/56957e308bc61c65d96fef210b2684e23cc777d9))
* **media/ipc:** allow empty args, add media:clear & display:clear events ([ff61e8e](https://github.com/BenShelton/library-api/commit/ff61e8e9f873b3a3250c9cec106bce14b88bdef2))
* **media/navbar:** update logo used in navbar ([5da5d8e](https://github.com/BenShelton/library-api/commit/5da5d8edd1b9a46fd0a3bd3556ad421f982dac43))
* **media/preload:** do not expose the entire ipcrenderer, wrap events in custom api ([479933d](https://github.com/BenShelton/library-api/commit/479933d5f9bea42d55b07d9f0300af3958f63bbb))
* **media/preview:** add download icon to not yet downloaded videos ([8669c36](https://github.com/BenShelton/library-api/commit/8669c367d8518930a5bb499eaf3af01bece03d3c))
* **media/previewimage:** add caption and overlay ([ff6d0f0](https://github.com/BenShelton/library-api/commit/ff6d0f07608085950c067f19981a23ee77e77dd6))
* **media/previewimage:** remove overlay when control panel is blurred ([4040bbc](https://github.com/BenShelton/library-api/commit/4040bbc81d3af4073248793af1debc7d5ccf8c5e))
* **media/window:** more consistent dev tools display in dev mode ([ea5f006](https://github.com/BenShelton/library-api/commit/ea5f006744191f83281707d2458f7bec0b1d7c8f))
* **media/window:** quit app when control panel is closed ([1e3664f](https://github.com/BenShelton/library-api/commit/1e3664f310e4c2951487beef32c30b76d8929d71))
* **media/window:** return window from create/refocus functions for use elsewhere ([823995e](https://github.com/BenShelton/library-api/commit/823995e8074a2939a85e4b3c1f636f52a3581767))
* **media/window:** show devtools in dev mode, split refocus into 2 functions ([f197824](https://github.com/BenShelton/library-api/commit/f19782401423f81626f5b10f9a0dea614975f82e))





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
