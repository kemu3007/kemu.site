"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9542],{89542:s=>{s.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/4","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/4/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/4/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/4/events","html_url":"https://github.com/kemu3007/portal/issues/4","id":1160542878,"node_id":"I_kwDOG7qoq85FLHqe","number":4,"title":"Markdown\u3092HTML\u306b\u5909\u63db/css\u3092\u4ed8\u4e0e\u3059\u308b","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900078597,"node_id":"LA_kwDOG7qoq87odnoF","url":"https://api.github.com/repos/kemu3007/portal/labels/Python","name":"Python","color":"1D76DB","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-06T07:44:22Z","updated_at":"2022-03-06T15:21:56Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"markdown\u306f\u4ee5\u4e0b\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u3046\u3053\u3068\u3067HTML\u306b\u5909\u63db\u53ef\u80fd\u3067\u3059\u3002\\r\\n[Python-Markdown](https://github.com/Python-Markdown/markdown/)\\r\\n\\r\\n### install\\r\\n\\r\\n```bash\\r\\n> pip install markdown\\r\\n```\\r\\n\\r\\n### HTML\u3078\u306e\u5909\u63db\\r\\n\\r\\n```bash\\r\\n>>> markdown.markdown(\\"## test\\")\\r\\n\'<h2>test</h2>\'\\r\\n```\\r\\n\\r\\n\u3053\u306e\u3088\u3046\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3001\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u3092\u4f34\u3046markdown\u306e\u5834\u5408`py-gfm`, `pygments`\u3092\u5229\u7528\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u30af\u30e9\u30b9\u304c\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002(\u901a\u79f0Github Flavored Markdown)\\r\\n\\r\\n## markdown\\r\\n\\\\`\\\\`\\\\`python  \\r\\ndef test(sample: str):  \\r\\n    return sample[0]  \\r\\n\\\\`\\\\`\\\\`\\r\\n\\r\\n## \u51fa\u529b\u3055\u308c\u308bhtml\\r\\n- extentions\u6307\u5b9a\u306a\u3057\\r\\n```html\\r\\n<p><code>python\\\\ndef test(sample: str):\\\\n    return sample[0]</code></p>\\r\\n```\\r\\n- `py-gfm`,  `pygments`\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001`extensions`\u306b`mdx_gfm.GithubFlavoredMarkdownExtension`\u3092\u6307\u5b9a\\r\\n    - `pygments`\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044\u5834\u5408\u3001\u51fa\u529b\u304c\u7570\u306a\u308b\u305f\u3081\u6ce8\u610f\\r\\n\\r\\n```html\\r\\n<div class=\\"highlight\\"><pre><span></span><code><span class=\\"k\\">def</span> <span class=\\"nf\\">test</span><span class=\\"p\\">(</span><span class=\\"n\\">sample</span><span class=\\"p\\">:</span> <span class=\\"nb\\">str</span><span class=\\"p\\">):</span>\\\\n    <span class=\\"k\\">return</span> <span class=\\"n\\">sample</span><span class=\\"p\\">[</span><span class=\\"mi\\">0</span><span class=\\"p\\">]</span>\\\\n</code></pre></div>\\r\\n```\\r\\n\\r\\n## css\u306e\u751f\u6210\\r\\n```bash\\r\\n> pygmentize -S default -f html -a .highlight > default.css\\r\\n```","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/4/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/4/timeline","performed_via_github_app":null}')}}]);