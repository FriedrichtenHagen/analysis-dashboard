import { PieChart } from '../components/PieChart'
import { transactionDataProps } from '../types/types'

export function PieChartTotalSpend({ transactionData }:transactionDataProps){
    return(
        <div className='test' style={{width:500}}>
            <PieChart transactionData={transactionData}/>
        </div>
    )
}


