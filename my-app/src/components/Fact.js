import React from "react";
import "./Fact.css";
import PropTypes from "prop-types";

function Fact(props) {
  return (
    <div className="fact">
      <span>{props.text}</span>
    </div>
  );
}

Fact.propTypes = {
  text: PropTypes.string.isRequired
};

export default Fact;