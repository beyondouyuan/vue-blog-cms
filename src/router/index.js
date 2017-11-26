import Vue                          from 'vue'
import Router                       from 'vue-router'

import Blog                         from '../components/website/Blog.vue'
import Article                      from '../components/website/Article.vue'
import Archive                      from '../components/website/Archive.vue'


import Home                         from '../components/admin/Home.vue'
import Links                        from '../components/admin/Links.vue'
import Login                        from '../components/admin/Login.vue'
import Editor                       from '../components/admin/Editor.vue'
import Account                      from '../components/admin/Account.vue'
import Message                      from '../components/admin/Message.vue'
import Articles                     from '../components/admin/Articles.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            children: [
                { path: '', component: Archive },
                { path: 'article', name: 'article',component: Article }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: Home,
            children: [
                { path: '', component: Articles },
                { path: 'articles', name: 'articles', component: Articles },
                { path: 'editor', name: 'editor', component: Editor },
                { path: 'links', name: 'links', component: Links },
                { path: 'account', name: 'account', component: Account }
            ]
        }

    ]
})
