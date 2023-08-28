import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState } from 'react'
import { fetchData } from '../access-api/fetchData';

export function DatePicker({ setData }:any) {
  // make the initial date range the current day minus 30
  const defaultStartDate = new Date
  const defaultEndDate = new Date
  const defaultDateRange = 30
  defaultEndDate.setDate(defaultStartDate.getDate() - defaultDateRange)

  const [dataRange, setDataRange] = useState<[Date, Date]>([
    defaultStartDate,
    defaultEndDate
  ]);


  function setDateData(startAndEndDate:[Date, Date]|null){
    if(startAndEndDate===null){
      setDataRange([defaultStartDate, defaultEndDate])
      // setData to match default date range



      // possibly cache default date range data to prevent reloading
    } else{
      // display the chosen start and end date
      const startDate = startAndEndDate[0]
      const endDate = startAndEndDate[1]
      setDataRange([startDate, endDate])


      console.log(startDate)
      console.log(endDate)

      // convert start and end date to ISO 8601
      const startDateIso = startDate.toISOString().slice(0, 10).replace('T', ' ')
      const endDateIso = endDate.toISOString().slice(0, 10).replace('T', ' ')


      // add api call here with startDate and endDate
      const url = `http://localhost:3000/daily-transactions?start=${startDateIso}&end=${endDateIso}`
      fetchData(url)
        .then((res) => setData(res))
      // transform data to match frontend specifications
        // change column names: done
        // transform date to Date Object?: 
        // 



      // setData(result of api call)

      // const numberOfDaysInRange = daysBetweenTwoDates(startDate, endDate)
      // const mockData = createMockData(numberOfDaysInRange, startDate)
      // setData(mockData)
      // console.log(mockData)
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