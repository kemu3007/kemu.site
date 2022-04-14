"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4903],{74903:e=>{e.exports=JSON.parse('{"url":"https://api.github.com/repos/kemu3007/portal/issues/3","repository_url":"https://api.github.com/repos/kemu3007/portal","labels_url":"https://api.github.com/repos/kemu3007/portal/issues/3/labels{/name}","comments_url":"https://api.github.com/repos/kemu3007/portal/issues/3/comments","events_url":"https://api.github.com/repos/kemu3007/portal/issues/3/events","html_url":"https://github.com/kemu3007/portal/issues/3","id":1160542827,"node_id":"I_kwDOG7qoq85FLHpr","number":3,"title":"Django shortcuts\u307e\u3068\u3081\\t","user":{"login":"kemu3007","id":29157528,"node_id":"MDQ6VXNlcjI5MTU3NTI4","avatar_url":"https://avatars.githubusercontent.com/u/29157528?v=4","gravatar_id":"","url":"https://api.github.com/users/kemu3007","html_url":"https://github.com/kemu3007","followers_url":"https://api.github.com/users/kemu3007/followers","following_url":"https://api.github.com/users/kemu3007/following{/other_user}","gists_url":"https://api.github.com/users/kemu3007/gists{/gist_id}","starred_url":"https://api.github.com/users/kemu3007/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/kemu3007/subscriptions","organizations_url":"https://api.github.com/users/kemu3007/orgs","repos_url":"https://api.github.com/users/kemu3007/repos","events_url":"https://api.github.com/users/kemu3007/events{/privacy}","received_events_url":"https://api.github.com/users/kemu3007/received_events","type":"User","site_admin":false},"labels":[{"id":3898939400,"node_id":"LA_kwDOG7qoq87oZRgI","url":"https://api.github.com/repos/kemu3007/portal/labels/article","name":"article","color":"C200E5","default":false,"description":""},{"id":3900075763,"node_id":"LA_kwDOG7qoq87odm7z","url":"https://api.github.com/repos/kemu3007/portal/labels/Django","name":"Django","color":"5FC353","default":false,"description":""}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-03-06T07:44:00Z","updated_at":"2022-03-12T07:59:29Z","closed_at":null,"author_association":"OWNER","active_lock_reason":null,"body":"# [django shortcuts](https://github.com/django/django/blob/main/django/shortcuts.py)\\r\\n\\r\\n## render\\r\\n\\r\\n```py\\r\\ndef render(request, template_name, context=None, content_type=None, status=None, using=None):\\r\\n    \\"\\"\\"\\r\\n    Return a HttpResponse whose content is filled with the result of calling\\r\\n    django.template.loader.render_to_string() with the passed arguments.\\r\\n    \\"\\"\\"\\r\\n    content = loader.render_to_string(template_name, context, request, using=using)\\r\\n    return HttpResponse(content, content_type, status)\\r\\n```\\r\\ntemplate_name\u3067\u6307\u5b9a\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u5bfe\u3057\u3066context\u3092\u6e21\u3057\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3002  \\r\\nusing\u306b\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30a8\u30f3\u30b8\u30f3\u3092\u6307\u5b9a\u53ef\u80fd\u3002\\r\\n\\r\\n-----\\r\\n\\r\\n## redirect\\r\\n\\r\\n```py\\r\\ndef redirect(to, *args, permanent=False, **kwargs):\\r\\n    \\"\\"\\"\\r\\n    Return an HttpResponseRedirect to the appropriate URL for the arguments\\r\\n    passed.\\r\\n    The arguments could be:\\r\\n        * A model: the model\'s `get_absolute_url()` function will be called.\\r\\n        * A view name, possibly with arguments: `urls.reverse()` will be used\\r\\n          to reverse-resolve the name.\\r\\n        * A URL, which will be used as-is for the redirect location.\\r\\n    Issues a temporary redirect by default; pass permanent=True to issue a\\r\\n    permanent redirect.\\r\\n    \\"\\"\\"\\r\\n    redirect_class = HttpResponsePermanentRedirect if permanent else HttpResponseRedirect\\r\\n    return redirect_class(resolve_url(to, *args, **kwargs))\\r\\n```\\r\\n\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u51e6\u7406\u3092\u884c\u3046\u3002`permanent`\u304cTrue\u306e\u969b\u306f301\u3092\u3001False\u306e\u969b\u306f302\u3092\u8fd4\u5374\u3059\u308b  \\r\\n301: [https://developer.mozilla.org/ja/docs/Web/HTTP/Status/301](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/301)  \\r\\n302: [https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302)\\r\\n\\r\\n-----\\r\\n\\r\\n## get_object_or_404\\r\\n```py\\r\\n\\r\\ndef get_object_or_404(klass, *args, **kwargs):\\r\\n    \\"\\"\\"\\r\\n    Use get() to return an object, or raise an Http404 exception if the object\\r\\n    does not exist.\\r\\n    klass may be a Model, Manager, or QuerySet object. All other passed\\r\\n    arguments and keyword arguments are used in the get() query.\\r\\n    Like with QuerySet.get(), MultipleObjectsReturned is raised if more than\\r\\n    one object is found.\\r\\n    \\"\\"\\"\\r\\n    queryset = _get_queryset(klass)\\r\\n    if not hasattr(queryset, \'get\'):\\r\\n        klass__name = klass.__name__ if isinstance(klass, type) else klass.__class__.__name__\\r\\n        raise ValueError(\\r\\n            \\"First argument to get_object_or_404() must be a Model, Manager, \\"\\r\\n            \\"or QuerySet, not \'%s\'.\\" % klass__name\\r\\n        )\\r\\n    try:\\r\\n        return queryset.get(*args, **kwargs)\\r\\n    except queryset.model.DoesNotExist:\\r\\n        raise Http404(\'No %s matches the given query.\' % queryset.model._meta.object_name)\\r\\n```\\r\\n`_get_queryset`\u306f\u30e2\u30c7\u30eb\u30af\u30e9\u30b9\u304c`klass`\u306b\u6307\u5b9a\u3055\u308c\u305f\u969b\u306f`_default_manager`\u3092\u53c2\u7167\u3057\u3001\u30af\u30a8\u30ea\u30bb\u30c3\u30c8\u3092\u8fd4\u5374\u3059\u308b\u3002`klass`\u306b\u30af\u30a8\u30ea\u30bb\u30c3\u30c8\u304c\u6765\u305f\u969b\u306f\u305d\u306e\u307e\u307e\u8fd4\u5374\u3055\u308c\u308b\u3002\\r\\n\\r\\n`klass`\u4ee5\u5916\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u691c\u7d22\u30af\u30a8\u30ea\u3068\u306a\u308a\u3001\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f`Http404`\u3092\u30012\u3064\u4ee5\u4e0a\u5b58\u5728\u3059\u308b\u5834\u5408\u306f`MultipleObjectsReturned`\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u308b\u3002\\r\\n\\r\\n-----\\r\\n\\r\\n## get_list_or_404\\r\\n\\r\\n```py\\r\\ndef get_list_or_404(klass, *args, **kwargs):\\r\\n    \\"\\"\\"\\r\\n    Use filter() to return a list of objects, or raise an Http404 exception if\\r\\n    the list is empty.\\r\\n    klass may be a Model, Manager, or QuerySet object. All other passed\\r\\n    arguments and keyword arguments are used in the filter() query.\\r\\n    \\"\\"\\"\\r\\n    queryset = _get_queryset(klass)\\r\\n    if not hasattr(queryset, \'filter\'):\\r\\n        klass__name = klass.__name__ if isinstance(klass, type) else klass.__class__.__name__\\r\\n        raise ValueError(\\r\\n            \\"First argument to get_list_or_404() must be a Model, Manager, or \\"\\r\\n            \\"QuerySet, not \'%s\'.\\" % klass__name\\r\\n        )\\r\\n    obj_list = list(queryset.filter(*args, **kwargs))\\r\\n    if not obj_list:\\r\\n        raise Http404(\'No %s matches the given query.\' % queryset.model._meta.object_name)\\r\\n    return obj_list\\r\\n```\\r\\n`klass`, `_get_queryset`\u306b\u95a2\u3057\u3066\u306f\u5148\u8ff0\u306e`get_object_or_404`\u3068\u540c\u3058\u3001`klass`\u4ee5\u5916\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u691c\u7d22\u3092\u884c\u3044\u3001\u30d2\u30c3\u30c8\u3059\u308b\u4ef6\u6570\u304c0\u4ef6\u306e\u5834\u5408\u3001`Http404`\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u308b\u3002\\r\\n\\r\\n-----\\r\\n\\r\\n## resolve_url\\r\\n```py\\r\\ndef resolve_url(to, *args, **kwargs):\\r\\n    \\"\\"\\"\\r\\n    Return a URL appropriate for the arguments passed.\\r\\n    The arguments could be:\\r\\n        * A model: the model\'s `get_absolute_url()` function will be called.\\r\\n        * A view name, possibly with arguments: `urls.reverse()` will be used\\r\\n          to reverse-resolve the name.\\r\\n        * A URL, which will be returned as-is.\\r\\n    \\"\\"\\"\\r\\n    # If it\'s a model, use get_absolute_url()\\r\\n    if hasattr(to, \'get_absolute_url\'):\\r\\n        return to.get_absolute_url()\\r\\n\\r\\n    if isinstance(to, Promise):\\r\\n        # Expand the lazy instance, as it can cause issues when it is passed\\r\\n        # further to some Python functions like urlparse.\\r\\n        to = str(to)\\r\\n\\r\\n    # Handle relative URLs\\r\\n    if isinstance(to, str) and to.startswith((\'./\', \'../\')):\\r\\n        return to\\r\\n\\r\\n    # Next try a reverse URL resolution.\\r\\n    try:\\r\\n        return reverse(to, args=args, kwargs=kwargs)\\r\\n    except NoReverseMatch:\\r\\n        # If this is a callable, re-raise.\\r\\n        if callable(to):\\r\\n            raise\\r\\n        # If this doesn\'t \\"feel\\" like a URL, re-raise.\\r\\n        if \'/\' not in to and \'.\' not in to:\\r\\n            raise\\r\\n\\r\\n    # Finally, fall back and assume it\'s a URL\\r\\n    return to\\r\\n```\\r\\n\\r\\n\u6587\u5b57\u5217\u3092URL\u306b\u5909\u63db\u3059\u308b\u51e6\u7406\u3092\u884c\u3046\u3002","reactions":{"url":"https://api.github.com/repos/kemu3007/portal/issues/3/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/kemu3007/portal/issues/3/timeline","performed_via_github_app":null}')}}]);