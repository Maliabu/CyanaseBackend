import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from '../images/Path 80.png';
import Networth from '../images/Path 3.png';
import { FaBriefcase, FaWallet } from 'react-icons/fa';
import './style.scss';

const Main = ({ id, activeTab, children }) => {
    return ( <
        div >
        <
        div className = "row" >

        <
        h6 className = "font-weight-bolder" > YOUR STATISTICS < /h6>  <
        div className = "col-9" > <
        div className = "d-flex flex-row flex py-2" >
        <
        div className = "p-5 peach rounded-25 w-50 text-center" >
        <
        span className = "rounded-circle border border-warning p-3" > <
        FaWallet className = "active"
        size = "25" / > < /span> <
        h6 className = "bolder mt-4" > Deposit < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > UGX <
        h1 className = "px-2" > 0.0 < /h1></div >
        <
        img src = { Deposit }
        className = "pt-2"
        width = '100%'
        height = '30%'
        alt = "investors" / >
        <
        /
        div >
        <
        div className = " px-3 w-50 text-center " >
        <
        div className = "blue-dark rounded-25 p-5" >
        <
        span className = "rounded-circle border p-3" > <
        FaBriefcase size = "25" / > < /span> <
        h6 className = "bolder mt-4" > Networth < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > UGX <
        h1 className = "px-2" > 0.0 < /h1></div >
        <
        img src = { Networth }
        className = "pt-2"
        width = '100%'
        height = '40%'
        alt = "investors" / >
        <
        /div > < /
        div >
        <
        /div>  <
        div >

        <
        h6 className = "pt-5 font-weight-bold" > DOLLAR ACCOUNT < /h6>   <
        div className = "d-flex flex-row flex py-2" >
        <
        div className = "p-5 shadow rounded-25 w-50 text-center" > <
        span className = "rounded-circle border border-warning p-3" > <
        FaWallet className = "text-warning"
        size = "25" / > < /span> <
        h6 className = "bolder mt-4" > Deposit < /h6>  <
        div className = "d-flex flex-row flex justify-content-center" > USD <
        h1 className = "px-2" > 0.0 < /h1></div > < /
        div >
        <
        div className = " px-3 w-50 text-center " >
        <
        div className = "shadow  rounded-25 p-5" >
        <
        span className = "rounded-circle border border-warning p-3" > <
        FaBriefcase className = "text-warning"
        size = "25" / > < /span> <
        h6 className = "bolder mt-4" > Networth < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > USD <
        h1 className = "px-2" > 0.0 < /h1></div >
        <
        /div > < /
        div > <
        /div> 

        <
        div className = "row p-5 mt-2 shadow-sm rounded-25" >
        <
        div className = "col-8 p-3" > <
        h4 className = "bolder" > Welcome to Cyanase < /h4>  <
        h6 > Investments products, loans, sacco groups, investment clubs all in one package. < /h6> < /
        div > <
        div className = "col-4 p-3" >
        <
        h6 className = "px-5 py-3 rounded-25 border border-warning text-warning text-center" > Learn More < /h6> < /
        div >
        <
        /div> < /
        div >
        <
        /
        div > <
        div className = "col-3 rounded-25 blue-dark py-5 px-2 text-center" >
        <
        h6 className = "bolder" > Your Statistics < /h6>  <
        h6 className = "pt-5" > Sacco Activity < /h6>   <
        div className = "d-flex flex-row flex justify-content-center" >
        <
        div className = "w-25" > 35 % < /div> <
        div className = "w-25" > 20 % < /div> <
        div className = "w-25" > 15 % < /div> < /
        div >
        <
        div className = "d-flex flex-row flex justify-content-center" >
        <
        div className = "w-25" > Deposits < /div> <
        div className = "w-25" > Loans < /div> <
        div className = "w-25" > Withdraws < /div> < /
        div >
        <
        img src = { Networth }
        className = "py-2 mt-3"
        width = '80%'
        height = '10%'
        alt = "investors" / >
        <
        h6 className = "pt-5" > Total Networth < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > UGX <
        h3 className = "px-2" > 0.0 < /h3></div >
        <
        img src = { Networth }
        className = "py-2 mt-3"
        width = '80%'
        height = '10%'
        alt = "investors" / >
        <
        h6 className = "pt-5" > Total Investments < /h6>  <
        div className = "d-flex flex-row flex justify-content-center" > UGX <
        h3 className = "px-2" > 0.0 < /h3></div >
        <
        img src = { Networth }
        className = "py-2 mt-3"
        width = '80%'
        height = '10%'
        alt = "investors" / >
        <
        /
        div > < /
        div > < /
        div >
    );
};

export default Main;