const cheerio = require('cheerio')

function fetchPrices(html) {
    const $ = cheerio.load(html)
    const prices = $('td:nth-child(6)').get().map(val => $(val).text())
    return prices
}

module.exports = { fetchPrices }