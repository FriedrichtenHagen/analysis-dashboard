import { Table } from './components/Table'
import { Chart } from './components/Chart'
import { DatePicker } from './components/DatePicker'
import { useState } from 'react'
import createMockData  from './createMockData'

function App() {
  const startingDate = new Date()
  const [data, setData] = useState(createMockData(30, startingDate))


  return (
    <>
        <DatePicker setData={setData}/>
        <Chart data1={data}/>
        <Table data1={data}/>
    </>
  )
}

export default App
