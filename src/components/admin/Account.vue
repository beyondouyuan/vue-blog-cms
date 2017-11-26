<template>
  <section class="account">
    <div class="title">
      <h2>修改密码</h2>
    </div>
    <div class="password">
      <i class="fa fa-key fa-fw"></i>
      <input type="password"
             placeholder="请输入新密码"
             v-model="pwd">
      <br>
      <i class="fa fa-key fa-fw"></i>
      <input type="password"
             placeholder="请确认密码"
             v-model="pwdConfirm">
    </div>
    <div class="info">
      <span>{{info}}</span>
    </div>
    <div class="panel">
      <button @click="updatePassword">更新</button>
    </div>
  </section>
</template>
<script>
  export default{
    data(){
      return {
        pwd: '',
        pwdConfirm: '',
        info: ''
      }
    },
    methods: {
      updatePassword() {
        if (!this.pwd.length || this.pwd.length < 5) {
          return this.info = '请输入至少6位的密码'
        }
        if (this.pwd !== this.pwdConfirm) {
          return this.info = '密码不一致'
        }
        if (this.pwd === this.pwdConfirm) {
          this.$store.dispatch('updatePassword', this.pwd)
                      .then((response) => {
                        this.$router.push({path: '/login'})
                      })
        }
      },
      clear() {
        this.info = ''
      }
    },
    watch: {
      pwd: 'clear',
      pwdConfirm: 'clear'
    },
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes";

  section.account {
    height: 100%;
    .title {
      width: 100%;
      margin: 10px auto;
      text-align: center;
    }
    .password {
      width: 100%;
      margin: 50px auto 20px auto;
      text-align: center;
      input {
        display: inline-block;
        height: 30px;
        width: 200px;
        padding: 6px;
        margin: 10px auto;
        border-bottom: 1px solid $grassGreen;
      }
    }
    .info {
      width: 100%;
      margin: 5px auto;
      text-align: center;
      span {
        display: inline-block;
        width: 200px;
        margin: 0 auto;
        text-align: left;
        color: $red;
      }
    }
    .panel {
      position: absolute;
      bottom: 40px;
      right: 100px;
      button {
        @include successButton();
        height: 30px;
        width: 80px;
      }
    }
  }
</style>

