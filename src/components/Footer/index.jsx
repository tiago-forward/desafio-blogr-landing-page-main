import Logo from "../../../public/images/logo.svg"
import { FooterContainer } from "./styles"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <nav>
                    <img className="logo" src={Logo} alt="Logo Blogr" />
                    <div>
                        <span>Product</span>
                        <ul className="nav-itens">
                            <li className="nav-item"><a href="/">Overview</a></li>
                            <li className="nav-item"><a href="/">Pricing</a></li>
                            <li className="nav-item"><a href="/">Marketplace</a></li>
                            <li className="nav-item"><a href="/">Features</a></li>
                            <li className="nav-item"><a href="/">Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>Company</span>
                        <ul className="nav-itens">
                            <li className="nav-item"><a href="/">About</a></li>
                            <li className="nav-item"><a href="/">Team</a></li>
                            <li className="nav-item"><a href="/">Blog</a></li>
                            <li className="nav-item"><a href="/">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>Connect</span>
                        <ul className="nav-itens">
                            <li className="nav-item"><a href="/">Contact</a></li>
                            <li className="nav-item"><a href="/">Newsletter</a></li>
                            <li className="nav-item"><a href="/">Linkedin</a></li>
                        </ul>
                    </div>
                </nav>
            </FooterContainer>
        </>
    )
}

export { Footer }