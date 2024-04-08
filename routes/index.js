const { fetchPrices } = require('../utils/prices')

const baseUrl = (stock) => `https://finance.yahoo.com/quote/${stock}/history`

const getHome = (req, res) => {
    res.status(200).send({message: 'Thank you for using the API'})
}

async function getStockData(req, res) {
    const { stock } = req.query
    console.log('Stock ticker ' + stock)
    if (!stock) {
        return res.sendStatus(403)
    }
    try {
        const stockDataUrl = baseUrl(stock)
        const resStock = await fetch(stockDataUrl)
        const data = await resStock.text()
        console.log(data)
        const prices = fetchPrices(data)
        console.log(prices)
        res.status(200).send({prices})
    } catch (err) {
        console.log('There was an error: ' + err)
        res.sendStatus(500)
    }
}

const postTest = (req, res) => {
    const body = req.body
    const { message } = body
    console.log('Announcement: ' + message)
    res.sendStatus(200)
}

module.exports = { getHome, getStockData, postTest }