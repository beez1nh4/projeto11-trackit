import logo from "../../assets/images/Group 8.png"
import { useState } from "react"
import { ButtonStart } from "../../components/ButtonStart"
import { Input } from "../../components/Input"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { LinkToClick } from "../../components/LinkToClick"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })

    function fillForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }

    function navigateSignUp(){
        navigate("/cadastro")
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
        <ButtonStart>Entrar</ButtonStart>
        <LinkToClick onClick={navigateSignUp}>
            <p>Não tem uma conta? Cadastre-se!</p>
        </LinkToClick>
        </IntroPageContainer>
        </>
    )
}

