import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    font-family: 'Work Sans', sans-serif;
  }
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: #000000;
    height: 100%;
    min-height: 100vh;
  }
    
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      color: #232129;
      background: url(${background});
      background-position: top center;
      background-repeat: no-repeat;
      min-height: 100vh;
      overflow: hidden;
    }
  
  p {
    font-family: 'Raleway', sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
