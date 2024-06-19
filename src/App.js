import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";
import Contact from "./Components/contact";

function App() {
  return (
    <div style={{ backgroundColor: "darkslategrey" }}>
      <Header />
      <Home />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
