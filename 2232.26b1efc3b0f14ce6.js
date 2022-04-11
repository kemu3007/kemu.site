"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[2232],{92232:e=>{e.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/5","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/5/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/5/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/5/events","html_url":"https://github.com/kemu3007/portal/issues/5","id":1160542944,"node_id":"I_kwDOG7qoq85FLHrg","number":5,"title":"Django4.0\u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u305f\u306e\u3067\u9069\u5f53\u306b\u8a66\u3057\u3066\u307f\u308b","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900075763,"node_id":"LA_kwDOG7qoq87odm7z","url":"https://api.github.com/repos/kemu3007/portal/labels/Django","name":"Django","color":"5FC353","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-06T07:44:51Z","updated_at":"2022-03-12T07:52:04Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"[release notes](https://docs.djangoproject.com/en/dev/releases/4.0/)\\r\\n\\r\\n### \u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\\r\\n- Django 3.2\\r\\n```\\r\\nasgiref==3.4.1\\r\\npytz==2021.3\\r\\nsqlparse==0.4.2\\r\\n```\\r\\n- Django4.0\\r\\n```\\r\\nasgiref==3.4.1\\r\\nbackports.zoneinfo==0.2.1\\r\\nsqlparse==0.4.2\\r\\n```\\r\\npytz\u306b\u4f9d\u5b58\u3057\u306a\u304f\u306a\u308a\u3001\u6a19\u6e96\u306ezoneinfo\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5909\u66f4\u3055\u308c\u305f\u5f62\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n`backports.zoneinfo`\u306f3.9\u4ee5\u524d\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e\u4f9d\u5b58\u3067\u3059\u3002\\r\\n\\r\\n[backports.zoneinfo](https://pypi.org/project/backports.zoneinfo/)\\r\\n\\r\\n### UniqueConstraint Expression\\r\\n\\r\\nUniqueConstraint\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b`desc()`, `asc()`\u3092\u6307\u5b9a\u3057\u3066\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u5f35\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\\r\\n\\r\\n```python\\r\\nclass TestModel(models.Model):\\r\\n    code_1 = models.CharField(max_length=32)\\r\\n    code_2 = models.CharField(max_length=32)\\r\\n\\r\\n    class Meta:\\r\\n        constraints = [\\r\\n            UniqueConstraint(\\r\\n                Lower(\'code_1\'),\\r\\n                Lower(\'code_2\').desc(),\\r\\n                name=\'code_1_2_unique\',\\r\\n            ),\\r\\n        ]\\r\\n```\\r\\n\\r\\n\u767a\u884c\u3055\u308c\u308bSQL\\r\\n```sql\\r\\nCREATE UNIQUE INDEX \\"code_1_2_unique\\" ON \\"common_testmodel\\" ((LOWER(\\"code_1\\")), (LOWER(\\"code_2\\")) DESC);\\r\\n```\\r\\n\\r\\n\\r\\n### QuerySet.contains\\r\\nQuerySet\u306e\u4e2d\u306b\u8a72\u5f53\u306e\u30e2\u30c7\u30eb\u304c\u5b58\u5728\u3059\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\n```python\\r\\nTestModel.objects.contains(TestModel(id=1))\\r\\n```\\r\\n```sql\\r\\nSELECT (1) AS \\"a\\"\\r\\n  FROM \\"common_testmodel\\"\\r\\n WHERE \\"common_testmodel\\".\\"id\\" = 1\\r\\n LIMIT 1\\r\\n```\\r\\n\\r\\n\u5b9f\u884c\u3055\u308c\u308b\u30af\u30a8\u30ea\u306fexists()\u3068\u5909\u308f\u3089\u306a\u3044\u3088\u3046\u3067\u3059\u3002\uff08\u3053\u306e\u7a0b\u5ea6\u306e\u51e6\u7406\u3067\u3042\u308c\u3070\uff09\\r\\n\\r\\n\\r\\n\u7d9a\u304d\u306f\u6b21\u56de\\r\\n\\r\\n\u4eca\u56de\u4f5c\u6210\u3057\u305f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f[\u3053\u3061\u3089](https://github.com/kemu3007/django_4_0)","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/5/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/5/timeline","performed_via_github_app":null}')}}]);