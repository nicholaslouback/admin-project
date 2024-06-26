import useAppData from "../data/hook/useAppData"
import AlternarTema from "./AlternarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppData ()   
    
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo } />
            <div className={`flex flex-grow justify-end`}>
                    <AlternarTema tema={tema} alternarTema={alternarTema}/>
            </div>
        </div>
    )
}