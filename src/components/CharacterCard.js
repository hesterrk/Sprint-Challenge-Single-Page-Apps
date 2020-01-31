import React from "react";
import Styled from "styled-components";

const Syleddiv = Styled.div`

margin: 0 auto;
display: flex;
justify-content: center;
flex-direction: column;
max-width: 500px;
align-items: center;
border: 3px #8E54E9 solid;
background: lavender;



`;

export default function CharacterCard(props) {
  return (
  <Syleddiv>
  <div>{props.data.name}</div>
  <div><img src={props.data.image} alt= 'dead' /></div>
  <div>{props.data.status}</div>
</Syleddiv>
  )
}


