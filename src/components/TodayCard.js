import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { white, inputText } from "../constants/colors"
import React from 'react'
import { Checkmark } from "styled-icons/evaicons-solid"

export default function TodayCard() {
    return(
        <>
        <TodayCardComponent>
            <TextsContainer>
                <Title>Ler 1 capítulo de livro</Title>
                <Subtitle>Sequência atual: 3 dias</Subtitle>
                <Subtitle>Seu recorde: 5 dias</Subtitle>
            </TextsContainer>
            <CheckContainer>
            <Checkmark
            color={white}
            rotate
            height="300px"
            width="300px"
            onClick={() => alert('Hi!')}
            ></Checkmark>
           </CheckContainer>
        </TodayCardComponent>
        </>
    )
}

const TodayCardComponent = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 94px;
    background-color: ${white};
    border-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
`
const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: ${inputText};
    margin-bottom: 7px;
`
const Subtitle = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${inputText};
`
const CheckContainer = styled.div`
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 35px;
    font-size: 39px;
`
