import logo from "../../assets/images/Group 8.png"
import { IntroPageContainer } from "../../components/IntroPageContainer"
import { useState } from "react"
import { Input } from "../../components/Input"
import { ButtonStart } from "../../components/ButtonStart"
import { LinkToClick } from "../../components/LinkToClick"

export default function SignUpPage(){
    const [form, setForm] = useState({ name: "", email: "", image: "", password: "" })

  function fillForm(e) {
    const {name, value} = e.target
    setForm({...form, [name]: value})
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
            type="name"
            placeholder="nome"
            />
            <Input
            name="photo"
            value={form.photo}
            onChange={fillForm}
            type="photo"
            placeholder="foto"
            />
            <ButtonStart>Cadastrar</ButtonStart>
            <LinkToClick>
            <p>Já tem uma conta? Faça login!</p>
            </LinkToClick>
            </IntroPageContainer>
        </>
    )
}