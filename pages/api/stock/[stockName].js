import * as yahooFinance from 'yahoo-finance'

export default function handler(req, res) {
  const {
    query: { stockName }
  } = req

  if (stockName && stockName != 'undefined') {
    yahooFinance.quote(
      {
        symbol: stockName,
        modules: ['price'] // see the docs for the full list
      },
      function (err, quotes) {
        return res.status(200).json(JSON.stringify(quotes))
      }
    )
  }
}
