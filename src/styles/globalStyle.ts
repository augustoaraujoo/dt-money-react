import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background:#f0f2f5;
        --red:#E52E40;
        --blue:#5429CC;
        --blue-light:#6933FF;
        -text-title: #363F5F;
        --text-body:#969CB3;
        --background: #F0F2F5;
        --shape:#FFFFFF;
        --green:#33CC95;
    }
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        user-select:none;
    }

    html {
        
        @media (max-width:1080px){
            font-size:93.75%;
        }

        @media (min-width:720px){
            font-size:87.5%;
        }
    }


    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    button {
        cursor:pointer;
    }


    body,input,textarea,button {
        font-family:'Poppins', sans-serif;
        font-weight:400;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight:600;
    }

    [disabled] {
        opacity:0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position:fixed;


        top: 0;
        left: 0;
        right:0;
        bottom:0;

        display: flex;
        align-items:center;
        justify-content:center;
      

    }

    .react-modal-content {
        outline: 0;
        width: 100%;
        max-width: 575px;
        background: var(--background);
        padding:3rem;
        position:relative;
        border-radius: 0.24rem;
    }
    .react-modal-close {
        position:absolute;
        right: 1.5rem;
        top:1.5rem;
        border:0;
        background: transparent;
        transition:  filter 0.2s;
        outline: none;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`