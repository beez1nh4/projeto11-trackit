import NavBar from "../../components/NavBar"
import styled from "styled-components"
import Menu from "../../components/Menu"
import HabitCardOpen from "../../components/HabitCardOpen"
import { baseFont } from "../../constants/fonts"

export default function HabitsPage() {
    
    return (
        <>
            <NavBar/>
            <PageContainer>
            <TitleItem>
            <p>Meus hábitos</p>
            <button>+</button>
            </TitleItem>
            <HabitCardOpen></HabitCardOpen>
            <HabitCardOpen></HabitCardOpen>
            <HabitCardOpen></HabitCardOpen>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            
            </PageContainer>
            <Menu/>
        </>
    )
}

const PageContainer = styled.div`
    background: #E5E5E5;
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
        color: #666666;
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
        color: #126BA5;
        margin-left: 17px;
    } & button{
        width: 40px;
        height: 35px;
        left: 317px;
        background: #52B6FF;
        border-radius: 4.63636px;
        margin-right: 18px;

        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }
`