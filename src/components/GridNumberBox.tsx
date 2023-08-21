import { NumberBox } from './NumberBox'
import { dataDay } from '../createMockData'

export function GridNumberBox({ data }:any){

    const head1 = 'Google Spend'
    const head2 = 'Facebook Spend'
    const head3 = 'Influencer'
    const head4 = 'Revenue'
    const value1 = 9532
    const value2 = 2862
    const value3 = 9302
    const value4 = 2042

    function calculateCurrentSums(data:any){
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
    const summedKpis = calculateCurrentSums(data)

    return(
        <div className="gridBox">
            <NumberBox head={head1} devUp={true} value={summedKpis.google_sum}/>
            <NumberBox head={head2} devUp={false} value={value2}/>
            <NumberBox head={head3} devUp={true} value={value3}/>
            <NumberBox head={head4} devUp={false} value={value4}/>
        </div>
    )
}