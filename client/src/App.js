import "./App.css";
import HomeMain from "./pages/HomeMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appoiment from "./pages/Appoiment";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dasboard";
import Detail from "./pages/patient/Detail";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomeMain />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book" element={<Appoiment />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/dashboard/detail' element={<Detail />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
