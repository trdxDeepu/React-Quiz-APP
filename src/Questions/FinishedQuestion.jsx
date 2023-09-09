/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const FinishedQuestion = ({ points, maxPossiblePoints, highScore,dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇🥇";
  if (percentage >= 80 && percentage <= 90) emoji = "🥳🥳";
  if (percentage >= 60 && percentage <= 70) emoji = "😃😃";
  if (percentage >= 50 && percentage <= 60) emoji = "😆😆";
  if (percentage >= 40 && percentage <= 50) emoji = "😉😉";
  if (percentage >= 30 && percentage <= 40) emoji = "😥😥";
  if (percentage >= 0 && percentage <= 10) emoji = "👟👟 Le ab tu jute kha";

  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedQuestion;
