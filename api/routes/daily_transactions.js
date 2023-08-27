const express = require('express');
const router = express.Router();
const daily_transactions = require('../services/daily_transactions');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    const startDate = req.query.start
    const endDate = req.query.end
    
    // test: http://localhost:3000/daily-transactions?start=2022-01-01&end=2022-01-05

    res.json(await daily_transactions.getDailyTransactions(startDate, endDate));
  } catch (err) {
    console.error(`Error while getting daily transactions `, err.message);
    next(err);
  }
});

module.exports = router;