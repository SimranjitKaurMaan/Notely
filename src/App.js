import "./App.css";
import { Header } from "./components/customComponents/Header";
import { Footer } from "./components/customComponents/Footer";
import {Router} from './components/routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
