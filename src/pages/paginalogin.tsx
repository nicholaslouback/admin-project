import { use, useState } from "react";
import LoginInput from "../components/Login/LoginInput";

export default function PaginaLogin() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    function submeter() {
        if (modo === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div>
            <h1 className={`
                  text-xl font-bold 
                `}>
                {modo === 'login' ? 'Insira a Sua Conta' : 'Faça o Cadastro na Plataforma'}
            </h1>
            <h2 className={`mb-3`}>Continuar para Plataforma</h2>

            <LoginInput 
                label={"Email"} 
                tipo="email" 
                valor={email} 
                valorMudou={setEmail} 
                obrigatorio />
        
            <LoginInput 
                label={"Senha"} 
                tipo="password" 
                valor={senha} 
                valorMudou={setSenha} 
                obrigatorio />
            
            <button onClick={submeter} className={
                `w-full bg-blue-600 hover:bg-blue-500 
                text-white rounded-lg px-4 py-3 mt-6 
                 `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            
        </div>
    )
}