import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
