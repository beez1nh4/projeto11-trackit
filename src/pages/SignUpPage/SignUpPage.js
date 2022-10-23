import logo from "../../assets/images/Group 8.png"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { useState } from "react"
import { Input } from "../../components/Input"
import { ButtonStart } from "../../components/ButtonStart"
import { LinkToClick } from "../../components/LinkToClick"
import { useNavigate } from "react-router-dom"
import axios from "axios" 
import { useAuth } from "../../providers/auth"
import { white } from "../../constants/colors"
import { ThreeDots } from "react-loader-spinner"

export default function SignUpPage(){
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", name: "",  image: "", password: "" })
  const {setImage} = useAuth()
  const [load, setLoad] = useState(false)

  function fillForm(e) {
    if (!load)
    {const {name, value} = e.target
    setForm({...form, [name]: value})
    setImage(form.image)
    console.log(form.image)}
  }

  function navigateLogin(){
    navigate("/")
  }
  function signUp() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    console.log(form)
    const body = {...form}
    setLoad(true)

    const promise = axios.post(URL, body)

    promise.then(() => {
      navigate("/")
      setLoad(false)
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
            />
            <Input
            name="password"
            value={form.password}
            onChange={fillForm}
            type="password"
            placeholder="senha"
            disabled= {load && true}
            />
            <Input
            name="name"
            value={form.name}
            onChange={fillForm}
            type="text"
            placeholder="nome"
            disabled= {load && true}
            />
            <Input
            name="image"
            value={form.image}
            onChange={fillForm}
            type="text"
            placeholder="foto"
            disabled= {load && true}
            />
            <ButtonStart onClick={signUp}>
            {load ?
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
            "Cadastrar"
            }
            </ButtonStart>
            <LinkToClick onClick={navigateLogin}>
            <p>Já tem uma conta? Faça login!</p>
            </LinkToClick>
            </IntroPageContainer>
        </>
    )
}