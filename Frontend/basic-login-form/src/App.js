import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
