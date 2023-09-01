import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState } from 'react'
import { fetchData } from '../access-api/fetchData';

export function DatePicker({ setData, toggleLoadingState }:any) {
  // make the initial date range the current day minus 30
  const defaultStartDate = new Date
  const defaultEndDate = new Date
  defaultEndDate.setDate(defaultStartDate.getDate() - 30)

  const [dateRange, setDateRange] = useState<[Date, Date]>([
    defaultStartDate,
    defaultEndDate
  ]);


  function setDateData(startAndEndDate:[Date, Date]|null){
    if(startAndEndDate===null){
      setDateRange([defaultStartDate, defaultEndDate])
      // setData to match default date range

      // possibly cache default date range data to prevent reloading

    } else{
      // display the chosen start and end date
      const startDate = startAndEndDate[0]
      const endDate = startAndEndDate[1]
      setDateRange([startDate, endDate])
      getDailyDataForDateRange(startDate, endDate)
    }
  }


  async function getDailyDataForDateRange(startDate:Date, endDate:Date){
    toggleLoadingState(true)
    const startDateIso = startDate.toISOString().slice(0, 10).replace('T', ' ')
    const endDateIso = endDate.toISOString().slice(0, 10).replace('T', ' ')

    // add api call here with startDate and endDate
    const url = `http://localhost:3000/daily-transactions?start=${startDateIso}&end=${endDateIso}`
    // fetchData(url)
    //   // display loading spinner

    //   .then((res) => setData(res))
    const res = await fetchData(url)
        // display loading spinner
      console.log(res)
      setData(res)
    // transform data to match frontend specifications
      // transform date to Date Object?: 

     toggleLoadingState(false)   
  }

  return (
    <DateRangePicker style={{width: 198}} value={dateRange} onChange={setDateData}/>
  )
}