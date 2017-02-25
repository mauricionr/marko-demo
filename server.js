require('marko/node-require').install()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', require('./src/pages/home'))

app.listen(port, () => console.log(`server is listening in port ${port}`))