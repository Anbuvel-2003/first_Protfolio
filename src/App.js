import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Skills from "./Components/skills";

function App() {
  return (
    <div style={{ backgroundColor: "darkslategrey" }}>
      <Header />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
