import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { borderColor, white , unclickedColor} from "../constants/colors"

export default function ButtonDay({letter}) {
    return (
        <>
        <ButtonDayComponent>{letter}</ButtonDayComponent>
        </>
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