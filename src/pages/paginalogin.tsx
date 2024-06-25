import { useState } from "react";
import LoginInput from "../components/Login/LoginInput";

export default function PaginaLogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return (
        <div>
            <LoginInput label={"Email"} valor={email} valorMudou={setEmail} />
        
            <LoginInput label={"Senha"} valor={senha} valorMudou={setSenha} />
        </div>
    )
}