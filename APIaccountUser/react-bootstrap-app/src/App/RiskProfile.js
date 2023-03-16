import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Risk from '../images/Group 130.png'
import { FaBalanceScale } from "react-icons/fa";

const RiskProfile = ({ id, activeTab, children }) => {
    return ( <
        div > <
        div className = "row py-5" >
        <
        div className = "col-6" >
        <
        img src = { Risk }
        className = "rounded-25"
        width = '100%'
        height = '80%'
        alt = "investors" / >
        <
        /div> <
        div className = "col-6 p-5 mt-5 text-center" >
        <
        h4 > RISK PROFILE < /h4> <
        div className = "row p-5 mt-5 bg-wallet shadow rounded-25" >
        <
        h6 > Investor Risk Profiler < /h6>  <
        FaBalanceScale size = "30"
        className = 'my-5 text-primary' / >
        <
        p >
        The risk profiler is intended to grade and check how much you can accommodate an investment risk.The information you provide here is strictly
        for grading purposes.Thus we don not share it with any third parties or use it
        for any other activities. <
        /p> < /
        div > <
        h6 className = "py-3 px-5 mt-5 border border-primary text-primary rounded-25" > COMPLETE YOUR PROFILE < /h6> < /
        div > <
        /
        div > < /
        div >
    );
};

export default RiskProfile;