import React, { useEffect } from "react";
import "./App.css";
import HomeMain from "./pages/HomeMain";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import Report from "./pages/patient/reports";
import ViewReports from "./pages/lab/ViewReports";
import Cookies from "js-cookie";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomeMain />} />
                <Route path="/blogs" element={<Blogs />} />

                <Route path="/login" element={<IsLogIn><Login /></IsLogIn>} />
                <Route path="/register" element={<IsLogIn><Register /></IsLogIn>} />

                <Route path="/book" element={<IsLoggedIn><IsPatient><Appoiment /></IsPatient></IsLoggedIn>} />

                <Route path="/otp" element={<Otp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/dashboard/detail' element={<IsPatient><Detail /></IsPatient>} />

                <Route path='/dashboard/manageDoc' element={<IsAdmin><ManageDoctor /> </IsAdmin>} />
                <Route path='/dashboard/manageLab' element={<IsAdmin><ManageLab /></IsAdmin>} />

                <Route path='/dashboard/viewAppointment' element={<ViewAppointment />} />

                <Route path="*" element={<h1>404 Not Found</h1>} />

                <Route path="/dashboard/diagnosis" element={<IsDoctor>< Diagnosis /></IsDoctor>} />
                <Route path="/dashboard/report" element={<IsDoctor>< ViewReport /></IsDoctor>} />

                <Route path="/dashboard/report/patient" element={<IsPatient>< Report /></IsPatient>} />

                <Route path="/dashboard/report/lab" element={<IsLab>< ViewReports /></IsLab>} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;

export function IsAdmin(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const role = Cookies.get("role");
    if (role === "admin") {
        return props.children;
    } else {
        return (
            <div className="text-center text-3xl mt-[20%] text-red-800">
                <h1>Not Authorized!</h1>
                <h1>Please go back!</h1>
            </div>
        );
    }
}

export function IsDoctor(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const role = Cookies.get("role");
    if (role === "doctor") {
        return props.children;
    } else {
        return (
            <div className="text-center text-3xl mt-[20%] text-red-800">
                <h1>Not Authorized!</h1>
                <h1>Please go back!</h1>
            </div>
        );
    }
}

export function IsPatient(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const role = Cookies.get("role");
    if (role === "patient") {
        return props.children;
    } else {
        return (
            <div className="text-center text-3xl mt-[20%] text-red-800">
                <h1>Not Authorized!</h1>
                <h1>Please go back!</h1>
            </div>
        );
    }
}

export function IsLab(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const role = Cookies.get("role");
    if (role === "lab") {
        return props.children;
    } else {
        return (
            <div className="text-center text-3xl mt-[20%] text-red-800">
                <h1>Not Authorized!</h1>
                <h1>Please go back!</h1>
            </div>
        );
    }
}

export function IsLoggedIn({ children }) {
    const navigate = useNavigate();
    const token = Cookies.get("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [navigate, token]);

    if (token) {
        console.log("here");
        return children;
    }

    return null;
}
export function IsLogIn({ children }) {
    const navigate = useNavigate();
    const token = Cookies.get("token");

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [navigate, token]);

    if (!token) {
        console.log("here");
        return children;
    }

    return null;
}
