import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dasboard from '../Dasboard'

const manageDoctor = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doctors, setDoctors] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [doctor, setDoctor] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [did, setDid] = useState("")

    const handleDeleteDoctor = async () => {
        await axios.delete(`http://localhost:5000/get/doc`, did)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get('http://localhost:5000/get/doc', {
            params: {
                name: doctor
            }
        })
            .then(res => {
                setDoctors(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })

    }, [doctor])


    return (
        <div className="dashboard-container" >

            <div>
                <Dasboard />
            </div>

            <div className="main-content">

                admin
            </div>
        </div >
    )
}

export default manageDoctor