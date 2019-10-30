const router = require('express').Router()
const home = require('../../controllers/home')
const grupos = require('../../controllers/grupos')

module.exports = index => {
  router.get('/', home.index)
  index.use(router)
}
module.exports = eventos => {
  router.get('/eventos', home.index)
  eventos.use(router)
}
