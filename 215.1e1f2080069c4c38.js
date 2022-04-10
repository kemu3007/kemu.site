"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[215],{85215:r=>{r.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/16","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/16/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/16/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/16/events","html_url":"https://github.com/kemu3007/portal/issues/16","id":1169430844,"node_id":"I_kwDOG7qoq85FtBk8","number":16,"title":"Django Rest Framework OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8d77\u3053\u3059","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900075763,"node_id":"LA_kwDOG7qoq87odm7z","url":"https://api.github.com/repos/kemu3007/portal/labels/Django","name":"Django","color":"5FC353","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-15T09:53:45Z","updated_at":"2022-03-28T12:45:19Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"API\u304b\u3089OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b\u6a5f\u4f1a\u304c\u3042\u3063\u305f\u306e\u3067\u30e1\u30e2\\r\\n\\r\\nDRF\u81ea\u4f53\u306b `generateschema` \u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u305f\u3081\\r\\n\\r\\n```zsh\\r\\n$ python manage.py generateschema > schema.yml\\r\\n```\\r\\n\\r\\n\u3068\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u30b9\u30ad\u30fc\u30de\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\\r\\n\\r\\n<details>\\r\\n<summary>schema.yml</summary>\\r\\n\\r\\n```yml\\r\\nopenapi: 3.0.2\\r\\ninfo:\\r\\n  title: \'\'\\r\\n  version: \'\'\\r\\npaths:\\r\\n  /api/v1/article/:\\r\\n    get:\\r\\n      operationId: listArticles\\r\\n      description: \'\'\\r\\n      parameters: []\\r\\n      responses:\\r\\n        \'200\':\\r\\n          content:\\r\\n            application/json:\\r\\n              schema:\\r\\n                type: array\\r\\n                items:\\r\\n                  $ref: \'#/components/schemas/Article\'\\r\\n          description: \'\'\\r\\n      tags:\\r\\n      - api\\r\\n    post:\\r\\n      operationId: createArticle\\r\\n      description: \'\'\\r\\n      parameters: []\\r\\n      requestBody:\\r\\n        content:\\r\\n          application/json:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n          application/x-www-form-urlencoded:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n          multipart/form-data:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n      responses:\\r\\n        \'201\':\\r\\n          content:\\r\\n            application/json:\\r\\n              schema:\\r\\n                $ref: \'#/components/schemas/Article\'\\r\\n          description: \'\'\\r\\n      tags:\\r\\n      - api\\r\\n  /api/v1/article/{id}/:\\r\\n    get:\\r\\n      operationId: retrieveArticle\\r\\n      description: \'\'\\r\\n      parameters:\\r\\n      - name: id\\r\\n        in: path\\r\\n        required: true\\r\\n        description: A unique integer value identifying this article.\\r\\n        schema:\\r\\n          type: string\\r\\n      responses:\\r\\n        \'200\':\\r\\n          content:\\r\\n            application/json:\\r\\n              schema:\\r\\n                $ref: \'#/components/schemas/Article\'\\r\\n          description: \'\'\\r\\n      tags:\\r\\n      - api\\r\\ncomponents:\\r\\n  schemas:\\r\\n    Article:\\r\\n      type: object\\r\\n      properties:\\r\\n        id:\\r\\n          type: integer\\r\\n          readOnly: true\\r\\n        subject:\\r\\n          type: string\\r\\n          maxLength: 255\\r\\n        body:\\r\\n          type: string\\r\\n        created_at:\\r\\n          type: string\\r\\n          format: date-time\\r\\n          readOnly: true\\r\\n        updated_at:\\r\\n          type: string\\r\\n          format: date-time\\r\\n          readOnly: true\\r\\n        is_draft:\\r\\n          type: boolean\\r\\n      required:\\r\\n      - subject\\r\\n\\r\\n```\\r\\n</details>\\r\\n\\r\\n---\\r\\n\\r\\n<img width=\\"713\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-15 18 27 49\\" src=\\"https://user-images.githubusercontent.com/29157528/158347543-edb65a5a-1148-42dc-9e5e-ea2b325c2ef7.png\\">\\r\\n\\r\\n---\\r\\n\\r\\n\u305d\u308c\u307b\u3069\u8907\u96d1\u3067\u306a\u304f\u5165\u529b\u306e\u578b\u3068\u51fa\u529b\u306e\u578b\u304c\u4e00\u81f4\u3059\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308c\u3070DRF\u306e\u30b3\u30de\u30f3\u30c9\u3067\u5341\u5206\u304b\u3068\u601d\u3044\u307e\u3059\u3002\\r\\n\\r\\n\u305f\u3060\u51fa\u529b\u304c status_code=201 \u306e\u307f\u306eAPI\u306a\u3069\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u6a5f\u80fd\u3057\u306a\u304f\u306a\u308a\u307e\u3059\u3002\\r\\n\\r\\n```py\\r\\nclass ArticleViewSets(ModelViewSet):\\r\\n    queryset = Article.objects.all()\\r\\n    serializer_class = ArticleSerializer\\r\\n    http_method_names = [\\"get\\", \\"post\\"]\\r\\n\\r\\n    def create(self, *args, **kwargs):\\r\\n        return Response(status=201)\\r\\n```\\r\\n\\r\\n\u2193Response(status=201)\u304c\u8fd4\u5374\u3055\u308c\u308b\u304c\u30b9\u30ad\u30fc\u30de\u306b\u306f\u53cd\u6620\u3055\u308c\u306a\u3044\u3002\\r\\n\\r\\n<img width=\\"703\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-15 18 34 22\\" src=\\"https://user-images.githubusercontent.com/29157528/158348870-530ea38a-20e8-4f44-9c63-915683d722b2.png\\">\\r\\n\\r\\n---\\r\\n\\r\\n[drf-spectacular](https://github.com/tfranzel/drf-spectacular)\u3092\u5229\u7528\u3057\u3066\u660e\u793a\u7684\u306b\u5165\u529b/\u51fa\u529b\u30b7\u30ea\u30a2\u30e9\u30a4\u30b6\u3092\u8a18\u8f09\u3059\u308b\u3053\u3068\u3067\u30b9\u30ad\u30fc\u30de\u306e\u51fa\u529b\u3092\u5bb9\u6613\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\r\\n\\r\\ninstall \\r\\n```zsh\\r\\n$ pip install drf-spectacular\\r\\n```\\r\\n\\r\\nsettings.py\\r\\n```py\\r\\nINSTALLED_APPS = [\\r\\n  ...\\r\\n  \'drf_spectacular\'\\r\\n]\\r\\nREST_FRAMEWORK = {\\r\\n    \'DEFAULT_SCHEMA_CLASS\': \'drf_spectacular.openapi.AutoSchema\',\\r\\n}\\r\\n```\\r\\n\\r\\nviewsets.py\\r\\n```py\\r\\nclass NoInputSerializer(Serializer):\\r\\n    \\"\\"\\"\u30b9\u30ad\u30fc\u30de\u51fa\u529b\u7528\u30b7\u30ea\u30a2\u30e9\u30a4\u30b6\\"\\"\\"\\r\\n\\r\\n\\r\\nclass ArticleSerializer(ModelSerializer):\\r\\n    class Meta:\\r\\n        model = Article\\r\\n        fields = [\\"id\\", \\"subject\\", \\"body\\", \\"created_at\\", \\"updated_at\\", \\"is_draft\\"]\\r\\n\\r\\n\\r\\n@extend_schema_view(\\r\\n    list=extend_schema(responses=ArticleSerializer),\\r\\n    create=extend_schema(request=ArticleSerializer, responses=NoInputSerializer)\\r\\n)\\r\\nclass ArticleViewSets(ModelViewSet):\\r\\n    queryset = Article.objects.all()\\r\\n    serializer_class = ArticleSerializer\\r\\n    http_method_names = [\\"get\\", \\"post\\"]\\r\\n\\r\\n    def create(self, *args, **kwargs):\\r\\n        return Response(status=200)\\r\\n```\\r\\n\u51fa\u529b\u4f5c\u696d\\r\\n```zsh\\r\\n$ python manage.py spectacular --file schema.yml\\r\\n```\\r\\n\\r\\n<details>\\r\\n<summary> schema.yml </summary>\\r\\n\\r\\n```yml\\r\\nopenapi: 3.0.3\\r\\ninfo:\\r\\n  title: \'\'\\r\\n  version: 0.0.0\\r\\npaths:\\r\\n  /api/v1/article/:\\r\\n    get:\\r\\n      operationId: api_v1_article_list\\r\\n      tags:\\r\\n      - api\\r\\n      security:\\r\\n      - cookieAuth: []\\r\\n      - basicAuth: []\\r\\n      - {}\\r\\n      responses:\\r\\n        \'200\':\\r\\n          content:\\r\\n            application/json:\\r\\n              schema:\\r\\n                type: array\\r\\n                items:\\r\\n                  $ref: \'#/components/schemas/Article\'\\r\\n          description: \'\'\\r\\n    post:\\r\\n      operationId: api_v1_article_create\\r\\n      tags:\\r\\n      - api\\r\\n      requestBody:\\r\\n        content:\\r\\n          application/json:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n          application/x-www-form-urlencoded:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n          multipart/form-data:\\r\\n            schema:\\r\\n              $ref: \'#/components/schemas/Article\'\\r\\n        required: true\\r\\n      security:\\r\\n      - cookieAuth: []\\r\\n      - basicAuth: []\\r\\n      - {}\\r\\n      responses:\\r\\n        \'201\':\\r\\n          description: No response body\\r\\n  /api/v1/article/{id}/:\\r\\n    get:\\r\\n      operationId: api_v1_article_retrieve\\r\\n      parameters:\\r\\n      - in: path\\r\\n        name: id\\r\\n        schema:\\r\\n          type: integer\\r\\n        description: A unique integer value identifying this article.\\r\\n        required: true\\r\\n      tags:\\r\\n      - api\\r\\n      security:\\r\\n      - cookieAuth: []\\r\\n      - basicAuth: []\\r\\n      - {}\\r\\n      responses:\\r\\n        \'200\':\\r\\n          content:\\r\\n            application/json:\\r\\n              schema:\\r\\n                $ref: \'#/components/schemas/Article\'\\r\\n          description: \'\'\\r\\ncomponents:\\r\\n  schemas:\\r\\n    Article:\\r\\n      type: object\\r\\n      properties:\\r\\n        id:\\r\\n          type: integer\\r\\n          readOnly: true\\r\\n        subject:\\r\\n          type: string\\r\\n          title: \u984c\u540d\\r\\n          maxLength: 255\\r\\n        body:\\r\\n          type: string\\r\\n          title: \u8a18\u4e8b\\r\\n        created_at:\\r\\n          type: string\\r\\n          format: date-time\\r\\n          readOnly: true\\r\\n          title: \u4f5c\u6210\u65e5\\r\\n        updated_at:\\r\\n          type: string\\r\\n          format: date-time\\r\\n          readOnly: true\\r\\n          title: \u66f4\u65b0\u65e5\\r\\n        is_draft:\\r\\n          type: boolean\\r\\n          title: \u4e0b\u66f8\u304d\u72b6\u614b\\r\\n      required:\\r\\n      - created_at\\r\\n      - id\\r\\n      - subject\\r\\n      - updated_at\\r\\n  securitySchemes:\\r\\n    basicAuth:\\r\\n      type: http\\r\\n      scheme: basic\\r\\n    cookieAuth:\\r\\n      type: apiKey\\r\\n      in: cookie\\r\\n      name: sessionid\\r\\n```\\r\\n</details>\\r\\n\\r\\n\u6307\u5b9a\u3057\u305f\u5f62\u5f0f\u3067\u51fa\u529b\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\\r\\n\\r\\n<img width=\\"711\\" alt=\\"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2022-03-15 18 47 58\\" src=\\"https://user-images.githubusercontent.com/29157528/158351424-cfa4b177-5cf7-442f-96d3-b3c8e1bb059f.png\\">\\r\\n\\r\\n---\\r\\n\\r\\n\u3053\u308c\u3067OpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u751f\u6210\u304c\u3067\u304d\u307e\u3057\u305f\u3002\\r\\nOpenAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u578b\u751f\u6210\u3001API\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u7a4d\u6975\u7684\u306b\u3084\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\\r\\n\\r\\ngitlab\u306e\u5834\u5408\u306f\u30d5\u30a1\u30a4\u30eb\u540d\u3092`swagger.yml` \u3068\u3044\u3046\u540d\u524d\u3067\u7f6e\u3044\u3066\u3042\u3052\u308b\u3053\u3068\u3067swagger\u5f62\u5f0f\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\r\\ngithub\u306b\u3082\u5c0e\u5165\u3055\u308c\u3066\u307b\u3057\u3044\u306a\u30fc(\u6700\u8fd1gitlab\u6a5f\u80fd\u306e\u53d6\u308a\u8fbc\u307f\u307f\u305f\u3044\u306a\u3053\u3068\u304c\u591a\u3044\u306e\u3067\u3061\u3087\u3063\u3068\u671f\u5f85\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/16/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/16/timeline","performed_via_github_app":null}')}}]);