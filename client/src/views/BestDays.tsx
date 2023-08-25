import { fetchData } from "../access-api/fetchData"
import { createMockDataToInsertIntoMySQL} from "../insertStatement"



export function BestDays({ data }:any){
    // const url = 'https://pokeapi.co/api/v2/pokemon/ditto'


    // fetchData(url)
    //     .then(x => console.log(x))
    

    createMockDataToInsertIntoMySQL()

    return(
        <div className="div">lolo</div>
    )
}