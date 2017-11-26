/*
 * @Author: beyondouyuan
 * @Date:   2017-11-25 00:35:04
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-26 16:12:57
 */

import Vue                          from 'vue'
import Vuex                         from 'vuex'

import actions                      from './actions'
import getters                      from './getters'
import mutations                    from './mutations'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoading: false,
        isFetching: false,
        articles: [],
        article: {},
        user: { name: '', pwd: '' },
        fetch: {
            promise: null,
            info: '',
            btn: 1,
            fetchResolve() {},
            fetchReject() {}
        }
    },
    getters,
    mutations,
    actions
})
export default store
