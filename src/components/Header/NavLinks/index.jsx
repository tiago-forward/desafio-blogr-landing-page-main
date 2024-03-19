import styled from "styled-components"
import { useState } from "react";

const NavLinks = ({ Arrow }) => {

    const [isHovered, setIsHovered] = useState(null);

    const links = [
        { name: "Product", submenu: true, sublinks:[
            {name: "Overview", link: "/"},
            {name: "Pricing", link: "/"},
            {name: "Marketplace", link: "/"},
            {name: "Features", link: "/"},
            {name: "Integrations", link: "/"}
        ] },
        { name: "Company", submenu: true, sublinks:[
            {name: "About", link: "/"},
            {name: "Team", link: "/"},
            {name: "Blog", link: "/"},
            {name: "Careers", link: "/"}
        ] },
        { name: "Connect", submenu: true, sublinks:[
            {name: "Contact", link: "/"},
            {name: "Newsletter", link: "/"},
            {name: "Linkedin", link: "/"}
        ] }]

    return (
        <>
            {links.map((link, index) => (
                <div 
                    key={index} 
                    onMouseEnter={() => setIsHovered(index)} >

                    <li className="link-title">{link.name}
                        <img className="seta close" src={Arrow} alt="Seta" />
                    </li>
                    
                    {link.submenu && isHovered === index && (
                        <SubLinksContainer className="sublinks-container" onMouseLeave={() => setIsHovered(null)} >
                            {link.sublinks.map((sublink, index) => (
                                <li key={index}>
                                   <a href={sublink.link}>{sublink.name}</a> 
                                </li>
                            ))}
                        </SubLinksContainer>
                    )}

                </div>
            ))}
        </>
    )
}

export { NavLinks }

const SubLinksContainer = styled.ul`
    background-color: white;
    position: absolute;
    border-radius: 5px;
    margin-top: 20px;
    overflow: hidden;

    li {
        margin: 20px;
    }

    a {
        color: var(--black);
        margin-top: 20px;
    }
`