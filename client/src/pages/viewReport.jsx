import React, { useState } from 'react'
import Dasboard from './Dasboard'
import Cookies from 'js-cookie'
import { FiDownload, FiEdit } from 'react-icons/fi'

const viewReport = () => {
    const role = Cookies.get('role')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search, setSearch] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isReportEmpty, setIsReportEmpty] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [report, setReport] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEditReport, setIsEditReport] = useState(false)


    const data = {
        date: '2021-09-09',
        patient_name: 'John Doe',
        symptoms: 'fever',
        report: 'report.pdf',
        diagnosis: 'fever',
        test: 1

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
        // search and get the patient
    }

    return (
        <div className="dashboard-container" >
            <div>
                <Dasboard />
            </div>

            <div className="main-content mt-[-0.5%] ">
                <div className='' >
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className='text-4xl text-center text-[#328059]'>View Report</h1>

                        {role === 'doctor' ?
                            < div className='flex gap-4 '>
                                <form onSubmit={handleSubmit} className='border-none shadow-none p-1 '>
                                    <input type="text" name="" placeholder='search patient' id=""
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className='h-145 self-center mt-4' />
                                </form>
                            </div>
                            :
                            <div className='p-[30px]'></div>
                        }
                    </div>
                </div>


                {isReportEmpty ? <div className="text-center p-[300px] ml-[-200px] text-3xl mt-20">No reports to show</div> :
                    <div className="appointment-container mt-20 ml-[-6.2%] ">
                        <table className='table-auto text-3xl w-[80%] ml-[120px]'>
                            <thead>
                                <tr className='border-2 text-center bg-[#f0f7f4]'>
                                    <th className='border-2 px-4 py-2'>Date</th>
                                    <th className='border-2 px-4 py-2'>Name</th>
                                    <th className='px-4 border-2 py-2'>Symptoms</th>
                                    <th className='px-4 border-2 py-2'>Test</th>
                                    <th className='px-4 border-2 py-2'>Report</th>
                                    <th className='px-4 border-2 py-2'>Doagnosis</th>
                                    {role === 'doctor' ?
                                        < th className='px-4 border-2 py-2'>Action</th>
                                        : null}

                                </tr>
                            </thead>
                            <tbody>


                                {report.map((data, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <td className='border-2 px-4 py-2'>{data.date}</td>
                                            <td className='border-2 px-4 py-2'>{data.patient_name}</td>
                                            <td className='border-2 px-4 py-2'>{data.symptoms}</td>
                                            <td className='border-2 px-4 py-2 '>
                                                <div className='flex justify-around '>
                                                    <p>{data.report}</p>
                                                    <div className=''>
                                                        <FiDownload className=' cursor-pointer' size={21} color='blue' />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='border-2 px-4 py-2'>{data.report}</td>
                                            <td className='border-2 px-4 py-2'>{data.diagnosis}</td>
                                            {role === 'doctor' ?
                                                <td className='border-2 px-4 py-2 cursor-pointer'
                                                    onClick={() => setIsEditReport(true)}
                                                >
                                                    <FiEdit className='ml-[40px]' color='blue'

                                                    />
                                                </td>
                                                : null}
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

export default viewReport