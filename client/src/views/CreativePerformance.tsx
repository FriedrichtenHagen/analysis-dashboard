import { GridNumberBox } from "../components/GridNumberBox"
import { transactionDataProps } from "../types/types"

export function CreativePerformance({ transactionData }:transactionDataProps){


    return(
        <GridNumberBox data={transactionData}/>
    )
}