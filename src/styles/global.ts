import { createGlobalStyle } from 'styled-components';
import fonts from 'google-fonts';

fonts.add({
    'Inter': ['400', '500', '600', '700']
})

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        background: ${(props) => props.theme.background.primary};
        color: ${(props) => props.theme.colors.white};
    }

    html, body {
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`