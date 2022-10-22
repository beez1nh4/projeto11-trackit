import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { white } from "../constants/colors"

export default function TodayCard() {
    return(
        <>
        <TodayCardComponent>

        </TodayCardComponent>
        </>
    )
}

const TodayCardComponent = styled.div`
    width: 340px;
    height: 94px;
    background-color: ${white};
    border-radius: 5px;
`