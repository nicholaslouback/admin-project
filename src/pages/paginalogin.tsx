import { use, useState } from "react";
import LoginInput from "../components/Login/LoginInput";

export default function PaginaLogin() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return (
        <div>
            <LoginInput label={"Email"} tipo="email" valor={email} valorMudou={setEmail} obrigatorio />
        
            <LoginInput label={"Senha"} tipo="password" valor={senha} valorMudou={setSenha} obrigatorio />
        </div>
    )
}