import React, { useState, useMemo } from "react";
import Dasboard from "../Dasboard";
import Cookies from "js-cookie";
import { FiDownload, FiEdit } from "react-icons/fi";
import axios from "axios";
import Dropzone from "react-dropzone";

const ViewReport = () => {
    const role = Cookies.get("role");
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
    const [file, setFile] = useState(null);


    // Function to handle file selection
    const handleFileSelect = (files) => {
        setFile(files[0]);
    };

    const handleDownloadReport = (id, file_name) => {
        console.log(id)
        axios.get(`http://localhost:5000/download/${id}`, {
            responseType: "blob",
        })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", file_name);
                document.body.appendChild(link);
                link.click();
            })
            .catch((err) => console.log(err))
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

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("pid", selectedData.id);
        formData.append("file", file);

        try {
            const response = await axios.put(
                "http://localhost:5000/update",
                formData
            );

            if (response.status === 200) {
                console.log(response.data);
                alert("Report updated successfully");
                setIsEditReport(false);
            }

        } catch (error) {
            alert("Error occured while updating report");
            console.error(error);
        }
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

                        {role === "lab" ? (
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
                                    {role === "lab" && (
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
                                                {data.file_name ?
                                                    <div className="flex justify-around cursor-pointer" onClick={(e) => handleDownloadReport(data.id, data.file_name)}>
                                                        <p>{data.file_name}</p>
                                                        <div className="">
                                                            <FiDownload
                                                                className="cursor-pointer"
                                                                size={21}
                                                                color="blue"
                                                            />
                                                        </div>
                                                    </div> : null}
                                            </td>
                                            <td className="border-2 px-4 py-2">{data.diagnosis}</td>
                                            {role === "lab" && (
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

                                        <form
                                            className="p-[4%] w-full ml-[35px] flex-col shadow-none"
                                            onSubmit={handleSubmitUpdate}
                                        >
                                            <div>
                                                <label htmlFor="file">File:</label>
                                                <Dropzone onDrop={handleFileSelect}>
                                                    {({ getRootProps, getInputProps }) => (
                                                        <div {...getRootProps()} className="dropzone">
                                                            <input {...getInputProps()} />
                                                            <p className="text-2xl">Drag and drop a file here, or click to select file</p>
                                                            {file && <p className="text-2xl text-green-800">{file.name}</p>}
                                                        </div>
                                                    )}
                                                </Dropzone>
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

export default ViewReport;

