/*
* @Author: beyondouyuan
* @Date:   2017-11-25 00:33:43
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2017-11-26 12:28:24
*/
export default {
  EDITOR_ARTICLES: (state, articles) => {
    state.articles = articles
  },

  EDITOR_LINKS: (state, links) => {
    state.links = links
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

  UPDATE_LINK_NAME: (state, { name, index }) => {
    const href = state.links[index].href
    state.links.splice(index, 1, { name, href })
  },

  UPDATE_LINK_HREF: (state, { href, index }) => {
    const name = state.links[index].name
    state.links.splice(index, 1, { name, href })
  },

  ADD_NEW_LINK: (state, index) => {
    state.links.splice(index, 0, { name: '', href: '' })
  },

  REMOVE_LINK: (state, index) => {
    state.links.splice(index, 1)
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
