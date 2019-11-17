import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">

    <input onChange={props.changeHandler}
  
 
    type="text" name="text"></input>


    </section>
  );
}
