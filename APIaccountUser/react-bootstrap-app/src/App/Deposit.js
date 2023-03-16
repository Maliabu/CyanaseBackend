import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { FaUniversity, FaUserCircle, FaUsers } from 'react-icons/fa';

const Deposit = ({ id, activeTab, children }) => {
    return ( <
        div >
        <
        h6 className = "font-weight-bolder" > DEPOSIT < /h6>  <
        div className = "row mt-3 shadow-sm rounded-25" >
        <
        div className = "col-8 rounded-25 p-5 text-center" >
        <
        div >
        <
        FaUserCircle size = "100"
        className = 'active' / > < /div> <
        h4 className = "my-3" > PERSONAL INVESTMENT < /h4>  <
        h6 > Make a deposit to your personal account without setting any goals. <
        /h6> < /
        div >
        <
        div className = "col-4 p-5 blue-dark rounded-25 text-center" >
        <
        p className = "mt-5" > This is perfect
        for: < /p> <
        h5 className = "active mt-3 p-2" > STUDENTS | JUNIOR INVESTORS | PROFESSIONAL INVESTORS < /h5>  <
        h5 className = "py-2 px-3 text-primary border rounded-25 border-primary" > Deposit Here < /h5> < /
        div >
        <
        /
        div >
        <
        div className = "row mt-3 bg-wallet shadow-sm rounded-25" >
        <
        div className = "col-8 rounded-25 p-5 text-center" >
        <
        div >
        <
        FaUsers size = "100"
        className = 'active' / > < /div> <
        h4 className = "my-3" > SACCO GROUPS / INVESTMENT CLUBS < /h4>  <
        h6 > Modify the investment Portfolio of your club <
        /h6> < /
        div >
        <
        div className = "col-4 p-5 blue-dark rounded-25 text-center" > <
        p className = "mt-5" > This is perfect
        for: < /p> <
        h5 className = "active mt-3" > SACCO GROUPS | CLUBS < /h5>  <
        h5 className = "py-2 px-3 mt-5 text-primary border rounded-25 border-primary" > Deposit Here < /h5> < /
        div >
        <
        /
        div >
        <
        div className = "row mt-3 shadow-sm bg-wallet rounded-25" >
        <
        div className = "col-8 rounded-25 p-5 text-center" >
        <
        div >
        <
        FaUniversity size = "100"
        className = 'active' / > < /div> <
        h4 className = "my-3" > ORGANIZATIONS / COMPANIES < /h4 >  <
        h6 > Perfect
        for Organisations that wish to invest <
        /h6> < /
        div >
        <
        div className = "col-4 p-5 blue-dark rounded-25 text-center" > <
        p className = "pt-5" > This is perfect
        for: < /p> <
        h5 className = "active" > ORGANIZATIONS | COMPANIES < /h5>  <
        h5 className = "py-2 px-5 mt-5 text-primary border rounded-25 border-primary" > Deposit Here < /h5> < /
        div >
        <
        /
        div >
        <
        /
        div >
    );
};

export default Deposit;