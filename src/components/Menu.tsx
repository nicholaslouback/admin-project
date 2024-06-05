import MenuElement from "./MenuElement";
import Logo from "./Logo"
import { IconHome, IconAdjust, IconDo } from "./icons";

export default function Menu() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-pink-500 to-purple-800
                h-20 w-20
            `}>
            <Logo />
            </div>
            <ul>
                <MenuElement url="/inicio" texto="Início" icone={IconHome} />
                <MenuElement url="/ajustes" texto="Ajustes" icone={IconAdjust} />
                <MenuElement url="/tarefas" texto="Tarefas" icone={IconDo} />
            </ul>
        </aside>
    )
}