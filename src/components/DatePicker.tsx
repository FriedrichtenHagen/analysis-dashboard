import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState, useContext } from "react";

export function DatePicker({ setDataRange }) {
  const dataRangeContext = useContext(dataRangeContext);
  
  const [value, setValue] = useState([
    new Date('2017-02-01 01:00:00'),
    new Date('2017-02-02 14:00:00')
  ]);



  return (
    <DateRangePicker value={value} onChange={setDataRange} />
  );
}