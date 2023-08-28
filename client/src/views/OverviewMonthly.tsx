import { convertDataToMonthly } from '../utils/createMockData'
import { Chart } from '../components/Chart'
import { Table } from '../components/Table'

export function OverviewMonthly({ data }:any){
    let monthlyData = convertDataToMonthly(data)

    return(
        <>
            <Chart data1={monthlyData}/>
            <Table data1={monthlyData}/>
        </>
    )
}