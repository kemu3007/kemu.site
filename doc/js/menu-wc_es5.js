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
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">portal documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' : 'data-target="#xs-components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' : 'id="xs-components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogModule.html\" data-type=\"entity-link\" >BlogModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' : 'data-target="#xs-components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' : 'id="xs-components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogDetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogDetailComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BlogListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlogListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BlogRoutingModule.html\" data-type=\"entity-link\" >BlogRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-ba16c5df9fcd3d9027d3b1f5faa80e1960ef82a4acb329b2c305105d19ce39914cab66bb4ad88b4411f076e9ee93853bba3c07c42c6d563618f861dfe22275f0"' : 'data-target="#xs-components-links-module-HomeModule-ba16c5df9fcd3d9027d3b1f5faa80e1960ef82a4acb329b2c305105d19ce39914cab66bb4ad88b4411f076e9ee93853bba3c07c42c6d563618f861dfe22275f0"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-ba16c5df9fcd3d9027d3b1f5faa80e1960ef82a4acb329b2c305105d19ce39914cab66bb4ad88b4411f076e9ee93853bba3c07c42c6d563618f861dfe22275f0"' : 'id="xs-components-links-module-HomeModule-ba16c5df9fcd3d9027d3b1f5faa80e1960ef82a4acb329b2c305105d19ce39914cab66bb4ad88b4411f076e9ee93853bba3c07c42c6d563618f861dfe22275f0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/IndexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IndexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LogModule.html\" data-type=\"entity-link\" >LogModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' : 'data-target="#xs-components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' : 'id="xs-components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LogDetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogDetailComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LogListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LogRoutingModule.html\" data-type=\"entity-link\" >LogRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' : 'data-target="#xs-components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' : 'id="xs-components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoadingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoadingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MessageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MessageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TweetBtnComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TweetBtnComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/MessageService.html\" data-type=\"entity-link\" >MessageService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AlertMessage.html\" data-type=\"entity-link\" >AlertMessage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Article.html\" data-type=\"entity-link\" >Article</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ArticleDetail.html\" data-type=\"entity-link\" >ArticleDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Label.html\" data-type=\"entity-link\" >Label</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Label-1.html\" data-type=\"entity-link\" >Label</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LabelDetail.html\" data-type=\"entity-link\" >LabelDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LabelDetail-1.html\" data-type=\"entity-link\" >LabelDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Log.html\" data-type=\"entity-link\" >Log</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LogDetail.html\" data-type=\"entity-link\" >LogDetail</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reactions.html\" data-type=\"entity-link\" >Reactions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reactions-1.html\" data-type=\"entity-link\" >Reactions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User-1.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));