import "./App.css";
import { Header } from "./components/customComponents/Header";
import { Footer } from "./components/customComponents/Footer";
import {Router} from './components/routes'
import { useNote } from "./contexts/note-context";

function App() {
  const { saveNote } = useNote();
  return (
    <div className="App" onClick={() => saveNote()}>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
