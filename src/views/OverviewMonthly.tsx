import { convertDataToMonthly } from '../createMockData'
import { Chart } from '../components/Chart'

export function OverviewMonthly({ data }:any){
    let monthlyData = convertDataToMonthly(data)

    return(
        <>
            <Chart data1={monthlyData}/>
        </>
    )
}