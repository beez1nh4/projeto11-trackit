import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { borderColor, white , unclickedColor} from "../constants/colors"
import { useAuth } from "../providers/auth"

export default function ButtonDay({letter, index}) {
    const {days, setDays} = useAuth()
    function fillDays(i){
        if (!days.includes(i)){
        setDays([...days, i].sort())
        //console.log([...days, i]) 
        } else{
            const newIds = days.filter((idInArray) => idInArray !== i)
            setDays(newIds)
        }
    }

    return (
        
        <ButtonDayComponent data-identifier="week-day-btn" condition={days.includes(index)} onClick={() => fillDays(index)} >{letter}</ButtonDayComponent>
        
    )
}

const ButtonDayComponent = styled.button`
    width: 30px;
    height: 30px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.condition ? white : borderColor};
    background-color: ${props => props.condition ? borderColor : white}; 
    border: 1px solid ${unclickedColor};
    margin-right: 4px;
    border-radius: 5px;
`