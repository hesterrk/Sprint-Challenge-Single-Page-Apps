import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
         <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to='/characters'><button>Characters</button></Link>
      </Header>
    </section>
  );
}

const Header = Styled.header`
display: flex;
justify-content: center;
flex-direction: column;
max-width: 500px;
margin: 0 auto;



`;