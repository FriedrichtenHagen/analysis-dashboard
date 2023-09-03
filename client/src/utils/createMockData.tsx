
export function createMockData(dataSetNumber:number, startDate:Date){
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
    return mockJson
}
interface pieData {
    meta_spend_total : number, 
    google_spend_total: number, 
    influencer_total: number, 
}
export function convertDataToPie(data:dataDayProps):pieData{
    let meta_spend_total = 0;
    let google_spend_total = 0;
    let influencer_total = 0;

    data.forEach((day:dataDay) => {
        meta_spend_total += parseInt(day.meta_spend)
        google_spend_total += parseInt(day.google_spend)
        influencer_total += parseInt(day.influencer)
        

    });
    return {
        meta_spend_total : meta_spend_total,
        google_spend_total : google_spend_total,
        influencer_total : influencer_total,
    }
}
export function convertDataToMonthly(mockJson:any){
    let monthlyData:any = [];
    console.log(mockJson)
    for(let i=0; i<mockJson.length; i++){
        let addedDay = mockJson[i]

        

        // old version using date object: 
        // let month = addedDay.date.getMonth()+1 // months are index starting at 0
        // let year = addedDay.date.getFullYear()

        // new version using date string from database:
        // example: '2023-08-01T22:00:00.000Z'
        let month = parseInt(addedDay.date.slice(5,7))
        let year = parseInt(addedDay.date.slice(0, 4))
        console.log(month, year)

        if(!monthlyData.some((e:any) => e.month === month && e.year === year)){
            // the object for this month does not exist yet
            monthlyData.push(
                {
                    id: monthlyData.length,
                    month: month,
                    year: year, 
                    date: month + '/' + year, 
                    meta_spend: parseInt(addedDay.meta_spend),
                    google_spend: parseInt(addedDay.google_spend),
                    revenue: parseInt(addedDay.revenue),
                    influencer: parseInt(addedDay.influencer),
                }
            )
        } else{
            // the month object exists and values are added to it
            // find the correct month for adding values
            let correctMonthObject = monthlyData.find((monthObj:any) => monthObj.month === month)
            // add day data to month object
            correctMonthObject.meta_spend += parseInt(addedDay.meta_spend)
            correctMonthObject.google_spend += parseInt(addedDay.google_spend)
            correctMonthObject.revenue += parseInt(addedDay.revenue)
            correctMonthObject.influencer += parseInt(addedDay.influencer)
        }
    }
    return monthlyData
}



export interface dataDay {
    date: string,
    google_spend: string, 
    id: string, 
    meta_spend: string, 
    revenue: string,
    influencer: string,
    new_customers: string,
}
export interface dataDayProps {
    data1: dataDay[]
}




