import React from "react";
import Styled from "styled-components";

export default function SearchForm(props) {
 
  return (
    <Section className="search-form">

    <Input onChange={props.changeHandler}
  
 
    type="text" name="text"></Input>


    </Section>
  );
}

const Input = Styled.input`

background: white;
display: flex;
justify-content: center;
border: 2px #4776E6 solid;

`;

const Section = Styled.section`
display: flex;
justify-content: center;
`;