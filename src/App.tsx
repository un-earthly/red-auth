import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Error from "./Components/Error";
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <Navbar>
      <Helmet>
        <title>Home - Red Auth.</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Navbar>
  );
}

export default App;
