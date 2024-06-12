import MenuElement from "./MenuElement";
import Logo from "./Logo"
import { IconHome, IconAdjust, IconDo, IconExit } from "./icons";

export default function Menu() {
    return (
        <aside  className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-pink-500 to-purple-800
                h-20 w-20
            `}>
            <Logo />
            </div>
            <ul className="flex-grow">
                <MenuElement url="/inicio" texto="Início" icone={IconHome} />
                <MenuElement url="/ajustes" texto="Ajustes" icone={IconAdjust}/>
                <MenuElement url="/tarefas" texto="Tarefas" icone={IconDo} />
            </ul>
            <ul>
                <MenuElement texto="Sair" icone={IconExit}
                onClick={() => console.log('logout')} />
            </ul>
        </aside>
    )
}