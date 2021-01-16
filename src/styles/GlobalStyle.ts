import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  input,
  button,
  a {
    margin: 0;
    padding: 0;
    border: none;

    font-family: "Inter", "Noto Sans KR", sans-serif;
  }

  *:focus {
    outline: none;
  }
`;

export default GlobalStyle;
