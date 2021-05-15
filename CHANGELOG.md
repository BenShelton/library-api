# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/BenShelton/library-api/compare/v0.3.1...v0.4.0) (2021-05-15)


### Features

* **media/display:** allow show/hide of help text with right/context click ([d8ae6d8](https://github.com/BenShelton/library-api/commit/d8ae6d8ae26c62105ad2ea89d9b9a5618f540f34)), closes [#13](https://github.com/BenShelton/library-api/issues/13)





## [0.3.1](https://github.com/BenShelton/library-api/compare/v0.3.0...v0.3.1) (2021-05-12)


### Bug Fixes

* **core:** remove dependency on tslib ([b22815b](https://github.com/BenShelton/library-api/commit/b22815bd43137cecad5583fa3311144bf65c8fac))





# 0.3.0 (2021-05-11)


### Bug Fixes

* **core/mapper:** also include the language fragment in url construction ([65dbd4a](https://github.com/BenShelton/library-api/commit/65dbd4a06dd00ceb8d61cd30a7b304827b68dd46))
* **express/download:** correct error message for /video ([b634708](https://github.com/BenShelton/library-api/commit/b63470844fdd5e340ec5ab427df1339b9b00780b))
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
* **packages/express:** use relative imports as we lack path mapping ([5c45e08](https://github.com/BenShelton/library-api/commit/5c45e0894830cc3f42fd3c2d4170e81d46b9a0f8))
* provide more accurate query param types ([e87d56f](https://github.com/BenShelton/library-api/commit/e87d56fc7195e2d0e57153846efb8d66d708d452))


### Features

* **commitizen:** enforce conventional commits ([1b1c54e](https://github.com/BenShelton/library-api/commit/1b1c54ea36158829cffd22840ee9d25864e26176))
* **core:** add ability to extract a caption and image url for specified media ([05fc722](https://github.com/BenShelton/library-api/commit/05fc7226203f6a17b3b5786f872c5a8eb0dda77c))
* **core:** add emptyDir utility function ([de0eed8](https://github.com/BenShelton/library-api/commit/de0eed89d4e4c24666449f6a41def42ae8c757e6))
* **core:** add id to images/videos, rename video id to doc ([9ec9e8b](https://github.com/BenShelton/library-api/commit/9ec9e8ba6608a4234aab6183b81e87a7c0b0950d))
* **core:** add id to mediaDetails, allow passing a full video into getMediaDetails for convenience ([2cb6afb](https://github.com/BenShelton/library-api/commit/2cb6afb4e34b46127ccd53a74d588e27258b5495))
* **core:** rename downloadVideoStream to getVideoStream, add downloadVideoStream which writes file ([cddd05d](https://github.com/BenShelton/library-api/commit/cddd05df59e6595cc446bdf590ae1643ae09ee99))
* **core/download:** add utility function to download a file ([2751358](https://github.com/BenShelton/library-api/commit/2751358359e25aafd477d7e1534f4a4b0680416d))
* **core/publication:** add OCLM getVideos query ([5fd27e5](https://github.com/BenShelton/library-api/commit/5fd27e597272a7b747e457c7c6a6c6ff6d0c5e2f))
* **core/publication:** include the contents path of the publication ([53e9341](https://github.com/BenShelton/library-api/commit/53e934134f0c2955e962b781c92d549522c5617b))
* **core/publication:** update OCLM image query ([4be81ff](https://github.com/BenShelton/library-api/commit/4be81ff7fc41bfb216e8259522cab697d34f8820))
* **express:** add /media/details endpoint ([d20ec3f](https://github.com/BenShelton/library-api/commit/d20ec3fb9ffd5affc894f618014a8a23eb3b973e))
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
* add download url to publication & download endpoint for videos ([a6ea95a](https://github.com/BenShelton/library-api/commit/a6ea95ae61cebb407d6411da65ed302de51fee20))
* add DTOs and Mapper for consistent API structure ([b103710](https://github.com/BenShelton/library-api/commit/b1037105588a9ef98c4fde6a89c78fbd23ada864))
* add image download endpoint ([450ffea](https://github.com/BenShelton/library-api/commit/450ffeafb8feee9a0ccb3044aead62a0be2494cf))
* add media downloads using hag api ([06c0160](https://github.com/BenShelton/library-api/commit/06c01609a2e3bc31d176a272c0f4da42d978ad27))
* add oclm publication class ([eab8b92](https://github.com/BenShelton/library-api/commit/eab8b926d2d0457890ffeaad5821a56dc27dc1cc))
* add parsing for different types of video, add 'doc' video type ([f53907d](https://github.com/BenShelton/library-api/commit/f53907d01eb7b234bf048696f2f9135e94580306))
* add videos to media extraction ([d549e62](https://github.com/BenShelton/library-api/commit/d549e62dd2d6bd758ae96dafc17a1977d3e651fc))
* extract contents of publications too ([ec7a255](https://github.com/BenShelton/library-api/commit/ec7a255658f38f9d63bb017e27d6eccdff155cda))
* extract shared functionality into core package ([169ea29](https://github.com/BenShelton/library-api/commit/169ea29eacf0048d2de3e0b8101372531fdc24fe))
* make mapper aware of publication, map image download link ([c11f312](https://github.com/BenShelton/library-api/commit/c11f312afaddf63183a7337eee106c514dcd0099))
* only extract media for a specific date ([591a9c6](https://github.com/BenShelton/library-api/commit/591a9c66cd1a66895bd597851fe6a5d6290c6609))
* separate catalog & publication logic, start adding publication class ([daece0d](https://github.com/BenShelton/library-api/commit/daece0d1568a659024a661b369d1465e5a5735a1))
* start adding methods to Publication class ([0697e23](https://github.com/BenShelton/library-api/commit/0697e231172c4acfbf2f211d62c0599a9fc836d5))
