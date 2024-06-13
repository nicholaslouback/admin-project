import React, {useState, useEffect} from "react"
import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Topico from "./Topico"
import useAppData from "../data/hook/useAppData"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <Menu />
            <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Topico>
                    {props.children}
                </Topico>
            </div>
        </div>
    )
}