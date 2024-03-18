import styled from "styled-components"
import Logo from "../../../public/images/logo.svg"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Nav>

                    <ImageLogo src={Logo} alt="Logo Blogr" />
                    <div>
                        <Span>Product</Span>
                        <NavList>
                            <NavLink><Link href="/">Overview</Link></NavLink>
                            <NavLink><Link href="/">Pricing</Link></NavLink>
                            <NavLink><Link href="/">Marketplace</Link></NavLink>
                            <NavLink><Link href="/">Features</Link></NavLink>
                            <NavLink><Link href="/">Integrations</Link></NavLink>
                        </NavList>
                    </div>
                    <div>
                        <Span>Company</Span>
                        <NavList>
                            <NavLink><Link href="/">About</Link></NavLink>
                            <NavLink><Link href="/">Team</Link></NavLink>
                            <NavLink><Link href="/">Blog</Link></NavLink>
                            <NavLink><Link href="/">Careers</Link></NavLink>
                        </NavList>
                    </div>
                    <div>
                        <Span>Connect</Span>
                        <NavList>
                            <NavLink><Link href="/">Contact</Link></NavLink>
                            <NavLink><Link href="/">Newsletter</Link></NavLink>
                            <NavLink><Link href="/">Linkedin</Link></NavLink>
                        </NavList>
                    </div>
                </Nav>
            </FooterContainer>
        </>
    )
}

export { Footer }

const FooterContainer = styled.footer`
    color: white;
    background-color: var(--very-dark-black-blue);
    border-top-right-radius: 100px;
    margin-top: 100px;
    text-align: center;
`

const ImageLogo = styled.img`
    margin-bottom: 50px;
`

const Nav = styled.nav`
    height: 100%;
    padding: 50px 20px;

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: start;
        justify-content: space-around;
    }
`

const Span = styled.span`
    font-size: 18px;
`

const NavList = styled.ul`
    margin: 30px 0px;
`

const NavLink = styled.li`
    padding: 3px;
`

const Link = styled.a`
    color: var(--grayish-blue);
    font-size: 15px;
    
    &:hover {
        text-decoration: 2px underline;
    }
`