import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import styled from "styled-components"
import Menu from "../../components/Menu"
import NavBar from "../../components/NavBar"
import { baseFont } from "../../constants/fonts"
import { backgroundColor, navBarColor , percentageColor, doneColor} from "../../constants/colors"
import TodayCard from "../../components/TodayCard"
import { useAuth } from "../../providers/auth"
import { useEffect } from "react"
import axios from "axios"

export default function TodayPage() {
    let thisDate = dayjs().locale('pt-br').format('dddd, DD/MM')
    let formatDate = thisDate[0].toUpperCase() + thisDate.substring(1)
    const {token, dayHabits, setDayHabits, doneHabits, setDoneHabits} = useAuth()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, { headers: { Authorization: `Bearer ${token}` } })
    
        promise.then((res) => {
          console.log("res",res.data)
          setDayHabits(res.data)
          for (let i = 0; i< res.data.length; i++){
            if (res.data[i].done === true && !doneHabits.includes(res.data[i].id)){
                setDoneHabits([...doneHabits, res.data[i].id])
            }
          }
        })
        
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])
    console.log("done",doneHabits.length)
    console.log("day",dayHabits.length)
    return(
        <>
            <NavBar/>
            <TodayPageContainer>
            <Title>{formatDate}</Title>
            {doneHabits.length/dayHabits.length*100 === 0 || doneHabits.length/dayHabits.length*100 === NaN ?
            <Subtitle>Nenhum hábito concluído ainda</Subtitle> :
            <SubtitleDone>{doneHabits.length/dayHabits.length*100}% dos hábitos concluídos</SubtitleDone>
            }     
            <TodayCards>
            {dayHabits.map((dayHabit, i) => (
                    <TodayCard habit={dayHabit} id={dayHabit.id} index={i} key={i}/>
                ))}
            </TodayCards>
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
    margin-top: 50px;
`
const Subtitle = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${percentageColor};
    margin-bottom: 28px;
    margin-left: 15px;
    margin-right: 22px;
`
const TodayCards = styled.div`
    margin-left: 15px;
    margin-right: 22px;
`
const SubtitleDone = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${doneColor};
    margin-bottom: 28px;
    margin-left: 15px;
    margin-right: 22px;
`