import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Pic from './Pic';
import Risk from '../images/Group 130.png'
import RProfile from './RProfile';
import { ArrowLeftSquare } from "react-iconly";

const ResRiskProfile = (props) => {
    const [show2, setShow2] = useState(false);
    const [theStatus, setTheStatus] = useState("incomplete");
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const getStatus = (status) => {
        setTheStatus(status)
        console.log(status)
        return status
    }
    return ( < div > < Pic / > <
        div className = "pt-5 res-home" > < /div > <
        ArrowLeftSquare size = { 30 }
        className = " m-3 mt-5"
        onClick = {
            () => { props.changeRiskProfileSetting(false) }
        }
        />  <
        h6 className = "mt-4 text-center text-warning bolder" > Investor Risk Profiler < /h6> <
        div className = "row p-2 rounded-4" >
        <
        div className = "bg-white rounded-4 p-3" >
        <
        img src = { Risk }
        width = '70%'
        className = "mx-5"
        height = '100%'
        alt = "investors" / >
        <
        /div> <
        div className = "text-center res-home" > <
        div className = "row bg-white p-3 rounded-4" >
        <
        p className = "bolder" >
        This is a questionnaire to be filled by the intending Investor(you).This will help us, help you keep track Of your investments and help you every step of the way. <
        /p> <
        p className = "bolder" > This document is a mandatory part of each investor’ s Esteemed investing lifespan. <
        /p> <
        p className = "bolder" > It is mandatory
        for the good of every investor Please complete the questionnaire to fully complete Your Profile as desired. <
        /p>< span className = "rounded-2 px-5 py-2 bg-light active" >Status: {
        theStatus
    } < /span> <
    div className = "p-5" > <
        p className = "py-2 bg-warning rounded-3"
    onClick = { handleShow2 } > Complete your Risk profile < /p> </div > < /
    div > < /
    div > <
        Modal show = { show2 }
    onHide = { handleClose2 }
    dialogClassName = "" >

        <
        RProfile status = { getStatus }
    / > < /
    Modal > < /
    div >
        <
        /div>
)
}

export default ResRiskProfile;