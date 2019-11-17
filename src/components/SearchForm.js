import React, { useState } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
 const [searchForm, setSearchForm]= useState({
   id:"",
   name: "",
   status:"",
   species: "",
   type:"",
   gender:""
 });
 const handleFormChange=(event) => {
   setSearchForm({
     ...searchForm,
     [event.target.name]:event.target.value
   })
 };
 const handleSubmit = event => {
   event.preventDefault();
   event.persist();
   console.log(event);
 };
 return (
   <section className="search-form">
   < form onSubmit={handleSubmit}>
     <input
     type="text"
     name="name"
     id="name"
     placeholder="name"
     onChange={handleFormChange}
     value={searchForm.name}
     />
     <button type="Submit">Search</button>
   </form>
   </section>
 );
}


