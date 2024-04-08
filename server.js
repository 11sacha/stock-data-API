const express = require('express')
const app = express()
const port = 5356
const { getHome, getStockData, postTest } = require('./routes/index')


//Middleware
app.use(express.json())
app.use(require('cors')())

//Routes
app.get('/', getHome)

app.get('/api/stock', getStockData)

app.post('/api/test', postTest)

app.listen(port, () => console.log(`Server has started on port: ${port}`))