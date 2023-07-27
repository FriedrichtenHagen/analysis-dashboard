import { Table } from './components/Table'
import { Chart } from './components/Chart'
import { useState } from 'react'
import createMockData  from './createMockData'

function App() {
  
  const startDate = new Date(2023, 1, 1)
  const mockData = createMockData(50, startDate)
  const [data] = useState(mockData)


  return (
    <>
      <Chart data1={data}/>
      <Table data1={data}/>
    </>
  )
}

export default App
