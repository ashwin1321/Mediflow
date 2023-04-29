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
import ManageDoctor from "./pages/admin/manageDoctor";
import ManageLab from "./pages/admin/manageLab";
import ViewAppointment from "./pages/viewAppointment";
import Diagnosis from "./pages/doc/Diagonosis";
import ViewReport from "./pages/viewReport";


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
                <Route path='/dashboard/manageDoc' element={<ManageDoctor />} />
                <Route path='/dashboard/manageLab' element={<ManageLab />} />
                <Route path='/dashboard/viewAppointment' element={<ViewAppointment />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/dashboard/diagnosis" element={< Diagnosis />} />
                <Route path="/dashboard/report" element={< ViewReport />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
