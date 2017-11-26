<template>
  <div class="fetch">
    <div class="info">
      <p>{{fetch.info}}</p>
      <div class="panel">
        <button @click="fetch.fetchResolve"
                class="confirm">确定
        </button>
        <button @click="fetch.fetchReject"
                class="cancel"
                v-if="fetch.btn===2">取消
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed: mapState(['fetch'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes.scss";

  .fetch {
    @include setShadow();
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.4);
    background-color: transparent;
    .info {
      // background-color: #FFF;
      background-color: #333F55;
      opacity: 0.7;
      color: #FFF;
      border-radius: 10px;
      position: absolute;
      width: 400px;
      height: 240px;
      margin-top: -100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding-top: 60px;
      p {
        text-align: center;
        font-size: 20px;
      }
      div.panel {
        width: 100%;
        position: absolute;
        bottom: 20px;
        text-align: center;
        button {
          margin: 10px;
          width: 80px;
          height: 30px;
        }
        .confirm {
          @include successButton();
          background-color: transparent;
        }
        .cancel {
          @include orangeButton();
          background-color: transparent;
        }
      }
    }
  }
</style>
