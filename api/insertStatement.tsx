export function createMockDataToInsertIntoMySQL(){

    let insertStatement = "INSERT INTO daily_transactions(date, net_revenue,google_spend,meta_spend,influencer_spend, new_customers) VALUES"

    const numberOfDatasets = 2000;
    const startDate = new Date(2022, 0, 1)

    for(let i=0; i < numberOfDatasets; i++){
        // increment the date by i
        let clone = structuredClone(startDate)
        clone.setDate(clone.getDate() + i)

        // create random number of orders per day
        const ordersPerDay = Math.floor(Math.random()*5)+1
        for(let f=0; f<ordersPerDay; f++){
            // create random amounts
            let meta_spend = Math.floor(Math.random()*10000)
            let google_spend = Math.floor(Math.random()*10000)
            let revenue = Math.floor(Math.random()*30000)
            let influencer = Math.floor(Math.random()*300)+2000
            let new_customers = Math.floor(Math.random()*30)+20

            // concatenate the insert statement
            insertStatement += ` (NULL,'${clone.toISOString().slice(0, 19).replace('T', ' ')}', ${revenue}, ${google_spend}, ${meta_spend}, ${influencer}, ${new_customers}),`
        }
    }
    console.log(insertStatement)
}

/*
INSERT INTO daily_transactions(date, net_revenue,google_spend,meta_spend,influencer_spend, new_customers) VALUES
 (NULL,'2021-12-31 23:00:00', 9849, 4236, 239, 2084, 42), (NULL,'2021-12-31 23:00:00', 19354, 4873, 2607, 2138, 21), (NULL,'2021-12-31 23:00:00', 6059, 6263, 9058, 2137, 45), (NULL,'2021-12-31 23:00:00', 9526, 7650, 3003, 2124, 46), (NULL,'2022-01-01 23:00:00', 20549, 5837, 957, 2263, 21), (NULL,'2022-01-02 23:00:00', 8726, 4196, 36, 2275, 26), (NULL,'2022-01-02 23:00:00', 9931, 8301, 3462, 2122, 22), (NULL,'2022-01-02 23:00:00', 1496, 840, 9131, 2035, 42), (NULL,'2022-01-03 23:00:00', 10528, 7289, 4051, 2157, 23), (NULL,'2022-01-03 23:00:00', 29683, 8981, 529, 2208, 41), (NULL,'2022-01-03 23:00:00', 24789, 9625, 6582, 2216, 33), (NULL,'2022-01-04 23:00:00', 24570, 7554, 3058, 2062, 43), (NULL,'2022-01-05 23:00:00', 15076, 3312, 185, 2181, 29), (NULL,'2022-01-05 23:00:00', 22592, 3902, 9426, 2240, 49), (NULL,'2022-01-05 23:00:00', 17121, 8216, 7614, 2134, 37), (NULL,'2022-01-05 23:00:00', 5976, 5560, 4971, 2227, 41), (NULL,'2022-01-05 23:00:00', 11393, 1520, 3428, 2294, 31), (NULL,'2022-01-06 23:00:00', 22260, 5565, 2651, 2159, 24), (NULL,'2022-01-06 23:00:00', 14959, 6892, 1632, 2285, 35), (NULL,'2022-01-06 23:00:00', 27068, 4270, 8694, 2025, 23), (NULL,'2022-01-06 23:00:00', 7458, 2263, 7695, 2245, 35), (NULL,'2022-01-06 23:00:00', 29737, 3415, 7124, 2151, 44), (NULL,'2022-01-07 23:00:00', 7153, 3813, 1553, 2204, 44), (NULL,'2022-01-07 23:00:00', 23325, 4840, 9132, 2207, 20), ...


*/


