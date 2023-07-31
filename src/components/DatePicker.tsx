import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export function DatePicker({ dataRange, setDataRange }:any) {
  

  return (
    <DateRangePicker value={dataRange} onChange={setDataRange} />
  );
}