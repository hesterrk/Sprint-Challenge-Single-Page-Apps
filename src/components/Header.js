import React from "react";
import Styled, { keyframes } from "styled-components";

const animationName = keyframes`
  0% { color: #00dbde; }
  100% { color: #8E54E9; }
`

const H1 = Styled.h1 `
animation: ${animationName} 3s ease infinite alternate;
font-family: monospace;
font-size: 2.4rem;


`



export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
