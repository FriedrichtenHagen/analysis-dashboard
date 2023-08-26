import { fetchData } from "../access-api/fetchData"




export function BestDays({ data }:any){
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'


    fetchData(url)
        .then(x => console.log(x))
    

    return(
        <div className="div">lolo</div>
    )
}