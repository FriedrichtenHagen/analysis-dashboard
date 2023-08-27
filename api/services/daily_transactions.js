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
        date, 
        SUM(google_spend) AS google_spend, 
        SUM(meta_spend) AS meta_spend, 
        SUM(influencer_spend) AS influencer_spend, 
        SUM(net_revenue) AS net_revenue, 
        SUM(new_customers) AS new_customers   
    FROM daily_transactions 
    WHERE date > '${startDate}'
        AND date < '${endDate}'
    GROUP BY date
    ORDER BY date`

    console.log(sqlQuery)

    const data = await db.query(sqlQuery);


    return data
}

module.exports = {
  getDailyTransactions
}

