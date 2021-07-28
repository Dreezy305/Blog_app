import "./App.css";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="fw-bold">News Blog</h2>
      </div>
      <NewsCard />
    </div>
  );
}

export default App;
