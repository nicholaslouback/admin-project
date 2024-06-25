interface LoginInputProps {
    label: string
    valor: any
    valorMudou: (novoValor:any) => void
}


export default function LoginInput(props: LoginInputProps) {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" value={props.valor} 
            onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}
