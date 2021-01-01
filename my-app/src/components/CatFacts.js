import React from "react";

// import the Fact component
import Fact from "./Fact";


function CatFacts(props) {
  return (
    <div>
      {props.facts.map(c => <Fact key={c._id} text={c.text} createdAt={c.createdAt} updatedAt={c.updatedAt}/>)}
     </div> 
  ); 
} 

export default CatFacts;