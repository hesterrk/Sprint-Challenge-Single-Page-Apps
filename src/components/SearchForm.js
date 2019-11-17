import React from "react";
import Styled from "styled-components";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">

    <Input onChange={props.changeHandler}
  
 
    type="text" name="text"></Input>


    </section>
  );
}

const Input = Styled.input`

background: coral;
display: flex;
justify-content: center;

`;