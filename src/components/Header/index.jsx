import { useState } from "react"

import Logo from "../../../public/images/logo.svg"
import Arrow from "../../../public/images/icon-arrow-light.svg"

import styled from "styled-components"

import { DropDown } from "./DropDownItem/DropDownProduct"

const Header = () => {

    const [hoverProduct, setHoverProduct] = useState(false);
    const [hoverCompany, setHoverCompany] = useState(false);
    const [hoverConnect, setHoverConnect] = useState(false);

    return (
        <HeaderContainer>
            <Nav>
                <MenuContainer>
                    <img src={Logo} alt="Logo Blogr" />
                    <NavList>

                        <NavLink
                            onMouseEnter={() => setHoverProduct(true)}>
                            <Link href="/">
                                <span>Product</span>
                                <img src={Arrow} alt="Seta para baixo de navegação" />
                            </Link>
                        </NavLink>

                        <NavLink 
                            onMouseEnter={() => setHoverCompany(true)}>
                            <Link href="/">
                                <span>Company</span>
                                <img src={Arrow} alt="Seta para baixo de navegação" />
                            </Link>
                        </NavLink>

                        <NavLink 
                            onMouseEnter={() => setHoverConnect(true)}>
                            <Link href="/">
                                <span>Connect</span>
                                <img src={Arrow} alt="Seta para baixo de navegação" />
                            </Link>
                        </NavLink>

                    </NavList>

                    {hoverProduct && (
                        <DropDownProductList
                            onMouseLeave={() => setHoverProduct(false)}>
                            <DropDown text="Overview" link="/" />
                            <DropDown text="Pricing" link="/" />
                            <DropDown text="Marketplace" link="/" />
                            <DropDown text="Features" link="/" />                        <DropDown text="Integrations" link="/" />
                        </DropDownProductList>
                    )}

                    {hoverCompany && (
                        <DropDownCompanyList
                            onMouseLeave={() => setHoverCompany(false)}>
                            <DropDown text="About" link="/" />
                            <DropDown text="Team" link="/" />
                            <DropDown text="Blog" link="/" />
                            <DropDown text="Careers" link="/" />
                        </DropDownCompanyList>
                    )}

                    {hoverConnect && (
                        <DropDownConnectList
                            onMouseLeave={() => setHoverConnect(false)}>
                            <DropDown text="Contact" link="/" />
                            <DropDown text="Newsletter" link="/" />
                            <DropDown text="Linkedin" link="/" />
                        </DropDownConnectList>
                    )}
                    
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
    position: relative;
`

const NavList = styled.ul`

`




const DropDownProductList = styled.ul`
    display: block;
    position: absolute;
    top: 45px;
    left: 106px;
    background-color: var(--white);
    border-radius: 5px;
    padding: 25px 20px;
`

const DropDownCompanyList = styled.ul`
    display: block;
    position: absolute;
    top: 45px;
    left: 270px;
    background-color: var(--white);
    border-radius: 5px;
    padding: 25px 20px;
`

const DropDownConnectList = styled.ul`
    display: block;
    position: absolute;
    top: 45px;
    left: 395px;
    background-color: var(--white);
    border-radius: 5px;
    padding: 25px 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`




const NavLink = styled.li`
    display: inline-block;
    position: relative;
    margin-left: 40px;
    
    &:hover {
        text-decoration: 2px underline;
        color: var(--white);
    }
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


