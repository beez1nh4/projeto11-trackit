import track from "../assets/images/TrackIt.png"
import styled from "styled-components"
export default function NavBar() {
    
    return(
        <>
            <NavBarItem>
                <Logo>TrackIt</Logo>
                <User src="https://image.shutterstock.com/image-photo/pure-youth-crazy-english-cocker-260nw-1424153078.jpg" alt="user" />
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
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Playball&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    width: 97px;
    height: 49px;
    margin-left: 18px;
    font-family: 'Playball';
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