import "./App.css";
import { Header } from "./components/customComponents/Header";
import {Router} from './components/routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
