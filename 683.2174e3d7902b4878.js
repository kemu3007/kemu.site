"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[683],{1441:(pt,j,c)=>{c.d(j,{x:()=>C});var d=c(5e3);let C=(()=>{class a{ngAfterViewInit(){const p=document.createElement("script");p.async=!0,p.src="https://platform.twitter.com/widgets.js",document.getElementById("btn").insertAdjacentElement("afterend",p)}}return a.\u0275fac=function(p){return new(p||a)},a.\u0275cmp=d.Xpm({type:a,selectors:[["app-tweet-btn"]],decls:2,vars:0,consts:[["id","btn","href","https://twitter.com/share?ref_src=twsrc%5Etfw","data-show-count","false",1,"twitter-share-button"]],template:function(p,m){1&p&&(d.TgZ(0,"a",0),d._uU(1,"tweet"),d.qZA())},encapsulation:2}),a})()},5683:(pt,j,c)=>{c.r(j),c.d(j,{ToolsModule:()=>Ze});var d=c(9808),C=c(6609),a=c(2382),_=c(6451),p=c(9770),m=c(9646),A=c(7579),H=c(9751),W=c(576);function F(n){return!!n&&(n instanceof H.y||(0,W.m)(n.lift)&&(0,W.m)(n.subscribe))}var X=c(2076),E=c(4004),h=c(1884),N=c(3900),ft=c(8372),K=c(5698),mt=c(8505);function $(n){return(0,_.T)((0,p.P)(()=>(0,m.of)(n.getRawValue())),n.valueChanges.pipe((0,E.U)(()=>n.getRawValue())))}function g(n,e){return(0,_.T)((0,p.P)(()=>(0,m.of)(n[e])),n.statusChanges.pipe((0,E.U)(()=>n[e]),(0,h.x)()))}function S(n,e,r){e?n.enable(r):n.disable(r)}function J(n,e,r){S(n,!e,r)}function M(n,e,r){return e.subscribe(s=>J(n,s,r))}function L(n,e,r){return e.subscribe(s=>S(n,s,r))}function R(n,e){return n||e?Object.assign(Object.assign({},n),e):null}function P(n,e){if(!n)return null;const r=Object.assign({},n);return delete r[e],Object.keys(r).length>0?r:null}function x(n,e,r,s){return e.hasError(r,s&&0!==s.length?s:void 0)&&e[n]}function z(n,e){return(0,_.T)((0,p.P)(()=>(0,m.of)(n.errors)),e,n.valueChanges.pipe((0,E.U)(()=>n.errors),(0,h.x)((r,s)=>JSON.stringify(r)===JSON.stringify(s))))}class D extends a.cw{constructor(e,r,s){super(e,r,s),this.controls=e,this.touchChanges=new A.x,this.dirtyChanges=new A.x,this.errorsSubject=new A.x,this.touch$=this.touchChanges.asObservable().pipe((0,h.x)()),this.dirty$=this.dirtyChanges.asObservable().pipe((0,h.x)()),this.value$=$(this),this.disabled$=g(this,"disabled"),this.enabled$=g(this,"enabled"),this.status$=g(this,"status"),this.errors$=z(this,this.errorsSubject.asObservable())}select(e){return function ht(n,e){return n.value$.pipe((0,E.U)(e),(0,h.x)())}(this,e)}get(e){return super.get(e)}setValue(e,r){if(F(e))return e.subscribe(s=>super.setValue(s,r));super.setValue(e,r)}patchValue(e,r){if(F(e))return e.subscribe(s=>super.patchValue(s,r));super.patchValue(e,r)}getRawValue(){return super.getRawValue()}markAsTouched(...e){super.markAsTouched(...e),this.touchChanges.next(!0)}markAsUntouched(...e){super.markAsUntouched(...e),this.touchChanges.next(!1)}markAsPristine(...e){super.markAsPristine(...e),this.dirtyChanges.next(!1)}markAsDirty(...e){super.markAsDirty(...e),this.dirtyChanges.next(!0)}markAllAsDirty(){!function tt(n){n.markAsDirty({onlySelf:!0}),n._forEachChild(e=>{var r;return(null===(r=e.markAllAsDirty)||void 0===r?void 0:r.call(e))||e.markAsDirty({onlySelf:!0})})}(this)}setEnable(e=!0,r){S(this,e,r)}setDisable(e=!0,r){J(this,e,r)}disabledWhile(e,r){return M(this,e,r)}enabledWhile(e,r){return L(this,e,r)}reset(e,r){super.reset(e,r)}setValidators(e,r){super.setValidators(e),super.updateValueAndValidity(r)}setAsyncValidators(e,r){super.setAsyncValidators(e),super.updateValueAndValidity(r)}getError(...e){return super.getError(...e)}setErrors(...e){var r;return null===(r=this.errorsSubject)||void 0===r||r.next(e[0]),super.setErrors(...e)}mergeErrors(e,r){this.setErrors(R(this.errors,e),r)}removeError(e,r){this.setErrors(P(this.errors,e),r)}hasErrorAndTouched(e,r){return x("touched",this,e,r)}hasErrorAndDirty(e,r){return x("dirty",this,e,r)}}class b extends a.NI{constructor(e,r,s){super(e,r,s),this.touchChanges=new A.x,this.dirtyChanges=new A.x,this.errorsSubject=new A.x,this.touch$=this.touchChanges.asObservable().pipe((0,h.x)()),this.dirty$=this.dirtyChanges.asObservable().pipe((0,h.x)()),this.value$=$(this),this.disabled$=g(this,"disabled"),this.enabled$=g(this,"enabled"),this.status$=g(this,"status"),this.errors$=z(this,this.errorsSubject.asObservable())}setValue(e,r){if(F(e))return e.subscribe(s=>super.setValue(s,r));super.setValue(e,r)}patchValue(e,r){if(F(e))return e.subscribe(s=>super.patchValue(s,r));super.patchValue(e,r)}getRawValue(){return this.value}markAsTouched(...e){super.markAsTouched(...e),this.touchChanges.next(!0)}markAsUntouched(...e){super.markAsUntouched(...e),this.touchChanges.next(!1)}markAsPristine(...e){super.markAsPristine(...e),this.dirtyChanges.next(!1)}markAsDirty(...e){super.markAsDirty(...e),this.dirtyChanges.next(!0)}setEnable(e=!0,r){S(this,e,r)}setDisable(e=!0,r){J(this,e,r)}disabledWhile(e,r){return M(this,e,r)}enabledWhile(e,r){return L(this,e,r)}reset(e,r){super.reset(e,r)}setValidators(e,r){super.setValidators(e),super.updateValueAndValidity(r)}setAsyncValidators(e,r){super.setAsyncValidators(e),super.updateValueAndValidity(r)}getError(...e){return super.getError(...e)}setErrors(...e){var r;return null===(r=this.errorsSubject)||void 0===r||r.next(e[0]),super.setErrors(...e)}mergeErrors(e,r){this.setErrors(R(this.errors,e),r)}removeError(e,r){this.setErrors(P(this.errors,e),r)}hasErrorAndTouched(e){return x("touched",this,e)}hasErrorAndDirty(e){return x("dirty",this,e)}}function q(n,e,{debounceTime:r,manager:s,arrControlFactory:o,persistDisabledControls:i}){const u=s||new wt;return function Ct(n,e,r,s){return it(r.getValue(e)).pipe((0,K.q)(1),(0,mt.b)(o=>{!o||(s&&function _t(n,e,r){Object.keys(e).forEach(s=>{const o=e[s];if(Array.isArray(o)&&n.get(s)instanceof a.Oe){if(!r||r&&!(s in r))throw new Error(`Please provide arrControlFactory for ${s}`);const i=n.get(s),u=r[s];(function xt(n){for(;0!==n.length;)n.removeAt(0)})(i),o.forEach((l,f)=>i.insert(f,u(l)))}})}(n,o,s),n.patchValue(o,{emitEvent:!1}))}))}(n,e,u,o).pipe((0,N.w)(()=>function Tt(n,e,r){return n.valueChanges.pipe((0,ft.b)(r.debounceTime),(0,N.w)(s=>it(r.manager.setValue(e,r.persistDisabledControls?n.getRawValue():s))))}(n,e,{debounceTime:r||250,manager:u,persistDisabledControls:i})))}function it(n){return F(n)||function Ut(n){return"function"==typeof(null==n?void 0:n.then)}(n)?(0,X.D)(n):(0,m.of)(n)}class wt{setValue(e,r){return localStorage.setItem(e,JSON.stringify(r)),r}getValue(e){return JSON.parse(localStorage.getItem(e)||"{}")}}var t=c(5e3),B=c(9601),Z=c(2313),O=c(8304),U=c(1441),v=c(1175);function Ft(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"div")(1,"div",18),t._uU(2," RESULT"),t.TgZ(3,"button",19),t.NdJ("click",function(){t.CHM(r);const o=t.oxw();return o.copy(o.result)}),t._UZ(4,"i",20),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"a",21),t._uU(7),t.qZA()(),t._UZ(8,"hr"),t._uU(9," \u751f\u6210\u3057\u305f\u30ea\u30f3\u30af\u306e\u78ba\u8a8d\u306f"),t.TgZ(10,"a",22),t._uU(11,"\u3053\u3061\u3089"),t.qZA(),t._uU(12,"\u304b\u3089 "),t.qZA()}if(2&n){const r=t.oxw();t.xp6(6),t.Q6J("href",r.result,t.LSH),t.xp6(1),t.Oqu(r.result)}}let Et=(()=>{class n{constructor(r,s,o){this.messageService=r,this.form=new D({associateId:new b("kemu03-22",a.kI.required),product:new b("",[a.kI.required])}),this.result="",s.setTitle("kemu tools | Amazon Associate Linker"),o.breadcrumb="/tools/Amazon Associate Linker"}ngOnInit(){q(this.form,"associate",{}).subscribe(),this.form.valid&&this.generate()}useDefault(){this.form.controls.associateId.patchValue("kemu03-22")}copy(r){window.navigator.clipboard.writeText(r),this.messageService.pushMessage({type:"info",body:"\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002"})}generate(){const r=new URL(this.form.controls.product.value);this.result=`${r.origin}${r.pathname}?tag=${this.form.controls.associateId.value}`}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(B.e),t.Y36(Z.Dx),t.Y36(O.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-amazon-associate"]],decls:34,vars:4,consts:[[1,"mt-3","container-fluid"],[1,"row"],[1,"col-md-8"],[1,"mb-3"],[1,"d-flex","justify-content-end"],["href","https://affiliate.amazon.co.jp/help/node/topic/GRXPHT8U84RAYDXZ"],[3,"formGroup"],[1,"mt-3"],["for","associateId",1,"form-label"],[1,"input-group"],["id","associateId","formControlName","associateId",1,"form-control"],[1,"btn","btn-outline-secondary",3,"click"],["for","product",1,"form-label"],["id","product","placeholder","https://www.amazon.co.jp/...","formControlName","product",1,"form-control"],[1,"btn","btn-secondary",3,"disabled","click"],[4,"ngIf"],[1,"col-md-4"],["type","box",3,"count"],[1,"mt-3",2,"overflow-wrap","anywhere"],[1,"ms-1","btn","btn-sm",3,"click"],[1,"bi","bi-stickies"],[3,"href"],["href","https://affiliate.amazon.co.jp/home/tools/linkchecker"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Amazon Associate Linker"),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"app-tweet-btn"),t.qZA(),t._uU(7," \u30a2\u30bd\u30b7\u30a8\u30a4\u30c8ID\u3068\u5546\u54c1URL\u3092\u5143\u306b\u30a2\u30bd\u30b7\u30a8\u30a4\u30c8\u30ea\u30f3\u30af\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),t._UZ(8,"br"),t._uU(9," \u751f\u6210\u3055\u308c\u305f\u30ea\u30f3\u30af\u3092\u5143\u306b\u8cfc\u5165\u3059\u308b\u3053\u3068\u3067\u30a2\u30bd\u30b7\u30a8\u30a4\u30c8ID\u306e\u6301\u3061\u4e3b\u306b\u5546\u54c1\u4fa1\u683c\u306e\u6570%\u306e\u30ea\u30d9\u30fc\u30c8\u304c\u9001\u3089\u308c\u307e\u3059\u3002"),t._UZ(10,"br")(11,"br"),t._uU(12," \u53c2\u8003: "),t.TgZ(13,"a",5),t._uU(14,"\u30a2\u30bd\u30b7\u30a8\u30a4\u30c8\u30fb\u30d7\u30ed\u30b0\u30e9\u30e0\u7d39\u4ecb\u6599\u7387\u8868"),t.qZA(),t.TgZ(15,"form",6)(16,"div",7)(17,"label",8),t._uU(18,"Associate ID"),t.qZA(),t.TgZ(19,"div",9),t._UZ(20,"input",10),t.TgZ(21,"button",11),t.NdJ("click",function(){return s.useDefault()}),t._uU(22,"DEFAULT"),t.qZA()()(),t.TgZ(23,"div",7)(24,"label",12),t._uU(25,"\u5546\u54c1URL"),t.qZA(),t._UZ(26,"input",13),t.qZA(),t.TgZ(27,"div",7)(28,"button",14),t.NdJ("click",function(){return s.generate()}),t._uU(29,"GENERATE"),t.qZA()()(),t._UZ(30,"hr"),t.YNc(31,Ft,13,2,"div",15),t.qZA(),t.TgZ(32,"div",16),t._UZ(33,"app-ads",17),t.qZA()()()),2&r&&(t.xp6(15),t.Q6J("formGroup",s.form),t.xp6(13),t.Q6J("disabled",!s.form.valid),t.xp6(3),t.Q6J("ngIf",s.result),t.xp6(2),t.Q6J("count",2))},directives:[U.x,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,d.O5,v.F],encapsulation:2}),n})();var T=c(6827);function St(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"form",13)(1,"label"),t._uU(2,"\u5909\u63db\u3059\u308b\u6587\u5b57\u5217"),t.qZA(),t._UZ(3,"textarea",14),t.qZA(),t._UZ(4,"hr",3),t._uU(5," Base64"),t.TgZ(6,"button",15),t.NdJ("click",function(){t.CHM(r);const o=t.oxw();return o.copy(o.encodedData)}),t._UZ(7,"i",16),t.qZA(),t.TgZ(8,"pre"),t._uU(9),t.qZA()}if(2&n){const r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(9),t.Oqu(r.encodedData)}}function Bt(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"form",13)(1,"label"),t._uU(2,"Base64"),t.qZA(),t._UZ(3,"textarea",17),t.qZA(),t._UZ(4,"hr",3),t._uU(5," \u5909\u63db\u5f8c\u306e\u6587\u5b57\u5217"),t.TgZ(6,"button",15),t.NdJ("click",function(){t.CHM(r);const o=t.oxw();return o.copy(o.decodedData)}),t._UZ(7,"i",16),t.qZA(),t.TgZ(8,"pre"),t._uU(9),t.qZA(),t._uU(10," \u5909\u63db\u5f8c\u306e\u6587\u5b57\u5217(\u30de\u30eb\u30c1\u30d0\u30a4\u30c8\u6587\u5b57\u3092\u542b\u3080\u5834\u5408)"),t.TgZ(11,"button",15),t.NdJ("click",function(){t.CHM(r);const o=t.oxw();return o.copy(o.decodeMultiByte)}),t._UZ(12,"i",16),t.qZA(),t.TgZ(13,"pre"),t._uU(14),t.qZA()}if(2&n){const r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(9),t.Oqu(r.decodedData),t.xp6(5),t.Oqu(r.decodeMultiByte)}}let Ot=(()=>{class n{constructor(r,s,o){this.messageService=o,this.form=new D({rawData:new b(""),base64Data:new b("")}),r.setTitle("kemu tools | Base64 Encoder/Decoder"),s.breadcrumb="/tools/Base64 Encoder/Decoder"}ngOnInit(){q(this.form,"base64",{}).subscribe()}copy(r){window.navigator.clipboard.writeText(r),this.messageService.pushMessage({type:"info",body:"\u5909\u63db\u5f8c\u306e\u30c7\u30fc\u30bf\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002"})}get encodedData(){try{return btoa(this.form.controls.rawData.value)}catch(r){try{return btoa(encodeURIComponent(this.form.controls.rawData.value))}catch(s){return s.toString()}}}get decodedData(){try{return atob(this.form.controls.base64Data.value)}catch(r){return r.toString()}}get decodeMultiByte(){try{return decodeURIComponent(atob(this.form.controls.base64Data.value))}catch(r){return r.toString()}}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(Z.Dx),t.Y36(O.p),t.Y36(B.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-base64"]],decls:22,vars:2,consts:[[1,"container-fluid","mt-3","row"],[1,"col-md-8"],[1,"d-flex","justify-content-end"],[1,"mb-3"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavOutlet"],["type","list"],[1,"col-md-4"],["type","box",3,"count"],[1,"mt-3",3,"formGroup"],["formControlName","rawData","rows","10",1,"form-control"],[1,"ms-1","btn","btn-sm",3,"click"],[1,"bi","bi-stickies"],["formControlName","base64Data","rows","10",1,"form-control"]],template:function(r,s){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Base64 Encoder/Decoder"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-tweet-btn"),t.qZA(),t.TgZ(6,"div",3),t._uU(7,"\u6587\u5b57\u5217\u30c7\u30fc\u30bf\u3092Base64\u306b\u3001Base64\u30c7\u30fc\u30bf\u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3057\u307e\u3059\u3002"),t.qZA(),t.TgZ(8,"ul",4,5)(10,"li",6)(11,"a",7),t._uU(12,"Encoder"),t.qZA(),t.YNc(13,St,10,2,"ng-template",8),t.qZA(),t.TgZ(14,"li",6)(15,"a",7),t._uU(16,"Decoder"),t.qZA(),t.YNc(17,Bt,15,3,"ng-template",8),t.qZA()(),t._UZ(18,"div",9)(19,"app-ads",10),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"app-ads",12),t.qZA()()),2&r){const o=t.MAs(9);t.xp6(18),t.Q6J("ngbNavOutlet",o),t.xp6(3),t.Q6J("count",3)}},directives:[U.x,T.Pz,T.nv,T.Vx,T.uN,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,T.tO,v.F],styles:["pre[_ngcontent-%COMP%]{background-color:#f6f8fa;border-radius:10px}"]}),n})(),It=(()=>{class n{constructor(r,s,o){this.messageService=r,this.form=new D({space:new b("  ",a.kI.required),json:new b("",a.kI.required)}),this.result="",s.setTitle("kemu tools | JSON Formatter"),o.breadcrumb="tools/JSON Formatter"}ngOnInit(){q(this.form,"json-formatter",{}).subscribe(),this.form.value$.pipe((0,h.x)()).subscribe(r=>this.submit())}submit(){try{if(this.form.valid){const r=JSON.parse(this.form.controls.json.value);this.result=JSON.stringify(r,null,this.form.controls.space.value)}}catch(r){this.result=r}}copy(){window.navigator.clipboard.writeText(this.result),this.messageService.pushMessage({type:"info",body:"\u6574\u5f62\u5f8c\u306e\u30c7\u30fc\u30bf\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002"})}get jsonBytes(){return(new TextEncoder).encode(this.result).length}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(B.e),t.Y36(Z.Dx),t.Y36(O.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-json-formatter"]],decls:33,vars:4,consts:[[1,"mt-3","container-fluid"],[1,"d-flex","justify-content-end"],[1,"row"],[1,"col-md-6","border"],[3,"formGroup"],[1,"form-label"],[1,"form-check","form-check-inline"],["name","space","type","radio","id","two","formControlName","space","value","  ",1,"form-check-input"],["for","two",1,"form-check-label"],["name","space","type","radio","id","four","formControlName","space","value","    ",1,"form-check-input"],["for","four",1,"form-check-label"],["for","json",1,"form-control-label"],["id","json","rows","15","formControlName","json",1,"form-control"],["type","list"],[1,"col-md-6","border","rounded"],[1,"ms-1","btn","btn-sm",3,"click"],[1,"bi","bi-stickies"],[3,"ngbTooltip"],[2,"background-color","#f6f8fa"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"JSON Formatter"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"app-tweet-btn"),t.qZA(),t._uU(5," \u672a\u6574\u5f62\u306eJSON\u30c7\u30fc\u30bf\u3092\u6574\u5f62\u3057\u307e\u3059\u3002 "),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"label",5),t._uU(10,"Space"),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"div")(13,"div",6),t._UZ(14,"input",7),t.TgZ(15,"label",8),t._uU(16,"two space"),t.qZA()(),t.TgZ(17,"div",6),t._UZ(18,"input",9),t.TgZ(19,"label",10),t._uU(20,"four space"),t.qZA()()(),t.TgZ(21,"label",11),t._uU(22,"JSON"),t.qZA(),t._UZ(23,"textarea",12)(24,"app-ads",13),t.qZA()(),t.TgZ(25,"div",14),t._uU(26," RESULT "),t.TgZ(27,"button",15),t.NdJ("click",function(){return s.copy()}),t._UZ(28,"i",16),t.qZA(),t.TgZ(29,"span",17),t._uU(30),t.qZA(),t.TgZ(31,"pre",18),t._uU(32),t.qZA()()()()),2&r&&(t.xp6(8),t.Q6J("formGroup",s.form),t.xp6(21),t.Q6J("ngbTooltip",s.jsonBytes.toString()+" bytes"),t.xp6(1),t.hij("",s.jsonBytes/1024," KiB"),t.xp6(2),t.Oqu(s.result))},directives:[U.x,a._Y,a.JL,a.sg,a._,a.Fj,a.JJ,a.u,v.F,T._L],encapsulation:2}),n})(),jt=(()=>{class n{constructor(r,s,o){this.messageService=r,this.results=[],this.form=new D({json:new b("",a.kI.required),rootType:new b("Root",a.kI.required),space:new b(String.raw`\t`,a.kI.required)}),s.setTitle("kemu tools | JSON Typer"),o.breadcrumb="/tools/JSON Typer"}ngOnInit(){q(this.form,"jsonTyper",{}).subscribe(),this.form.valid&&this.submit()}submit(){this.results=[],this.error=null;let r=this.form.controls.space.value;r===String.raw`\t`&&(r="\t");try{this.typer(JSON.parse(this.form.controls.json.value),this.form.controls.rootType.value,r)}catch(s){this.error=s}}typer(r,s="Root",o="\t"){let i=`interface ${s} {\n`;Object.keys(r).forEach(u=>{let l=typeof r[u],f=u;"object"==typeof r[u]&&(Array.isArray(r[u])?l="any[]":null===r[u]?l="null":(l=u.charAt(0).toUpperCase()+u.slice(1),l=l.replaceAll("-",""),this.typer(r[u],l,o))),u.includes("-")&&(f=`['${u}']`),i+=`${o}${f}: ${l};\n`}),i+="}\n",this.results.push(i)}copy(){window.navigator.clipboard.writeText(this.resultText),this.messageService.pushMessage({type:"info",body:"\u578b\u60c5\u5831\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002"})}get resultText(){return[...this.results].reverse().join("\n")}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(B.e),t.Y36(Z.Dx),t.Y36(O.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-json-typer"]],decls:52,vars:5,consts:[[1,"mt-3","container-fluid"],[1,"row"],[1,"col-md-8"],[1,"d-flex","justify-content-end"],[1,"mt-3"],[3,"formGroup","ngSubmit"],["for","rootType",1,"form-label"],["id","rootType","formControlName","rootType",1,"form-control"],[1,"form-label"],[1,"form-check","form-check-inline"],["name","space","type","radio","id","tab","formControlName","space","value","\\t",1,"form-check-input"],["for","tab",1,"form-check-label"],["name","space","type","radio","id","two","formControlName","space","value","  ",1,"form-check-input"],["for","two",1,"form-check-label"],["name","space","type","radio","id","four","formControlName","space","value","    ",1,"form-check-input"],["for","four",1,"form-check-label"],["for","json",1,"form-label"],["id","json","rows","10","formControlName","json",1,"form-control"],[1,"btn","btn-secondary",3,"disabled"],[1,"ms-1","btn","btn-sm",3,"click"],[1,"bi","bi-stickies"],[1,"text-danger"],[1,"mt-3",2,"background-color","#f6f8fa","border-radius","10px"],["type","list"],[1,"col-md-4"],["type","box",3,"count"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"JSON Typer"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-tweet-btn"),t.qZA(),t.TgZ(7,"div",4),t._uU(8," JSON\u306e\u5024\u3092TypeScript interface\u5b9a\u7fa9\u306b\u5909\u63db\u3057\u307e\u3059\u3002List Type\u306b\u306f\u975e\u5bfe\u5fdc\u3067\u3059\u3002any[]\u3068\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),t._UZ(9,"br")(10,"br"),t._uU(11," \u307e\u305fJSON\u30ad\u30fc\u306b\u30b9\u30e9\u30c3\u30b7\u30e5\u306a\u3069\u306e\u5024\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u6b63\u3057\u304f\u51fa\u529b\u3055\u308c\u306a\u3044\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002 "),t.qZA(),t._UZ(12,"hr"),t.TgZ(13,"form",5),t.NdJ("ngSubmit",function(){return s.submit()}),t.TgZ(14,"div",4)(15,"label",6),t._uU(16,"RootTypeName"),t.qZA(),t._UZ(17,"input",7),t.qZA(),t.TgZ(18,"div",4)(19,"label",8),t._uU(20,"Space"),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"div",9),t._UZ(23,"input",10),t.TgZ(24,"label",11),t._uU(25,"tab"),t.qZA()(),t.TgZ(26,"div",9),t._UZ(27,"input",12),t.TgZ(28,"label",13),t._uU(29,"two space"),t.qZA()(),t.TgZ(30,"div",9),t._UZ(31,"input",14),t.TgZ(32,"label",15),t._uU(33,"four space"),t.qZA()()(),t.TgZ(34,"div",4)(35,"label",16),t._uU(36,"JSON"),t.qZA(),t._UZ(37,"textarea",17),t.qZA(),t.TgZ(38,"div",4)(39,"button",18),t._uU(40,"TYPE"),t.qZA()()(),t._UZ(41,"hr"),t._uU(42," RESULT "),t.TgZ(43,"button",19),t.NdJ("click",function(){return s.copy()}),t._UZ(44,"i",20),t.qZA(),t.TgZ(45,"p",21),t._uU(46),t.qZA(),t.TgZ(47,"pre",22),t._uU(48),t.qZA(),t._UZ(49,"app-ads",23),t.qZA(),t.TgZ(50,"div",24),t._UZ(51,"app-ads",25),t.qZA()()()),2&r&&(t.xp6(13),t.Q6J("formGroup",s.form),t.xp6(26),t.Q6J("disabled",!s.form.valid),t.xp6(7),t.Oqu(s.error),t.xp6(2),t.Oqu(s.resultText),t.xp6(3),t.Q6J("count",3))},directives:[U.x,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a._,v.F],encapsulation:2}),n})();var Jt=c(7445);let Dt=(()=>{class n{constructor(r){this.datetime="",this.ms=0,r.setTitle("kemu tools | REALTIME")}ngOnInit(){(0,Jt.F)(100).subscribe(r=>{const s=new Date;this.datetime=s.toLocaleString(),this.ms=s.getMilliseconds()})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(Z.Dx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-realtime"]],decls:20,vars:5,consts:[[1,"mt-3","container-fluid"],[1,"d-flex","justify-content-end"],[1,"mt-3","mb-3"],[1,"d-flex","justify-content-center"],[1,"text-center"],["type","list"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"REALTIME"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"app-tweet-btn"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u73fe\u5728\u6642\u523b\u3092100ms\u5358\u4f4d\u3067\u66f4\u65b0\u3057\u3001\u6b63\u78ba\u306a\u65e5\u6642\u3092\u304a\u77e5\u3089\u305b\u3057\u307e\u3059\u3002"),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",2)(9,"div",3)(10,"h2")(11,"pre"),t._uU(12),t.qZA()()(),t.TgZ(13,"div",3)(14,"h2")(15,"pre"),t._uU(16),t.ALo(17,"number"),t.qZA()()()(),t.TgZ(18,"div",4),t._UZ(19,"app-ads",5),t.qZA()()),2&r&&(t.xp6(12),t.Oqu(s.datetime),t.xp6(4),t.Oqu(t.xi3(17,2,s.ms,"3.0-3")))},directives:[U.x,v.F],pipes:[d.JJ],encapsulation:2}),n})();var ut=c(2923);function qt(n,e){1&n&&t._UZ(0,"i",15)}function Vt(n,e){1&n&&(t.TgZ(0,"div",16),t._UZ(1,"app-ads",17),t.qZA())}function kt(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"div")(1,"div",7),t.NdJ("click",function(){const i=t.CHM(r).$implicit;return t.oxw().transitLink(i)}),t.TgZ(2,"div",8)(3,"div",9)(4,"h5",10),t._uU(5),t.qZA(),t.YNc(6,qt,1,0,"i",11),t.qZA(),t._UZ(7,"hr",12),t.TgZ(8,"p",13),t._uU(9),t.qZA()()(),t.YNc(10,Vt,2,0,"div",14),t.qZA()}if(2&n){const r=e.$implicit,s=e.index;t.xp6(5),t.Oqu(r.label),t.xp6(1),t.Q6J("ngIf",r.external),t.xp6(3),t.Oqu(r.description),t.xp6(1),t.Q6J("ngIf",(s+1)%3==0)}}let Nt=(()=>{class n{constructor(r,s){this.router=r,this.tools=ut,s.setTitle("kemu tools")}transitLink(r){r.external?window.location.href=r.link:this.router.navigate([r.link])}get adsLength(){return window.screen.width>=768?Math.floor(ut.length/3):1}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(C.F0),t.Y36(Z.Dx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tools-list"]],decls:8,vars:2,consts:[[1,"container-fluid"],[1,"mt-3"],[1,"row","mt-3"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",3,"count"],[1,"card","mt-1","text-muted",2,"cursor","pointer",3,"click"],[1,"card-body"],[1,"d-flex","justify-content-between"],[1,"card-link","text-black"],["class","bi bi-box-arrow-up-right",4,"ngIf"],[1,"mt-0"],[1,"card-text"],["class","card mt-1",4,"ngIf"],[1,"bi","bi-box-arrow-up-right"],[1,"card","mt-1"],["type","list"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u500b\u4eba\u7684\u306b\u4f7f\u3063\u305f\u308a\u3059\u308b\u81ea\u4f5c\u30c4\u30fc\u30eb\u7f6e\u304d\u5834\uff08\u4e0d\u5b9a\u671f\u66f4\u65b0\uff09"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,kt,11,4,"div",4),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"app-ads",6),t.qZA()()()),2&r&&(t.xp6(5),t.Q6J("ngForOf",s.tools),t.xp6(2),t.Q6J("count",s.adsLength))},directives:[d.sg,d.O5,v.F],encapsulation:2}),n})();var $t=c(262),Mt=c(1848),at=c(1135),Lt=c(9635),Rt=c(9300);const V=new at.X(!1),zt=V.asObservable().pipe((0,Rt.h)(n=>!n),(0,K.q)(1)),Y={};new class Yt{registerPreStoreUpdate(e){Y.preStoreUpdate=e}};const I=new Map,Q=new A.x;Q.asObservable();class Ht extends at.X{constructor(e){super(e.state),this.storeDef=e,this.batchInProgress=!1,this.context={config:this.getConfig()},this.state=e.state,this.initialState=this.getValue(),function Qt(n){I.set(n.name,n),Q.next({type:"add",store:n})}(this)}get name(){return this.storeDef.name}getConfig(){return this.storeDef.config}query(e){return e(this.getValue())}update(...e){const r=this.getValue();let s=e.reduce((o,i)=>i(o,this.context),r);Y.preStoreUpdate&&(s=Y.preStoreUpdate(r,s,this.name)),s!==r&&(this.state=s,V.getValue()&&!this.batchInProgress?(this.batchInProgress=!0,zt.subscribe(()=>{super.next(this.state),this.batchInProgress=!1})):super.next(this.state))}getValue(){return this.state}reset(){this.update(()=>this.initialState)}combine(e){let r=!0;const s={};return new H.y(o=>{for(const[i,u]of Object.entries(e))o.add(u.subscribe(l=>{s[i]=l,r=!0}));return this.subscribe({next(){r&&(o.next(s),r=!1)},error(i){o.error(i)},complete(){o.complete()}})})}destroy(){!function Gt(n){I.delete(n.name),Q.next({type:"remove",store:n})}(this)}next(e){this.update(()=>e)}error(){}complete(){}}var ue=c(6063);class ae extends A.x{constructor(e=1/0,r=1/0,s=ue.l){super(),this._bufferSize=e,this._windowTime=r,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=r===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,r)}next(e){const{isStopped:r,_buffer:s,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:u}=this;r||(s.push(e),!o&&s.push(i.now()+u)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const r=this._innerSubscribe(e),{_infiniteTimeWindow:s,_buffer:o}=this,i=o.slice();for(let u=0;u<i.length&&!e.closed;u+=s?1:2)e.next(i[u]);return this._checkFinalizedStatuses(e),r}_trimBuffer(){const{_bufferSize:e,_timestampProvider:r,_buffer:s,_infiniteTimeWindow:o}=this,i=(o?1:2)*e;if(e<1/0&&i<s.length&&s.splice(0,s.length-i),!o){const u=r.now();let l=0;for(let f=1;f<s.length&&s[f]<=u;f+=2)l=f;l&&s.splice(0,l+1)}}}var ce=c(5684);function dt(n){if(n)return{getItem(e){const r=n.getItem(e);return(0,m.of)(r&&JSON.parse(r))},setItem:(e,r)=>(n.setItem(e,JSON.stringify(r)),(0,m.of)(!0)),removeItem:e=>(n.removeItem(e),(0,m.of)(!0))}}const de=dt("undefined"!=typeof localStorage?localStorage:void 0);dt("undefined"!=typeof sessionStorage?sessionStorage:void 0);const w=function Wt(n,...e){const{state:r,config:s}=function Pt(...n){const e={config:{},state:{}};for(const{config:r,props:s}of n)Object.assign(e.config,r),Object.assign(e.state,s);return e}(...e),{name:o}=n;return new Ht({name:o,state:r,config:s})}({name:"userInfoStore"},function ie(n){return{props:n,config:void 0}}({histories:[]}));!function le(n,e){var r;const s={source:y=>y,preStoreInit:y=>y,key:null!=(r=e.key)?r:`${n.name}@store`,runGuard:()=>"undefined"!=typeof window},o=Object.assign({},s,e);if(null==o.runGuard||!o.runGuard())return{initialized$:(0,m.of)(!1),unsubscribe(){}};const{setItem:i,getItem:u}=e.storage,l=new ae(1),f=(0,X.D)(u(o.key)).subscribe(y=>{y&&n.update(Te=>o.preStoreInit(Object.assign({},Te,y))),l.next(!0),l.complete()}),ve=o.source(n).pipe((0,ce.T)(1),(0,N.w)(y=>i(o.key,y))).subscribe();l.asObservable()}(w,{key:"userInfo",storage:de});class pe{constructor(){this.histories$=w.pipe(function lt(n){return(0,Lt.z)((0,E.U)(n),(0,h.x)())}(e=>e.histories.reverse()))}pushHistory(e){let r=w.getValue().histories;w.getValue().histories.length&&r.slice(-1)[0].headers["x-forwarded-for"]===e.headers["x-forwarded-for"]||(r.push(e),w.update(s=>({histories:r})))}reset(){w.reset()}}var fe=c(520);let me=(()=>{class n{constructor(r){this.httpClient=r}get(){return this.httpClient.get("https://api.kemu.site/checkUserInfo")}}return n.\u0275fac=function(r){return new(r||n)(t.LFG(fe.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function he(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"li",17),t._uU(1),t.TgZ(2,"button",18),t.NdJ("click",function(){const i=t.CHM(r).$implicit;return t.oxw(2).copyAddress(i.headers["x-forwarded-for"])}),t._UZ(3,"i",7),t.qZA()()}if(2&n){const r=e.$implicit;t.Q6J("ngbTooltip",r.requestContext.time),t.xp6(1),t.hij(" ",r.headers["x-forwarded-for"]," ")}}function ge(n,e){if(1&n){const r=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"h2"),t._uU(3,"IP Address Checker"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-tweet-btn"),t.qZA(),t.TgZ(6,"div",4),t._uU(7," IP Address "),t.TgZ(8,"div",5)(9,"h2"),t._uU(10),t.qZA(),t.TgZ(11,"button",6),t.NdJ("click",function(){t.CHM(r);const o=t.oxw();return o.copyAddress(o.data.headers["x-forwarded-for"])}),t._UZ(12,"i",7),t.qZA()()(),t._UZ(13,"hr"),t.TgZ(14,"div",4),t._uU(15," \u305d\u306e\u4ed6\u306e\u60c5\u5831 "),t.TgZ(16,"table",8)(17,"thead")(18,"tr")(19,"th"),t._uU(20,"key"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"value"),t.qZA()()(),t.TgZ(23,"tbody")(24,"tr")(25,"td"),t._uU(26,"user-agent"),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA()(),t.TgZ(29,"tr")(30,"td"),t._uU(31,"sec-ch-ua-mobile"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.qZA()(),t.TgZ(34,"tr")(35,"td"),t._uU(36,"sec-ch-ua-platform"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.qZA()()()()(),t._UZ(39,"hr"),t.TgZ(40,"div",9),t._uU(41," \u904e\u53bb\u306e\u691c\u67fb\u6642\u306eIP\u30a2\u30c9\u30ec\u30b9 "),t.TgZ(42,"button",10),t.NdJ("click",function(){return t.CHM(r),t.oxw().state.reset()}),t._UZ(43,"i",11),t.qZA(),t.TgZ(44,"ul",12),t.YNc(45,he,4,2,"li",13),t.ALo(46,"async"),t.qZA()(),t._UZ(47,"app-ads",14),t.qZA(),t.TgZ(48,"div",15),t._UZ(49,"app-ads",16),t.qZA()()}if(2&n){const r=t.oxw();t.xp6(10),t.Oqu(r.data.headers["x-forwarded-for"]),t.xp6(18),t.Oqu(r.data.headers["user-agent"]),t.xp6(5),t.Oqu(r.data.headers["sec-ch-ua-mobile"]),t.xp6(5),t.Oqu(r.data.headers["sec-ch-ua-platform"]),t.xp6(7),t.Q6J("ngForOf",t.lcZ(46,6,r.state.histories$)),t.xp6(4),t.Q6J("count",r.adsLength)}}const be=[{path:"",component:Nt},{path:"userInfo",component:(()=>{class n{constructor(r,s,o,i,u){this.userInfoService=r,this.messageService=s,this.router=o,this.state=new pe,i.setTitle("kemu tools | IP Address Checker"),u.breadcrumb="/tools/IP Address Checker"}ngOnInit(){this.userInfoService.get().pipe((0,$t.K)(()=>(this.messageService.pushMessage({type:"danger",body:"\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002maybe CORS \u{1f609}"}),this.router.navigate(["/tools"]),Mt.C))).subscribe(r=>{this.data=r,this.state.pushHistory(r)})}get adsLength(){return window.screen.width>=768?3:1}copyAddress(r){window.navigator.clipboard.writeText(r),this.messageService.pushMessage({type:"info",body:`${r} \u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f`})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(me),t.Y36(B.e),t.Y36(C.F0),t.Y36(Z.Dx),t.Y36(O.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-info"]],decls:1,vars:1,consts:[["class","container-fluid mt-3 row",4,"ngIf"],[1,"container-fluid","mt-3","row"],[1,"col-sm-8"],[1,"d-flex","justify-content-end"],[1,"mt-2"],[1,"d-flex","justify-content-center"],[1,"ms-1","btn",3,"click"],[1,"bi","bi-stickies"],[1,"table","table-striped","mt-3"],[1,"mt-2","mb-3"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash"],[1,"list-group","mt-2"],["class","list-group-item","placement","top-start",3,"ngbTooltip",4,"ngFor","ngForOf"],["type","list"],[1,"col-sm-4"],["type","box",3,"count"],["placement","top-start",1,"list-group-item",3,"ngbTooltip"],[1,"ms-1","btn","btn-sm",3,"click"]],template:function(r,s){1&r&&t.YNc(0,ge,50,8,"div",0),2&r&&t.Q6J("ngIf",s.data)},directives:[d.O5,U.x,d.sg,T._L,v.F],pipes:[d.Ov],encapsulation:2}),n})()},{path:"amazonAssociate",component:Et},{path:"jsonTyper",component:jt},{path:"realtime",component:Dt},{path:"jsonFormatter",component:It},{path:"base64",component:Ot}];let Ae=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[d.JJ],imports:[[C.Bz.forChild(be)],C.Bz]}),n})();var ye=c(4466);let Ze=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,ye.m,Ae]]}),n})()}}]);