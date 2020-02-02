import React from "react";
import Styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";


const Header = Styled.header`
display: flex;
justify-content: center;
flex-direction: column;
max-width: 500px;
margin: 0 auto;

`;

const Button = Styled.button`
background: #4776E6;
margin: 0 auto;
text-decoration: underline;
margin-top: 20px;
display: flex;
margin-bottom: 10px;
font-family: monospace;
color: white;

`;


const animationName = keyframes`
  0% { color: #00dbde; }
  100% { color: #8CA6DB; }
`

const H1 = Styled.h1 `
animation: ${animationName} 3s ease infinite alternate;
font-family: monospace;


`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <H1>Welcome to the Ultimate Fan Site!</H1>
         <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <NavLink to='/characters'><Button>Search For Your Favourite Character! </Button></NavLink>
      </Header>
    </section>
  );
}




