import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import styled from "styled-components"
import Menu from "../../components/Menu"
import NavBar from "../../components/NavBar"
import { baseFont } from "../../constants/fonts"
import { backgroundColor, navBarColor } from "../../constants/colors"
import TodayCard from "../../components/TodayCard"

export default function TodayPage() {
    let thisDate = dayjs().locale('pt-br').format('dddd, DD/MM')
    let formatDate = thisDate[0].toUpperCase() + thisDate.substring(1)
    return(
        <>
            <NavBar/>
            <TodayPageContainer>
            <Title>{formatDate}</Title>
            <Subtitle>Nenhum hábito concluído ainda</Subtitle>
            <TodayCard></TodayCard>
            </TodayPageContainer>
            <Menu/>
        </>
    )
}

const TodayPageContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 1080px;
    background: ${backgroundColor};
    margin-top: 70px;
    margin-bottom: 70px;
    background: ${backgroundColor};
`
const Title = styled.p`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${navBarColor};
`
const Subtitle = styled.p`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin-bottom: 28px;
`