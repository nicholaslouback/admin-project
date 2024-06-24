import { IconDark, IconLight } from "./icons"

interface AlternarTemaProps {
    tema: string
    alternarTema : () => void
}

export default function AlternarTema(props: AlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`flex
        
        `}>
            <div className={`flex
            
            `}>
                {IconLight}
            </div>
            <div className={`flex
            
            `}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div></div>
    ) 
}