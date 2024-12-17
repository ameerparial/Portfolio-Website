import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Displayer from "./components/Displayer";
import ColorSettings from "./components/ColorSettings";

function App() {
  return (
    <div>
      <Navbar />
      <ColorSettings />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pathID" element={<Displayer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
