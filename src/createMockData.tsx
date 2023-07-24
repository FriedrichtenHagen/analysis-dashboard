export default function createMockData(dataSetNumber:number, startDate:Date){
    const mockJson = []

    for(let i=0; i<dataSetNumber; i++){
        
        mockJson.push({
            date: startDate.setDate(startDate.getDate() + i),

        })
    }
    console.log(mockJson)
    return mockJson
}

