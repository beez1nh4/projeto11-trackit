import styled from "styled-components"
import { white, basicColor } from "../constants/colors"
import { baseFont } from "../constants/fonts"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useAuth } from "../providers/auth";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    const navigate = useNavigate()
    const {dayHabits, doneHabits} = useAuth()
    function navigateHabitsPage(){
        navigate("/habitos")
    }
    function navigateHistoryPage(){
        navigate("/historico")
    }
    function navigateTodayPage(){
        navigate("/hoje")
    }
    return(
        <>
            <MenuContainer>
            <ButtonPage onClick={navigateHabitsPage}>Hábitos</ButtonPage>
            <CircleContainer onClick={navigateTodayPage}>
            <CircularProgressbar
            value={50}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: basicColor,
            textColor: white,
            pathColor: white,
            trailColor: "transparent"
            })}
            />
            </CircleContainer>
            <ButtonPage onClick={navigateHistoryPage}>Histórico</ButtonPage>
            </MenuContainer>
        </>
    )
}

const MenuContainer = styled.div`
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background: ${white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px;
`
const CircleContainer = styled.div`
    position: relative;
    width: 91px;
    height: 91px;
    margin-bottom: 55px;
`
const CircleProgress = styled.div`
    position: absolute;
    width: 65px;
    height: 65px;
    z-index: 10000;
    top: 6px;
    right: 6px;
    border: 7px solid ${white};
    border-radius: 50%;
`

const CircleButton = styled.button`
    width: 91px;
    height: 91px;
    background: ${basicColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 50%;
    margin-bottom: 55.5px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #FFFFFF;
`

const ButtonPage = styled.button`
    width: 68px;
    height: 22px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: ${basicColor};
    border: 0;
    background-color: ${white};
`