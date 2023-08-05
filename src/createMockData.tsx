
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
const dataSetNumber = 1;
const startDate = new Date;
let mockJson = createMockData(dataSetNumber, startDate)

convertDataToMonthly(mockJson)


function convertDataToMonthly(mockJson:any){
    let monthlyData:any = [];

    for(let i=0; i<mockJson.length; i++){
        let addedDay = mockJson[i]
        let month = addedDay.date.getMonth()+1 // months are index starting at 0
        let year = addedDay.date.getFullYear()
        if(!monthlyData.some(e => e.month === month && e.year === year)){
            // the object for this month does not exist yet
            monthlyData.push(
                {
                    id: monthlyData.length,
                    month: month,
                    year: year, 
                    meta_spend: addedDay.meta_spend,
                    google_spend: addedDay.google_spend,
                    revenue: addedDay.revenue,
                    influencer: addedDay.influencer,
                }
            )
        } else{
            // the month object exists and values are added to it
            // find the correct month for adding values
            let correctMonthObject = monthlyData.find((monthObj:any) => monthObj.month === month)
            // add day data to month object
            correctMonthObject.meta_spend += addedDay.meta_spend
            correctMonthObject.google_spend += addedDay.google_spend
            correctMonthObject.revenue += addedDay.revenue
            correctMonthObject.influencer += addedDay.influencer
        }
    }
    console.log(monthlyData)
    return monthlyData
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
interface dataMonth {
    month: string, 
    year: string, 
    google_spend: number, 
    id: number, 
    meta_spend: number, 
    revenue: number,
    influencer: number,
}