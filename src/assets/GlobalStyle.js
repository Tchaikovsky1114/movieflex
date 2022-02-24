import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  padding:0;
  margin:0;
  box-sizing:boder-box;
  font-family:"roboto","Arial",sans-serif;
  text-decoration:none;
  list-style:none;
}

`;

export default GlobalStyle;
