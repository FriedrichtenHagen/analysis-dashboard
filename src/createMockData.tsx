
export default function createMockData(dataSetNumber:number, startDate:Date){
    const mockJson = []

    for(let i=0; i < dataSetNumber; i++){
        // increment the date by i
        let clone = structuredClone(startDate)
        clone.setDate(clone.getDate() + i)

        // create random amounts
        let meta_spend = Math.floor(Math.random()*10000)
        let google_spend = Math.floor(Math.random()*10000)
        let revenue = Math.floor(Math.random()*30000)
        let influencer = Math.floor(Math.random()*300)+2000

        mockJson.push({
            id: i,
            date: clone,
            meta_spend: meta_spend, 
            google_spend: google_spend,
            revenue: revenue,
            influencer: influencer,
        })
    }
    //console.log(mockJson)
    return mockJson
}

export interface dataDay {
    date: Date,
    google_spend: number, 
    id: number, 
    meta_spend: number, 
    revenue: number,
    influencer: number,
}
export interface dataDayProps {
    data1: dataDay[]
}