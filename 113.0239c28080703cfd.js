(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{89113:(u,m,n)=>{"use strict";n.r(m),n.d(m,{LogModule:()=>w});var r=n(69808),a=n(56609),l=n(17445),d=n(95698),t=n(5e3),c=n(22313),g=n(39601),h=n(38304),v=n(53094),f=n(11441),p=n(11175);function Z(o,s){if(1&o&&(t.TgZ(0,"div",16)(1,"div",17)(2,"div",18),t._UZ(3,"img",19),t.TgZ(4,"a",20),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr",21),t._uU(8),t.qZA()()),2&o){const e=s.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function L(o,s){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6)(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t._UZ(8,"app-tweet-btn"),t.qZA(),t._UZ(9,"hr")(10,"div",7)(11,"hr",8),t.TgZ(12,"div",6)(13,"h3",9),t._uU(14,"comments"),t.qZA(),t._UZ(15,"app-tweet-btn"),t.qZA(),t.YNc(16,Z,9,4,"div",10),t.TgZ(17,"p",11),t._uU(18," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(19,"a",12),t._uU(20,"\u3053\u3061\u3089"),t._UZ(21,"i",13),t.qZA(),t._uU(22,"\u304b\u3089 "),t._UZ(23,"br"),t._uU(24," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(25,"div",14),t._UZ(26,"app-ads",15),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("src","/assets/images/"+e.article.id+".png",t.LSH)("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(t.xi3(7,8,e.article.created_at,"yyyy.MM.dd hh:mm")),t.xp6(4),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(6),t.Q6J("ngForOf",e.article.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(7),t.Q6J("count",e.adsLength)}}let x=(()=>{class o{constructor(e,i,O,J,D,$,j){this.titleService=e,this.route=i,this.router=O,this.messageService=J,this.breadcrumbService=D,this.markedService=$,this.sanitizer=j,this.marked=this.markedService.marked,this.html="",this.comments=[],this.comments$=n(9857)(`./${this.issueId}.json`).catch(Q=>{}),this.article$=n(6738)(`./${this.issueId}.json`).catch(Q=>this.router.navigate(["/log"]).then(Y=>this.messageService.pushMessage({type:"warning",body:"\u8a18\u4e8b\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u305b\u3093"})))}ngOnInit(){this.article$.then(e=>{this.titleService.setTitle(`${e.title} | kemu logs`),this.article=e,this.breadcrumbService.breadcrumb=`/log/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,l.F)(100).pipe((0,d.q)(1)).subscribe(i=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)})}),this.comments$.then(e=>{for(let i=0;i<e.length;i++)this.comments.push(e[i])})}get issueId(){return this.route.snapshot.paramMap.get("id")}get adsLength(){return window.screen.width>=768?4:1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.e),t.Y36(h.p),t.Y36(v.$),t.Y36(c.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[1,"d-flex","justify-content-center"],[3,"src","alt","title"],[1,"d-flex","justify-content-between"],[3,"innerHTML"],[1,"mt-5"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-4"],["type","box",3,"count"],[1,"card"],[1,"card-body"],[1,"row"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"],[1,"mt-0","mb-1"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,L,27,11,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.article))},directives:[r.O5,f.x,r.sg,p.F],pipes:[r.uU],styles:["[_nghost-%COMP%]     img{max-width:100%}[_nghost-%COMP%]     pre>code{border-radius:10px}"]}),o})();var y=n(13031),A=n(36235);const b=function(o){return{"background-color":o}};function C(o,s){if(1&o&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("ngStyle",t.VKq(2,b,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}const T=function(o){return["/log",o]};function F(o,s){if(1&o&&(t.TgZ(0,"div")(1,"a",6)(2,"div",7)(3,"div",8),t._UZ(4,"img",9),t.qZA(),t.TgZ(5,"div",10)(6,"div",11)(7,"div",12)(8,"h3",13),t._uU(9),t.qZA(),t.TgZ(10,"div",14),t.YNc(11,C,2,4,"p",15),t.qZA()(),t._UZ(12,"hr",16),t.TgZ(13,"p",17),t._uU(14),t.ALo(15,"mdescape"),t.qZA()()()()(),t.TgZ(16,"div",18),t._UZ(17,"app-ads",19),t.qZA()()),2&o){const e=s.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(7,T,e)),t.xp6(3),t.Q6J("src",i.articles[e].photo,t.LSH),t.xp6(5),t.hij(" ",i.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",i.getLabels(i.articles[e])),t.xp6(3),t.Oqu(t.lcZ(15,5,i.articles[e].body))}}const U=[{path:"",component:(()=>{class o{constructor(e,i){this.router=i,e.setTitle("kemu logs")}get articles(){return y}get articleKeys(){return Object.keys(this.articles).sort((e,i)=>e>i?-1:1)}get adsLength(){return window.screen.width>=768&&Math.floor(Object.keys(this.articles).length/3)||1}getLabels(e){return e.labels.filter(i=>"log"!==i.name)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",3,"count"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"row","g-0"],[1,"col-3"],["alt","no image",2,"max-width","100%",3,"src"],[1,"col-9"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black"],[1,"col-3","text-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mt-0"],[1,"card-text"],[1,"card","mt-1"],["type","auto"],[1,"badge","rounded-pill",3,"ngStyle"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,F,18,9,"div",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-ads",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",i.articleKeys),t.xp6(2),t.Q6J("count",i.adsLength))},directives:[r.sg,a.yS,r.PC,p.F],pipes:[A.G],encapsulation:2}),o})()},{path:":id",component:x}];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(U)],a.Bz]}),o})();var S=n(44466);let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,M,S.m]]}),o})()},6738:(u,m,n)=>{var r={"./1168270695.json":[10379,379],"./list.json":[13031]};function a(l){if(!n.o(r,l))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c});var d=r[l],t=d[0];return Promise.all(d.slice(1).map(n.e)).then(()=>n.t(t,19))}a.keys=()=>Object.keys(r),a.id=6738,u.exports=a},13031:u=>{"use strict";u.exports=JSON.parse('{"1168270695":{"title":"2021-12-31 \u301c 2022-01-02 \u6de1\u8def\u5cf6\u65c5\u884c","created_at":"2022-03-14T11:56:03Z","body":"[\u30db\u30c6\u30eb&\u30ea\u30be\u30fc\u30c4\u6de1\u8def\u5cf6]\u306b\u884c\u3063\u3066\u304d\u305f\u306e\u3067\u8a18\u9332\u3002 2021-12-31\u7a93\u304b\u3089\u306e\u666f\u8272\u3001\u6d77\u306e\u8fd1\u304f\u306a\u306e\u3067\u3068\u3066\u3082\u3044\u3044\u611f\u3058\u3060\u3063\u305f[]\u548c\u98df\u3001\u5927\u3057\u3066\u826f\u304f\u3082\u306a\u304f\u60aa\u304f\u3082\u306a\u304f\u3068\u3044\u3046\u611f\u3058\u3002[] 2022-01-01\u521d\u65e5\u306e\u51fa\u306f\u66c7\u308a\u3001\u3044\u3044\u611f\u3058\u306e\u5199\u771f\u306f\u53d6\u308c\u305a\u3002\u30db\u30c6\u30eb\u306b\u30bf\u30af\u30b7\u30fc\u3092\u547c\u3093\u3067\u3082\u3089\u3044\u521d\u8a63\u306b\u3002\u884c\u3063\u3066\u304d\u305f\u306e\u306f[\u304a\u306e\u3053\u308d\u5cf6\u795e\u793e","labels":[{"name":"log","color":"F9846C"}],"photo":"https://user-images.githubusercontent.com/29157528/158165173-d086ce6a-02c0-4eea-8e4c-289dd814a8cb.png"}}')}}]);