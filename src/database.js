const mongoose = require('mongoose')

const { database } = require('./keys')

mongoose
  .connect(database.URI, {
    useNewUrlParser: true
  })
  .then(db => console.log('DB esta conectado', db))
  .catch(err => console.error(err))
