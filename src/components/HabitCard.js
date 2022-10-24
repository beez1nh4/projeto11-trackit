import styled from "styled-components"
import { daysInitials } from "../constants/days"
import { white, inputText } from "../constants/colors"
import { baseFont } from "../constants/fonts"
import ButtonDay from "./ButtonDay"
import React from "react"
import { Trash } from "styled-icons/ionicons-outline"

export default function HabitCard() {
    
    return(
        <>
        <HabitCardContainer>
            <Align>
            <Title>Ler 1 capítulo de livro</Title>
            <Trash
            color={'#00000'}
            height="15px"
            width="15px"
            onClick={() => alert('Hi!')}
            />
            </Align>
            <ButtonsDays>
            {daysInitials.map((d, i) => (
                    <ButtonDay letter={d} index={i} key={i}/>
                ))}
            </ButtonsDays>
        </HabitCardContainer>
        </>
    )
}

const HabitCardContainer = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 91px;
    background: ${white};
    border-radius: 5px;
    padding: 15px;
`
const Align = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${inputText};
    margin-bottom: 8px;

`
const ButtonsDays = styled.div`
    display: flex;
`