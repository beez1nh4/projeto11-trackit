import logo from "../../assets/images/Group 8.png"
import { useState } from "react"
import { ButtonStart } from "../../components/ButtonStart"
import { Input } from "../../components/Input"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { LinkToClick } from "../../components/LinkToClick"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })

    function fillForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
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
        <LinkToClick>
            <p>Não tem uma conta? Cadastre-se!</p>
        </LinkToClick>
        </IntroPageContainer>
        </>
    )
}

