import styled from "styled-components";
import { white, unclickedColor, inputText, basicColor, loadInputColor} from "../constants/colors";
import { baseFont } from "../constants/fonts";
import { daysInitials } from "../constants/days";
import { useState } from "react";
import axios from "axios";
import ButtonDay from "./ButtonDay";
import { useAuth } from "../providers/auth";
import { ThreeDots } from "react-loader-spinner"

export default function HabitCardOpen() {
    const [form, setForm] = useState({ name: "" })
    const [load, setLoad] = useState(false)
    const {days, setDays, token, setOpenCard} = useAuth()
    
    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }}

    function saveHabit() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        console.log(form)
        const body = {...form, days}
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, body, config)
        setLoad(true)
        promise.then((res) => {
          console.log(res.data.id)
          setLoad(false)
          setOpenCard(false)
          setDays([])
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          setLoad(false)
        })
    
      }
      function cancelCard(){
        setOpenCard(false)
        setForm({...form})
    }
    return(
        <>
            <CardContainer>
            <InputHabit 
            placeholder="nome do hábito"
            name="name"
            value={form.name}
            onChange={fillForm}
            type="text"
            disabled= {load && true}
            load={load}
            data-identifier="input-habit-name"
            ></InputHabit>
            <ButtonsDays>
            {daysInitials.map((d, i) => (
                    <ButtonDay letter={d} index={i} key={i}/>
                ))}
            </ButtonsDays>
            <AlignButtons>
                <CancelTitle onClick={cancelCard} load={load} data-identifier="cancel-habit-create-btn">Cancelar</CancelTitle>
                <ButtonSave data-identifier="save-habit-create-btn" load={load} onClick={saveHabit}>
                    {load ?
                    <ThreeDots 
                    height="51" 
                    width="43" 
                    radius="9"
                    color={white} 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                     /> :
                    "Salvar"
                    }

                </ButtonSave>
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
    margin-bottom: 29px;
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
    background-color: ${(props) => props.load && unclickedColor };

    ::placeholder{
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${(props) => props.load ? loadInputColor : unclickedColor };
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
`
const ButtonSave = styled.button`
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
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => props.load ? "0.7" : "1"};
`
const CancelTitle = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: ${basicColor};
    margin-right: 23px;
    opacity: ${(props) => props.load ? "0.7" : "1"};
`