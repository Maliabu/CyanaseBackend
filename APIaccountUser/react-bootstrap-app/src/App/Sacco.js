import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../images/Ellipse 182.png';
import Mubs from '../images/Ellipse 166.png';
import { FaUserClock, FaWallet } from 'react-icons/fa';
import ProgressBar from "@ramonak/react-progress-bar";
import './style.scss';

const Sacco = ({ id, activeTab, children }) => {
    return ( <
        div >
        <
        h6 className = "font-weight-bolder" > YOUR SACCO GROUPS < /h6>  <
        div className = "row " > <
        div className = "col-9 " > <
        div className = "row rounded-25 shadow-sm p-5 mt-2" >
        <
        div className = " col-5" >
        <
        img src = { Profile }
        className = "rounded-circle"
        width = '80%'
        height = '90%'
        alt = "investors" / > < /
        div >
        <
        div className = "col-7 text-center" >
        <
        h4 className = "px-5 mt-5 text-warning" >
        LAWYERS HUB < /h4>  <
        h5 className = "text-center bolder" > Created: Jan 2020 < /h5>  <
        h4 > 32 Members < /h4> <
        h6 className = "px-5 py-3 mt-3 mx-2 border text-center border-warning text-warning rounded-25" >
        Deposit < /h6> </div >
        <
        /div>  <
        div >

        <
        h6 className = "pt-5 font-weight-bold" > RECOMMENDED SACCO GROUPS < /h6>   <
        div className = "row mt-3 px-5 py-5 shadow-sm rounded-25" >
        <
        div className = "row py-2 border-bottom" >
        <
        div className = "col-2" >
        <
        img src = { Mubs }
        className = "rounded-circle"
        width = '90%'
        height = '90%'
        alt = "investors" / >
        <
        /
        div >
        <
        div className = "col-7" >
        <
        p className = "pt-3" > < span className = "bolder" > MUBS SACCO < /span> <
        p > Created Mar 2020 EAT <
        /p>   < /
        p > < /
        div > <
        div className = "col-3 text-end" >
        <
        p className = "pt-3" > 45 Members < /
        p > <
        /div >  < /
        div > < /
        div > < /
        div >
        <
        /
        div > <
        div className = "col-3 rounded px-3" > <
        div className = "row" >
        <
        div className = "text-start col-6 bolder" > Goals < /div> <
        div className = "text-end col-6" > < span className = "  rounded-circle blue-dark text-white px-3 py-2" > 1 < /span> < /div > < /
        div >
        <
        div className = "p-4 bg-wallet shadow-sm rounded-25 mt-3" >
        <
        div className = "d-flex flex-row flex" >
        <
        span className = "rounded-circle border border-warning p-3" > <
        FaUserClock className = "text-warning"
        size = "30" / > < /span> <
        p className = "mx-3 mt-2" > < span className = "bolder" > Build a Mansion < /span> Created: 3 Aug</p >
        <
        /div> <
        h6 className = "mt-5 bolder" > Progress < /h6>  <
        ProgressBar completed = { 70 }
        completedClassName = "barCompleted"
        maxCompleted = { 100 }
        /> <
        p className = "text-center mt-5" > <
        FaWallet className = "text-warning"
        size = "20" / > < span className = "bolder mx-2" > UGX < /span> 10,000 < /p >
        <
        /
        div >

        <
        h6 className = "px-5 py-3 mt-3 border border-warning text-center text-warning rounded-25" >
        New Goal < /h6> < /
        div > < /
        div > < /
        div >
    );
};

export default Sacco;