"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[229],{229:e=>{e.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/10","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/10/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/10/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/10/events","html_url":"https://github.com/kemu3007/portal/issues/10","id":1160543378,"node_id":"I_kwDOG7qoq85FLHyS","number":10,"title":"Gmail API push notification\u3092\u5229\u7528\u3059\u308b","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900073969,"node_id":"LA_kwDOG7qoq87odmfx","url":"https://api.github.com/repos/kemu3007/portal/labels/GCP","name":"GCP","color":"FBCA04","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":[],"created_at":"2022-03-06T07:47:32Z","updated_at":"2022-03-06T15:19:57Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"\u30e1\u30fc\u30eb\u306b\u30d5\u30c3\u30af\u3057\u3066\u51e6\u7406\u3092\u631f\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n### \u74b0\u5883\\r\\n- Python 3.10\\r\\n- google-api-python-client==2.36.0\\r\\n- google_auth_oauthlib==0.4.6\\r\\n- google-cloud-pubsub==2.9.0\\r\\n\\r\\n\\r\\n### \u624b\u9806\\r\\n\u2460 GCP\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001[Gmail API](https://console.cloud.google.com/apis/api/gmail.googleapis.com/)\u3092\u6709\u52b9\u5316\\r\\n\\r\\n\u2461 Gmail API -> \u8a8d\u8a3c\u60c5\u5831 -> \u8a8d\u8a3c\u60c5\u5831\u3092\u4f5c\u6210\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001OAuth \u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID\u3092\u4f5c\u6210\u3059\u308b(\u624b\u5143\u3067\u904a\u3076\u3060\u3051\u3067\u3042\u308c\u3070\u30ea\u30c0\u30a4\u30ec\u30af\u30c8URI\u306b\u3064\u3044\u3066\u8003\u3048\u306a\u304f\u3066\u826f\u3044\u306e\u3067\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u3092\u9078\u629e\u3059\u308b\u306e\u304c\u4fbf\u5229\u3067\u3059\u3002)\\r\\n\\r\\n\u2462 OAuth \u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID\u3092\u4f5c\u6210\u5f8c\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3057\u3001JSON\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\\r\\n\\r\\n\u2463 \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304d\u305fJSON\u306b\u306ftoken\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u305fURL\u3092\u30af\u30ea\u30c3\u30af\u3057\u540c\u610f\u3092\u884c\u3063\u305f\u3046\u3048\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3092\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30da\u30fc\u30b9\u30c8\u3057\u3001\u8a8d\u8a3c\u60c5\u5831\u3092pickle\u306e\u5f62\u5f0f\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002(\u8aac\u660e\u3067\u306fdjnago\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u3044\u307e\u3059\u304c\u7279\u306b\u610f\u8b58\u3059\u308b\u5fc5\u8981\u306f\u306a\u3044\u3067\u3059\u3002)\\r\\n\\r\\n---\\r\\n\\r\\n```py\\r\\nimport json\\r\\nimport pickle\\r\\nfrom pathlib import Path\\r\\n\\r\\nfrom django.conf import settings\\r\\nfrom django.core.management.base import BaseCommand\\r\\nfrom google_auth_oauthlib.flow import InstalledAppFlow\\r\\n\\r\\n\\r\\nclass Command(BaseCommand):\\r\\n    def handle(self, *args, **options):\\r\\n        credential_path: Path = settings.BASE_DIR.parent / \\"auth.json\\"\\r\\n        credential_scopes = [\\"https://mail.google.com/\\"]\\r\\n        raw_credentials = json.loads(credential_path.read_text())\\r\\n        flow = InstalledAppFlow.from_client_config(raw_credentials, credential_scopes)\\r\\n        credentials = flow.run_console()\\r\\n        with open(\\"token.pickle\\", \\"wb\\") as token:\\r\\n            pickle.dump(credentials, token)\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n\u2464 GCP\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089Gmail\u306epush notification\u306b\u5fc5\u8981\u3068\u306a\u308b[pub/sub](https://console.cloud.google.com/cloudpubsub/)\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30c8\u30d4\u30c3\u30af\u3092\u307e\u305a\u4f5c\u6210\u3057\u307e\u3059\u3001\u3053\u306e\u969b\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\\r\\n\\r\\n\u2465 \u30c8\u30d4\u30c3\u30af\u306b\u5bfe\u3059\u308bpublisher\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u753b\u9762\u53f3\u5074\u60c5\u5831\u30d1\u30cd\u30eb\u6a29\u9650\u6b04\u304b\u3089`\u30d7\u30ea\u30f3\u30b7\u30d1\u30eb\u3092\u8ffd\u52a0`\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001 `gmail-api-push@system.gserviceaccount.com` \u3092\u30ed\u30fc\u30eb `Pub/Sub \u30d1\u30d6\u30ea\u30c3\u30b7\u30e3\u30fc` \u3068\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u3002\\r\\n\\r\\n\u2466 \u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u914d\u4fe1\u30bf\u30a4\u30d7\u306f`pull`\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30c8\u30d4\u30c3\u30af\u306f\u624b\u98065\u3067\u4f5c\u6210\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n\u2467 \u624b\u98064\u3067\u4f5c\u6210\u3057\u305f\u8a8d\u8a3c\u60c5\u5831\u3092\u5143\u306b `users.watch` \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u3053\u306e\u969blabelIds\u3092INBOX\u3068\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u901a\u77e5\u304c\u30a4\u30d9\u30f3\u30c8\u767a\u706b\u3092\u5236\u5fa1\u3057\u3066\u3044\u307e\u3059\u3002\\r\\n\\r\\n---\\r\\n\\r\\n```py\\r\\nfrom googleapiclient.discovery import build\\r\\n\\r\\nwith open(settings.BASE_DIR / \\"mail/token.pickle\\", \\"rb\\") as token:\\r\\n    credentials = pickle.load(token)\\r\\nservice = build(\\"gmail\\", \\"v1\\", credentials=self.credentials)\\r\\n# settings.PUBSUB_TOPIC\u306b\u306f  projects/{project_name}-{project_id}/topics/{topic_name} \u306e\u3088\u3046\u306a\u5024\u304c\u5165\u308a\u307e\u3059\u3002\\r\\nservice.users().watch(userId=\\"me\\", body={\\"labelIds\\": [\\"INBOX\\"], \\"topicName\\": settings.PUBSUB_TOPIC}).execute()\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n\u2468 callback\u95a2\u6570\u3092\u8a2d\u5b9a\u3057\u3001subscribe\u3059\u308b\\r\\n\\r\\n---\\r\\n\\r\\n```py\\r\\nfrom google.cloud.pubsub_v1 import SubscriberClient\\r\\n\\r\\n# settings.PUBSUB_SUBSCRIPTION\u306b\u306fprojects/{project_name}-{project_id}/subscriptions/{topic_name} \u306e\u3088\u3046\u306a\u5024\u304c\u5165\u308a\u307e\u3059\\r\\nSubscriberClient(credentials=credentials).subscribe(settings.PUBSUB_SUBSCRIPTION, callback=callback)\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n\u2469 subscribe\u3057\u3066\u5f97\u3089\u308c\u305f\u30c7\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3067\u3059\u3002\\r\\nhttps://developers.google.com/gmail/api/guides/push#receiving_notifications\\r\\n\\r\\n\u3053\u306e\u6642\u306e\\"messageId\\"\u306fgmail\u306eID\u3068\u306f\u4e00\u5207\u95a2\u4fc2\u304c\u306a\u3044\u306e\u3067\u6ce8\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\r\\n\\r\\n\u246a historyId\u3092\u5143\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\\r\\n\\r\\n\u624b\u980610\u3067\u53d6\u5f97\u3057\u305fhistoryId\u3092\u5229\u7528\u3057\u305f\u5834\u5408startHistoryId\u30af\u30a8\u30ea\u3092\u5229\u7528\u3059\u308b\u90fd\u5408\u4e0a\u53d6\u5f97\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3072\u3068\u3064\u524d\u306e\u5024\u3001\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f `user.watch` \u3092\u5229\u7528\u3057\u305f\u969b\u306ehistoryId\u3092\u5229\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\r\\n\\r\\n---\\r\\n\\r\\n```py\\r\\nhistories = service.users().history().list(userId=\\"me\\", historyTypes=[\\"messageAdded\\"], labelId=\\"INBOX\\", startHistoryId=past_history_id).execute(num_retries=5)\\r\\nmessage_id = histories[\\"history\\"][0][\\"messagesAdded\\"][0][\\"message\\"][\\"id\\"]\\r\\nmessage = self.service.users().messages().get(userId=\\"me\\", id=message_id).execute(num_retries=5)\\r\\n```\\r\\n\\r\\n---\\r\\n\\r\\n\u246b \u624b\u980612\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u53d6\u5f97\u3067\u304d\u305f\u305f\u3081\u3001slack\u306b\u901a\u77e5\u3001DB\u306b\u4fdd\u5b58\u306a\u3069\u597d\u304d\u306a\u51e6\u7406\u3092\u884c\u3046\u3002\\r\\n\\r\\n\u672c\u6587\u306fbase64\u3067\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001 `base64.urlsafe_b64decode` \u3059\u308b\u306a\u3069\u3057\u3066\u53d6\u308a\u6271\u3063\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n\\r\\n### \u6ce8\u610f\\r\\n\\r\\n- GCP\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u6271\u3046\u305f\u3081\u304f\u308c\u3050\u308c\u3082github\u306a\u3069\u306b\u8a8d\u8a3c\u60c5\u5831\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\r\\n- `user.watch` \u306f\u5b9a\u671f\u7684\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30de\u30f3\u30c9\u5316\u3057\u3066oferia\u3084cron\u306a\u3069\u3067\u5b9a\u671f\u5b9f\u884c\u3092\u304b\u3051\u308b\u306e\u304c\u826f\u3044\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002\\r\\n\\r\\n### \u7dcf\u8a55\\r\\n\\r\\nslack\u306b\u30e1\u30fc\u30eb\u3092\u6d41\u3057\u8fbc\u3080\u3053\u3068\u81ea\u4f53\u306f\u3082\u3063\u3068\u7c21\u5358\u306a\u65b9\u6cd5\u304c\u3044\u304f\u3089\u3067\u3082\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u307b\u304b\u306e\u51e6\u7406\u3092\u631f\u307f\u8fbc\u307f\u305f\u3044\u3001\u4f7f\u3044\u3084\u3059\u3044DB\u306b\u30e1\u30fc\u30eb\u60c5\u5831\u3092\u84c4\u7a4d\u3057\u3066\u304a\u304d\u305f\u3044\u306a\u3069\u601d\u3063\u305f\u5834\u5408\u306b\u4fbf\u5229\u3060\u306a\u3068\u601d\u3044\u307e\u3057\u305f\u3002\\r\\n\\r\\n\u65e5\u672c\u8a9e\u306e\u8cc7\u6599\u304c\u307b\u3068\u3093\u3069\u8ee2\u304c\u3063\u3066\u304a\u3089\u305a\u82e6\u52b4\u3057\u307e\u3057\u305f\u304c\u306a\u3093\u3068\u304b1\u65e5\u3067\u52d5\u304fslackbot\u307e\u3067\u6301\u3063\u3066\u3044\u3051\u305f\u306e\u3067\u3088\u304b\u3063\u305f\u306a\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/10/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/10/timeline","performed_via_github_app":null}')}}]);