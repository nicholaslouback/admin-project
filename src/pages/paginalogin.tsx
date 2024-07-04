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
        <div className="flex h-screen items-center justify-center">
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                      text-2xl font-bold
                    `}>
                    {modo === 'login' ? 'Insira a Sua Conta' : 'Entrar'}
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
                
                {modo === 'login' ? (
                    <p className="mt-8">
                        Ainda não faz parte?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer                       
                        `}> Criar uma Conta</a>
                    </p>
                ):(
                    <p className="mt-8">
                        Já faz parte da plataforma?                
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer                       
                        `}> Entre com seu Login</a>
                    </p>
                )}

            </div>
            <div className="hidden md:block w-1/2 lg:w-2/3">
                <img src="https://picsum.photos/200/300" alt="Imagem Tela de Login" 
                className="h-screen w-full object-cover"/>
            </div>
        </div>
    )
}