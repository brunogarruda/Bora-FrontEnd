const express = require('express')
const app = express()

require('./server/config')(app)

require('./database')

app.listen(app.get('port'), () => {
  console.log('Servidor rodandando na porta', app.get('port'))
})
