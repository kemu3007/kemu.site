"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[279],{279:(Ut,O,u)=>{u.r(O),u.d(O,{ToolsModule:()=>Ot});var d=u(9808),b=u(7979);const S=JSON.parse('[{"name":"QR\u30b3\u30fc\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf","description":"\u4efb\u610f\u306e\u6587\u5b57\u5217\u3092QR\u30b3\u30fc\u30c9\u306b\u5909\u63db\u3057\u307e\u3059\u3002","link":"https://kemu.site/utils/qrcode/"},{"name":"Markdown Editor","description":"markdown\u8a18\u6cd5\u3067\u66f8\u304b\u308c\u305f\u6587\u5b57\u5217\u3092HTML\u3067\u8868\u793a\u3057\u307e\u3059\u3002","link":"https://kemu.site/utils/markdown/"},{"name":"CSV to MD table","description":"\u30b3\u30f3\u30de\u533a\u5207\u308a\u3067\u5165\u529b\u3055\u308c\u305fcsv\u3092Markdown\u30c6\u30fc\u30d6\u30eb\u5f62\u5f0f\u306b\u5909\u63db\u3057\u307e\u3059\u3002","link":"https://kemu.site/utils/csv_to_md/"}]');var e=u(1223),w=u(2313),Z=u(3892);function j(t,n){1&t&&e._UZ(0,"ng2-adsense",10)}function B(t,n){if(1&t&&(e.TgZ(0,"div")(1,"a",14)(2,"div",5)(3,"div",6)(4,"h5",7),e._uU(5),e.qZA()(),e._UZ(6,"hr",8),e.TgZ(7,"p",9),e._uU(8),e.qZA()()(),e.YNc(9,j,1,0,"ng2-adsense",15),e.qZA()),2&t){const r=n.$implicit,s=n.index;e.xp6(1),e.Q6J("href",r.link,e.LSH),e.xp6(4),e.hij(" ",r.name," "),e.xp6(3),e.Oqu(r.description),e.xp6(1),e.Q6J("ngIf",(s+1)%3==0)}}function E(t,n){1&t&&e._UZ(0,"ng2-adsense",16)}const M=function(){return["/tools","userInfo"]},z=function(){return[]};let $=(()=>{class t{constructor(r){this.oldTools=S,r.setTitle("kemu tools")}get adsLength(){return window.screen.width>=768?Math.floor(S.length/3):1}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(w.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tools-list"]],decls:17,vars:5,consts:[[1,"container-fluid"],[1,"mt-3"],[1,"row","mt-3"],[1,"col-md-8"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"card-body"],[1,"row"],[1,"card-link","text-black"],[1,"mt-0"],[1,"card-text"],["adFormat","horizontal"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["style","display: block","adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",4,"ngFor","ngForOf"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"href"],["adFormat","horizontal",4,"ngIf"],["adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",2,"display","block"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"\u500b\u4eba\u7684\u306b\u4f7f\u3063\u305f\u308a\u3059\u308b\u81ea\u4f5c\u30c4\u30fc\u30eb\u7f6e\u304d\u5834\uff08\u4e0d\u5b9a\u671f\u66f4\u65b0\uff09"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"a",4)(6,"div",5)(7,"div",6)(8,"h5",7),e._uU(9,"\u30e6\u30fc\u30b6\u60c5\u5831\u95b2\u89a7"),e.qZA()(),e._UZ(10,"hr",8),e.TgZ(11,"p",9),e._uU(12,"IP\u30a2\u30c9\u30ec\u30b9\u7b49\u306e\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u904e\u53bb\u306e\u5c65\u6b74\u3082\u8868\u793a\u53ef\u80fd\u3067\u3059\u3002"),e.qZA()()(),e._UZ(13,"ng2-adsense",10),e.YNc(14,B,10,4,"div",11),e.qZA(),e.TgZ(15,"div",12),e.YNc(16,E,1,0,"ng2-adsense",13),e.qZA()()()),2&r&&(e.xp6(5),e.Q6J("routerLink",e.DdM(3,M)),e.xp6(9),e.Q6J("ngForOf",s.oldTools),e.xp6(2),e.Q6J("ngForOf",e.DdM(4,z).constructor(s.adsLength)))},directives:[b.yS,Z.nq,d.sg,d.O5],encapsulation:2}),t})();var U=u(1135),F=u(7579),P=u(9751),L=u(9635),J=u(9300),q=u(5698),D=u(4004),N=u(1884);const h=new U.X(!1),R=h.asObservable().pipe((0,J.h)(t=>!t),(0,q.q)(1)),T={};new class H{registerPreStoreUpdate(n){T.preStoreUpdate=n}};const g=new Map,v=new F.x;v.asObservable();class Y extends U.X{constructor(n){super(n.state),this.storeDef=n,this.batchInProgress=!1,this.context={config:this.getConfig()},this.state=n.state,this.initialState=this.getValue(),function Q(t){g.set(t.name,t),v.next({type:"add",store:t})}(this)}get name(){return this.storeDef.name}getConfig(){return this.storeDef.config}query(n){return n(this.getValue())}update(...n){const r=this.getValue();let s=n.reduce((o,i)=>i(o,this.context),r);T.preStoreUpdate&&(s=T.preStoreUpdate(r,s,this.name)),s!==r&&(this.state=s,h.getValue()&&!this.batchInProgress?(this.batchInProgress=!0,R.subscribe(()=>{super.next(this.state),this.batchInProgress=!1})):super.next(this.state))}getValue(){return this.state}reset(){this.update(()=>this.initialState)}combine(n){let r=!0;const s={};return new P.y(o=>{for(const[i,c]of Object.entries(n))o.add(c.subscribe(a=>{s[i]=a,r=!0}));return this.subscribe({next(){r&&(o.next(s),r=!1)},error(i){o.error(i)},complete(){o.complete()}})})}destroy(){!function V(t){g.delete(t.name),v.next({type:"remove",store:t})}(this)}next(n){this.update(()=>n)}error(){}complete(){}}var y=u(9646),ot=u(6063);class it extends F.x{constructor(n=1/0,r=1/0,s=ot.l){super(),this._bufferSize=n,this._windowTime=r,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=r===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,r)}next(n){const{isStopped:r,_buffer:s,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:c}=this;r||(s.push(n),!o&&s.push(i.now()+c)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();const r=this._innerSubscribe(n),{_infiniteTimeWindow:s,_buffer:o}=this,i=o.slice();for(let c=0;c<i.length&&!n.closed;c+=s?1:2)n.next(i[c]);return this._checkFinalizedStatuses(n),r}_trimBuffer(){const{_bufferSize:n,_timestampProvider:r,_buffer:s,_infiniteTimeWindow:o}=this,i=(o?1:2)*n;if(n<1/0&&i<s.length&&s.splice(0,s.length-i),!o){const c=r.now();let a=0;for(let p=1;p<s.length&&s[p]<=c;p+=2)a=p;a&&s.splice(0,a+1)}}}var ut=u(2076),ct=u(5684),at=u(3900);function C(t){if(t)return{getItem(n){const r=t.getItem(n);return(0,y.of)(r&&JSON.parse(r))},setItem:(n,r)=>(t.setItem(n,JSON.stringify(r)),(0,y.of)(!0)),removeItem:n=>(t.removeItem(n),(0,y.of)(!0))}}const dt=C("undefined"!=typeof localStorage?localStorage:void 0);C("undefined"!=typeof sessionStorage?sessionStorage:void 0);const l=function K(t,...n){const{state:r,config:s}=function _(...t){const n={config:{},state:{}};for(const{config:r,props:s}of t)Object.assign(n.config,r),Object.assign(n.state,s);return n}(...n),{name:o}=t;return new Y({name:o,state:r,config:s})}({name:"userInfoStore"},function st(t){return{props:t,config:void 0}}({histories:[]}));!function ft(t,n){var r;const s={source:f=>f,preStoreInit:f=>f,key:null!=(r=n.key)?r:`${t.name}@store`,runGuard:()=>"undefined"!=typeof window},o=Object.assign({},s,n);if(null==o.runGuard||!o.runGuard())return{initialized$:(0,y.of)(!1),unsubscribe(){}};const{setItem:i,getItem:c}=n.storage,a=new it(1),p=(0,ut.D)(c(o.key)).subscribe(f=>{f&&t.update(Zt=>o.preStoreInit(Object.assign({},Zt,f))),a.next(!0),a.complete()}),St=o.source(t).pipe((0,ct.T)(1),(0,at.w)(f=>i(o.key,f))).subscribe();a.asObservable()}(l,{key:"userInfo",storage:dt});class lt{constructor(){this.histories$=l.pipe(function A(t){return(0,L.z)((0,D.U)(t),(0,N.x)())}(n=>n.histories.reverse()))}pushHistory(n){let r=l.getValue().histories;l.getValue().histories.length&&r.slice(-1)[0].headers["x-forwarded-for"]===n.headers["x-forwarded-for"]||(r.push(n),l.update(s=>({histories:r})))}reset(){l.reset()}}var pt=u(520);let gt=(()=>{class t{constructor(r){this.httpClient=r}get(){return this.httpClient.get("https://api.kemu.site/checkUserInfo")}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(pt.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function ht(t,n){if(1&t&&(e.TgZ(0,"li",14),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.hij(" ",r.headers["x-forwarded-for"]," ")}}function mt(t,n){1&t&&e._UZ(0,"ng2-adsense",15)}const yt=function(){return[]};function bt(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"h2"),e._uU(3,"\u30e6\u30fc\u30b6\u60c5\u5831"),e.qZA(),e.TgZ(4,"div",3),e._uU(5," IP Address "),e.TgZ(6,"div",4)(7,"h2"),e._uU(8),e.qZA()()(),e._UZ(9,"hr"),e.TgZ(10,"div",3),e._uU(11," \u305d\u306e\u4ed6\u306e\u60c5\u5831 "),e.TgZ(12,"table",5)(13,"thead")(14,"tr")(15,"th"),e._uU(16,"key"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"value"),e.qZA()()(),e.TgZ(19,"tbody")(20,"tr")(21,"td"),e._uU(22,"user-agent"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA()(),e.TgZ(25,"tr")(26,"td"),e._uU(27,"sec-ch-ua-mobile"),e.qZA(),e.TgZ(28,"td"),e._uU(29),e.qZA()(),e.TgZ(30,"tr")(31,"td"),e._uU(32,"sec-ch-ua-platform"),e.qZA(),e.TgZ(33,"td"),e._uU(34),e.qZA()()()()(),e._UZ(35,"hr"),e.TgZ(36,"div",6),e._uU(37," \u904e\u53bb\u306e\u691c\u67fb\u6642\u306eIP\u30a2\u30c9\u30ec\u30b9 "),e.TgZ(38,"button",7),e.NdJ("click",function(){return e.CHM(r),e.oxw().state.reset()}),e._UZ(39,"i",8),e.qZA(),e.TgZ(40,"ul",9),e.YNc(41,ht,2,1,"li",10),e.ALo(42,"async"),e.qZA()(),e._UZ(43,"ng2-adsense",11),e.qZA(),e.TgZ(44,"div",12),e.YNc(45,mt,1,0,"ng2-adsense",13),e.qZA()()}if(2&t){const r=e.oxw();e.xp6(8),e.Oqu(r.data.headers["x-forwarded-for"]),e.xp6(16),e.Oqu(r.data.headers["user-agent"]),e.xp6(5),e.Oqu(r.data.headers["sec-ch-ua-mobile"]),e.xp6(5),e.Oqu(r.data.headers["sec-ch-ua-platform"]),e.xp6(7),e.Q6J("ngForOf",e.lcZ(42,6,r.state.histories$)),e.xp6(4),e.Q6J("ngForOf",e.DdM(8,yt).constructor(r.adsLength))}}const Tt=[{path:"",component:$},{path:"userInfo",component:(()=>{class t{constructor(r){this.userInfoService=r,this.state=new lt}ngOnInit(){this.userInfoService.get().subscribe(r=>{this.data=r,this.state.pushHistory(r)})}get adsLength(){return window.screen.width>=768?3:1}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(gt))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-info"]],decls:1,vars:1,consts:[["class","container mt-3 row",4,"ngIf"],[1,"container","mt-3","row"],[1,"col-sm-8"],[1,"mt-2"],[1,"d-flex","justify-content-center"],[1,"table","table-striped","mt-3"],[1,"mt-2","mb-3"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash"],[1,"list-group","mt-2"],["class","list-group-item",4,"ngFor","ngForOf"],["adFormat","horizontal"],[1,"col-sm-4"],["style","display: block","adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",4,"ngFor","ngForOf"],[1,"list-group-item"],["adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",2,"display","block"]],template:function(r,s){1&r&&e.YNc(0,bt,46,9,"div",0),2&r&&e.Q6J("ngIf",s.data)},directives:[d.O5,d.sg,Z.nq],pipes:[d.Ov],encapsulation:2}),t})()}];let vt=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[b.Bz.forChild(Tt)],b.Bz]}),t})();var xt=u(4466);let Ot=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,xt.m,vt]]}),t})()}}]);