import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    margin-top: 50px;

    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: start;

        .img-logo {
            margin-right: 40px;
            margin-bottom: 15px;
        }
    }

    .nav-links {
        display: inline-flex;

        .link-title {
            cursor: pointer;
            margin: 0 15px 15px 15px;
            color: var(--white);
        }

        .seta {
            margin-left: 10px;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    
    .buttons-header {
        
        .btn-login {
            color: var(--white);
            margin-bottom: 15px;
        }
    
        .btn-singup {
            color: var(--light-red);
            background-color: var(--white);
            border: 1px solid var(--white);
            border-radius: 40px;
            font-family: "Ubuntu", sans-serif;
            font-weight: 600;
            padding: 10px 20px;
            margin-left: 20px;
            margin-bottom: 15px;
    
            &:hover {
                background-color: var(--very-light-red);
                color: var(--white);
                border: 1px solid var(--very-light-red);
            }
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .line-black {
        margin: 20px 20px 30px 20px;
        border-top: 1px solid var(--grayish-blue);
    }

    .buttons-header-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .btn-login {
            color: var(--black);
        }
    
        .btn-singup {
            color: var(--white);
            background-color: var(--light-red);
            border: 1px solid var(--light-red);
            border-radius: 40px;
            font-family: "Ubuntu", sans-serif;
            font-weight: 600;
            padding: 10px 20px;
            margin: 25px 0;
    
            &:hover {
                background-color: var(--white);
                color: var(--very-light-red);
                border: 1px solid var(--white);
            }
        }

        @media screen and (min-width: 768px) {
            display: none;
        }
    }

    .menu-hamburger {
        @media screen and (min-width: 768px) {
            display: none;
        }
    }

    .nav-menu-mobile {
        position: absolute;
        background-color: var(--white);
        width: 90%;
        height: 85vh;
        top: 50px;
        border-radius: 5px;
        transition: margin-left .4s ease;
        overflow: hidden;
        margin-left: -200%;

        .nav-links-mobile {
            text-align: center;
        }

        .link-title {
            color: var(--black);
            margin: 25px 0px 20px 0px;
        }

        .seta {
            margin-left: 10px;
        }

        @media screen and (min-width: 768px) {
            display: none;
        }
    }

    .nav-menu-mobile.visible {
        margin-left: 0;
    }


`