export function createMockDataToInsertIntoMySQL(){



    const insert_statement = "INSERT INTO daily_transactions(order_id,date,net_revenue,google_spend,meta_spend,influencer_spend, new_customers) VALUES"
    // (1, )
    // (1,'JavaScript',1995,1,3,7), 
    // (2,'Python',1991,2,1,3),"
    const inserts = []

    const numberOfDatasets = 4000;
    const startDate = new Date(2022, 0, 1)

    for(let i=0; i < numberOfDatasets;){
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

            inserts.push(`(${i},)`)
            i++
            //  ${clone}, ${revenue}, ${google_spend}, ${meta_spend}, ${influencer}, ${new_customers}
        }
    }
    console.log(inserts)

}

createMockDataToInsertIntoMySQL()