import {Chart} from '../components/Chart'
import {Table} from '../components/Table'


export function OverviewDaily({ data }:any){
    return(
        <>
            <Chart data1={data}/>
            <Table data1={data}/>
        </>
    )
}