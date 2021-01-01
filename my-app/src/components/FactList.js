import React from "react";

// import the Fact component
import Fact from "./Fact";


function FactList(props) {
  return (
    <div>
      {props.facts.map(c => <Fact key={c._id} text={c.text} />)}
     </div> 
  ); 
} 

export default FactList;