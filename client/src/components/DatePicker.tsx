import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState } from 'react'
import { createMockData } from '../createMockData'


export function DatePicker({ setData }:any) {
  // make the initial date range the current day plus 30
  const defaultStartDate = new Date
  const defaultEndDate = new Date
  const defaultDateRange = 30
  defaultEndDate.setDate(defaultStartDate.getDate() + defaultDateRange)

  const [dataRange, setDataRange] = useState<[Date, Date]>([
    defaultStartDate,
    defaultEndDate
  ]);


  function setDateData(startAndEndDate:[Date, Date]|null){
    if(startAndEndDate===null){
      setDataRange([defaultStartDate, defaultEndDate])
    } else{
      const startDate = startAndEndDate[0]
      const endDate = startAndEndDate[1]
      setDataRange([startDate, endDate])
      const numberOfDaysInRange = daysBetweenTwoDates(startDate, endDate)
      const mockData = createMockData(numberOfDaysInRange, startDate)
      setData(mockData)
    }
  }
   
  
  function daysBetweenTwoDates(firstDate:Date, secondDate:Date){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  }

  return (
    <DateRangePicker style={{width: 198}} value={dataRange} onChange={setDateData}/>
  )
}