export default function createMockData(dataSetNumber:number, startDate:Date){
    const mockJson = []

    for(let i=0; i<dataSetNumber; i++){
        // increment the date by i
        let clone = structuredClone(startDate)
        clone.setDate(clone.getDate() + i)

        // create random amounts
        let meta_spend = Math.floor(Math.random()*1000)
        let google_spend = Math.floor(Math.random()*10000)
        let revenue = Math.floor(Math.random()*1000000)

        mockJson.push({
            date: clone,
            meta: meta_spend, 
            type: google_spend,
            isComplete: revenue,
        })
    }
    console.log(mockJson)
    return mockJson
}

// .setDate(startDate.getDate() + i)