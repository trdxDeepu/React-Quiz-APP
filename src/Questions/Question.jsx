/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Option } from "./Option";

const Question = ({ questions, dispatch, answer, status }) => {
  console.log("Question component rendered with status:", status);
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
