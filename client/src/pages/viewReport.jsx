import React, { useState } from "react";
import Dasboard from "./Dasboard";
import Cookies from "js-cookie";
import { FiDownload, FiEdit } from "react-icons/fi";
import axios from "axios";

const viewReport = () => {
    const role = Cookies.get("role");
    const pid = Cookies.get("id");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search, setSearch] = useState("");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:5000/reports/view-report`, {
                params: { search: search },
            })
            .then((res) => {
                console.log(res.data);
                setReport(res.data);
                setIsReportEmpty(false);
            })
            .catch((err) => console.log(err));
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        const id = selectedData.id;
        const dataa = { id, diagnosis };
        axios.put(`http://localhost:5000/updated`, dataa)
            .then((res) => {
                console.log(res.data);
                setIsEditReport(false);
            })
            .catch((err) => console.log(err));
    };

    const handleEditReport = (data) => {
        setIsEditReport(true);
        setSelectedData(data);
    };


    return (
        <div className="dashboard-container">
            <div>
                <Dasboard />
            </div>

            <div className="main-content mt-[-0.5%] ">
                <div className="">
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className="text-4xl text-center text-[#328059]">View Report</h1>

                        {role === "doctor" ? (
                            <div className="flex gap-4 ">
                                <form
                                    onSubmit={handleSubmit}
                                    className="border-none shadow-none p-1 "
                                >
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="search patient"
                                        id=""
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="h-145 self-center mt-4"
                                    />
                                </form>
                            </div>
                        ) : (
                            <div className="p-[30px]"></div>
                        )}
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
                                            {role === "doctor" && (
                                                <td
                                                    className="border-2 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleEditReport(data)}
                                                >
                                                    <FiEdit className="ml-[40px]" color="blue" />
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Form section */}
                {isEditReport && selectedData && (
                    <>
                        <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                            <div className="relative w-[37%]  ">
                                {/*content*/}
                                <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-0   ">
                                    {/*header*/}
                                    <div className="flex justify-center p-5  rounded-t border">
                                        <h3 className="text-3xl font-semibold">Add patient Report</h3>
                                    </div>

                                    {/*body*/}
                                    <div className="relative p-6 flex-auto ml-20 justify-center bg-white ">

                                        <div className="flex flex-row w-full items-center my-4 rounded-md">
                                            <p className='text-3xl w-[30%] '>Date:</p>
                                            <p className="text-3xl">{selectedData.date}</p>
                                        </div>

                                        <div className="flex flex-row w-full items-center my-4 rounded-md">
                                            <p className='text-3xl w-[30%] '>Pid:</p>
                                            <p className="text-3xl">{selectedData.pid}</p>
                                        </div>

                                        <div className="flex flex-row w-full items-center my-4 rounded-md">
                                            <p className='text-3xl w-[30%] '>Name:</p>
                                            <p className="text-3xl">{selectedData.patient_name}</p>
                                        </div>

                                        <div className="flex flex-row w-full items-center my-4 rounded-md">
                                            <p className='text-3xl w-[30%] '>Symptoms:</p>
                                            <p className="text-3xl">{selectedData.symptoms}</p>
                                        </div>
                                        <div className="flex flex-row w-full items-center my-4 rounded-md">
                                            <p className='text-3xl w-[30%] '>Test:</p>
                                            <p className="text-3xl">{selectedData.test}</p>
                                        </div>

                                        <div className="flex flex-row w-full items-center my-4 rounded-md" onClick={handleDownloadReport}>
                                            <p className='text-3xl w-[30%] '>Report:</p>
                                            <p className="text-3xl">{selectedData.report}</p>
                                            <FiDownload
                                                className="cursor-pointer"
                                                size={21}
                                                color="blue"
                                            />
                                        </div>

                                        <form
                                            className="p-[4%] w-full ml-[35px] flex-col shadow-none"
                                            onSubmit={handleSubmitUpdate}
                                        >
                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className="text-3xl w-[30%]">Diagnosis:</p>
                                                <input
                                                    placeholder="required test"
                                                    type="text"
                                                    name="test"
                                                    value={diagnosis}
                                                    onChange={(e) => setDiagnosis(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex"
                                                    required
                                                />
                                            </div>

                                            <div className="flex items-center justify-end gap-4 rounded-b">
                                                <button
                                                    className="p-[1rem] px-[1.7rem] bg-red-500 border shadow-md pointer text-xl flex hover:bg-white hover:text-red-500"
                                                    onClick={() => setIsEditReport(false)}
                                                >
                                                    Close
                                                </button>

                                                <button
                                                    className="p-[1rem] px-[1rem] border bg-green-500 rounded-[.5rem] shadow-md pointer text-lg hover:text-white"
                                                    type="submit"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>

                )}
            </div>
        </div>
    );
};

export default viewReport;

