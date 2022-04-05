"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[237],{2237:r=>{r.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/27","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/27/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/27/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/27/events","html_url":"https://github.com/kemu3007/portal/issues/27","id":1189790754,"node_id":"I_kwDOG7qoq85G6sQi","number":27,"title":"marked.js\u3068highlight.js\u3067GitHub Flavored Markdown\u3092\u6271\u3046","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3965428013,"node_id":"LA_kwDOG7qoq87sW6Et","url":"https://api.github.com/repos/kemu3007/portal/labels/TypeScript","name":"TypeScript","color":"bfdadc","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-04-01T13:22:10Z","updated_at":"2022-04-03T05:01:14Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"GitHub\u4e0a\u3067\u6271\u3063\u3066\u3044\u308bMarkdown\u306e\u6b63\u5f0f\u540d\u79f0\u306fGitHub Flavored Markdown\u3068\u8a00\u308f\u308c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306eMarkdown\u3092\u62e1\u5f35\u3057\u305f\u72ec\u81ea\u8a18\u6cd5\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\\r\\n\\r\\n\u4eca\u56de\u306fhighlight.js\u306eGitHub css\u3092\u9069\u7528\u3057\u3066Markdown\u30c6\u30ad\u30b9\u30c8\u3092HTML\u306b\u5909\u63db\u3057\u307e\u3059\u3002\\r\\n\\r\\n[GitHub Flavored Markdown spec](https://github.github.com/gfm/)\\r\\n\\r\\n\u4eca\u56de\u4f7f\u7528\u3057\u305f\u30e9\u30a4\u30d6\u30e9\u30ea\\r\\n\\r\\n- [highlight.js](https://highlightjs.org/)\\r\\n- [marked.js](https://github.com/markedjs/marked)\\r\\n\\r\\n\\r\\n### \u5c0e\u5165\\r\\n\\r\\n```bash\\r\\n$ npm i highlight.js marked\\r\\n```\\r\\ntips\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f `crypto-es` \u3082\u540c\u6642\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n\\r\\n#### GFM\u3092HTML\u306b\u5909\u63db\u3059\u308b\\r\\n\\r\\nMarkdown\u30c6\u30ad\u30b9\u30c8\u3092HTML\u306b\u5909\u63db\u3057\u3001\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u306b\u5bfe\u3057\u3066highlight.js\u306ecss\u304c\u3042\u305f\u308b\u69d8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\\r\\n\\r\\n```ts\\r\\nimport { marked } from \'marked\';\\r\\nimport hljs from \'highlight.js\';\\r\\n\\r\\nconst gfm_text = \\"\\"\\r\\n\\r\\nmarked.setOptions({\\r\\n  highlight: function (code, lang) {\\r\\n    const language = hljs.getLanguage(lang) ? lang : \'plaintext\';\\r\\n    return hljs.highlight(code, { language }).value;\\r\\n  },\\r\\n  langPrefix: \'hljs language-\',\\r\\n  gfm: true,\\r\\n  breaks: true,\\r\\n});\\r\\n\\r\\nmarkd.parse(gfm_text)\\r\\n```\\r\\n\\r\\n### highlight.js\u306ecss\u9069\u7528\\r\\n\\r\\nstyle.scss\\r\\n\\r\\n```scss\\r\\n@import \'~highlight.js/styles/github.css\';\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n\u3053\u308c\u306b\u3088\u308aMarkdown\u3092GitHub\u4e0a\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u306ebackground-color\u304c\u5b58\u5728\u3057\u3066\u3044\u306a\u3044\u306a\u3069\u304c\u3042\u308b\u5834\u5408\u306f\u9069\u5b9ccss\u3092\u8ffd\u52a0\u3057\u3066\u9069\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n\\r\\n```scss\\r\\n:host ::ng-deep pre > code {\\r\\n  background-color: #f6f8fa;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\ntips: \u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f62\u3067renderer\u3092\u4e0a\u66f8\u304d\u3057\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\n```ts\\r\\nimport { marked, Renderer } from \'marked\';\\r\\nimport crypt from \'crypto-es\';\\r\\nimport hljs from \'highlight.js\';\\r\\n\\r\\nconst renderer = new Renderer();\\r\\n/** \u30d8\u30c3\u30c0\u30fc\u306b\u306f\u30c6\u30ad\u30b9\u30c8\u306ehash\u5024\u304b\u3089\u751f\u6210\u3057\u305f\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8, \u30ea\u30f3\u30af\u3092\u30b3\u30d4\u30fc\u3059\u308b\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b */\\r\\nrenderer.heading = (text, lebel) => {\\r\\n  const hash = crypt.MD5(text);\\r\\n  return `\\r\\n  <div class=\\"d-flex\\">\\r\\n    <h${lebel}\\r\\n      id=${hash}\\r\\n      style=\\"border-left: solid 3px; border-color: darkturquoise; border-radius: 2px; padding-left: 5px;\\"\\r\\n    >${text}</h${lebel}>\\r\\n    <button class=\\"btn btn-sm\\">\\r\\n      <i class=\\"bi bi-clipboard\\" onclick=\\"window.navigator.clipboard.writeText(\'${window.location.origin}${window.location.pathname}#${hash}\')\\"></i>\\r\\n    </button>\\r\\n  </div>\\r\\n  `;\\r\\n};\\r\\n/** img\u8981\u7d20\u306bloading lazy\u3092\u8ffd\u52a0\u3059\u308b */\\r\\nrenderer.image = (href) => `<img src=${href} loading=lazy />`;\\r\\n/** \u30ea\u30f3\u30af\u8981\u7d20\u306bbootstrap icon\u306e\u30ea\u30f3\u30af\u30de\u30fc\u30af\u3092\u4ed8\u4e0e\u3059\u308b */\\r\\nrenderer.link = (href, title, text) =>\\r\\n  `<a href=${href} class=\\"text-muted\\">${text}<i class=\\"bi bi-link-45deg\\"></i></a>`;\\r\\nmarked.setOptions({\\r\\n  renderer,\\r\\n  highlight: function (code, lang) {\\r\\n    const language = hljs.getLanguage(lang) ? lang : \'plaintext\';\\r\\n    return hljs.highlight(code, { language }).value;\\r\\n  },\\r\\n  langPrefix: \'hljs language-\',\\r\\n  gfm: true,\\r\\n  breaks: true,\\r\\n});\\r\\n\\r\\n```\\r\\n\\r\\n\u3053\u308c\u306b\u3088\u308aGFM\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\\r\\n\\r\\n\u5229\u7528\u3057\u3066\u3044\u308b\u5b9f\u969b\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f[\u3053\u3061\u3089](https://github.com/kemu3007/portal/blob/master/portal/src/app/shared/markdown/marked.service.ts)\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n\\r\\n---\\r\\n\\r\\n\u4fee\u6b63\u5c65\u6b74\\r\\n- crypto-js\u306fcommon js module\u306e\u305f\u3081ECMAScript module\u306ecrypto-es\u306b\u79fb\u884c\\r\\n","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/27/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/27/timeline","performed_via_github_app":null}')}}]);