import styled from "styled-components"

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        @media screen and (min-width: 1024px) {
            width: 600px;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        @media screen and (min-width: 1024px) {

        }
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;

        .img2 {
                transform: translate(160px, 0px);
            }
        
        .img1 {
            transform: translate(-170px, 0px);
        }

        .img-container1, .img-container2 {
            overflow: hidden;
        }

        .text-container1 {
            margin-right: 200px;
        }

        .text-container2 {
            margin-left: 200px;
        }
    }
`