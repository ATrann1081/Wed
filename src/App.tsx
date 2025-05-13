import { Routes, Route } from "react-router-dom";
import react from "react";
import Header from "./header.tsx";
import Signup from "./Signup.tsx";
import Login from "./Login.tsx";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
