'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portal documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-72658abc05af75c3d95e93baf1e002d1e3dfc12e0cfae7c2720b82ce3be903a06f6b18d4dccdad3242ffd8485f42db6c4ad38d684dc4e41354a01e239fd11767"' : 'data-target="#xs-components-links-module-AppModule-72658abc05af75c3d95e93baf1e002d1e3dfc12e0cfae7c2720b82ce3be903a06f6b18d4dccdad3242ffd8485f42db6c4ad38d684dc4e41354a01e239fd11767"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-72658abc05af75c3d95e93baf1e002d1e3dfc12e0cfae7c2720b82ce3be903a06f6b18d4dccdad3242ffd8485f42db6c4ad38d684dc4e41354a01e239fd11767"' :
                                            'id="xs-components-links-module-AppModule-72658abc05af75c3d95e93baf1e002d1e3dfc12e0cfae7c2720b82ce3be903a06f6b18d4dccdad3242ffd8485f42db6c4ad38d684dc4e41354a01e239fd11767"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' : 'data-target="#xs-components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' :
                                            'id="xs-components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' }>
                                            <li class="link">
                                                <a href="components/BlogDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link" >BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-f791d16738a989c0231c33aacd9cfc505a17fbf324d6b9ea312050455f9c8b53c46091d261f0b905fd0b2e1c7d861cfcc6624535e23d714fa393fc38d3d253f0"' : 'data-target="#xs-components-links-module-HomeModule-f791d16738a989c0231c33aacd9cfc505a17fbf324d6b9ea312050455f9c8b53c46091d261f0b905fd0b2e1c7d861cfcc6624535e23d714fa393fc38d3d253f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-f791d16738a989c0231c33aacd9cfc505a17fbf324d6b9ea312050455f9c8b53c46091d261f0b905fd0b2e1c7d861cfcc6624535e23d714fa393fc38d3d253f0"' :
                                            'id="xs-components-links-module-HomeModule-f791d16738a989c0231c33aacd9cfc505a17fbf324d6b9ea312050455f9c8b53c46091d261f0b905fd0b2e1c7d861cfcc6624535e23d714fa393fc38d3d253f0"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogModule-2e8899c98d4a632824bdfa4053b331f3bac6eb968ab5f9036990bb7d88cd5d93cf80f0994ebe7178b0995ae8456ff7c5717d7ff6ab89482b7709739689168476"' : 'data-target="#xs-components-links-module-LogModule-2e8899c98d4a632824bdfa4053b331f3bac6eb968ab5f9036990bb7d88cd5d93cf80f0994ebe7178b0995ae8456ff7c5717d7ff6ab89482b7709739689168476"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogModule-2e8899c98d4a632824bdfa4053b331f3bac6eb968ab5f9036990bb7d88cd5d93cf80f0994ebe7178b0995ae8456ff7c5717d7ff6ab89482b7709739689168476"' :
                                            'id="xs-components-links-module-LogModule-2e8899c98d4a632824bdfa4053b331f3bac6eb968ab5f9036990bb7d88cd5d93cf80f0994ebe7178b0995ae8456ff7c5717d7ff6ab89482b7709739689168476"' }>
                                            <li class="link">
                                                <a href="components/LogDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogRoutingModule.html" data-type="entity-link" >LogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' : 'data-target="#xs-components-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' :
                                            'id="xs-components-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' }>
                                            <li class="link">
                                                <a href="components/AdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmazonAdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmazonAdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LazyImgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazyImgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TweetBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetBtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' : 'data-target="#xs-pipes-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' :
                                            'id="xs-pipes-links-module-SharedModule-4e7af326df45e389b02de591cdbcd551f068bb40a8b44f48d1bedfae9c3d29184cc7a120ef420f3661eb9cd824c0737d1dc102955bf1aca43c26c63a0b914bb8"' }>
                                            <li class="link">
                                                <a href="pipes/MdescapePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MdescapePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/YearPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolsModule.html" data-type="entity-link" >ToolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolsModule-9d284b3f002ce0b5da1f782935f7d6462fa99e98ac800a2a9c406b654d5f561afa149d36d8263e1f3a45710c050726857e5546457af80ed7d873454ffd845c9b"' : 'data-target="#xs-components-links-module-ToolsModule-9d284b3f002ce0b5da1f782935f7d6462fa99e98ac800a2a9c406b654d5f561afa149d36d8263e1f3a45710c050726857e5546457af80ed7d873454ffd845c9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolsModule-9d284b3f002ce0b5da1f782935f7d6462fa99e98ac800a2a9c406b654d5f561afa149d36d8263e1f3a45710c050726857e5546457af80ed7d873454ffd845c9b"' :
                                            'id="xs-components-links-module-ToolsModule-9d284b3f002ce0b5da1f782935f7d6462fa99e98ac800a2a9c406b654d5f561afa149d36d8263e1f3a45710c050726857e5546457af80ed7d873454ffd845c9b"' }>
                                            <li class="link">
                                                <a href="components/AmazonAssociateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmazonAssociateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Base64Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Base64Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonTyperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonTyperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MdwriterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MdwriterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MermaidComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MermaidComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenapiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenapiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RealtimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RealtimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearCheckComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearCheckComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolsRoutingModule.html" data-type="entity-link" >ToolsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ToolsListComponent-1.html" data-type="entity-link" >ToolsListComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/UserInfoState.html" data-type="entity-link" >UserInfoState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdsModalService.html" data-type="entity-link" >AdsModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArticlesService.html" data-type="entity-link" >ArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkedService.html" data-type="entity-link" >MarkedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link" >RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolsService.html" data-type="entity-link" >ToolsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserInfoService.html" data-type="entity-link" >UserInfoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AlertMessage.html" data-type="entity-link" >AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticleDetail.html" data-type="entity-link" >ArticleDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Env.html" data-type="entity-link" >Env</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Headers.html" data-type="entity-link" >Headers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Http.html" data-type="entity-link" >Http</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelDetail.html" data-type="entity-link" >LabelDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions-1.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestContext.html" data-type="entity-link" >RequestContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/state.html" data-type="entity-link" >state</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tool.html" data-type="entity-link" >Tool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link" >UserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});