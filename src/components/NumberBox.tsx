import arrowDown from '../assets/arrow-down-red.png'
import arrowUp from '../assets/arrow-up-green.png'
import { useState } from 'react'
import { dataDayProps } from '../createMockData'

interface NumberBoxProps {
    data: dataDayProps,
    head: string, 
    devUp: boolean,
    value: number,
}

export function NumberBox({ data, head, devUp, value }:NumberBoxProps){

    const [developmentUp, setDevelopmentUp] = useState(devUp)
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