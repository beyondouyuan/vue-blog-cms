<template>
  <main class="container">
    <section class="article">
      <article class="content">
        <div class="title">
          <i class="fa fa-book fw"></i>
          <h3 class="a-title">{{article.title}}</h3>
        </div>
        <div class="info">
          <i class="fa fa-calendar fw"></i>
          {{article.date | transDate}}
        </div>
        <div class="main-content" v-html="article.content"></div>
      </article>
    </section>
  </main>
</template>
<script>
  import {mapState}   from 'vuex'
  import marked       from '../../assets/js/marked.min'
  import hljs         from '../../assets/js/highlight.pack'

  export default{
    created(){
      this.fetchData()
    },
    updated(){
      this.highlight()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getArticle', this.$route.query.id)
      },
      highlight(){
        setTimeout(() => {
          hljs.initHighlighting.called = false
          hljs.initHighlighting()
        }, 0)
      }
    },
    computed: mapState({
      article: state => {
        state.article.content = marked(state.article.content || '')
        return state.article
      }
    }),
    watch: {
      '$route': ['fetchData', 'highlight']
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/constant";
  main.container {
    min-height: 100%;
    width: 750px;
    margin: 0 auto;
    position: relative;
    .main-content {
      > pre {
        text-indent: 2em;
      }
    }
    section.article {
      line-height: 1.6;
      padding-bottom: 160px;
      .content {
        .title {
          padding: 0.65em 0;
          font-size: 1.5em;
          &:hover {
            cursor: pointer;
            color: $lightGreen;
          },
          .a-title {
            display: inline-block;
            padding-left: 8px;
          }
        }
        .info {
          color: $lightBlue;
          margin: 1.2em 0;
          span {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
</style>
