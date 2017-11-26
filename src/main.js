/*
 * @Author: beyondouyuan
 * @Date:   2017-11-24 00:11:07
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-26 12:16:01
 */

import Vue                          from 'vue'
import { mapState }                 from 'vuex'
import VueResource                  from 'vue-resource'

import Fetch                        from './components/common/Fetch.vue'
import Loading                      from './components/common/Loading.vue'
import Particle                     from './components/common/Particle.vue'


import store from './store'
import router from './router'

import './style/index.scss'

Vue.use(VueResource)

Vue.filter('transDate', date => {
    const tranedate = new Date(date)
    return tranedate.getFullYear() + '-' +
        (tranedate.getMonth() + 1) + '-' +
        tranedate.getDate()
})
new Vue({
    router,
    store,
    components: {Fetch, Loading, Particle},
    computed: mapState(['isLoading', 'isFetching'])
}).$mount('#APP')
