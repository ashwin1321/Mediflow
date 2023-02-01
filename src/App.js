import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
