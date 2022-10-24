import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import styled from "styled-components"
import { navBarColor, inputText, backgroundColor } from "../../constants/colors"
import { baseFont } from "../../constants/fonts"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function HistoryPage() {
    const [value, onChange] = useState(new Date());
    return (
        <>
        <NavBar/>
        <HistoryPageContainer>
            <Title>Histórico</Title>
            <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
            <CalendarContainer>
            <Calendar onChange={onChange} value={value} />
            </CalendarContainer>
        </HistoryPageContainer>
        <Menu/>
        </>
    )
}

const HistoryPageContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 1080px;
    background: ${backgroundColor};
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 70px;
`

const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${navBarColor};
    margin-left: 15px;
    margin-right: 22px;
    margin-top: 28px;
`

const Subtitle = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${inputText};
    margin-left: 15px;
    margin-right: 22px;

`
const CalendarContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    font-family: ${baseFont};
`