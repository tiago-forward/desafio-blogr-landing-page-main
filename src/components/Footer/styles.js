import styled from "styled-components"

export const FooterContainer = styled.footer`
    color: white;
    background-color: var(--very-dark-black-blue);
    border-top-right-radius: 100px;
    margin-top: 100px;
    text-align: center;

    nav {
        height: 100%;
        padding: 50px 20px;

        span {
            font-size: 18px;
        }
        
        .nav-itens {
            margin: 30px 0px;
            
            .nav-item {
                padding: 3px;

                a {
                    color: var(--grayish-blue);
                    font-size: 15px;
    
                    &:hover {
                        text-decoration: 2px underline;
                    }
                }
            }
        }
        
        .logo {
            margin-bottom: 50px;
        }

        @media screen and (min-width: 1024px) {
            display: flex;
            align-items: start;
            justify-content: space-around;
        }

    }
`