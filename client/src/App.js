// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./pages/HomeMain";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";
import Appointment from "./components/Appointment";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Appointment" element={<Appointment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
