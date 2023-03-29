/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dasboard from '../Dasboard'

const manageDoctor = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doctors, setDoctors] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doctorName, setDoctor] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [did, setDid] = useState("")

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [role, setRole] = useState("doctor")

    const data = { role, doctorName, did }
    const i = 0

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAddDoctor, setIsAddDoctor] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [noDoctor, setNoDoctor] = useState(false)

    const handleDeleteDoctor = async (did) => {
        console.log(did)
        // await axios.delete(`http://localhost:5000/get/doc`, did)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    const handleAddDoctor = async () => {
        await axios.post(`http://localhost:5000/auth/register`, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const handleSearchDoctor = async (e) => {
        e.preventDefault()
        setDoctor(document.getElementById('searchDoctor').value)
    }



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getDoc = async () => {
            try {

                await axios.get('http://localhost:5000/get/doc', {
                    params: {
                        name: doctorName
                    }
                })
                    .then(res => {

                        if (res.data.error) {
                            setNoDoctor(true)
                            return
                        }
                        setNoDoctor(false)
                        setDoctors(res.data.result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getDoc()
    }, [doctorName])


    return (

        <div className="dashboard-container" >
            <div>
                <Dasboard />
            </div>

            <div className="main-content">
                {/* search and add doctor */}
                <div>
                    <div className="">
                        {/* Header */}
                        <div className="">
                            <div className='flex flex-row gap-3 justify-between items-center '>
                                <div className=''>

                                    <form className='border-none shadow-none flex flex-row gap-3 ' onSubmit={(e) => handleSearchDoctor(e)}>
                                        <input type="text" placeholder="Search Doctor" className="border-2 border-gray-300 bg-white rounded-lg text-xl focus:outline-none"
                                            id='searchDoctor'
                                        />

                                        <button type="submit" className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 mb-[5%] w-4   rounded-3 right-0"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-[-5px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>

                                        </button>
                                    </form>
                                </div>

                                <div className=''>
                                    <button className="bg-green-900 hover:bg-green-700 text-white py-3 mb-[11%] px-3 rounded-3 right-0"
                                        onClick={() => setIsAddDoctor(!isAddDoctor)}
                                    >Add Doctor</button>
                                </div>
                            </div>
                            {console.log(isAddDoctor)}
                        </div>
                    </div>
                </div>

                {/* add doctor modal */}

                {/*  show data in table */}
                <div>
                    {
                        noDoctor ? (
                            <h1 className="text-2xl text-center">No Doctor Found</h1>
                        ) : (
                            <div className="">
                                <table className="table-auto w-[90%] mt-20 text-xl">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2">S.N</th>
                                            <th className="px-4 py-2">Doctor Id</th>
                                            <th className="px-4 py-2">Name</th>
                                            <th className="px-4 py-2">Email</th>
                                            <th className="px-4 py-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            doctors.map((doctor) => (

                                                <tr key={doctor.did}>
                                                    <td className="border px-4">{i + 1}</td>
                                                    <td className="border px-4 ">{doctor.did}</td>
                                                    <td className="border px-4 ">{doctor.name}</td>
                                                    <td className="border px-4 py-2">{doctor.email}</td>
                                                    <td className="border px-4 py-2">
                                                        <button className="bg-red-700 hover:bg-red-700 text-white w-11 mb-2 font-bold py-2 px-4 rounded"
                                                            onClick={() => handleDeleteDoctor(doctor.did)}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-[-6px]">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>
            </div >
        </div >


    )
}

export default manageDoctor