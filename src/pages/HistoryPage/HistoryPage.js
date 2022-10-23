import NavBar from "../../components/NavBar"
import Menu from "../../components/Menu"
import styled from "styled-components"
import { navBarColor, inputText, backgroundColor } from "../../constants/colors"
import { baseFont } from "../../constants/fonts"

export default function HistoryPage() {
    return (
        <>
        <NavBar/>
        <HistoryPageContainer>
            <Title>Histórico</Title>
            <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
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
    margin-top: 98px;
    margin-bottom: 70px;
    margin-left: 15px;
    margin-right: 22px;
`

const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${navBarColor};
`

const Subtitle = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${inputText};

`