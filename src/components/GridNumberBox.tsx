import { NumberBox } from './NumberBox'
import { dataDay } from '../createMockData'
import { useEffect, useState } from 'react'

export function GridNumberBox({ data }:any){
    const [monthData, setMonthData] = useState<MonthData>({
        google_sum: 0,
        meta_sum: 0,
        influencer_sum: 0,            
        revenue_sum: 0,
    })
    const [diffToPrevPeriod, setDiffToPrevPeriod] = useState<DiffToPrevPeriod>({
        google_diff: 0,
        meta_diff: 0,
        influencer_diff: 0,            
        revenue_diff: 0,
    })
    interface MonthData {
        google_sum: number,
        meta_sum: number,
        influencer_sum: number,            
        revenue_sum: number,
    }
    interface DiffToPrevPeriod {
        google_diff: number,
        meta_diff: number,
        influencer_diff: number,            
        revenue_diff: number,
    }

    const head1 = 'Google Spend'
    const head2 = 'Facebook Spend'
    const head3 = 'Influencer'
    const head4 = 'Revenue'





    useEffect(() => {
        let calculatedMonthData = calculateCurrentSums(data)
        function calculateCurrentSums(data:any):MonthData{
            let google_sum = 0;
            let meta_sum = 0;
            let influencer_sum = 0;
            let revenue_sum = 0;
    
            data.forEach((day:dataDay) => {
                google_sum += day.google_spend
                meta_sum += day.meta_spend
                influencer_sum += day.influencer
                revenue_sum += day.revenue
            });
    
            console.log(data)
            return {
                google_sum,
                meta_sum,
                influencer_sum,            
                revenue_sum,
            }
        }

        function calculateDiffToPrevPeriod(data:any):DiffToPrevPeriod{
            const periodLength = data.length
            

            return{
                google_diff,
                meta_diff,
                influencer_diff,            
                revenue_diff,
            }
        }
        
        setMonthData(calculatedMonthData)
    }, [data])



    return(
        <div className="gridBox">
            <NumberBox head={head1} devUp={true} value={monthData.google_sum}/>
            <NumberBox head={head2} devUp={false} value={monthData.meta_sum}/>
            <NumberBox head={head3} devUp={true} value={monthData.influencer_sum}/>
            <NumberBox head={head4} devUp={false} value={monthData.revenue_sum}/>
        </div>
    )
}