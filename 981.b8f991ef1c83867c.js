"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[981],{1981:(K,d,c)=>{c.r(d),c.d(d,{HomeModule:()=>H});var a=c(9808),l=c(6609),e=c(5e3),h=c(7569),C=c(9601),p=c(2313),m=c(508),b=c(9646),A=c(1135);const x=new e.OlP("recaptcha-language"),_=new e.OlP("recaptcha-base-url"),R=new e.OlP("recaptcha-nonce-tag"),y=new e.OlP("recaptcha-settings"),w=new e.OlP("recaptcha-v3-site-key"),Z_loadScript=function E(o,s,t,i,r){window.ng2recaptchaloaded=()=>{s(grecaptcha)};const n=document.createElement("script");n.innerHTML="",n.src=`${i||"https://www.google.com/recaptcha/api.js"}?render=${o}&onload=ng2recaptchaloaded${t}`,r&&(n.nonce=r),n.async=!0,n.defer=!0,document.head.appendChild(n)};let g=(()=>{class o{constructor(t,i,r,n,u){this.platformId=t,this.language=i,this.baseUrl=r,this.nonce=n,this.v3SiteKey=u,this.init(),this.ready=(0,a.NF)(this.platformId)?o.ready.asObservable():(0,b.of)()}init(){if(!o.ready&&(0,a.NF)(this.platformId)){const t=new A.X(null);o.ready=t,Z_loadScript(this.v3SiteKey||"explicit",n=>t.next(n),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return o.ready=null,o.\u0275fac=function(t){return new(t||o)(e.LFG(e.Lbi),e.LFG(x,8),e.LFG(_,8),e.LFG(R,8),e.LFG(w,8))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),T=0,M=(()=>{class o{constructor(t,i,r,n){this.elementRef=t,this.loader=i,this.zone=r,this.id="ngrecaptcha-"+T++,this.errorMode="default",this.resolved=new e.vpe,this.error=new e.vpe,n&&(this.siteKey=n.siteKey,this.theme=n.theme,this.type=n.type,this.size=n.size,this.badge=n.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(t=>{null!=t&&t.render instanceof Function&&(this.grecaptcha=t,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}errored(t){this.error.emit(t)}captchaResponseCallback(t){this.resolved.emit(t)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){const t={badge:this.badge,callback:i=>{this.zone.run(()=>this.captchaResponseCallback(i))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(t["error-callback"]=(...i)=>{this.zone.run(()=>this.errored(i))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(g),e.Y36(e.R0b),e.Y36(y,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(t,i){2&t&&e.uIk("id",i.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(t,i){},encapsulation:2}),o})(),F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})(),S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[g],imports:[[F]]}),o})();function B(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"re-captcha",10),e.NdJ("resolved",function(){return e.CHM(t),e.oxw(2).resolveReCaptcha()}),e.qZA()}}function j(o,s){1&o&&(e.ynx(0),e.TgZ(1,"iframe",11),e._uU(2,"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026"),e.qZA(),e.BQk())}function U(o,s){if(1&o&&(e.TgZ(0,"div",4)(1,"h4",5),e._uU(2,"Contact Address / \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),e.qZA()(),e.TgZ(3,"div",6)(4,"div",7),e.YNc(5,B,1,0,"re-captcha",8),e.YNc(6,j,3,0,"ng-container",9),e.qZA()()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",!t.isShowed),e.xp6(1),e.Q6J("ngIf",t.isShowed)}}let D=(()=>{class o{constructor(t,i,r){this.modalService=t,this.messageService=i,this.isShowed=!1,r.setTitle("Contact | Kemu Portal")}open(t){this.modalService.open(t,{centered:!0,size:"lg"})}resolveReCaptcha(){this.isShowed=!0}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.FF),e.Y36(C.e),e.Y36(p.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-contact"]],decls:17,vars:0,consts:[[1,"container","mt-3"],[1,"mt-3","d-flex","justify-content-center"],["matRipple","",1,"btn","btn-secondary","mt-3",3,"click"],["content",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"d-flex","justify-content-center"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved",4,"ngIf"],[4,"ngIf"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved"],["src","https://docs.google.com/forms/d/e/1FAIpQLSeEw2fPgmvruDNQC3UK62PUOZbCXGzoKgtvYL4CIP1DO7wAag/viewform?embedded=true","width","640","height","677","frameborder","0","marginheight","0","marginwidth","0"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Contact"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div"),e._uU(5,"\u4ed5\u4e8b\u306e\u4f9d\u983c\u306a\u3069\u306f\u4ee5\u4e0b\u306e\u30d5\u30a9\u30fc\u30e0\u3088\u308a\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),e._UZ(6,"br"),e._uU(7,"\u30bb\u30fc\u30eb\u30b9\u30e1\u30fc\u30eb\u306f\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002"),e.qZA(),e.TgZ(8,"div"),e._uU(9,"Please use the following form for work requests."),e._UZ(10,"br"),e._uU(11,"Please refrain from sales emails."),e.qZA(),e.TgZ(12,"div",1)(13,"button",2),e.NdJ("click",function(){e.CHM(r);const u=e.MAs(16);return i.open(u)}),e._uU(14," \u30d5\u30a9\u30fc\u30e0\u306b\u5165\u529b\u3059\u308b / Fill out the form "),e.qZA()()(),e.YNc(15,U,7,2,"ng-template",null,3,e.W1O)}},directives:[m.wG,a.O5,M],encapsulation:2}),o})();var f=c(939),v=c(3251),O=c(5695);function V(o,s){1&o&&(e.TgZ(0,"span",6),e._uU(1,"New"),e.qZA())}function N(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().navigateArticles(n.key)}),e.YNc(5,V,2,0,"span",5),e._uU(6),e.qZA()()}if(2&o){const t=s.$implicit,i=s.index;e.xp6(2),e.Oqu(e.xi3(3,3,t.value.created_at,"yyyy.MM.dd")),e.xp6(3),e.Q6J("ngIf",0===i),e.xp6(1),e.hij("",t.value.title," ")}}let P=(()=>{class o{constructor(t,i,r){this.keyValuePipe=t,this.articlesService=i,this.router=r,this.articles={},this.logs={}}ngOnInit(){this.articlesService.getList("/assets/articles/list.json").subscribe(t=>this.articles=t),this.articlesService.getList("/assets/logs/list.json").subscribe(t=>this.logs=t)}get news(){return this.keyValuePipe.transform(Object.assign({},this.articles,this.logs)).sort((t,i)=>Number(i.key)-Number(t.key))}navigateArticles(t){Object.keys(this.articles).includes(t)?this.router.navigate(["/blog/",t]):this.router.navigate(["/log/",t])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.Nd),e.Y36(O.J),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-news"]],decls:2,vars:1,consts:[["id","news",1,"list-group","border"],["class","text-start mt-1 ms-1",4,"ngFor","ngForOf"],[1,"text-start","mt-1","ms-1"],[1,"text-muted"],["matRipple","",1,"list-group-item","border-0",2,"cursor","pointer",3,"click"],["class","badge bg-danger me-1",4,"ngIf"],[1,"badge","bg-danger","me-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,N,7,6,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.news))},directives:[a.sg,m.wG,a.O5],pipes:[a.uU],styles:["#news[_ngcontent-%COMP%]{overflow-y:scroll;max-height:600px}"]}),o})();function I(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"a",2),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().transitTool(n)}),e.TgZ(1,"div",3)(2,"div",4),e._uU(3),e.qZA(),e._uU(4),e.qZA()()}if(2&o){const t=s.$implicit;e.xp6(3),e.Oqu(t.label),e.xp6(1),e.hij(" ",t.description," ")}}let q=(()=>{class o{constructor(t,i){this.router=t,this.toolsService=i,this.tools=[]}ngOnInit(){this.toolsService.get().subscribe(t=>this.tools=t)}transitTool(t){t.external?window.location.href=t.link:this.router.navigate([t.link])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.F0),e.Y36(f.G))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tools-list"]],decls:2,vars:1,consts:[["id","tools",1,"list-group"],["class","list-group-item d-flex","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex",2,"cursor","pointer",3,"click"],[1,"text-start"],[1,"fw-bold"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,I,5,2,"a",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.tools))},directives:[a.sg],styles:["#tools[_ngcontent-%COMP%]{overflow-y:scroll;max-height:500px}"]}),o})();var L=c(1175);const k=[{path:"",component:(()=>{class o{constructor(t,i,r,n){this.route=i,this.router=r,this.toolsService=n,this.tools=[],t.setTitle("Kemu Portal")}ngOnInit(){var t,i;this.toolsService.get().subscribe(u=>this.tools=u);const r=this.route.snapshot.queryParamMap.get("to"),n=new URLSearchParams(null!==(t=this.route.snapshot.queryParamMap.get("search"))&&void 0!==t?t:"");r&&this.router.navigate([r],{fragment:null!==(i=this.route.snapshot.fragment)&&void 0!==i?i:void 0,queryParams:Object.fromEntries(n)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Dx),e.Y36(l.gz),e.Y36(l.F0),e.Y36(f.G))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-index"]],decls:44,vars:1,consts:[["type","warning",1,"my-0","py-1",3,"dismissible"],[1,"container","text-center","mt-3"],[1,"overflow-auto"],["label","2022"],["width","100%","src","/assets/iframes/weed_2022.html"],["label","2021"],["width","100%","src","/assets/iframes/weed_2021.html"],["label","2020"],["width","100%","src","/assets/iframes/weed_2020.html"],["label","2019"],["width","100%","src","/assets/iframes/weed_2019.html"],["label","2018"],["width","100%","src","/assets/iframes/weed_2018.html"],["label","2017"],["width","100%","src","/assets/iframes/weed_2017.html"],[1,"row"],[1,"col-md-6"],["href","/rss.xml",1,"btn","btn-sm","btn-light","border","text-muted"],[1,"bi","bi-rss"],[1,"border","border-light","rounded","shadow"],[1,"mt-2"],[1,"list-group","shadow"],["href","https://kemu.site",1,"list-group-item","d-flex"],[1,"text-start"],[1,"fw-bold"],[1,"mt-5","d-flex","justify-content-center"],["type","auto"]],template:function(t,i){1&t&&(e.TgZ(0,"ngb-alert",0),e._uU(1,"\u3053\u306e\u30b5\u30a4\u30c8\u306f\u5e83\u544a\u53ce\u76ca\u3067\u6210\u308a\u7acb\u3063\u3066\u3044\u307e\u3059\u3002\u5e83\u544a\u30d6\u30ed\u30c3\u30af\u30c4\u30fc\u30eb\u306f\u505c\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n"),e.qZA(),e.TgZ(2,"div",1)(3,"div")(4,"h2"),e._uU(5,"Contributions"),e.qZA(),e.TgZ(6,"div",2)(7,"mat-tab-group")(8,"mat-tab",3),e._UZ(9,"iframe",4),e.qZA(),e.TgZ(10,"mat-tab",5),e._UZ(11,"iframe",6),e.qZA(),e.TgZ(12,"mat-tab",7),e._UZ(13,"iframe",8),e.qZA(),e.TgZ(14,"mat-tab",9),e._UZ(15,"iframe",10),e.qZA(),e.TgZ(16,"mat-tab",11),e._UZ(17,"iframe",12),e.qZA(),e.TgZ(18,"mat-tab",13),e._UZ(19,"iframe",14),e.qZA()()(),e._UZ(20,"hr"),e.qZA(),e.TgZ(21,"div",15)(22,"div",16)(23,"h2"),e._uU(24," News "),e.TgZ(25,"a",17),e._UZ(26,"i",18),e.qZA()(),e.TgZ(27,"div",19),e._UZ(28,"app-news"),e.qZA()(),e.TgZ(29,"div",16)(30,"h2"),e._uU(31,"Tools"),e.qZA(),e.TgZ(32,"div",19),e._UZ(33,"app-tools-list"),e.qZA(),e.TgZ(34,"h2",20),e._uU(35,"Links"),e.qZA(),e.TgZ(36,"ol",21)(37,"a",22)(38,"div",23)(39,"div",24),e._uU(40,"\u65e7\u30d6\u30ed\u30b0"),e.qZA(),e._uU(41," 2022-03\u4ee5\u524d\u306b\u7ba1\u7406\u3057\u3066\u3044\u305f\u30d6\u30ed\u30b0\u3001\u9803\u5408\u3044\u3092\u898b\u3066\u505c\u6b62\u4e88\u5b9a\u3067\u3059\u3002 "),e.qZA()()()()()(),e.TgZ(42,"div",25),e._UZ(43,"app-ads",26),e.qZA()),2&t&&e.Q6J("dismissible",!1)},directives:[h.xm,v.SP,v.uX,P,q,L.F],encapsulation:2}),o})()},{path:"contact",component:D}];let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(k)],l.Bz]}),o})();var z=c(4466);let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[a.Nd],imports:[[a.ez,Y,h.IJ,S,z.m]]}),o})()}}]);