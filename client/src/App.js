import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Panel from "./components/Panel";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
