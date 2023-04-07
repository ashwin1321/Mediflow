import React from 'react'
import Dasboard from '../Dasboard'
import axios from 'axios'
import Cookies from 'js-cookie'

const viewAppointment = () => {

    const pid = Cookies.get('id')

    console.log(pid)

    return (
        <div className="dashboard-container" >

            <div>
                <Dasboard />
            </div>

            <div className="main-content ">
            </div>
        </div>

    )
}

export default viewAppointment