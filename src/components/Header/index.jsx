//Bibliotecas
import { useState } from "react"
//Estilos
import { HeaderContainer } from "./styles"
//Components
import { NavLinks } from "./NavLinks"
//Imagens
import Logo from "../../../public/images/logo.svg"
import IconeMenu from "../../../public/images/icon-hamburger.svg"
import IconeClose from "../../../public/images/icon-close.svg"
import ArrowDark from "../../../public/images/icon-arrow-dark.svg"
import ArrowLight from "../../../public/images/icon-arrow-light.svg"


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <HeaderContainer>

            <nav className="nav-menu">
                <img src={Logo} alt="Logo" className="img-logo" />
                <ul className="nav-links">
                    <NavLinks Arrow={ArrowLight} />
                </ul>
            </nav>

            <img onClick={() => setMenuOpen(!menuOpen)} src={!menuOpen ? IconeMenu : IconeClose} alt="IconeMenu" className="menu-hamburger" />

            <div className="buttons-header">
                <button className="btn-login">Login</button>
                <button className="btn-singup">Sing Up</button>
            </div>

            <nav className={`nav-menu-mobile ${menuOpen ? 'visible' : ''}`}>
                <ul className="nav-links-mobile">
                    <NavLinks Arrow={ArrowDark} />
                </ul>
                <div className="line-black"></div>
                <div className="buttons-header-mobile">
                    <button className="btn-login">Login</button>
                    <button className="btn-singup">Sing Up</button>
                </div>
            </nav>

        </HeaderContainer>
    )
}

export { Header }