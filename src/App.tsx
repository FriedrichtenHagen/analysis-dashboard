import { Table } from './components/Table'
import { Chart } from './components/Chart'
import { DatePicker } from './components/DatePicker'
import { useEffect, useState } from 'react'
import createMockData  from './createMockData'



function App() {
  const [dataRange, setDataRange] = useState([
    new Date('2017-02-01 01:00:00'),
    new Date('2017-02-02 14:00:00')
  ]);
  const [data, setData] = useState({})



    const startDate = dataRange[0]
    const numberOfDaysInRange = daysBetweenTwoDates(dataRange[0], dataRange[1])
    const mockData = createMockData(numberOfDaysInRange, startDate)
    setData(mockData)

  

  function daysBetweenTwoDates(firstDate:Date, secondDate:Date){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  }

  return (
    <>
        <DatePicker dataRange={dataRange} setDataRange={setDataRange}/>
        <Chart data1={data}/>
        <Table data1={data}/>
    </>
  )
}

export default App
