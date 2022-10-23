import styled from "styled-components";
import { basicColor, white } from "../constants/colors";
import { baseFont } from "../constants/fonts"

export const ButtonStart = styled.button`
    width: 303px;
    height: 45px;
    background: ${basicColor};
    border-radius: 4.63636px;
    border: none;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: ${white};
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`