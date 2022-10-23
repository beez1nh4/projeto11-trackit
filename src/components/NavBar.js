import { logoFont } from "../constants/fonts"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../providers/auth"

export default function NavBar() {
    const navigate = useNavigate()
    const {image} = useAuth()
    function navigateHabitsPage(){
        navigate("/habitos")
    }
    
    return(
        <>
            <NavBarItem>
                <Logo onClick={navigateHabitsPage}>TrackIt</Logo>
                <User src={image} alt="user" />
            </NavBarItem>
        </>
    )
}

const NavBarItem = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    width: 97px;
    height: 49px;
    margin-left: 18px;
    font-family: ${logoFont};
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;

`
const User = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
`