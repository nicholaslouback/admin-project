import MenuElement from "./MenuElement";
import { IconHome, IconAdjust, IconDo } from "./icons";

export default function Menu() {
    return (
        <aside>
            <ul>
                <MenuElement url="/index" texto="Início" icone={IconHome} />
                <MenuElement url="/ajustes" texto="Ajustes" icone={IconAdjust} />
                <MenuElement url="/tarefas" texto="Tarefas" icone={IconDo} />
            </ul>
        </aside>
    )
}