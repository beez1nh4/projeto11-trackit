import logo from "../../assets/images/Group 8.png"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { useState } from "react"
import { Input } from "../../components/Input"
import { ButtonStart } from "../../components/ButtonStart"
import { LinkToClick } from "../../components/LinkToClick"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function SignUpPage(){
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", name: "",  image: "", password: "" })

  function fillForm(e) {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  function navigateLogin(){
    navigate("/")
  }
  function signUp() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    console.log(form)
    const body = {...form}

    const promise = axios.post(URL, body)

    promise.then(() => {
      navigate("/")
    })

    promise.catch((err) => {
      alert(err.response.data.message)
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
            />
            <Input
            name="password"
            value={form.password}
            onChange={fillForm}
            type="password"
            placeholder="senha"
            />
            <Input
            name="name"
            value={form.name}
            onChange={fillForm}
            type="text"
            placeholder="nome"
            />
            <Input
            name="image"
            value={form.image}
            onChange={fillForm}
            type="text"
            placeholder="foto"
            />
            <ButtonStart onClick={signUp}>Cadastrar</ButtonStart>
            <LinkToClick onClick={navigateLogin}>
            <p>Já tem uma conta? Faça login!</p>
            </LinkToClick>
            </IntroPageContainer>
        </>
    )
}