import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
    }
    
    body {
        background-color: #fff;
        -webkit-font-smoothing: antialiased !important;
    }

    @media screen and (max-width: 1100px) {
        html {
            font-size: 93.75%;
        }
    }

    @media screen and (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font: 500 1rem arial, sans-serif;    
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: arial, sans-serif;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;