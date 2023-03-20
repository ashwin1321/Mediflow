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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAddDoctor, setIsAddDoctor] = useState(false)

    const handleDeleteDoctor = async () => {
        await axios.delete(`http://localhost:5000/get/doc`, did)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
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

    const handleSearchDoctor = async () => {
        console.log(doctorName)
        axios.get('http://localhost:5000/get/doc', {
            params: {
                name: doctorName
            }
        })
            .then(res => {

                // if (res.data.result.length === 0) {
                //     console.log("No data found")
                //     alert("No sucn doctor found")
                //     return
                // }

                if (res.data.error) {
                    console.log(res.data.error)
                    alert(res.data.error)
                    return
                }
                setDoctors(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        handleSearchDoctor()
    }, [])


    return (


        <div className="dashboard-container" >

            <div>
                <Dasboard />
            </div>

            <div className="main-content">
                {/* search and add doctor */}
                <div>
                    <div className=" shadow-sm">
                        {/* Header */}
                        <div className="   ">
                            <div className='flex flex-row gap-3 justify-between items-center '>
                                <div className=''>

                                    <form className='border-none shadow-none flex flex-row gap-3 ' onSubmit={handleSearchDoctor}>
                                        <input type="text" placeholder="Search Doctor" className="border-2 border-gray-300 bg-white rounded-lg text-xl focus:outline-none"
                                            onChange={(e) => setDoctor(e.target.value)}
                                        />

                                        <button type="submit" className="bg-green-900 hover:bg-green-700 text-white font-bold py-4 mb-[5%] w-4   rounded-3 right-0"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-[-5px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>

                                        </button>
                                    </form>
                                </div>

                                {console.log(doctors)}

                                <div className=''>
                                    <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-3 mb-[11%] px-4 rounded-3 right-0"
                                        onClick={() => setIsAddDoctor(!isAddDoctor)}
                                    >Add Doctor</button>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                {/* add doctor modal */}

                {/*  show data in table */}





            </div >
        </div >


    )
}

export default manageDoctor