/*
* @Author: beyondouyuan
* @Date:   2017-11-25 00:33:43
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2017-11-26 16:13:45
*/
export default {
  EDITOR_ARTICLES: (state, articles) => {
    state.articles = articles
  },

  EDITOR_ARTICLE: (state, article) => {
    state.article = article
  },

  IS_LOADING: (state, isLoading) => {
    state.isLoading = isLoading
  },

  IS_FETCHING: (state, isFetching) => {
    state.isFetching = isFetching
  },

  EDITOR_USER: (state, user) => {
    state.user = user
  },

  UPDATE_CONTENT: (state, content) => {
    state.article.content = content
  },

  UPDATE_TITLE: (state, title) => {
    state.article.title = title
  },

  EDITOR_FETCHING: (state, payload) => {
    state.fetch.info = payload.info
    state.fetch.btnNum = payload.btnNum
    state.fetch.promise = new Promise((resolve, reject) => {
      state.fetch.fetchResolve = resolve
      state.fetch.fetchReject = reject
    })
  }
}
