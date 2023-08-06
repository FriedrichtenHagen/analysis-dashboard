import { NumberBox } from './NumberBox'

export function GridNumberBox({ data }){

    const head1 = 'Google Spend'
    const head2 = 'Facebook Spend'
    const head3 = 'Influencer'
    const head4 = 'Revenue'
    const value1 = 9532
    const value2 = 2862
    const value3 = 9302
    const value4 = 2042


    

    return(
        <div className="gridBox">
            <NumberBox data={data} head={head1} devUp={true} value={value1}/>
            <NumberBox data={data} head={head2} devUp={false} value={value2}/>
            <NumberBox data={data} head={head3} devUp={true} value={value3}/>
            <NumberBox data={data} head={head4} devUp={false} value={value4}/>
        </div>
    )
}