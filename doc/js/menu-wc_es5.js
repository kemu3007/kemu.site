'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">portal documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-623abf33fd00294bdcabb82ea09c6d98f16f95fc3decf6a12f6bffcd6970b1dc397710a56f539da9d8f83e374c61fb3011fcd69341adad90130f621d43a81e9c"' : 'data-target="#xs-components-links-module-AppModule-623abf33fd00294bdcabb82ea09c6d98f16f95fc3decf6a12f6bffcd6970b1dc397710a56f539da9d8f83e374c61fb3011fcd69341adad90130f621d43a81e9c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-623abf33fd00294bdcabb82ea09c6d98f16f95fc3decf6a12f6bffcd6970b1dc397710a56f539da9d8f83e374c61fb3011fcd69341adad90130f621d43a81e9c"' : 'id="xs-components-links-module-AppModule-623abf33fd00294bdcabb82ea09c6d98f16f95fc3decf6a12f6bffcd6970b1dc397710a56f539da9d8f83e374c61fb3011fcd69341adad90130f621d43a81e9c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogModule.html\" data-type=\"entity-link\" >BlogModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' : 'data-target="#xs-components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' : 'id="xs-components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogDetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogDetailComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogRoutingModule.html\" data-type=\"entity-link\" >BlogRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-3207229306bdfce5d2d7fb5276af4fc5c23f2e318cf2ca1c1780113a5df8d082574cb925ad5c6b970bb4a0783556513deb935e0ddd5ef4ad9f4720b8c03363c4"' : 'data-target="#xs-components-links-module-HomeModule-3207229306bdfce5d2d7fb5276af4fc5c23f2e318cf2ca1c1780113a5df8d082574cb925ad5c6b970bb4a0783556513deb935e0ddd5ef4ad9f4720b8c03363c4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-3207229306bdfce5d2d7fb5276af4fc5c23f2e318cf2ca1c1780113a5df8d082574cb925ad5c6b970bb4a0783556513deb935e0ddd5ef4ad9f4720b8c03363c4"' : 'id="xs-components-links-module-HomeModule-3207229306bdfce5d2d7fb5276af4fc5c23f2e318cf2ca1c1780113a5df8d082574cb925ad5c6b970bb4a0783556513deb935e0ddd5ef4ad9f4720b8c03363c4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ContactComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ContactComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IndexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IndexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NewsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NewsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LogModule.html\" data-type=\"entity-link\" >LogModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' : 'data-target="#xs-components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' : 'id="xs-components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LogDetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogDetailComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LogListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LogRoutingModule.html\" data-type=\"entity-link\" >LogRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"' : 'data-target="#xs-components-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"' : 'id="xs-components-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AdsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AdsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AdsModalComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AdsModalComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AmazonAdsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AmazonAdsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoadingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoadingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MessageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MessageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TweetBtnComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TweetBtnComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"' : 'data-target="#xs-pipes-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"' : 'id="xs-pipes-links-module-SharedModule-fb60334b00028c52c137ed65d2bce90dd84a81729eebf9323791452a29af414f90fe03e5fa674282df34a90b582c86f1c7d0885f4a205b5faab88d4345a815a6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/MdescapePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MdescapePipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/YearPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >YearPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ToolsModule.html\" data-type=\"entity-link\" >ToolsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ToolsModule-8dadde8153dc81f97df1421a91499030e57a9e30a1e2df911a82857a4107fb6f282a9889cd6c0a8a2cc04ee52b759b865537fb7298d71759967bf2f6537d7b51"' : 'data-target="#xs-components-links-module-ToolsModule-8dadde8153dc81f97df1421a91499030e57a9e30a1e2df911a82857a4107fb6f282a9889cd6c0a8a2cc04ee52b759b865537fb7298d71759967bf2f6537d7b51"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ToolsModule-8dadde8153dc81f97df1421a91499030e57a9e30a1e2df911a82857a4107fb6f282a9889cd6c0a8a2cc04ee52b759b865537fb7298d71759967bf2f6537d7b51"' : 'id="xs-components-links-module-ToolsModule-8dadde8153dc81f97df1421a91499030e57a9e30a1e2df911a82857a4107fb6f282a9889cd6c0a8a2cc04ee52b759b865537fb7298d71759967bf2f6537d7b51"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AmazonAssociateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AmazonAssociateComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/Base64Component.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Base64Component</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/JsonFormatterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JsonFormatterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/JsonTyperComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JsonTyperComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MdwriterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MdwriterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/OpenapiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OpenapiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RealtimeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RealtimeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ToolsListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ToolsListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserInfoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserInfoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/YearCheckComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >YearCheckComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ToolsRoutingModule.html\" data-type=\"entity-link\" >ToolsRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/UserInfoState.html\" data-type=\"entity-link\" >UserInfoState</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AdsModalService.html\" data-type=\"entity-link\" >AdsModalService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BreadcrumbService.html\" data-type=\"entity-link\" >BreadcrumbService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoadingService.html\" data-type=\"entity-link\" >LoadingService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MarkedService.html\" data-type=\"entity-link\" >MarkedService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MessageService.html\" data-type=\"entity-link\" >MessageService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RouterService.html\" data-type=\"entity-link\" >RouterService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserInfoService.html\" data-type=\"entity-link\" >UserInfoService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AlertMessage.html\" data-type=\"entity-link\" >AlertMessage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Article.html\" data-type=\"entity-link\" >Article</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ArticleDetail.html\" data-type=\"entity-link\" >ArticleDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Comment.html\" data-type=\"entity-link\" >Comment</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Env.html\" data-type=\"entity-link\" >Env</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Headers.html\" data-type=\"entity-link\" >Headers</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Http.html\" data-type=\"entity-link\" >Http</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Label.html\" data-type=\"entity-link\" >Label</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Label-1.html\" data-type=\"entity-link\" >Label</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LabelDetail.html\" data-type=\"entity-link\" >LabelDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LabelDetail-1.html\" data-type=\"entity-link\" >LabelDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Log.html\" data-type=\"entity-link\" >Log</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LogDetail.html\" data-type=\"entity-link\" >LogDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reactions.html\" data-type=\"entity-link\" >Reactions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reactions-1.html\" data-type=\"entity-link\" >Reactions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reactions-2.html\" data-type=\"entity-link\" >Reactions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RequestContext.html\" data-type=\"entity-link\" >RequestContext</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/state.html\" data-type=\"entity-link\" >state</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Tool.html\" data-type=\"entity-link\" >Tool</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User-1.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User-2.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UserInfo.html\" data-type=\"entity-link\" >UserInfo</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));