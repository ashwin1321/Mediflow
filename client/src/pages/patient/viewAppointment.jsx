import React, { useState, useEffect } from 'react'
import Dasboard from '../Dasboard'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const viewAppointment = () => {

    const pid = Cookies.get('id')
    const role = Cookies.get('role')
    const email = Cookies.get('email')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [appointment, setAppointment] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAppointmentEmpty, setIsAppointmentEmpty] = useState(false)

    const deleteAppointment = (aid) => {
        axios.delete(`http://localhost:5000/appointments/action`,
            {
                params: {
                    id: aid
                }
            }
        )
            .then((res) => {
                alert(`Appointment Deleted Successfully`)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments/get-appointment`,
            {
                params: {
                    id: pid,
                    role: role
                }
            }
        )
            .then(res => {
                console.log(res.data.result)
                if (res.data.result === undefined) {

                    setIsAppointmentEmpty(true)
                    return
                }
                setAppointment(res.data.result)
                setIsAppointmentEmpty(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [pid, role])


    return (
        <div className="dashboard-container" >
            <div>
                <Dasboard />
            </div>

            <div className="main-content mt-[-0.5%] ">
                <div className='' >
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className='text-4xl text-center text-[#328059]'>View Appointments</h1>
                        <Link to="/book">
                            <button className='bg-[#3b7a5b] hover:text-[#328059]  hover:bg-[#e4ece8]'>Book Now </button>
                        </Link>
                    </div>

                </div>
                {isAppointmentEmpty ? <div className="text-center text-3xl mt-20">No Appointments</div> :
                    <div className="appointment-container mt-20 ml-[-6.2%] ">
                        <table className='table-auto text-3xl w-full'>
                            <thead>
                                <tr className='border-2 text-center bg-green-300'>
                                    <th className='border-2 px-4 py-2'>S.N</th>
                                    <th className='border-2 px-4 py-2'>Date</th>
                                    <th className='px-4 border-2 py-2'>Aid</th>
                                    <th className='px-4 border-2 py-2'>Time</th>
                                    <th className='px-4 border-2 py-2'>Doctor Id</th>
                                    <th className='px-4 border-2 py-2'>Remarks</th>
                                    < th className='px-4 border-2 py-2'>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {appointment.map((data, index) => {
                                    return (
                                        <tr key={index} className='text-center bg-blue-100'>
                                            <td className='border-2 px-4 py-2'>{index + 1}</td>
                                            <td className='border-2 px-4 py-2'>{data.date}</td>
                                            <td className='border-2 px-4 py-2'>{data.aid}</td>
                                            <td className='border-2 px-4 py-2'>{data.time}</td>
                                            <td className='border-2 px-4 py-2'>{data.did}</td>
                                            <td className='border-2 px-4 py-2'>{data.remarks}</td>
                                            <td className='border-2 px-4 py-2 text-red-700 cursor-pointer'
                                                onClick={() => deleteAppointment(data.aid)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                }

            </div>
        </div>

    )
}

export default viewAppointment