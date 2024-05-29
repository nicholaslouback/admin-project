import MenuElement from "./MenuElement";
import { IconAdjust, IconDo, IconHome } from "./icons";

export default function Menu() {
    return (
        <aside>
            <ul>
                <MenuElement url="/" texto="Início" icone={IconHome} />
                <MenuElement url="/" texto="Ajustes" icone={IconAdjust} />
                <MenuElement url="/" texto="Tarefas" icone={IconDo} />
            </ul>
        </aside>
    )
}