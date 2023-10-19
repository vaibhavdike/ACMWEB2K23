import AppHero from "./components/AppHero";
import Join from "./pages/Join/Join";
import About from "./pages/about/About";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <AppHero />
      <About/>
      <Join/>
      
    </div>
  );
}

export default App;
