import { Routes, Route } from "react-router-dom";

import Login from "./auth/login/Login";
import SignUP from "./auth/signup/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;