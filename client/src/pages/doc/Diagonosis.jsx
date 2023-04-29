import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dasboard from '../Dasboard'
import Cookies from 'js-cookie'
import axios from 'axios'

const Diagonosis = () => {
    const [name, setName] = useState('')
    const role = Cookies.get('role')
    const [isCreateReport, setIsCreateReport] = useState(false)
    const [pid, setPid] = useState('')
    const [pname, setPname] = useState('')
    const [symptoms, setSymptoms] = useState('')
    const [test, setTest] = useState('')
    const [report, setReport] = useState([])
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
    }

    const data = { pid, pname, symptoms, test, date }

    const handleCreateTest = (e) => {
        e.preventDefault()
        console.log(data)
        // api milaunu xa
        axios.post('http://localhost:5000/api/report', { data })
            .then((res) => {
                alert('Report created')
                console.log(res)
                setIsCreateReport(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="dashboard-container" >
            <div>
                <Dasboard />
            </div>
            <div className="main-content mt-[-0.5%] ">
                <div className='' >
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className='text-4xl text-center text-[#328059]'>Diagnosis</h1>
                        {role === 'doctor' || `lab` ?
                            < div className='flex gap-4 '>
                                <form onSubmit={handleSubmit} className='border-none shadow-none p-1 '>
                                    <input type="text" name="" placeholder='search patient' id=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='h-145 self-center mt-4' />
                                </form>
                                <button className='bg-[#3b7a5b] hover:text-[#328059]  w-60 hover:bg-[#e4ece8]'
                                    onClick={() => {
                                        if (role === 'doctor') {
                                            setIsCreateReport(true)
                                        }
                                        else {
                                            alert('Search the patient first')
                                        }
                                    }}
                                >Create Report </button>
                                {console.log(isCreateReport)}

                            </div>
                            : null}
                    </div>

                </div>
                {isCreateReport && role === "doctor" && (
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
                                        <form
                                            className=" p-[4%]  w-full ml-[35px] flex-col shadow-none   "
                                            onSubmit={handleCreateTest}
                                        >

                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Date:</p>
                                                <input
                                                    placeholder="Patient ID"
                                                    type="date"
                                                    name="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    className="border justify-center border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Patient Id:</p>
                                                <input
                                                    placeholder="Patient ID"
                                                    type="text"
                                                    name="pid"
                                                    value={pid}
                                                    onChange={(e) => setPid(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Name:</p>
                                                <input
                                                    placeholder="Patient Name"
                                                    type="text"
                                                    name="pname"
                                                    value={pname}
                                                    onChange={(e) => setPname(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-row w-full justify-between gap-2 items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Symptoms: </p>
                                                <input
                                                    placeholder="Symptoms: seperate by comma"
                                                    type="text"
                                                    name="symptoms"
                                                    value={symptoms}
                                                    onChange={(e) => setSymptoms(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Test:</p>
                                                <input
                                                    placeholder="required test"
                                                    type="text"
                                                    name="test"
                                                    value={test}
                                                    onChange={(e) => setTest(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />
                                            </div>


                                            <div className="flex items-center justify-end gap-4 rounded-b ">

                                                <button
                                                    className=" p-[1rem] px-[1.7rem]   bg-red-500 border shadow-md pointer text-xl flex hover:bg-white hover:text-red-500 "
                                                    onClick={() => setIsCreateReport(false)}
                                                >
                                                    Close
                                                </button>

                                                <button
                                                    className=" p-[1rem] px-[1rem]  border bg-green-500  rounded-[.5rem] shadow-md pointer text-lg  hover:text-white "
                                                    type="submit"
                                                >
                                                    Add
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

                {isCreateReport && role === "lab" && (
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
                                        <form
                                            className=" p-[4%]  w-full ml-[35px] flex-col shadow-none   "
                                            onSubmit={handleCreateTest}
                                        >

                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Patient Id:</p>
                                                <p className='text-3xl'>{name}</p>
                                            </div>
                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Patient Name:</p>
                                                <p className='text-3xl'>{name}</p>
                                            </div>

                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[30%] '>Test:</p>
                                                <p className='text-3xl'>{name}</p>
                                            </div>

                                            <div className="flex flex-row w-full justify-between items-center my-4 rounded-md">
                                                <p className='text-3xl w-[55%] '>upload Report:</p>
                                                <input
                                                    placeholder="upload Report"

                                                    type="file"
                                                    name="report"
                                                    value={report}
                                                    onChange={(e) => setReport(e.target.value)}
                                                    className="border border-gray-500 rounded-[.3rem] w-full text-center shadow-md pointer text-xl flex  "
                                                    required
                                                />

                                            </div>


                                            <div className="flex items-center justify-end gap-4 rounded-b ">

                                                <button
                                                    className=" p-[1rem] px-[1.7rem]   bg-red-500 border shadow-md pointer text-xl flex hover:bg-white hover:text-red-500 "
                                                    onClick={() => setIsCreateReport(false)}
                                                >
                                                    Close
                                                </button>

                                                <button
                                                    className=" p-[1rem] px-[1rem]  border bg-green-500  rounded-[.5rem] shadow-md pointer text-lg  hover:text-white "
                                                    type="submit"
                                                >
                                                    Add
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


                <div className='text-4xl text-green-700 m-[400px] '>
                    Create patient report and assign test to patients.
                    <br />  <br />
                    &emsp; &emsp;
                    Click the  button above to create report.
                </div>
            </div>
        </div>
    )
}

export default Diagonosis