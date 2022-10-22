import styled from "styled-components";
import { borderColor, placeholderColor, white } from "../constants/colors";
import { baseFont } from "../constants/fonts";
export const Input = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: ${white};
    border: 1px solid ${borderColor};
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 11px;

    ::placeholder{
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${placeholderColor};
    }
`