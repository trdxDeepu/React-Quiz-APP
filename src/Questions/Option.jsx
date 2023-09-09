/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Option = ({questions,dispatch,answer}) => {
  return (
    <div className="options">
      {questions.options.map((option,index) => (
        <button className="btn btn-option" key={option} 
            onClick={()=>dispatch({type:'newAnswer',payload:index})}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
