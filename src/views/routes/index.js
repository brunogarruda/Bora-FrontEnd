const router = require('express').Router()
const home = require('../../controllers/home')
const grupos = require('../../controllers/grupos')

module.exports.index = app => {
  router.get('/', home.index)
  app.use(router)
}

module.exports.eventos = app => {
  router.get('/eventos', home.index)
  app.use(router)
}
