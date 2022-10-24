import NavBar from "../../components/NavBar"
import styled from "styled-components"
import Menu from "../../components/Menu"
import HabitCardOpen from "../../components/HabitCardOpen"
import { baseFont } from "../../constants/fonts"
import { useAuth } from "../../providers/auth"
import { backgroundColor, white, navBarColor , basicColor, inputText} from "../../constants/colors"
import axios from "axios"
import { useEffect } from "react"
import HabitCard from "../../components/HabitCard"

export default function HabitsPage() {
    const {openCard, setOpenCard, token} = useAuth()

    function openHabitCard(){
        setOpenCard(true)
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, { headers: { Authorization: `Bearer ${token}` } })
    
        promise.then((res) => {
          //setSeats(res.data.seats)
          //setDays(res.data.days)
          console.log("res",res.data)
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

    return (
        <>
            <NavBar/>
            <PageContainer>
            <TitleItem>
            <p>Meus hábitos</p>
            <button onClick={openHabitCard}>+</button>
            </TitleItem>
            <HabitCard></HabitCard>
            {openCard && <HabitCardOpen/>}
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </PageContainer>
            <Menu/>
        </>
    )
}

const PageContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 1080px;
    background: ${backgroundColor};
    margin-top: 70px;
    margin-bottom: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & p{
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${inputText};
        margin-left: 17px;
        
    }
`

const TitleItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 28px;
    margin-bottom: 28px;
    & p {
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: ${navBarColor};
        margin-left: 17px;
    } & button{
        width: 40px;
        height: 35px;
        left: 317px;
        background: ${basicColor};
        border-radius: 4.63636px;
        margin-right: 18px;

        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: ${white};
        border: none;
    }
`