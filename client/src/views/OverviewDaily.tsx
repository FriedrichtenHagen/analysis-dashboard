import {Chart} from '../components/Chart'
import {Table} from '../components/Table'
import { transactionDataProps } from '../types/types'


export function OverviewDaily({ transactionData }:transactionDataProps){
    return(
        <>
            <Chart transactionData={transactionData}/>
            <Table transactionData={transactionData}/>
        </>
    )
}