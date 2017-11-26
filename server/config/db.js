/*
 * @Author: beyondouyuan
 * @Date:   2017-11-24 13:20:18
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-26 16:07:52
 */

import mongoose                                       from 'mongoose'

import mock                                           from '../mock/mock.json'
import { userSchema, articleSchema, linkSchema }      from '../models'



const Models = {
    User: mongoose.model('User', userSchema),
    Article: mongoose.model('Article', articleSchema),
    Link: mongoose.model('Link', linkSchema),
    initialized: false
}

const initialize = function() {
    Models.User.find(null, function(err, doc) {
        if (err) {
            console.log(err)
        } else if (!doc.length) {
            console.log('初始化数据库...')
            Promise.all(mock.map(item => new Models[item.type](item).save()))
                .then(() => console.log('初始化成功！'))
                .catch(() => console.log('初始化失败！'))
        } else {
            Models.initialized = true
        }
    })
}

mongoose.connect('mongodb://localhost/node-cms')

const db = mongoose.connection

db.on('error', function() {
    console.log('数据库链接出错')
})

db.once('open', function() {
    console.log('雏菊哭链接完成')
    initialize()
})


export default Models
