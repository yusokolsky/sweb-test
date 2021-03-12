import './index.css';
import {svgBell} from "../../utils/svg`s";

function Header() {
    return (
        <div className="header">
            <div className="header-col">
                100.00 ₽
            </div>
            <div className="header-col">
                {svgBell()} vikavishny
            </div>
            <div className="header-col">
                Выйти
            </div>
        </div>
    );
}

export default Header;
