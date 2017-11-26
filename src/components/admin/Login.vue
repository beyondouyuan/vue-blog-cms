<template>
  <section class="login">
    <star-canvas></star-canvas>
    <div class="form">
      <p class="icon">
        <i class="fa fa-transgender fa-2x"></i>
      </p>
      <p class="input">
        <i class="fa fa-user fa-fw"></i>
        <input id="userName"
               type="text"
               name="userName"
               placeholder="请输入用户名"
               v-model.trim="name"
        >
      </p>
      <p class="input">
        <i class="fa fa-key fa-fw"></i>
        <input id="password"
               type="password"
               placeholder="请输入密码"
               v-model.trim="pwd"
        >
      </p>
      <p class="info">{{info}}</p>
      <p>
        <button @click="doLogin()">登陆</button>
      </p>
    </div>
  </section>
</template>
<script>

  import { mapActions }     from 'vuex'

  import StarCanvas         from '../common/StarCanvas.vue'
  import {set}              from '../../assets/js/cookieUtil'

  export default{
    data(){
      return {
        name: '',
        pwd: '',
        info: ''
      }
    },
    methods: {
      doLogin(){
        if (!this.name.length) return this.info = '请输入正常的用户名'
        if (!this.pwd.length) return this.info = '请输入正常的密码'

        this.login({name: this.name, pwd: this.pwd})
          .then(() => {
            const date = new Date(Date.now() + 60000 * 30)
            set('user', this.name, date, '/', window.location.hostname)
            this.$router.push({path: '/admin'})
            // 直接刷新浏览器时，头部Message组件获取user组件失败，位暂时解决此问题，登陆时使用sessionStorage存储user即可
            const me = this.name;
            sessionStorage.setItem('me', me)
          })
          .catch(msg => this.info = msg)
      },
      clear(){
        this.info = ''
      },
      ...mapActions(['login'])
    },
    watch: {
      name: 'clear',
      pwd: 'clear'
    },
    components: {StarCanvas}
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes";

  section.login {
    .form {
      width: 500px;
      height: 400px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .icon i {
        transition: all 4s;
        color: $grassGreen;
        &:hover {
          transform: rotate(1440deg);
        }
      }
      > p {
        height: 50px;
        text-align: center;
        transition: all 0.4s;
        &.info {
          margin: 10px;
          font-size: 12px;
          height: 20px;
          color: $red;
        }
        &.input:hover {
          color: $grassGreen;
        }
        input {
          transition: all 0.4s;
          width: 200px;
          padding: 8px;
          color: $grassGreen;
          border-bottom: 1px solid $lightGreen;
          &:focus {
            width: 210px;
          }
          &::placeholder {
            color: $orange;
          }
        }
        button {
          @include successButton();
          background-color: transparent;
          height: 30px;
          width: 80px;
        }
      }
    }
  }
</style>
