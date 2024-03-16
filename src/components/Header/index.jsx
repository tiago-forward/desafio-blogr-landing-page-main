import Logo from "../../../public/images/logo.svg"
import Arrow from "../../../public/images/icon-arrow-light.svg"

import styled from "styled-components"

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <MenuContainer>
                    <img src={Logo} alt="Logo Blogr" />
                    <NavMenu>
                        <NavLink>
                            <Link href="/">
                                Product
                                <img src={Arrow} alt="" />
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link href="/">
                                Company
                                <img src={Arrow} alt="" />
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link href="/">
                                Connect
                                <img src={Arrow} alt="" />
                            </Link>
                        </NavLink>
                    </NavMenu>
                </MenuContainer>
                <LoginContainer>
                    <NavLogin>
                        <ButtonLogin>Login</ButtonLogin>
                        <ButtonSingUp>Sign Up</ButtonSingUp>
                    </NavLogin>
                </LoginContainer>
            </Nav>
        </HeaderContainer>
    )
}

export { Header }

const HeaderContainer = styled.header`
    display: flex;
    position: absolute;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 50px;
    
`
const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`

const NavMenu = styled.ul`

`

const NavLink = styled.li`
    display: inline-block;
    margin-left: 40px;    
`

const Link = styled.a`
    img {
        margin-left: 10px;
    }
`

const LoginContainer = styled.div`

`

const NavLogin = styled.ul`

`

const ButtonLogin = styled.button`
    color: var(--white);
`

const ButtonSingUp = styled.button`
    background-color: var(--white);
    color: var(--light-red);
    border: 1px solid var(--white);
    border-radius: 40px;
    margin-left: 40px;
    padding: 10px 20px;

    &:hover {
        background-color: var(--very-light-red);
        color: var(--white);
        border: 1px solid var(--very-light-red);
    }
`