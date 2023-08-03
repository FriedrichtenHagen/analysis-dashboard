import {Chart} from '../components/Chart'
import {Table} from '../components/Table'

export function OverviewDaily(){
    return(
        <>
            <Chart data1={data}/>
            <Table data1={data}/>
        </>

    )
}