(self.webpackChunkportal=self.webpackChunkportal||[]).push([[601],{5601:(h,g,n)=>{"use strict";n.r(g),n.d(g,{BlogModule:()=>$});var a=n(9808),l=n(6609),d=n(7445),m=n(5698),t=n(5e3),c=n(2313),f=n(9601),Z=n(8304),y=n(1364),b=n(1441),v=n(1175);function x(o,i){if(1&o&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t._UZ(3,"img",16),t.TgZ(4,"a",17),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr"),t._uU(8),t.qZA()()),2&o){const e=i.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function j(o,i){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t._UZ(8,"app-tweet-btn"),t.qZA(),t._UZ(9,"hr")(10,"div",5)(11,"hr",6),t.TgZ(12,"h3",7),t._uU(13,"comments"),t.qZA(),t.YNc(14,x,9,4,"div",8),t.TgZ(15,"p"),t._uU(16," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(17,"a",9),t._uU(18,"\u3053\u3061\u3089"),t._UZ(19,"i",10),t.qZA(),t._uU(20,"\u304b\u3089 "),t._UZ(21,"br"),t._uU(22," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(23,"div",11),t._UZ(24,"app-ads",12),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.article.title),t.xp6(3),t.Oqu(t.xi3(7,6,e.article.created_at,"yyyy.MM.dd hh:mm")),t.xp6(4),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(4),t.Q6J("ngForOf",e.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(7),t.Q6J("count",e.adsLength)}}let A=(()=>{class o{constructor(e,s,r,p,u,E,I){this.titleService=e,this.route=s,this.router=r,this.messageService=p,this.breadcrumbService=u,this.markedService=E,this.sanitizer=I,this.marked=this.markedService.marked,this.comments=[],this.html="",this.article$=n(3101)(`./${this.issueId}.json`).catch(H=>this.router.navigate(["/blog"]).then(z=>this.messageService.pushMessage({type:"warning",body:"\u8a18\u4e8b\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u305b\u3093"})))}get issueId(){return this.route.snapshot.paramMap.get("id")}ngOnInit(){this.article$.then(e=>{this.titleService.setTitle(`kemu tech blog | ${e.title}`),this.article=e,this.breadcrumbService.breadcrumb=`/blog/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,d.F)(100).pipe((0,m.q)(1)).subscribe(s=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)})})}get adsLength(){return window.screen.width>=768?4:1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(l.gz),t.Y36(l.F0),t.Y36(f.e),t.Y36(Z.p),t.Y36(y.$),t.Y36(c.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[1,"d-flex","justify-content-between"],[3,"innerHTML"],[1,"mt-5"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-4"],["type","box",3,"count"],[1,"card"],[1,"card-body"],[1,"row"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,j,25,9,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.article))},directives:[a.O5,b.x,a.sg,v.F],pipes:[a.uU],styles:["[_nghost-%COMP%]     img{max-width:100%}[_nghost-%COMP%]     pre>code{background-color:#f6f8fa;border-radius:10px}"]}),o})();var T=n(3996),B=n(8372),C=n(1884),L=n(4004),U=n(6827),F=n(6235);const M=function(o){return{"background-color":o}};function O(o,i){if(1&o&&(t.TgZ(0,"p",18),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("ngStyle",t.VKq(2,M,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}function D(o,i){1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-ads",20),t.qZA())}const J=function(o){return["/blog",o]};function S(o,i){if(1&o&&(t.TgZ(0,"div")(1,"a",8)(2,"div",9)(3,"div",10)(4,"h3",11),t._uU(5),t.qZA(),t.TgZ(6,"div",12),t.YNc(7,O,2,4,"p",13),t.qZA(),t.TgZ(8,"div",14),t._uU(9),t.ALo(10,"date"),t.qZA()(),t._UZ(11,"hr",15),t.TgZ(12,"p",16),t._uU(13),t.ALo(14,"mdescape"),t.qZA()()(),t.YNc(15,D,2,0,"div",17),t.qZA()),2&o){const e=i.$implicit,s=i.index,r=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(11,J,e)),t.xp6(4),t.hij(" ",r.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",r.getLabels(r.articles[e])),t.xp6(2),t.Oqu(t.xi3(10,6,r.articles[e].created_at,"yyyy.MM.dd")),t.xp6(4),t.Oqu(t.lcZ(14,9,r.articles[e].body)),t.xp6(2),t.Q6J("ngIf",(s+1)%3==0)}}const w=[{path:"",component:(()=>{class o{constructor(e,s){this.router=s,this.search=r=>r.pipe((0,B.b)(200),(0,C.x)()).pipe((0,L.U)(p=>Object.keys(this.searchData).filter(u=>u.toLowerCase().includes(p.toLowerCase())))),e.setTitle("kemu tech blog")}get articles(){return T}get articleKeys(){return Object.keys(this.articles).sort((e,s)=>e>s?-1:1)}get searchData(){const e={};return Object.keys(this.articles).forEach(s=>{const r=`${this.articles[s].title} | ${this.getLabels(this.articles[s])[0].name}`;e[r]=s}),e}get adsLength(){return window.screen.width>=768?Math.floor(Object.keys(this.articles).length/3):1}getLabels(e){return e.labels.filter(s=>"article"!==s.name)}selectArticle(e){this.router.navigate(["/blog",this.searchData[e.item]])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Dx),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:8,vars:3,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],["placeholder","search","NgbTypeahead","",1,"form-control",3,"ngbTypeahead","selectItem","blur"],["instance","ngbTypeahead"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",3,"count"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black","mb-0"],[1,"col-3","d-flex","align-items-start","justify-content-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-12"],[1,"mt-0"],[1,"card-text"],["class","card mt-1",4,"ngIf"],[1,"badge","rounded-pill",3,"ngStyle"],[1,"card","mt-1"],["type","list"]],template:function(e,s){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3,4),t.NdJ("selectItem",function(u){return s.selectArticle(u)})("blur",function(){return t.CHM(r),t.MAs(4).dismissPopup()}),t.qZA(),t.YNc(5,S,16,13,"div",5),t.qZA(),t.TgZ(6,"div",6),t._UZ(7,"app-ads",7),t.qZA()()()}2&e&&(t.xp6(3),t.Q6J("ngbTypeahead",s.search),t.xp6(2),t.Q6J("ngForOf",s.articleKeys),t.xp6(2),t.Q6J("count",s.adsLength))},directives:[U.dR,a.sg,l.yS,a.PC,a.O5,v.F],pipes:[a.uU,F.G],encapsulation:2}),o})()},{path:":id",component:A}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(w)],l.Bz]}),o})();var Y=n(4466);let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,Q,Y.m]]}),o})()},3101:(h,g,n)=>{var a={"./1160526026.json":[898,898],"./1160542827.json":[4903,903],"./1160542878.json":[9542,542],"./1160542944.json":[2232,232],"./1160543028.json":[3334,334],"./1160543074.json":[5245,922],"./1160543248.json":[7887,887],"./1160543297.json":[2604,604],"./1160543378.json":[6998,998],"./1160543419.json":[5363,363],"./1160653032.json":[2070,70],"./1167241988.json":[3127,127],"./1167568913.json":[149,149],"./1169430844.json":[5215,215],"./1169514542.json":[5443,443],"./1170873471.json":[3430,430],"./1174254849.json":[6961,961],"./1174435949.json":[3554,554],"./1174533240.json":[7794,794],"./1175617296.json":[7800,800],"./1176713310.json":[3280,280],"./1180653910.json":[8933,933],"./1182698916.json":[2001,1],"./1183289291.json":[3438,438],"./1189790754.json":[2237,237],"./1189843692.json":[2199,199],"./list.json":[3996]};function l(d){if(!n.o(a,d))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+d+"'");throw c.code="MODULE_NOT_FOUND",c});var m=a[d],t=m[0];return Promise.all(m.slice(1).map(n.e)).then(()=>n.t(t,19))}l.keys=()=>Object.keys(a),l.id=3101,h.exports=l}}]);