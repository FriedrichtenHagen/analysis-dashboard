import { NumberBox } from './NumberBox'

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
        
        console.log(data)
        return {
            google_spend: 345345,
            meta_spend: 3453,
            influencer_spend: 3453,
            revenue: 546456,
        }
    }
    calculateCurrentSums(data)

    return(
        <div className="gridBox">
            <NumberBox head={head1} devUp={true} value={value1}/>
            <NumberBox head={head2} devUp={false} value={value2}/>
            <NumberBox head={head3} devUp={true} value={value3}/>
            <NumberBox head={head4} devUp={false} value={value4}/>
        </div>
    )
}