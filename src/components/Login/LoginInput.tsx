interface LoginInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor:any) => void
}


export default function LoginInput(props: LoginInputProps) {
    return (
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input className={`bg-blue-200`} 
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`px-4 py-1`}
            />
        </div>
    )
}
