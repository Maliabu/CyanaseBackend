import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wallet from '../images/wallet.png';
import { FaUserClock, FaWallet } from 'react-icons/fa';
import ProgressBar from "@ramonak/react-progress-bar";
import './style.scss';

const Personal = ({ id, activeTab, children }) => {
    return ( <
        div >
        <
        h6 className = "font-weight-bolder" > WALLET < /h6>  <
        div className = "row" > <
        div className = "col-9 " > <
        div className = "row bg-wallet shadow-sm rounded-25 p-5" >
        <
        div className = " px-3 text-center " >
        <
        img src = { Wallet }
        className = "pt-2"
        width = '10%'
        height = '30%'
        alt = "investors" / > <
        h6 className = "bolder mt-5" > Account Balance < /h6> <
        div className = "d-flex flex-row flex justify-content-center w-100" > UGX <
        h1 className = "px-2" > 356, 000.0 < /h1> < /
        div >
        <
        div className = "d-flex flex-row flex justify-content-center" >
        <
        h6 className = "px-5 py-3 mt-3 border border-warning text-warning rounded-25" >
        Top Up < /h6> <
        h6 className = "px-5 py-3 mt-3 mx-2 border border-warning text-warning rounded-25" >
        Deposit < /h6> </div > < /
        div >
        <
        /div>  <
        div >

        <
        h6 className = "pt-5 font-weight-bold" > RECENT ACTIVITY < /h6>   <
        div className = "row mt-2 px-3 bg-wallet shadow-sm rounded" >
        <
        div className = "col-3" >
        <
        p className = "pt-3" > < span className = "bolder" > Deposit < /span> <
        p > UGX 10, 000 < /p>   < /
        p >
        <
        /
        div >
        <
        div className = "col-6" >
        <
        h6 className = "px-5 pt-4 text-success text-center" > Successful < /h6> < /
        div >
        <
        div className = "col-3 text-end" >
        <
        p className = "pt-3" > < span className = "bolder" > 21 Jan < /span> <
        p > 3: 30 EAT <
        /p>   < /
        p > <
        /div > < /
        div >
        <
        div className = "row mt-2 px-3 bg-wallet shadow-sm rounded" >
        <
        div className = "col-3" >
        <
        p className = "pt-3" > < span className = "bolder" > Deposit < /span> <
        p > UGX 10, 000 < /p>   < /
        p >
        <
        /
        div >
        <
        div className = "col-6" >
        <
        h6 className = "px-5 pt-4 text-success text-center" > Successful < /h6> < /
        div >
        <
        div className = "col-3 text-end" >
        <
        p className = "pt-3" > < span className = "bolder" > 21 Jan < /span> <
        p > 3: 30 EAT <
        /p>   < /
        p > <
        /div > < /
        div >
        <
        /
        div >
        <
        /
        div > <
        div className = "col-3 rounded-25 px-3" > <
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

export default Personal;