interface MenuElementProps {
    url: string
    texto: string
    icone: any
}

export default function MenuElement(props: MenuElementProps) {
    return (
        <li>
            {props.icone}
        </li>
    )
}