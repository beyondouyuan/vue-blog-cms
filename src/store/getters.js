/*
 * @Author: beyondouyuan
 * @Date:   2017-11-25 00:35:22
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-25 01:41:27
 */


export default {
    archive: state => {
        const articleInYear = {}
        const years = []
        state.articles.forEach(article => {
            const time = new Date(article.date)
            const year = time.getFullYear()
            if (!articleInYear[year]) {
                years.push(year)
                articleInYear[year] = []
            }
            articleInYear[year].push(article)
        })
        return { articleInYear, years }
    }
}
