/*
* @Author: beyondouyuan
* @Date:   2017-11-24 13:49:05
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2017-11-26 16:14:32
*/

import Vue                from 'vue'
import VueResource        from 'vue-resource'

import StarCanvas         from './components/common/StarCanvas.vue'

Vue.use(VueResource)

new Vue({
  data: {
    name: '',
    info: '',
    pwd: '',
    pwdConfirm: ''
  },
  methods: {
    submit () {
      if (!this.name.length) return this.info = '请输入合适的用户名'
      if (this.pwd.length < 5) return this.info = '密码长度太短'
      if (this.pwd !== this.pwdConfirm) return this.info = '两次输入的密码不一致'
      this.$http.post('/api/register', {name: this.name, pwd: this.pwd})
        .then(() => {
          this.info = '创建成功, 即将跳转到登陆...'
          setTimeout(() => window.location.reload(), 2500)
        })
        .catch(() => this.info = '创建失败')
    },
    clear () {
      this.info = ''
    }
  },
  watch: {
    name: 'clear',
    pwd: 'clear',
    pwdConfirm: 'clear'
  },
  components: {StarCanvas},
}).$mount('#register')
