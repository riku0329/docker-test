const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi aaaa')
})

app.listen(8080, () => {
  console.log('test server');
})
