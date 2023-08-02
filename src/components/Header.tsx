import { DropDown } from './DropDown'
import {DatePicker} from './DatePicker'

export function Header({ setData }: any){
    return(
        <div className="header">
            <DatePicker setData={setData}/>
            <DropDown/>
        </div>

    )
}



