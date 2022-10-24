import logo from "../../assets/images/Group 8.png"
import { useState } from "react"
import { ButtonStart } from "../../components/ButtonStart"
import { Input } from "../../components/Input"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { LinkToClick } from "../../components/LinkToClick"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../../providers/auth"
import { ThreeDots } from "react-loader-spinner"
import { white } from "../../constants/colors"

export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const {token, setToken, setImage} = useAuth()
    const [load, setLoad] = useState(false)
    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }}

    function navigateSignUp(){
        navigate("/cadastro")
    }

    function login() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    
        const promise = axios.post(URL, form)
        setLoad(true)
        promise.then((res) => {
          setToken(res.data.token)
          console.log(res.data.token)
          setLoad(false)
          setImage(res.data.image)
          navigate("/habitos")
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          setLoad(false)
        })
    
      }
    return(
        <>
        <IntroPageContainer>
        <img src={logo} alt="track-it" />
        <Input
        name="email"
        value={form.email}
        onChange={fillForm}
        type="text"
        placeholder="email"
        disabled= {load && true}
        load={load}
        />
        <Input
        name="password"
        value={form.password}
        onChange={fillForm}
        type="password"
        placeholder="senha"
        disabled= {load && true}
        load={load}
        />
        <ButtonStart load={load} onClick={login}>{load ?
        <ThreeDots 
        height="51" 
        width="51" 
        radius="9"
        color={white} 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />
        :
        "Entrar"
        }</ButtonStart>
        <LinkToClick onClick={navigateSignUp}>
            <p>Não tem uma conta? Cadastre-se!</p>
        </LinkToClick>
        </IntroPageContainer>
        </>
    )
}

