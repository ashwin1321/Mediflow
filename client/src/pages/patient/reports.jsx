import React, { useEffect, useState } from "react";
import Dasboard from "../Dasboard";
import Cookies from "js-cookie";
import { FiDownload } from "react-icons/fi";
import axios from "axios";

const viewReport = () => {
    const role = Cookies.get("role");
    const pid = Cookies.get("id");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isReportEmpty, setIsReportEmpty] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [report, setReport] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEditReport, setIsEditReport] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedData, setSelectedData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [diagnosis, setDiagnosis] = useState("");


    const handleDownloadReport = (e) => {
        e.preventDefault();
        console.log(diagnosis);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios
            .get(`http://localhost:5000/reports/view-report`, {
                params: { search: pid },
            })
            .then((res) => {
                console.log(res.data);
                setReport(res.data);
                setIsReportEmpty(false);
            })
            .catch((err) => console.log(err));
    }, [pid]);

    return (
        <div className="dashboard-container">
            <div>
                <Dasboard />
            </div>

            <div className="main-content mt-[-0.5%] ">
                <div className="">
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className="text-4xl text-center text-[#328059] p-4">View Report</h1>
                    </div>
                </div>

                {isReportEmpty ? (
                    <div className="text-center p-[300px] ml-[-200px] text-3xl mt-20">
                        No reports to show
                    </div>
                ) : (
                    <div className="appointment-container mt-20 ml-[-6.2%] ">
                        <table className="table-auto text-3xl w-[80%] ml-[120px]">
                            <thead>
                                <tr className="border-2 text-center bg-[#f0f7f4]">
                                    <th className="border-2 px-4 py-2">Date</th>
                                    <th className="border-2 px-4 py-2">Name</th>
                                    <th className="px-4 border-2 py-2">Symptoms</th>
                                    <th className="px-4 border-2 py-2">Test</th>
                                    <th className="px-4 border-2 py-2">Report</th>
                                    <th className="px-4 border-2 py-2">Diagnosis</th>
                                    {role === "doctor" && (
                                        <th className="px-4 border-2 py-2">Action</th>
                                    )}
                                </tr>
                            </thead>

                            <tbody>
                                {report.map((data, index) => {
                                    return (
                                        <tr key={index} className="text-center">
                                            <td className="border-2 px-4 py-2">{data.date}</td>
                                            <td className="border-2 px-4 py-2">{data.patient_name}</td>
                                            <td className="border-2 px-4 py-2">{data.symptoms}</td>
                                            <td className="border-2 px-4 py-2">{data.test}</td>
                                            <td className="border-2 px-4 py-2">
                                                <div className="flex justify-around" onClick={handleDownloadReport}>
                                                    <p>{data.report}</p>
                                                    <div className="">
                                                        <FiDownload
                                                            className="cursor-pointer"
                                                            size={21}
                                                            color="blue"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-2 px-4 py-2">{data.diagnosis}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default viewReport;