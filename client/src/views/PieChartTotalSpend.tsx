import { PieChart } from '../components/PieChart'
import { dataDay } from '../utils/createMockData'

export function PieChartTotalSpend({ data }:any){
    return(
        <div className='test' style={{width:500}}>
            <PieChart dataDay={data}/>
        </div>
    )
}


export interface DataDayProps{
    dataDay: dataDay[] 
}

