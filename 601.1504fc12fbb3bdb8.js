"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[601],{5601:(Q,g,o)=>{o.r(g),o.d(g,{BlogModule:()=>E});var l=o(9808),a=o(6609),m=o(7445),h=o(5698),t=o(5e3),d=o(2313),Z=o(8304),x=o(803),v=o(5695),b=o(1441),f=o(1175);function y(i,s){if(1&i&&(t.TgZ(0,"div",18)(1,"div",19)(2,"div",20),t._UZ(3,"img",21),t.TgZ(4,"a",22),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr",23),t._uU(8),t.qZA()()),2&i){const e=s.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function A(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",18)(2,"div",24),t._uU(3,"\u6b21\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",25)(5,"span",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return r.navigateByIssueId(r.nextArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.nextArticleId].title)}}function _(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",18)(2,"div",24),t._uU(3,"\u524d\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",25)(5,"span",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return r.navigateByIssueId(r.pastArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.pastArticleId].title)}}function B(i,s){if(1&i&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),t._UZ(4,"img",6),t.qZA(),t.TgZ(5,"div",3)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div",7)(9,"p"),t._uU(10),t.ALo(11,"date"),t.qZA(),t._UZ(12,"app-tweet-btn"),t.qZA()()(),t._UZ(13,"hr")(14,"div",8)(15,"hr",9),t.TgZ(16,"div",7)(17,"h2",10),t._uU(18,"Comments"),t.qZA(),t._UZ(19,"app-tweet-btn"),t.qZA(),t.YNc(20,y,9,4,"div",11),t.TgZ(21,"p",12),t._uU(22," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(23,"a",13),t._uU(24,"\u3053\u3061\u3089"),t._UZ(25,"i",14),t.qZA(),t._uU(26,"\u304b\u3089 "),t._UZ(27,"br"),t._uU(28," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA(),t._UZ(29,"hr"),t.TgZ(30,"h3"),t._uU(31,"\u5225\u306e\u8a18\u4e8b\u3092\u898b\u308b"),t.qZA(),t.TgZ(32,"div",4)(33,"div",15),t.YNc(34,A,7,1,"ng-container",16),t.qZA(),t.TgZ(35,"div",15),t.YNc(36,_,7,1,"ng-container",16),t.qZA()()(),t.TgZ(37,"div",5),t._UZ(38,"app-ads",17),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("src","/assets/images/"+e.article.id+".png",t.LSH)("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(e.article.title),t.xp6(3),t.hij("\u4f5c\u6210\u65e5: ",t.xi3(11,11,e.article.created_at,"yyyy.MM.dd hh:mm"),""),t.xp6(4),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(6),t.Q6J("ngForOf",e.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(11),t.Q6J("ngIf",e.nextArticleId),t.xp6(2),t.Q6J("ngIf",e.pastArticleId),t.xp6(2),t.Q6J("count",e.adsLength)}}let T=(()=>{class i{constructor(e,n,r,u,c,p,j){this.titleService=e,this.route=n,this.breadcrumbService=r,this.markedService=u,this.sanitizer=c,this.articlesService=p,this.router=j,this.marked=this.markedService.marked,this.articles={},this.comments=[],this.html=""}get article(){return this._article}set article(e){e&&(this.titleService.setTitle(`${e.title} | Kemu Tech Blog`),this._article=e,this.breadcrumbService.breadcrumb=`/blog/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,m.F)(100).pipe((0,h.q)(1)).subscribe(n=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)}))}get issueId(){return this.route.snapshot.paramMap.get("id")}ngOnInit(){this.articlesService.getList("/assets/articles/list.json").subscribe(e=>this.articles=e),this.articlesService.get(`/assets/articles/${this.issueId}.json`).subscribe(e=>this.article=e),this.articlesService.getComments(`/assets/comments/${this.issueId}.json`).subscribe(e=>this.comments=e)}ngAfterViewInit(){(0,m.F)(500).pipe((0,h.q)(1)).subscribe(e=>{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",document.getElementById("container").insertAdjacentElement("afterend",n)})}get adsLength(){return window.screen.width>=768?4:1}get articleIds(){return Object.keys(this.articles)}navigateByIssueId(e){this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.navigate(["/blog/",e])}get nextArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n>Number(this.issueId));return e.length?Math.min(...e).toString():null}return null}get pastArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n<Number(this.issueId));return e.length?Math.max(...e).toString():null}return null}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.Dx),t.Y36(a.gz),t.Y36(Z.p),t.Y36(x.$),t.Y36(d.H7),t.Y36(v.J),t.Y36(a.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[["id","container",1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[1,"row"],[1,"col-md-4"],[1,"img-thumbnail","img-fluid","mb-2",3,"src","alt","title"],[1,"d-flex","justify-content-between"],[3,"innerHTML"],[1,"mt-5"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-6"],[4,"ngIf"],["type","box",3,"count"],[1,"card"],[1,"card-body","pt-1","ps-1"],[1,"d-flex"],["width","24",3,"src"],[1,"ms-2",3,"href"],[1,"mt-1","mb-1"],[1,"card-header"],[1,"card-body"],[1,"link-primary",2,"cursor","pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,B,39,14,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.article))},directives:[l.O5,b.x,l.sg,f.F],pipes:[l.uU],styles:["[_nghost-%COMP%]     img{max-width:100%;box-shadow:0 .125rem .25rem #00000014!important}[_nghost-%COMP%]     pre{border:solid 1px grey;border-radius:.25rem;box-shadow:0 .125rem .25rem #00000014!important;padding-bottom:10px}[_nghost-%COMP%]     ul{padding-left:15px}[_nghost-%COMP%]     li{list-style-type:circle}[_nghost-%COMP%]     pre>code>ol>li{list-style-type:decimal;width:100%}[_nghost-%COMP%]     pre>code>ol>li::marker{color:gray}[_nghost-%COMP%]     pre>code>ol{display:grid}"]}),i})();var C=o(8372),I=o(1884),U=o(4004),M=o(7569);const F=function(i){return{"background-color":i}};function L(i,s){if(1&i&&(t.TgZ(0,"p",18),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.Q6J("ngStyle",t.VKq(2,F,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}function w(i,s){1&i&&(t.TgZ(0,"div",19),t._UZ(1,"app-ads",20),t.qZA())}const O=function(i){return["/blog",i]};function S(i,s){if(1&i&&(t.TgZ(0,"div")(1,"a",8)(2,"div",9)(3,"div",10)(4,"h3",11),t._uU(5),t.qZA(),t.TgZ(6,"div",12),t.YNc(7,L,2,4,"p",13),t.qZA(),t.TgZ(8,"div",14),t._uU(9),t.ALo(10,"date"),t.qZA()(),t._UZ(11,"hr",15),t.TgZ(12,"p",16),t._uU(13),t.qZA()()(),t.YNc(14,w,2,0,"div",17),t.qZA()),2&i){const e=s.$implicit,n=s.index,r=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(9,O,e)),t.xp6(4),t.hij(" ",r.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",r.getLabels(r.articles[e])),t.xp6(2),t.Oqu(t.xi3(10,6,r.articles[e].created_at,"yyyy.MM.dd")),t.xp6(4),t.Oqu(r.articles[e].body),t.xp6(1),t.Q6J("ngIf",(n+1)%3==0)}}const J=[{path:"",component:(()=>{class i{constructor(e,n,r){this.router=n,this.articleService=r,this.articles={},this.search=u=>u.pipe((0,C.b)(200),(0,I.x)()).pipe((0,U.U)(c=>Object.keys(this.searchData).filter(p=>p.toLowerCase().includes(c.toLowerCase())))),e.setTitle("Kemu Tech Blog")}ngOnInit(){this.articleService.getList("/assets/articles/list.json").subscribe(e=>this.articles=e)}get articleKeys(){return Object.keys(this.articles).sort((e,n)=>e>n?-1:1)}get searchData(){const e={};return Object.keys(this.articles).forEach(n=>{const r=`${this.articles[n].title} | ${this.getLabels(this.articles[n])[0].name}`;e[r]=n}),e}get adsLength(){return window.screen.width>=768?Math.floor(Object.keys(this.articles).length/3):1}getLabels(e){return e.labels.filter(n=>"article"!==n.name)}selectArticle(e){this.router.navigate(["/blog",this.searchData[e.item]])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.Dx),t.Y36(a.F0),t.Y36(v.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-list"]],decls:8,vars:3,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],["placeholder","search","NgbTypeahead","",1,"form-control",3,"ngbTypeahead","selectItem","blur"],["instance","ngbTypeahead"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",3,"count"],[1,"card","shadow","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black","mb-0"],[1,"col-3","d-flex","align-items-start","justify-content-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-12"],[1,"mt-0"],[1,"card-text"],["class","card shadow mt-1",4,"ngIf"],[1,"badge","rounded-pill",3,"ngStyle"],[1,"card","shadow","mt-1"],["type","auto"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3,4),t.NdJ("selectItem",function(c){return n.selectArticle(c)})("blur",function(){return t.CHM(r),t.MAs(4).dismissPopup()}),t.qZA(),t.YNc(5,S,15,11,"div",5),t.qZA(),t.TgZ(6,"div",6),t._UZ(7,"app-ads",7),t.qZA()()()}2&e&&(t.xp6(3),t.Q6J("ngbTypeahead",n.search),t.xp6(2),t.Q6J("ngForOf",n.articleKeys),t.xp6(2),t.Q6J("count",n.adsLength))},directives:[M.dR,l.sg,a.yS,l.PC,l.O5,f.F],pipes:[l.uU],encapsulation:2}),i})()},{path:":id",component:T}];let q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.Bz.forChild(J)],a.Bz]}),i})();var D=o(4466);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,q,D.m]]}),i})()}}]);