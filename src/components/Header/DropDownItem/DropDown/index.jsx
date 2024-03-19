import styled from "styled-components"

const DropDown = ({ text, link }) => {
    return (
            <Li><a href={link}>{text}</a></Li>
    )
}

export { DropDown }

// const Ul = styled.ul`
//     position: absolute;
//     top: 45px;
//     left: 120px;
//     background-color: var(--white);
//     border-radius: 5px;
//     padding: 25px 20px;
// `

const Li = styled.ul`
    line-height: 30px;
    
    & a {
        color: var(--very-dark-gray-blue);
        font-weight: 400;
        padding-right: 20px;

        &:hover {
            font-weight: 600;
        }
    }
`