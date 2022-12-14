import NavBar from "../../components/NavBar"
import styled from "styled-components"
import Menu from "../../components/Menu"
import HabitCardOpen from "../../components/HabitCardOpen"
import { baseFont } from "../../constants/fonts"
import { useAuth } from "../../providers/auth"
import { backgroundColor, white, navBarColor , basicColor, inputText} from "../../constants/colors"
import axios from "axios"
import { useEffect, useState } from "react"
import HabitCard from "../../components/HabitCard"
import { ThreeDots } from "react-loader-spinner"

export default function HabitsPage() {
    const {openCard, setOpenCard, token, habits, setHabits} = useAuth()
    const [load, setLoad] = useState(true)
    function openHabitCard(){
        setOpenCard(true)
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, { headers: { Authorization: `Bearer ${token}` } })
    
        promise.then((res) => {
          //console.log("res2",res.data[1].days)
          setHabits(res.data)
          setLoad(false)
        })
    
        promise.catch((err) => {
            alert(err.response.data)
        })
      },[habits])
    
      if (load) {
        return(
        <AlignDots>
        <ThreeDots 
        height="100"    
        width="100" 
        radius="9"
        color={basicColor} 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
        </AlignDots>
    )}

    return (
        <>
            <NavBar/>
            <PageContainer>
            <TitleItem>
            <p>Meus hábitos</p>
            <button onClick={openHabitCard} data-identifier="create-habit-btn">+</button>
            </TitleItem>
            <Align>
            {habits.length===0 ? <p data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :habits.map((habit, i) => (
                    <HabitCard habit={habit} index={i} key={i}/>
                ))}
            {openCard && <HabitCardOpen/>}
            </Align>
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
const Align = styled.div`
    margin-left: 15px;
    margin-right: 22px;
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
const AlignDots = styled.div`
    width: 100%;
    height: 1080px;
    display: flex;
    justify-content: center;
    padding-top: 200px;
    background-color: ${backgroundColor};
`