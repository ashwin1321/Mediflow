import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dasboard from '../Dasboard'
import Cookies from 'js-cookie'

const Diagonosis = () => {
    const [name, setName] = useState('')
    const role = Cookies.get('role')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
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
                            < div className='flex '>
                                <form onSubmit={handleSubmit} className='border-none shadow-none p-0'>
                                    <input type="text" name="" placeholder='search patient' id=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='h-145 self-center mt-4' />
                                </form>
                                <Link to="/book" >
                                    <button className='bg-[#3b7a5b] hover:text-[#328059] w-60 hover:bg-[#e4ece8]'>Create Report </button>
                                </Link>
                            </div>
                            : null}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Diagonosis