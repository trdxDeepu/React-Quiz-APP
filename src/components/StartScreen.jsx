
const StartScreen = ({numQuestions}) => {
  return (
    <div className="start">
        <h2>Welcome to React Quiz</h2>
        <p>{numQuestions} questions to test your React Mastery</p>
        <button className="btn btn-ui">Let's Start</button>    
    </div>
  )
}

export default StartScreen