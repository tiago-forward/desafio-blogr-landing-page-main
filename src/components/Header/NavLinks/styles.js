import styled from "styled-components"

export const SubLinksContainer = styled.ul`
    background-color: white;
    position: absolute;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.69);
    -moz-box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.69);
    box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.69);

li {
    margin: 20px;
    
    @media screen and (max-width: 768px) {
        margin: 15px;
    }
}

a {
    color: var(--black);
    margin-top: 20px;

    &:hover {
        font-weight: 600;
    }
}

@media screen and (max-width: 768px) {
    position: relative;
    background-color: var(--grayish-blue);
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 85%;
    -webkit-box-shadow: 0px 0px 0px 0px;
    -moz-box-shadow: 0px 0px 0px 0px;
    box-shadow: 0px 0px 0px 0px;
}
`