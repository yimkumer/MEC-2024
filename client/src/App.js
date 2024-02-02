import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
