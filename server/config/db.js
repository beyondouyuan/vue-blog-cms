/*
 * @Author: beyondouyuan
 * @Date:   2017-11-24 13:20:18
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-25 04:14:55
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
            console.log('Database opens for the first time...')
            Promise.all(mock.map(item => new Models[item.type](item).save()))
                .then(() => console.log('Initialize successfully.'))
                .catch(() => console.log('Something went wrong during initializing.'))
        } else {
            Models.initialized = true
        }
    })
}

mongoose.connect('mongodb://localhost/node-cms')

const db = mongoose.connection

db.on('error', function() {
    console.log('Database connection error.')
})

db.once('open', function() {
    console.log('The database has connected.')
    initialize()
})


export default Models
