import styled from "styled-components"

export const IllustrativeContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .illustrative {
        background-image: url("../../../../public/images/bg-pattern-circles.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: -70px;
        background-position-x: 0px;
        position: absolute;
        z-index: 1;
    }

    .img {
        display: block;
        margin: 0 auto;
        position: relative;
        width: 340px;
        top: -150px;
        z-index: 1;
        
        @media screen and (min-width: 1024px) {
            width: 60%;
        }
    }

    .text-container {
        width: 100%;
        background-color: var(--very-dark-desaturated-blue);
        background-repeat: no-repeat;
        background-size: cover;
        border-top-right-radius: 100px;
        border-bottom-left-radius: 100px;
        padding-bottom: 100px;
        margin-top: 250px;
        z-index: 0;

        @media screen and (min-width: 1024px) {
            display: flex;
            justify-content: end;
        }
    }

    .container {
        @media screen and (min-width: 1024px) {
            width: 600px;
        }
    }

    .title-main {
        color: var(--white);
        text-align: center;
        font-size: 30px;
        padding: 210px 30px 40px 30px;

        @media screen and (min-width: 1024px) {
            text-align: start;
        }
    }

    p {
        color: var(--white);
        text-align: center;
        line-height: 30px;
        padding: 0px 30px;

        @media screen and (min-width: 1024px) {
            text-align: start;
        }
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: end;
        justify-content: start;
    }   
`