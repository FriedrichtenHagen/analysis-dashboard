import { DropDown } from './DropDown'
import {DatePicker} from './DatePicker'

export function Header({ setData, toggleLoadingState, currentView, setCurrentView}:any){
    return(
        <div className="header">
            <DatePicker 
                setData={setData}
                toggleLoadingState={toggleLoadingState}
            />
            <h1>{currentView}</h1>
            <DropDown 
                setCurrentView={setCurrentView}/>
        </div>

    )
}



