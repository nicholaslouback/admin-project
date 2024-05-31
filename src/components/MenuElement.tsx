import Link from 'next/link'

interface MenuElementProps {
    url: string
    texto: string
    icone: any
}

export default function MenuElement(props: MenuElementProps) {
    return (
        <li className={`hover:bg-gray-100`}>
            <Link href={props.url} passHref>
                <div className={
                    `flex flex-col justify-center items-center h-20 w-full
                `}>
                        {props.icone}
                    <span>
                        {props.texto}
                    </span>
                </div>
            </Link>
        </li>
    )
}