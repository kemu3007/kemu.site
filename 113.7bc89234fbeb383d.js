(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{9113:(u,p,n)=>{"use strict";n.r(p),n.d(p,{LogModule:()=>j});var s=n(9808),a=n(6609),l=n(7445),d=n(5698),t=n(5e3),c=n(2313),g=n(9601),h=n(8304),v=n(1364),f=n(1441),m=n(3026);function Z(o,r){if(1&o&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t._UZ(3,"img",16),t.TgZ(4,"a",17),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr"),t._uU(8),t.qZA()()),2&o){const e=r.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function x(o,r){1&o&&t._UZ(0,"app-amazon-ads",18)}const L=function(){return[]};function y(o,r){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"div",5)(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t._UZ(8,"app-tweet-btn"),t.qZA(),t._UZ(9,"hr")(10,"div",6)(11,"hr",7),t.TgZ(12,"h3"),t._uU(13,"comments"),t.qZA(),t.YNc(14,Z,9,4,"div",8),t._UZ(15,"app-amazon-ads",9),t.TgZ(16,"p"),t._uU(17," \u30b3\u30e1\u30f3\u30c8\u306f\u3053\u3061\u3089\u304b\u3089 "),t.TgZ(18,"a",10),t._uU(19),t.qZA(),t._UZ(20,"br"),t._uU(21," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(22,"div",11),t.YNc(23,x,1,0,"app-amazon-ads",12),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.article.title),t.xp6(3),t.Oqu(t.xi3(7,7,e.article.created_at,"yyyy.MM.dd hh:mm")),t.xp6(4),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(4),t.Q6J("ngForOf",e.article.comments),t.xp6(4),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(1),t.Oqu(e.article.html_url),t.xp6(4),t.Q6J("ngForOf",t.DdM(10,L).constructor(e.adsLength))}}let b=(()=>{class o{constructor(e,i,J,z,Y,B,Q){this.titleService=e,this.route=i,this.router=J,this.messageService=z,this.breadcrumbService=Y,this.markedService=B,this.sanitizer=Q,this.marked=this.markedService.marked,this.html=""}ngOnInit(){this.article$.then(e=>{this.titleService.setTitle(`kemu logs | ${e.title}`),this.article=e,this.breadcrumbService.breadcrumb=`/log/${this.article.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,l.F)(100).pipe((0,d.q)(1)).subscribe(i=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)})})}get article$(){return n(6738)(`./${this.route.snapshot.paramMap.get("id")}.json`).catch(e=>this.router.navigate(["/log"]).then(i=>this.messageService.pushMessage({type:"warning",body:"\u8a18\u4e8b\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u305b\u3093"})))}get adsLength(){return window.screen.width>=768?4:1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.e),t.Y36(h.p),t.Y36(v.$),t.Y36(c.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],decls:3,vars:1,consts:[["rel","stylesheet","href","//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css"],[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[1,"d-flex","justify-content-between"],[3,"innerHTML"],[1,"mt-5"],["class","card",4,"ngFor","ngForOf"],["type","list"],[3,"href"],[1,"col-md-4"],["type","box",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"row"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"],["type","box"]],template:function(e,i){1&e&&(t._UZ(0,"link",0),t.TgZ(1,"div",1),t.YNc(2,y,24,11,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",i.article))},directives:[s.O5,f.x,s.sg,m.k],pipes:[s.uU],styles:["[_nghost-%COMP%]     img{max-width:100%}"]}),o})();var A=n(3031);const F=function(o){return{"background-color":o}};function C(o,r){if(1&o&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("ngStyle",t.VKq(2,F,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}const T=function(o){return["/log",o]};function U(o,r){if(1&o&&(t.TgZ(0,"div")(1,"a",6)(2,"div",7)(3,"div",8),t._UZ(4,"img",9),t.qZA(),t.TgZ(5,"div",10)(6,"div",11)(7,"div",12)(8,"h5",13),t._uU(9),t.qZA(),t.TgZ(10,"div",14),t.YNc(11,C,2,4,"p",15),t.qZA()(),t._UZ(12,"hr",16),t.TgZ(13,"p",17),t._uU(14),t.qZA()()()()(),t.TgZ(15,"div",18),t._UZ(16,"app-amazon-ads",19),t.qZA()()),2&o){const e=r.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(5,T,e)),t.xp6(3),t.Q6J("src",i.articles[e].photo,t.LSH),t.xp6(5),t.hij(" ",i.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",i.getLabels(i.articles[e])),t.xp6(3),t.hij("",i.articles[e].body,"...")}}function w(o,r){1&o&&t._UZ(0,"app-amazon-ads",21)}const O=function(){return[]},M=[{path:"",component:(()=>{class o{constructor(e,i){this.router=i,e.setTitle("kemu logs")}get articles(){return A}get articleKeys(){return Object.keys(this.articles).sort((e,i)=>e>i?-1:1)}get adsLength(){return window.screen.width>=768&&Math.floor(Object.keys(this.articles).length/3)||1}getLabels(e){return e.labels.filter(i=>"log"!==i.name)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:6,vars:3,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",4,"ngFor","ngForOf"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"row","g-0"],[1,"col-3"],["alt","no image",2,"max-width","100%",3,"src"],[1,"col-9"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black"],[1,"col-3","text-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mt-0"],[1,"card-text"],[1,"card","mt-1"],["type","list"],[1,"badge","rounded-pill",3,"ngStyle"],["type","box"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,U,17,7,"div",3),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,w,1,0,"app-amazon-ads",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",i.articleKeys),t.xp6(2),t.Q6J("ngForOf",t.DdM(2,O).constructor(i.adsLength)))},directives:[s.sg,a.yS,s.PC,m.k],encapsulation:2}),o})()},{path:":id",component:b}];let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),o})();var D=n(6014);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,S,D.m]]}),o})()},6738:(u,p,n)=>{var s={"./1168270695.json":[379,379],"./list.json":[3031]};function a(l){if(!n.o(s,l))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c});var d=s[l],t=d[0];return Promise.all(d.slice(1).map(n.e)).then(()=>n.t(t,19))}a.keys=()=>Object.keys(s),a.id=6738,u.exports=a},3031:u=>{"use strict";u.exports=JSON.parse('{"1168270695":{"title":"2021-12-31 ~ 2022-01-02 \u6de1\u8def\u5cf6\u65c5\u884c","body":"[\u30db\u30c6\u30eb&\u30ea\u30be\u30fc\u30c4\u6de1\u8def\u5cf6](https://www.daiwaresort.jp/awaji/index.html)\u306b\u884c\u3063\u3066\u304d\u305f\u306e\u3067\u8a18\u9332\u3002 2021-12-31\u7a93\u304b\u3089\u306e\u666f\u8272\u3001\u6d77\u306e\u8fd1\u304f\u306a\u306e\u3067\u3068\u3066\u3082\u3044\u3044\u611f","labels":[{"name":"log","color":"F9846C"}],"photo":"https://user-images.githubusercontent.com/29157528/158165173-d086ce6a-02c0-4eea-8e4c-289dd814a8cb.png"}}')}}]);