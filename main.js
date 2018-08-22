const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const viewDir = path.join(__dirname, 'views')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

router.use(function (req, res, next) {
  console.log(req.method + ' ' + req.url)
  next()
})

router.get('/', function (req, res) {
  res.statusCode = 200
  res.render('mainTemplate', {title: 'Index'})
})

router.get('/about', function (req, res) {
  res.sendFile(path.join(viewDir, 'about.html'))
})

router.get('/contact', function (req, res) {
  res.sendFile(path.join(viewDir, 'contact.html'))
})

app.use('/', router)

app.use('*', function (req, res) {
  res.sendFile(path.join(viewDir, '404.html'))
})

app.listen(80, function () {
  console.log('Live at Port 80')
})
