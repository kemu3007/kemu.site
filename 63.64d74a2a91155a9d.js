"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[63],{17063:(Y,d,r)=>{r.r(d),r.d(d,{HomeModule:()=>L});var a=r(69808),l=r(56609),e=r(5e3),h=r(7569),g=r(39601),p=r(22313),v=r(39646),C=r(61135);const b=new e.OlP("recaptcha-language"),A=new e.OlP("recaptcha-base-url"),x=new e.OlP("recaptcha-nonce-tag"),_=new e.OlP("recaptcha-settings"),y=new e.OlP("recaptcha-v3-site-key"),E_loadScript=function R(o,n,t,i,s){window.ng2recaptchaloaded=()=>{n(grecaptcha)};const c=document.createElement("script");c.innerHTML="",c.src=`${i||"https://www.google.com/recaptcha/api.js"}?render=${o}&onload=ng2recaptchaloaded${t}`,s&&(c.nonce=s),c.async=!0,c.defer=!0,document.head.appendChild(c)};let m=(()=>{class o{constructor(t,i,s,c,u){this.platformId=t,this.language=i,this.baseUrl=s,this.nonce=c,this.v3SiteKey=u,this.init(),this.ready=(0,a.NF)(this.platformId)?o.ready.asObservable():(0,v.of)()}init(){if(!o.ready&&(0,a.NF)(this.platformId)){const t=new C.X(null);o.ready=t,E_loadScript(this.v3SiteKey||"explicit",c=>t.next(c),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return o.ready=null,o.\u0275fac=function(t){return new(t||o)(e.LFG(e.Lbi),e.LFG(b,8),e.LFG(A,8),e.LFG(x,8),e.LFG(y,8))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),w=0,Z=(()=>{class o{constructor(t,i,s,c){this.elementRef=t,this.loader=i,this.zone=s,this.id="ngrecaptcha-"+w++,this.errorMode="default",this.resolved=new e.vpe,this.error=new e.vpe,c&&(this.siteKey=c.siteKey,this.theme=c.theme,this.type=c.type,this.size=c.size,this.badge=c.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(t=>{null!=t&&t.render instanceof Function&&(this.grecaptcha=t,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}errored(t){this.error.emit(t)}captchaResponseCallback(t){this.resolved.emit(t)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){const t={badge:this.badge,callback:i=>{this.zone.run(()=>this.captchaResponseCallback(i))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(t["error-callback"]=(...i)=>{this.zone.run(()=>this.errored(i))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(m),e.Y36(e.R0b),e.Y36(_,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(t,i){2&t&&e.uIk("id",i.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(t,i){},encapsulation:2}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})(),T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[m],imports:[[M]]}),o})();function F(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"re-captcha",10),e.NdJ("resolved",function(){return e.CHM(t),e.oxw(2).resolveReCaptcha()}),e.qZA()}}function S(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).copyAddress()}),e._uU(1," \u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc / copy email address "),e.qZA()}}function B(o,n){if(1&o&&(e.TgZ(0,"div",4)(1,"h4",5),e._uU(2,"Contact Address / \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),e.qZA()(),e.TgZ(3,"div",6)(4,"div",7),e.YNc(5,F,1,0,"re-captcha",8),e.YNc(6,S,2,0,"button",9),e.qZA()()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",!t.isShowed),e.xp6(1),e.Q6J("ngIf",t.isShowed)}}let j=(()=>{class o{constructor(t,i,s){this.modalService=t,this.messageService=i,this.isShowed=!1,s.setTitle("kemu contact")}open(t){this.modalService.open(t,{centered:!0})}resolveReCaptcha(){this.isShowed=!0}copyAddress(){navigator.clipboard.writeText("kemu430113+portal@gmail.com").then(()=>this.messageService.pushMessage({type:"info",body:"copied email address to your clipboard (*\u309d\u03c9\u30fb)\uff89"})).catch(()=>this.messageService.pushMessage({type:"danger",body:"we can't access your clipboard (\u25c7\xb4\u0414\uff40\uff9f"})).finally(()=>this.modalService.dismissAll())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.FF),e.Y36(g.e),e.Y36(p.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-contact"]],decls:17,vars:0,consts:[[1,"container","mt-3"],[1,"mt-3","d-flex","justify-content-center"],[1,"btn","btn-secondary","mt-3",3,"click"],["content",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"d-flex","justify-content-center"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved",4,"ngIf"],["class","btn btn-secondary",3,"click",4,"ngIf"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved"],[1,"btn","btn-secondary",3,"click"]],template:function(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Contact"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div"),e._uU(5,"\u4ed5\u4e8b\u306e\u4f9d\u983c\u306a\u3069\u306f\u4ee5\u4e0b\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),e._UZ(6,"br"),e._uU(7,"\u30bb\u30fc\u30eb\u30b9\u30e1\u30fc\u30eb\u306f\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002"),e.qZA(),e.TgZ(8,"div"),e._uU(9,"Please use the following e-mail address for work requests."),e._UZ(10,"br"),e._uU(11,"Please refrain from sales emails."),e.qZA(),e.TgZ(12,"div",1)(13,"button",2),e.NdJ("click",function(){e.CHM(s);const u=e.MAs(16);return i.open(u)}),e._uU(14,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u624b\u3059\u308b"),e.qZA()()(),e.YNc(15,B,7,2,"ng-template",null,3,e.W1O)}},directives:[a.O5,Z],encapsulation:2}),o})();var U=r(82923),f=r(53251),V=r(13996);function D(o,n){1&o&&(e.TgZ(0,"span",6),e._uU(1,"new! "),e.qZA())}const N=function(o){return["/blog",o]};function k(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"span",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"a",4),e.YNc(5,D,2,0,"span",5),e._uU(6),e.qZA()()),2&o){const t=n.$implicit,i=n.index;e.xp6(2),e.Oqu(e.xi3(3,4,t.value.created_at,"yyyy.MM.dd")),e.xp6(2),e.Q6J("routerLink",e.VKq(7,N,t.key)),e.xp6(1),e.Q6J("ngIf",0===i),e.xp6(1),e.hij("",t.value.title," ")}}let O=(()=>{class o{constructor(t){this.keyValuePipe=t}get articles(){return this.keyValuePipe.transform(V).sort((t,i)=>Number(i.key)-Number(t.key))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.Nd))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-news"]],decls:2,vars:1,consts:[["id","news",1,"list-group","border"],["class","text-start mt-1 ms-1",4,"ngFor","ngForOf"],[1,"text-start","mt-1","ms-1"],[1,"text-muted"],[1,"list-group-item","border-0",3,"routerLink"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,k,7,9,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.articles))},directives:[a.sg,l.yS,a.O5],pipes:[a.uU],styles:["#news[_ngcontent-%COMP%]{overflow-y:scroll;max-height:600px}"]}),o})();var I=r(11175);function q(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"a",25),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().transitTool(c)}),e.TgZ(1,"div",21)(2,"div",22),e._uU(3),e.qZA(),e._uU(4),e.qZA()()}if(2&o){const t=n.$implicit;e.xp6(3),e.Oqu(t.label),e.xp6(1),e.hij(" ",t.description," ")}}const P=[{path:"",component:(()=>{class o{constructor(t,i,s){this.route=i,this.router=s,this.tools=U,t.setTitle("kemu portal")}ngOnInit(){var t;const i=this.route.snapshot.queryParamMap.get("to");i&&this.router.navigate([i],{fragment:null!==(t=this.route.snapshot.fragment)&&void 0!==t?t:void 0})}transitTool(t){t.external?window.location.href=t.link:this.router.navigate([t.link])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Dx),e.Y36(l.gz),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-index"]],decls:40,vars:1,consts:[[1,"container","text-center","mt-3"],[1,"overflow-auto"],["label","2022"],["width","100%","src","/assets/iframes/weed_2022.html"],["label","2021"],["width","100%","src","/assets/iframes/weed_2021.html"],["label","2020"],["width","100%","src","/assets/iframes/weed_2020.html"],["label","2019"],["width","100%","src","/assets/iframes/weed_2019.html"],["label","2018"],["width","100%","src","/assets/iframes/weed_2018.html"],["label","2017"],["width","100%","src","/assets/iframes/weed_2017.html"],[1,"row"],[1,"col-md-6"],[1,"border","border-light","rounded"],[1,"list-group"],["class","list-group-item d-flex","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"mt-2"],["href","https://kemu.site",1,"list-group-item","d-flex"],[1,"text-start"],[1,"fw-bold"],[1,"mt-5","d-flex","justify-content-center"],["type","auto"],[1,"list-group-item","d-flex",2,"cursor","pointer",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"h2"),e._uU(3,"Contributions"),e.qZA(),e.TgZ(4,"div",1)(5,"mat-tab-group")(6,"mat-tab",2),e._UZ(7,"iframe",3),e.qZA(),e.TgZ(8,"mat-tab",4),e._UZ(9,"iframe",5),e.qZA(),e.TgZ(10,"mat-tab",6),e._UZ(11,"iframe",7),e.qZA(),e.TgZ(12,"mat-tab",8),e._UZ(13,"iframe",9),e.qZA(),e.TgZ(14,"mat-tab",10),e._UZ(15,"iframe",11),e.qZA(),e.TgZ(16,"mat-tab",12),e._UZ(17,"iframe",13),e.qZA()()(),e._UZ(18,"hr"),e.qZA(),e.TgZ(19,"div",14)(20,"div",15)(21,"h2"),e._uU(22,"News"),e.qZA(),e.TgZ(23,"div",16),e._UZ(24,"app-news"),e.qZA()(),e.TgZ(25,"div",15)(26,"h2"),e._uU(27,"Tools"),e.qZA(),e.TgZ(28,"ol",17),e.YNc(29,q,5,2,"a",18),e.qZA(),e.TgZ(30,"h2",19),e._uU(31,"Links"),e.qZA(),e.TgZ(32,"ol",17)(33,"a",20)(34,"div",21)(35,"div",22),e._uU(36,"\u65e7\u30d6\u30ed\u30b0"),e.qZA(),e._uU(37," 2022-03\u4ee5\u524d\u306b\u7ba1\u7406\u3057\u3066\u3044\u305f\u30d6\u30ed\u30b0\u3001\u9803\u5408\u3044\u3092\u898b\u3066\u505c\u6b62\u4e88\u5b9a\u3067\u3059\u3002 "),e.qZA()()()()()(),e.TgZ(38,"div",23),e._UZ(39,"app-ads",24),e.qZA()),2&t&&(e.xp6(29),e.Q6J("ngForOf",i.tools))},directives:[f.SP,f.uX,O,a.sg,I.F],encapsulation:2}),o})()},{path:"contact",component:j}];let z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(P)],l.Bz]}),o})();var H=r(44466);let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[a.Nd],imports:[[a.ez,z,h.IJ,T,H.m]]}),o})()}}]);