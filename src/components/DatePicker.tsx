import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState } from 'react'
import createMockData  from '../createMockData'


export function DatePicker({ setData }:any) {
  const [dataRange, setDataRange] = useState<[Date, Date]>([
    new Date,
    new Date
  ]);

  function setDateData(startAndEndDate:[Date, Date]){
    const startDate = startAndEndDate[0]
    const endDate = startAndEndDate[1]
    setDataRange([startDate, endDate])
    const numberOfDaysInRange = daysBetweenTwoDates(startDate, endDate)
    const mockData = createMockData(numberOfDaysInRange, startDate)
    setData(mockData)
  }
  function daysBetweenTwoDates(firstDate:Date, secondDate:Date){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  }

  return (
    <DateRangePicker value={dataRange} onChange={e => setDateData(e)} />
  );
}

