/* eslint-disable react/prop-types */
const Progress = ({ numQuestions, index, points, maxPossiblePoint,answer }) => {
  console.log("Points is ", points);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(!answer!==null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoint}
      </p>
    </header>
  );
};

export default Progress;
