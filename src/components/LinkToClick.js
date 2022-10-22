import styled from "styled-components";
import { buttonLoginColor } from "../constants/colors";
import { baseFont } from "../constants/fonts";

export const LinkToClick = styled.div`
    width: 232px;
    height: 17px;
    & p {
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: ${buttonLoginColor};

    }
`