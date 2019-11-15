import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    
    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #656d79;
     }
     code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",  monospace;
    }

    ul {
        padding: 0;
    }
    
`;

export default GlobalStyle;
