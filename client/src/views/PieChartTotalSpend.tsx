import { PieChart } from '../components/PieChart'


export function PieChartTotalSpend({ data }:any){
    return(
        <div className='test' style={{width:500}}>
            <PieChart data1={data}/>
        </div>
    )
}