/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <p>{numQuestions} questions to test your React Mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          console.log("working");
          dispatch({ type: "start" });
        }}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
