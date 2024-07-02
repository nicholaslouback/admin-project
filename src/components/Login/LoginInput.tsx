interface LoginInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor:any) => void
}


export default function LoginInput(props: LoginInputProps) {
    return props.naoRenderizarQuando ? null : (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input className={`bg-blue-200`} 
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                    px-4 py-1 mt-1 rounded-lg 
                    border focus:border-blue-500
                    focus:outline-none
                `}
            />
            
        </div>
    )
}
