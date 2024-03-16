import styled from "styled-components"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <nav>
                    <ul>
                        <li>Product</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <li>Connect</li>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Linkedin</li>
                    </ul>
                </nav>
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