import React from "react";


export default function CharacterCard(props) {
  
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img}/>
    </div>
    );
}
