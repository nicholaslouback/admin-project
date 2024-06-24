import { IconDark, IconLight } from "./icons"

interface AlternarTemaProps {
    tema: string
    alternarTema : () => void
}

export default function AlternarTema(props: AlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex items-center
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600 w-6 h-6 rounded-full 
            `}>
                {IconLight}
            </div>
            <div className={`
                flex
            
            `}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div></div>
    ) 
}