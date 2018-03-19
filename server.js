const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/whoami', (req, res) => {
  let ipaddress = req.connection.remoteAddr || '127.0.0.1'
  let language = req.headers['accept-language'].split(',')[0]
  let software = req.headers['user-agent'].match(/\((.*?)\)/)[1]

  let obj = { ipaddress, language, software }
  res.end(JSON.stringify(obj))
})

app.listen(port)
