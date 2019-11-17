import React from "react";

export default function CharacterCard(props) {
  return (
  <div>
  <div>{props.data.name}</div>
  <div><img src={props.data.image}/></div>
  <div>{props.data.status}</div>
</div>
  )
}


