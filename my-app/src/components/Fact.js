import React from "react";
import "./Fact.css";
import PropTypes from "prop-types";

function Fact(props) {
  return (
    <div className="fact">
      <span>{props.text}</span>
      <div className="dates">
        <span>Created At: {props.createdAt}</span>
        <span>Updated At: {props.updatedAt}</span>
      </div>
      
    </div>

  
  );
}

Fact.propTypes = {
  text: PropTypes.string.isRequired
};

export default Fact;



//<div className="creation">
//<span >Created At: {props.createdAt}</span>
//</div>
