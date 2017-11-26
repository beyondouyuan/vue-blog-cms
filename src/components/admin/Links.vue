<template>
  <section class="links">
    <div class="title">链接编辑</div>
    <table>
      <tbody>
      <tr>
        <th>链接名称</th>
        <th>链接地址</th>
      </tr>
      <tr v-for="(link,index) in links">
        <td>
          <i class="fa fa-minus-circle"></i>
          <input type="text"
                 :value="link.name"
                 placeholder="链接名称"
                 spellcheck="false">
        </td>
        <td>
          <input type="text"
                 :value="link.href"
                 placeholder="链接"
                 spellcheck="false">
        </td>
      </tr>
      </tbody>
    </table>
    <div class="panel">
      <button>保存</button>
    </div>
  </section>
</template>

<script>
    import { mapMutations, mapActions, mapState } from 'vuex'
    export default {
        name: 'Links',
        created() {
            this.getLinks()
        },
        computed: mapState(['links']),
        methods: {
            ...mapActions(['getLinks']),
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes";


  section.links {
    height: 100%;
    min-width: 500px;
    .title {
      @include setTitle();
    }
    table {
      @include setCenter();
      padding-top: 100px;
      width: 500px;
      position: relative;
      border-collapse: collapse;
      tr {
        height: 50px;
        th {
            border: 1px solid $lightGreen;
          &:first-of-type {
            width: 120px;
          }
          &:last-of-type {
            width: 60%;
          }
        }
        td {
            border: 1px solid $lightGreen;
          text-align: center;
          input {
            width: 100%;
          }
          &:first-of-type {
            input {
              max-width: 60px;
            }
            i {
              cursor: pointer;
              transition: all 0.4s;
              &:after {
                content: '';
                width: 10px;
                display: inline-block;
              }
              &:hover {
                color: $lightGreen
              }
            }
          }
        }
        td:first-of-type {
          color: $lightGreen;
          cursor: pointer;
          padding-left: 8px;
        }
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
