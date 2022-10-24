import styled from "styled-components"
import { baseFont } from "../constants/fonts"
import { white, inputText ,doneColor, undoneColor} from "../constants/colors"
import React from 'react'
import { Checkmark } from "styled-icons/evaicons-solid"
import { useAuth } from "../providers/auth"
import axios from "axios"

export default function TodayCard({habit, renderTodayPage}) {
    const {token, doneHabits, setDoneHabits} = useAuth()
    //console.log("done", doneHabits)
    function handleCheck(){
        if(!habit.done){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL, habit.id, config)

            promise.then(() => {
            //console.log("check")
            setDoneHabits(...doneHabits, habit.id)
            renderTodayPage()
            //console.log("dayhabit",habit)
            })

            promise.catch((err) => {
            alert(err.response.data.message)
            })
        } else{
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.post(URL, habit.id, config)

            promise.then(() => {
            
            const newIds = doneHabits.filter((idInArray) => idInArray !== habit.id)
            setDoneHabits(newIds)
            renderTodayPage()
            
            })

            promise.catch((err) => {
            alert(err.response.data.message)
            })
        }
    }

    return(
        <>
        <TodayCardComponent >
            <TextsContainer>
                <Title>{habit.name}</Title>
                <Subtitle condition={habit.done}><span>Sequência atual: </span>{habit.currentSequence} {habit.currentSequence===1 ? "dia" : "dias"}</Subtitle>
                <Subtitle condition={habit.currentSequence === habit.highestSequence && habit.highestSequence !== 0}><span>Seu recorde:</span> {habit.highestSequence} {habit.highestSequence===1 ? "dia" : "dias"}</Subtitle>
            </TextsContainer>
            <CheckContainer data-identifier="done-habit-btn" condition={habit.done} onClick={() => handleCheck()}>
            <Checkmark
            color={white}
            height="30px"
            width="30px"
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
    margin-bottom: 10px;
    justify-content: space-between;
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
    color: ${props => props.condition ? doneColor : inputText};
    & span{
        color: ${inputText};
    }
`
const CheckContainer = styled.div`
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: ${props => props.condition ? doneColor : undoneColor};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 39px;
`
