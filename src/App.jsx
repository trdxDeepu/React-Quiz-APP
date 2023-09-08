import Header from "./Header";
import MainItem from "./MainItem";

function App() {
  return (
    <div className="app">
      <Header />
      <MainItem>
        <p>1/15</p>
        <p>Question</p>
      </MainItem>
    </div>
  );
}

export default App;
