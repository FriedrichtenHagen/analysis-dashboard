const db = require('./db');
const config = require('../config');

async function getDailyTransactions(startDate, endDate){

    if(!startDate&&!endDate){
        startDate = '2023-08-27'
        endDate = '2023-08-30'
        console.log('no date was transmited')
    }



    const sqlQuery = 
    `SELECT 
        order_id,
        date, 
        google_spend, 
        meta_spend, 
        influencer_spend, 
        net_revenue, 
        new_customers   
    FROM daily_transactions 
    WHERE date > '${startDate}'
        AND date < '${endDate}'
    ORDER BY date`

    console.log(sqlQuery)

    const data = await db.query(sqlQuery);


    return data
}

module.exports = {
  getDailyTransactions
}

