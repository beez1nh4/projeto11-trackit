import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import styled from "styled-components"
import Menu from "../../components/Menu"
import NavBar from "../../components/NavBar"
import { baseFont } from "../../constants/fonts"
import { backgroundColor, navBarColor } from "../../constants/colors"
import TodayCard from "../../components/TodayCard"
import { useAuth } from "../../providers/auth"
import { useEffect } from "react"
import axios from "axios"

export default function TodayPage() {
    let thisDate = dayjs().locale('pt-br').format('dddd, DD/MM')
    let formatDate = thisDate[0].toUpperCase() + thisDate.substring(1)
    const {token, dayHabits, setDayHabits} = useAuth()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, { headers: { Authorization: `Bearer ${token}` } })
    
        promise.then((res) => {
          //setSeats(res.data.seats)
          //setDays(res.data.days)
          console.log("res",res.data)
          setDayHabits(res.data)
          //console.log("verificar",res.data.seats)
          /* setSession({
            title: res.data.movie.title, 
            posterURL: res.data.movie.posterURL,
            time: res.data.name, 
            weekday: res.data.day.weekday,
            date: res.data.day.date
        }) */
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])

    return(
        <>
            <NavBar/>
            <TodayPageContainer>
            <Title>{formatDate}</Title>
            <Subtitle>Nenhum hábito concluído ainda</Subtitle>
            {dayHabits.map((habit, i) => (
                    <TodayCard habit={habit} index={i} key={i}/>
                ))}
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