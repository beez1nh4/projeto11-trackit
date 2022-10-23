import styled from "styled-components";
import { white, unclickedColor, inputText, basicColor} from "../constants/colors";
import { baseFont } from "../constants/fonts";
import { daysInitials } from "../constants/days";
import { useState } from "react";
import axios from "axios";
import ButtonDay from "./ButtonDay";
import { useAuth } from "../providers/auth";

export default function HabitCardOpen() {
    const [form, setForm] = useState({ name: "" })
    const [load, setLoad] = useState(false)
    const {days} = useAuth()
    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }}

    function saveHabit() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body = {...form, days}
        const promise = axios.post(URL, body)
        setLoad(true)
        promise.then((res) => {
          console.log(res.data.id)
          setLoad(false)
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          setLoad(false)
        })
    
      }
    
    return(
        <>
            <CardContainer>
            <InputHabit 
            placeholder="nome do hábito"
            name="habit"
            value={form.habit}
            onChange={fillForm}
            type="text"
            disabled= {load && true}
            ></InputHabit>
            <ButtonsDays>
            {daysInitials.map((d, i) => (
                    <ButtonDay letter={d} index={i} key={i}/>
                ))}
            </ButtonsDays>
            <AlignButtons>
                <p>Cancelar</p>
                <button onClick={saveHabit}>Salvar</button>
            </AlignButtons>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    box-sizing: border-box;
    padding: 19px;
    width: 340px;
    height: 180px;
    background: ${white};
    border-radius: 5px;
`
const InputHabit = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${inputText};
    padding: 11px;
    border: 1px solid ${unclickedColor};
    border-radius: 5px;
    margin-bottom: 8px;

    ::placeholder{
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${unclickedColor};
    }
`
const ButtonsDays = styled.div`
    display: flex;
    margin-bottom: 29px;
`
const AlignButtons = styled.div`
    display: flex;
    margin-left: 129px;
    align-items: center;
    & p {
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: ${basicColor};
        margin-right: 23px;
    } & button{
        width: 84px;
        height: 35px;
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: ${white};
        border-radius: 4.64px;
        background-color: ${basicColor};
        border: 0;
    }

`