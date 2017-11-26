<template>
  <section class="articles">
    <div id="title" class="title">
      <h2>文章列表</h2>
    </div>
    <div class="content">
      <ul id="list" class="list">
        <li v-for="(article,index) in articles">
          <router-link :to="{name:'article',query:{id:article._id}}"
                tag="span"
                class="title-name"
          >
          {{article.title}}
          </router-link>
          <span class="date">
            <i class="fa fa-calendar fw"></i>
            {{article.date | transDate}}
          </span>
          <router-link class="fa fa-pencil-square-o btn"
                         :to="{name:'editor',query:{id:article._id}}"
                         tag="span">
          </router-link>
          <span class="fa fa-trash btn"
            @click="deleteArticle(article._id)"
          >
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Articles',
    created(){
      this.getArticles()
    },
    computed: mapState(['articles']),
    methods: mapActions(['getArticles', 'deleteArticle'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes";

  section.articles {
        position: relative;
        .title {
          margin: 30px auto;
          text-align: center;
        }
        .content {
          position: absolute;
          top: 50px;
          width: 60%;
          @include setCenter();
          .list {
            > li {
              display: flex;
              justify-content: space-around;
              height: 30px;
              line-height: 30px;
              padding: 8px 0;
              border-bottom: 1px dashed $lightGreen;
              span.title-name {
                flex-grow: 3;
                width: 50%;
                color: $lightGreen;
                cursor: pointer;
              }
              span.date {
                flex-grow: 2;
                width: 20%;
                color: $lightBlue;
              }
              span.btn {
                flex-grow: 1;
                vertical-align: middle;
                height: 30px;
                line-height: 30px;
                color: $lightGreen;
                cursor: pointer;
                text-align: center;
              }
            }
          }

      }
    }
</style>
