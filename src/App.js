import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <div style={{ backgroundColor: "darkslategrey" }}>
      <Header />
      <Home />
      {/* jfvjnvf */}
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
