import styled from "styled-components"

export const IllustrativeContainer = styled.div`
    background-color: var(--very-dark-desaturated-blue);
    border-radius: 0 100px 0 100px;
    text-align: center;
    padding-top: 200px;
    padding-bottom: 100px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;


    .circles-container {
        
        .image-circles {
            position: absolute;
            left: 0;
            width: 100%;
        }
    }

    .content-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        

        .image-phones {
            position: absolute;
            width: 300px;
            top: -360px;
            z-index: 1;
            
            @media screen and (min-width: 1024px) {
                position: static;
                width: 35%;
                padding-top: 10px;
                padding-right: 100px;
            }   
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 600px;
                
            h2 {
                color: var(--white);
                font-size: 28px;
                margin: 0px 30px 30px 30px;
            }

            p {
                color: var(--white);
                margin: 0px 30px;
                line-height: 30px;
            }
        }

        @media screen and (min-width: 1024px) {
            position: static;
            justify-content: center;
            height: 400px;
        }   

    }

    @media screen and (min-width: 1024px) {
        padding-top: 0px;
        padding-bottom: 0px;
        text-align: start;
    }   
`