/*
* @Author: beyondouyuan
* @Date:   2017-11-23 23:33:05
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2017-11-25 04:17:16
*/

import fs                       from 'fs'
import path                     from 'path'
import express                  from 'express'
import favicon                  from 'serve-favicon'
import bodyParser               from 'body-parser'
import cookieParser             from 'cookie-parser'

import db                       from './config/db'
import api                      from './api/index'


const resolve = file => path.resolve(__dirname, file)
const app = express()


app.set('port', (process.env.port || 3000))


app.use(favicon(resolve('../dist/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
app.use(api)



app.post('/api/register', function (req, res) {
  new db.User(req.body)
    .save()
    .then(() => {
      res.status(200).end()
      db.initialized = true
    })
    .catch(() => res.status(500).end())
})


app.get('*', function (req, res) {
  const fileName = db.initialized ? 'index.html' : 'register.html'
  const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
  res.send(html)

})


app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
