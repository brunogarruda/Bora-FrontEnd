const router = require('express').Router()
const home = require('../../controllers/home')
const grupos = require('../../controllers/grupos')

module.exports = app => {
  router.get('/eventos', home.index)
  app.use(router)
}
