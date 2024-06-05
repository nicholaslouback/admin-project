interface TopicoProps {
    children?: any
}

export default function Topico(props: TopicoProps) {
    return (
        <div className={`
            flex flex-col mt-7
        `}>
            {props.children}
        </div>
    )
}