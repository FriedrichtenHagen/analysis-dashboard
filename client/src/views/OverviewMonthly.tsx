import { convertDataToMonthly } from '../utils/createMockData'
import { Chart } from '../components/Chart'
import { Table } from '../components/Table'
import { transactionDataProps } from '../types/types'

export function OverviewMonthly({ transactionData }:transactionDataProps){
    let monthlyData = convertDataToMonthly(transactionData)





    
    return(
        <>
            <Chart transactionData={monthlyData}/>
            <Table transactionData={monthlyData}/>
        </>
    )
}