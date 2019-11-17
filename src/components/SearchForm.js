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

background: coral;
display: flex;
justify-content: center;

`;

const Section = Styled.section`
display: flex;
justify-content: center;
`;