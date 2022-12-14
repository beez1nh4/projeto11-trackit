import styled from "styled-components"
import { daysInitials } from "../constants/days"
import { white, inputText } from "../constants/colors"
import { baseFont } from "../constants/fonts"
import ButtonDayRender from "./ButtonDayRender"
import React from "react"
import { Trash } from "styled-icons/ionicons-outline"
import { useAuth } from "../providers/auth"
import axios from "axios"


export default function HabitCard({habit, index}) {
    const {token, doneHabits, setDoneHabits} = useAuth()
    
    function deleteHabit(habit, id){
        if (window.confirm("Quer mesmo deletar o hábito?")) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const body = habit
    
        const newIds = doneHabits.filter((idInArray) => idInArray !== id)
            setDoneHabits(newIds)
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.delete(URL, config)

        promise.then((res) => {
        //console.log("deletado")
        })

        promise.catch((err) => {
        alert(err.response.data.message)
        })
    }}
    return(
        <>
        <HabitCardContainer>
            <Align>
            <Title data-identifier="habit-name">{habit.name}</Title>
            <Trash
            data-identifier="delete-habit-btn"
            color={'#00000'}
            height="15px"
            width="15px"
            onClick={() => deleteHabit(habit, habit.id)}
            />
            </Align>
            <ButtonsDays>
            {daysInitials.map((d, i) => (
                    <ButtonDayRender specificDays={habit.days} letter={d} index={i} key={i}/>
                ))}
            </ButtonsDays>
        </HabitCardContainer>
        </>
    )
}

const HabitCardContainer = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 91px;
    background: ${white};
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
    flex-wrap: wrap;
`
const Align = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${inputText};
    margin-bottom: 8px;
    overflow: hidden;
    width: 285px;
    text-overflow: ellipsis;

`
const ButtonsDays = styled.div`
    display: flex;
`