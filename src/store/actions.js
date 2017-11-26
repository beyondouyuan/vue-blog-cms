/*
 * @Author: beyondouyuan
 * @Date:   2017-11-25 00:34:08
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-26 16:12:46
 */
import Vue from 'vue'

const startLoading = commit => {
    commit('IS_LOADING', true)
    return Date.now()
}

const endLoading = (commit, start, timeAllowed = 800) => {
    const spareTime = timeAllowed - (Date.now() - start)
    setTimeout(commit, spareTime > 0 ? spareTime : 0, 'IS_LOADING', false)
}

const doFetching = (state, commit, payload) => {
    commit('EDITOR_FETCHING', payload)
    commit('IS_FETCHING', true)
    return state.fetch.promise
}

Promise.prototype.finally = function(callback) {
    return this.then(
        value => Promise.resolve(callback()).then(() => value),
        reason => Promise.resolve(callback()).then(() => {
            throw reason
        })
    )
}

export default {
    getArticles: ({ commit }) => {
        const start = startLoading(commit)
        return Vue.http.get('/api/getArticles')
            .then(response => response.json())
            .then(articles => {
                endLoading(commit, start)
                commit('EDITOR_ARTICLES', articles)
            })
    },

    getArticle: ({ commit }, id) => {
        const start = startLoading(commit)
        return Vue.http.get('/api/getArticle', { params: { id } })
            .then(response => {
                endLoading(commit, start)
                commit('EDITOR_ARTICLE', response.data)
            })
    },

    saveArticle: ({ state, commit }) => {
        return doFetching(state, commit, { info: '确定要保存吗?', btn: 2 })
            .then(() => Vue.http.post('/api/saveArticle', state.article))
            .finally(() => commit('IS_FETCHING', false))
            .catch(() => {})
    },

    deleteArticle: ({ state, commit, dispatch }, id) => {
        return doFetching(state, commit, { info: '确定要删除吗?', btn: 2 })
            .then(() => Vue.http.post('/api/deleteArticle', { id }))
            .finally(() => commit('IS_FETCHING', false))
            .then(() => dispatch('getArticles'))
            .catch(() => {})
    },

    updatePassword: ({ state, commit }, pwd) => {
        return doFetching(state, commit, { info: '更新成功?', btn: 1 })
            .then(() => Vue.http.post('/api/updatePassword', { name: state.user.name, pwd }))
            .finally(() => commit('IS_FETCHING', false))
            .catch(() => {})
    },

    login: ({ commit }, payload) => {
        return Vue.http.post('/api/login', payload)
            .then(response => {
                if (response.data.state === 1) {
                    commit('EDITOR_USER', payload)
                } else {
                    return Promise.reject(response.data.msg)
                }
            })
    },

    logout: ({ state, commit }, payload) => {
        return Vue.http.post('/api/logout', payload)
            .then(response => {
                if (response.data.state === 1) {
                    commit('EDITOR_USER', payload)
                }
            })
            .then(
                () => doFetching(state, commit, { info: '登出成功！', btn: 1 })
            )
            .finally(() => commit('IS_FETCHING', false))
    }
}
