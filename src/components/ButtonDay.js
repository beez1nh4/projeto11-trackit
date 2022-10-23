import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { borderColor, white , unclickedColor} from "../constants/colors"
import { useAuth } from "../providers/auth"

export default function ButtonDay({letter, index}) {
    const {days, setDays} = useAuth()
    function fillDays(i){
        setDays([...days, i])
        console.log([...days, i]) 
    }

    return (
        
        <ButtonDayComponent onClick={() => fillDays(index)} >{letter}</ButtonDayComponent>
        
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
    color: ${borderColor};
    background-color: ${white}; 
    border: 1px solid ${unclickedColor};
    margin-right: 4px;
    border-radius: 5px;
`