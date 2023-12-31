import arrowDown from '../assets/arrow-down-red.png'
import arrowUp from '../assets/arrow-up-green.png'
import { useState } from 'react'

interface NumberBoxProps {
    head: string, 
    devUp: boolean,
    value: number,
}

export function NumberBox({ head, devUp, value }:NumberBoxProps){




    const [developmentUp] = useState(devUp)
    const arrowIcon = developmentUp ? arrowUp : arrowDown

    return(
        <div className="numberBox">
            <div className="numberBoxHead">
                {head}
            </div>
            <div className="numberBoxContent">
                {value}
                <img className='arrowIcon' src={arrowIcon}></img>
            </div>
            <div className="numberBoxFooter">
                to previous period    
            </div>
        </div>
    )
}