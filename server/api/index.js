/*
 * @Author: beyondouyuan
 * @Date:   2017-11-24 13:20:13
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-26 14:20:40
 */


import express              from 'express'

import db                   from '../config/db'

const router = express.Router()
const fn = () => {}



router.get('/api/getArticle', (req, res) => {
    const _id = req.query.id
    db.Article.findOne({ _id }, (err, article) => {
        if (err) {
            console.log(err)
        } else if (article) {
            res.send(article)
        }
    })
})

router.get('/api/getArticles', (req, res) => {
    db.Article.find(null, 'title date content', (err, articles) => {
        if (err) {
            console.log(err)
        } else if (articles) {
            res.send(JSON.stringify(articles))
        }
    })
})


router.post('/api/saveArticle', (req, res) => {
    const id = req.body._id
    const article = {
        title: req.body.title,
        date: req.body.date,
        content: req.body.content
    }
    if (id) {
        db.Article.findByIdAndUpdate(id, article, fn)
    } else {
        new db.Article(article).save()
    }
    res.status(200).end()
})

router.post('/api/deleteArticle', (req, res) => {
    db.Article.findByIdAndRemove(req.body.id, fn)
    res.status(200).end()
})

router.post('/api/getLinks', (req, res) => {
    db.Link.find(null, (err, links) => {
        if (err) {
            console.log(err)
        } else if (links) {
            res.send(links)
        }
    })
})

router.post('/api/saveLinks', (req, res) => {
    const links = req.body || []
    db.Link.remove(null, fn)
    const promises = links.map(({ name, href }) => new db.Link({ name, href }).save())
    Promise.all(promises)
        .then(() => res.status(200).end())
        .catch(() => res.status(500).end())
})

router.post('/api/updatePassword', (req, res) => {
    const { name, pwd } = req.body
    console.log(name)
    db.User.findOneAndUpdate({ name }, { pwd }, fn)
    res.status(200).end()
})


router.post('/api/login', (req, res) => {
    const { name, pwd } = req.body
    db.User.findOne({ name }, 'pwd', (err, user) => {
        switch (true) {
            case !!err:
                console.log(err)
                break
            case !user:
                res.send({ state: 0, msg: '账号不存在' })
                break
            case user.pwd === pwd:
                res.send({ state: 1, msg: '登陆成功', user: user })
                break
            case user.pwd !== pwd:
                res.send({ state: 2, msg: '密码错误' })
                break
            default:
                res.send({ state: 3, msg: '未知错误' })
        }
    })
})


router.post('/api/logout', (req, res) => {
    res.send({ state: 1, msg: '登出成功'})
})
export default router
