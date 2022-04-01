"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[794],{7794:t=>{t.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/21","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/21/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/21/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/21/events","html_url":"https://github.com/kemu3007/portal/issues/21","id":1174533240,"node_id":"I_kwDOG7qoq85GAfR4","number":21,"title":"Angular reCAPTCHA\u3092\u5229\u7528\u3059\u308b","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900074882,"node_id":"LA_kwDOG7qoq87odmuC","url":"https://api.github.com/repos/kemu3007/portal/labels/Angular","name":"Angular","color":"D93F0B","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-20T12:34:43Z","updated_at":"2022-03-21T12:36:22Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"reCAPTCHA\u3092\u7528\u3044\u3066bot\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n\u901a\u5e38\u3001reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001script\u30bf\u30b0\u3092HTML\u306b\u4ed5\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001index.html\u4e0a\u306escript\u30bf\u30b0\u306f\u30a8\u30b9\u30b1\u30fc\u30d7\u3055\u308c\u3001\u6d88\u3055\u308c\u3066\u3057\u307e\u3046\u305f\u3081[ng-recaptcha](https://github.com/DethAriel/ng-recaptcha)\u3092\u5229\u7528\u3057\u307e\u3059\u3002\\r\\n\\r\\n#### install \\r\\n\\r\\n```zsh\\r\\n$ npm i ng-recaptcha\\r\\n```\\r\\n\\r\\n#### introduction\\r\\n\\r\\n- *.module.ts\\r\\n\\r\\n```ts\\r\\nimport { RecaptchaModule } from \'ng-recaptcha\';\\r\\n\\r\\n@NgModule({\\r\\n  declarations: [...],\\r\\n  imports: [..., RecaptchaModule],\\r\\n})\\r\\n```\\r\\n\\r\\n- *.component.html\\r\\n  -  siteKey\u306b\u306f[GCP reCAPTCHA](https://cloud.google.com/recaptcha-enterprise?hl=ja)\u3067\u4f5c\u6210\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n\\r\\n```html\\r\\n<re-captcha\\r\\n  (resolved)=\\"*()\\"\\r\\n  siteKey=\\"***-*****\\"\\r\\n></re-captcha>\\r\\n```\\r\\n\\r\\n\u203b\u30c6\u30b9\u30c8\u7528\u30ad\u30fc\u3068\u30c7\u30d7\u30ed\u30a4\u7528\u30ad\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u3067\u52d5\u304b\u3059\u969b\u306b\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001reCAPTCHA\u30c9\u30e1\u30a4\u30f3\u306b `localhost` \u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u8ffd\u52a0\u3057\u3066\u3057\u307e\u3046\u3068\u7b2c\u4e09\u8005\u304c\u30ad\u30fc\u3092\u5229\u7528\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u3067\u52d5\u304b\u3059\u306a\u3069\u304c\u53ef\u80fd\u306b\u306a\u308a\u610f\u56f3\u3057\u306a\u3044\u8ab2\u91d1\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u8d77\u3053\u308a\u3046\u308b\u305f\u3081\u3067\u3059\u3002\\r\\n\\r\\n\u6307\u5b9a\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u5916\u3067\u5229\u7528\u3057\u305f\u5834\u5408\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u8868\u8a18\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n<img width=\\"559\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-21 21 35 43\\" src=\\"https://user-images.githubusercontent.com/29157528/159262103-1a186638-f550-47dd-ac3c-892244afdddf.png\\">\\r\\n\\r\\n\u6599\u91d1\u306b\u3064\u3044\u3066\u306f~1000000\u56de/\u6708\u307e\u3067\u7121\u6599\u306e\u305f\u3081\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u306f\u7121\u6599\u67a0\u3067\u53ce\u307e\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002\\r\\n\\r\\n[reCAPTCHA Enterprise \u306e\u6599\u91d1](https://cloud.google.com/recaptcha-enterprise/pricing)\\r\\n\\r\\n\u3053\u308c\u306b\u3088\u308a\u3001reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a66\u3057\u3066\u307f\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u3088\u308a\u3069\u3046\u305e\\r\\n\\r\\n[https://portal.kemu.site/contact](https://portal.kemu.site/contact)\\r\\n\\r\\n","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/21/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/21/timeline","performed_via_github_app":null}')}}]);