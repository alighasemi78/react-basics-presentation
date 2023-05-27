import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventComponent from "./EventComponent";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <button>Hello</button> */}
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/event" element={<EventComponent />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      {/* <Greeting name="Amir" /> */}
      {/* <EventComponent /> */}
    </div>
  );
}

export default App;
