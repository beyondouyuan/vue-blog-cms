<template>
    <main class="container">
        <section class="archive">
            <div class="content">
                <i class="fa fa-archive fw icon"></i>
                <h2 class="title">文章归档</h2>
                <ul>
                  <li class="item"
                      v-for="year in archive.years">
                    <p class="year">
                      <i class="fa fa-spinner fw"></i>
                      {{year}}
                    </p>
                    <ul class="list">
                      <li v-for="article in archive.articleInYear[year]">
                        <router-link :to="{name:'article',query:{id:article._id}}"
                                     tag="span"
                                     class="title-name">
                          {{article.title}}
                        </router-link>
                        <span class="date">
                            <i class="fa fa-calendar fw"></i>
                            {{article.date | transDate}}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
        </section>
    </main>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default{
    name: 'Articles',
    created(){
      this.getArticles()
    },
    computed: {
      ...mapState(['articles']),
      ...mapGetters(['archive'])
    },
    methods: {...mapActions(['getArticles'])},
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/includes";

  section.archive {
        position: relative;
        .content {
          position: absolute;
          top: 50px;
          width: 60%;
          @include setCenter();
          .icon {
              color: $grassGreen;
            }
          .title {
            display: inline-block;
            font-size: 24px;
            color: $grassGreen;
            padding: 12px 0;
          }
          .year {
            font-size: 18px;
            color: $lightBlue;
            padding: 12px 0;
          }
          .list {
            > li {
              display: flex;
              justify-content: space-between;
              height: 30px;
              line-height: 30px;
              padding: 8px 0;
              border-bottom: 1px dashed $lightGreen;
              span.title-name {
                // flex-grow: 3;
                width: 33%;
                color: $lightGreen;
                cursor: pointer;
                &:hover {
                  color: $grassGreen;
                }
              }
              span.date {
                // flex-grow: 2;
                width: 20%;
                color: $lightBlue;
                text-align: right
              }
            }
          }

      }
    }
</style>
