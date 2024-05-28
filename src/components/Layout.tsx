import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Topico from "./Topico"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <Menu />
            <div>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Topico>
                    {props.children}
                </Topico>
            </div>
        </div>
    )
}