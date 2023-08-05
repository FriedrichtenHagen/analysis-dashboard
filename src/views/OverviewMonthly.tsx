import { PieChart } from '../components/PieChart'
import { convertDataToMonthly } from '../createMockData'

export function OverviewMonthly({ data }:any){
    let monthlyData = convertDataToMonthly(data)

    return(
        <>
            <PieChart monthlyData={monthlyData}/>
        </>
    )
}