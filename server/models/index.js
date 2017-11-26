/*
 * @Author: beyondouyuan
 * @Date:   2017-11-24 13:20:28
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2017-11-24 13:39:43
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    pwd: String
})

const articleSchema = new Schema({
    title: String,
    date: Date,
    description: String,
    content: String
})

const linkSchema = new Schema({
    name: String,
    href: String
})


export { userSchema, articleSchema, linkSchema }
