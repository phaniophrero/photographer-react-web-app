import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }

    body{
        background: #1b1b1b;
        font-family: 'Montserrat', sans-serif;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        border: 2px solid #45ade9;
        border-radius: 0.4rem;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        padding: 0.5rem 1rem;
        font-family: 'Montserrat', sans-serif;
        &:hover {
            background-color: #45ade9;
            color: #fff;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3 {
        color: #fff;
    }
    h4 {
        font-weight: bold;
        font-size: 1.5rem;
    }
    a {
        font-size: 1.1rem;
    }
    span {
        font-weight: bold;
        color: #45ade9;
    }
    p {
        padding: 3rem 0rem;
        color : #ccc;
        font-size: 1.2rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
