import { useEffect } from "react";
import { GetRiskProfile } from "../Api/MainRequests";
import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Risk from '../images/Group 130.png'
import RProfile from '../Accounts/RProfile';
import Modal from 'react-bootstrap/Modal';
import { Activity } from "react-iconly";

const RiskProfile = ({ id, activeTab, children }) => {
    const [show2, setShow2] = useState(false);
    const [complete, setComplete] = useState("Incomplete");
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    useEffect(() => {
        GetRiskProfile().then(res => {
            console.log(res)
            if (res.status === true) {
                setComplete("Complete")
            }
        });
    }, []);
    return ( <
        div > <
        div className = "row py-5 bg-light px-2 rounded-4" >
        <
        div className = "col-6 bg-white rounded-4 p-2" >
        <
        img src = { Risk }
        width = '90%'
        className = "m-5"
        height = '80%'
        alt = "investors" / >
        <
        /div> <
        div className = "col-6 p-5 text-center" > <
        div className = "row p-5 bg-white rounded-25" >
        <
        h4 className = "active bolder" > Investor Risk Profiler < /h4>  <
        Activity size = "xlarge"
        set = "broken"
        className = 'my-5 active' / >
        <
        p >
        The risk profiler is intended to grade and check how much you can accommodate an investment risk.The information you provide here is strictly
        for grading purposes.Thus we don not share it with any third parties or use it
        for any other activities. <
        /p> < /
        div > < h6 className = "mt-3 p-5 bg-white rounded-3 bolder" > Risk profile Status: < span className = "rounded-2 px-5 mx-3 py-2 bg-light active" > {
            complete
        } < /span> < /
        h6 > <
        h6 className = "py-3 px-5 mt-3 warning rounded-3"
        onClick = { handleShow2 } > Complete Your Risk profile < /h6> < /
        div > <
        Modal show = { show2 }
        onHide = { handleClose2 }
        dialogClassName = "my-modal" >

        <
        RProfile /
        >
        <
        /
        Modal > < /
        div > < /
        div >
    );
};

export default RiskProfile;