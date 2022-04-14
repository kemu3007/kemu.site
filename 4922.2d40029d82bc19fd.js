"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4922],{44922:r=>{r.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/7","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/7/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/7/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/7/events","html_url":"https://github.com/kemu3007/portal/issues/7","id":1160543074,"node_id":"I_kwDOG7qoq85FLHti","number":7,"title":"Type safe\u306bAngular\u306eform\u3092\u6271\u3046","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900074882,"node_id":"LA_kwDOG7qoq87odmuC","url":"https://api.github.com/repos/kemu3007/portal/labels/Angular","name":"Angular","color":"D93F0B","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-06T07:45:35Z","updated_at":"2022-03-26T09:31:18Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"@ngneat/reactive-forms\u3092\u5229\u7528\u3059\u308b\u3068type safe\u306bform\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\n---\\r\\n#### \u901a\u5e38\u306eAngular\u306eform\\r\\n\\r\\n```ts\\r\\nimport { FormBuilder } from \'@angular/forms\';\\r\\n\\r\\nconstructor(private fb: FormBuilder){}\\r\\n\\r\\nform = this.fb.group({\\r\\n    firstName: \'\',\\r\\n    lastName: \'\'\\r\\n})\\r\\n```\\r\\n\u901a\u5e38\u306eAngular\u306eform\u3067\u306f`form.controls`\u3092\u53c2\u7167\u3057\u305f\u969b\u306e\u578b\u306f`{[key: string]: AbstractControl;}`\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001`form.controls.firstName`\u3068\u53c2\u7167\u3057\u305f\u5834\u5408\u3001\u578b\u30b7\u30b9\u30c6\u30e0\u4e0a`firstName`\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u306e\u304b\u308f\u304b\u3089\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n\u307e\u305f\u3001`form.valueChanges.subscribe(value => )`\u3068\u3057\u305f\u969b\u306evalue\u306e\u578b\u306f`any`\u3068\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n---\\r\\n#### @ngneat/reactive-forms\\r\\n```ts\\r\\nimport { FormBuilder, FormGroup, ControlsOf } from \'@ngneat/reactive-forms\';\\r\\n\\r\\nconstructor(private nfb: FormBuilder){}\\r\\n\\r\\ninterface sampleForm {\\r\\n  firstName: string;\\r\\n  lastName: string;\\r\\n}\\r\\n\\r\\nneatForm = this.nfb.group<sampleForm>({\\r\\n  firstName: \\"\\",\\r\\n  lastName: \\"\\"\\r\\n})\\r\\n\\r\\nneatForm = new FormGroup<ControlsOf<sampleForm>>({\\r\\n  firstName: new FormControl(\\"\\"),\\r\\n  lastName: new FormControl(\\"\\")\\r\\n})\\r\\n```\\r\\n@ngneat/reactive-forms\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u4e0a\u8a18\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306b\u306a\u308a\u307e\u3059\u3002  \\r\\n`sampleForm`\u3067\u30d5\u30a9\u30fc\u30e0\u9805\u76ee\u3092interface\u3068\u3057\u3066\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067`group({})`\u5185\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u969b\u306b\u3082intellisense\u304c\u50cd\u304d\u3001\u30d2\u30e5\u30fc\u30de\u30f3\u30a8\u30e9\u30fc\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\n\u3053\u306e\u5834\u5408\u306e`neatForm.controls`\u306e\u578b\u306f`GroupResolverFormBuilder<sampleForm>`\u3068\u306a\u308a\u3001`neatForm.controls.firstName`\u3068\u76f4\u63a5\u53c2\u7167\u3057\u3066\u3082\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u305b\u3093\u3002\\r\\n\\r\\n`form.valueChanges.subscribe(value => )`\u3068\u3057\u305f\u969b\u3001value\u306e\u578b\u306f`ValuesOf<GroupResolverFormBuilder<sampleForm>>`\u3068\u306a\u308a\u3001type safe\u306b\u53c2\u7167\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\n\u307e\u305f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5074\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u969b\u306b\u3082`formControlName`\u306b\u5bfe\u3057\u3066intellisense\u304c\u50cd\u304d\u307e\u3059\u3002:sugoine:\\r\\n\\r\\n```html\\r\\n<form [formGroup]=\\"form\\">\\r\\n  <input formControlName=\\"firstName\\" />\\r\\n  <input formControlName=\\"lastName\\" />\\r\\n</form>\\r\\n```\\r\\n\\r\\n\u6ce8\u610f\u70b9\u3068\u3057\u3066\u306fFormBuilder\u306b\u95a2\u3057\u3066\u306f\u5b8c\u5168\u306b\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u307e\u305f\u3001\u521d\u671f\u5024\u306fnull\u304c\u5165\u308b\u3051\u308c\u3069`Validators.required` \u304c\u3042\u308b\u305f\u3081form\u304cvalid\u306a\u5834\u5408\u306fnon null\u306a\u3069\u3068\u3044\u3063\u305f\u578b\u63a8\u8ad6\u3082\u4e0d\u53ef\u80fd\u306a\u305f\u3081\u6c17\u3092\u3064\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\r\\n\\r\\n---\\r\\n\\r\\n#### @ngneat/reactive-forms \u4fbf\u5229\u6a5f\u80fd\\r\\n\\r\\n- `value$`  \\r\\n\\r\\n`formGroup`\u306e`valueChanges`\u3092\u5229\u7528\u3057\u305f\u969b\u3001disabled\u306acontrol\u3001\u30d5\u30a9\u30fc\u30e0\u751f\u6210\u6642\u306e\u5024\u306fstream\u306b\u6d41\u308c\u3066\u3053\u306a\u3044\u3068\u3044\u3046\u7279\u5fb4\u304c\u3042\u308a\u307e\u3059\u3002  \\r\\n`value$`\u3092subscribe\u3059\u308b\u3068rawValue\u3001\u3064\u307e\u308adisable\u306acontrol\u306e\u5024\u3082\u6d41\u308c\u3001\u751f\u6210\u6642\u306e\u5024\u3082\u6d41\u308c\u3066\u304d\u307e\u3059\u3002\\r\\n\\r\\n- `persistControl`  \\r\\n\\r\\n```ts\\r\\n{ persistControl } from \'@ngneat/reactive-forms\'\\r\\n\\r\\npersistControl(this.neatForm, \\"neatForm\\", {}).subscribe()\\r\\n```\\r\\n\\r\\n\u81ea\u52d5\u7684\u306b\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30d5\u30a9\u30fc\u30e0\u306e\u5024\u3092\u4fdd\u5b58\u3057\u3001\u518d\u63cf\u753b\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30d5\u30a9\u30fc\u30e0\u306b\u5024\u3092\u3044\u308c\u3066\u304f\u308c\u307e\u3059\u3002\\r\\n\u81ea\u5206\u3067sessionStorage\u306a\u3069\u306b\u72ec\u81ea\u5b9f\u88c5\u3057\u306a\u304f\u3066\u3088\u3044\u306e\u304c\u3068\u3066\u3082\u697d\u3067\u3059\u3002\\r\\n\\r\\n---\\r\\n\\r\\n[@ngneat/reactive-forms](https://github.com/ngneat/reactive-forms)\\r\\n\\r\\n\u4eca\u56de\u306e\u30b3\u30fc\u30c9\u306f[\u3053\u3061\u3089](https://github.com/kemu3007/ngneat-reactive_forms-test/blob/master/test/src/app/app.component.ts)","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/7/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/7/timeline","performed_via_github_app":null}')}}]);