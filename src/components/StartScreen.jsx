/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const StartScreen = ({ numQuestions, dispatch,status }) => {
    console.log("the status for start scree",status)
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          console.log("working");
          dispatch({ type: "startQuestion" });
        }}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
