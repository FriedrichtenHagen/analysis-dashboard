import { Table } from './components/Table'
import { Chart } from './components/Chart'
import { Header } from './components/Header'
import { useState } from 'react'
import createMockData  from './createMockData'

function App() {
  const startingDate = new Date()
  const [data, setData] = useState(createMockData(30, startingDate))


  return (
    <>
        <Header setData={setData}/>       
        <Chart data1={data}/>
        <Table data1={data}/>
    </>
  )
}

export default App
