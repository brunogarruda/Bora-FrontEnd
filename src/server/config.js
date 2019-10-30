const path = require('path')
const { createEngine } = require('express-react-views')
const morgan = require('morgan')
const multer = require('multer')
const express = require('express')
const routes = require('../views/routes')

module.exports = app => {
  app.set('port', process.env.PORT || 3000)
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'js')
  app.engine('js', createEngine())
  app.use(morgan('dev'))
  app.use(
    multer({
      dest: path.join(__dirname, '../public/upload/temp')
    }).single('image')
  )
  app.use(
    express.urlencoded({
      extended: false
    })
  )
  app.use(express.json())

  routes(app)

  app.use('/public', express.static(path.join(__dirname, '../public')))

  return app
}
