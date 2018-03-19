const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.set('trust proxy', true)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/api/whoami', (req, res) => {
  let ipaddress = req.ip
  let language = req.headers['accept-language'].split(',')[0]
  let software = req.headers['user-agent'].match(/\((.*?)\)/)[1]

  let obj = { ipaddress, language, software }
  res.end(JSON.stringify(obj))
})

app.listen(port)
