import { useState } from "react"

function fetchData(url){
    const [data, setData] = useState(null)

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data)
        })
}

const url = 'https://exampleapi.com/users'
fetchData(url)


