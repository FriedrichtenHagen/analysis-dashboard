import { Table } from './components/Table'
import { Chart } from './components/Chart'
import { DatePicker } from './components/DatePicker'
import { useState } from 'react'
import createMockData  from './createMockData'
import { createContext } from 'react';



function App() {
  const [dataRange, setDataRange] = useState([]);
  const DateRangeContext = createContext(dataRange);



  const startDate = new Date(2023, 1, 1)
  const mockData = createMockData(30, startDate)
  const [data] = useState(mockData)


  return (
    <>
        <DateRangeContext.Provider value={dataRange}>
          <DatePicker setDataRange={setDataRange}/>
          <Chart data1={data}/>
          <Table data1={data}/>
        </DateRangeContext.Provider>
    </>
  )
}

export default App
