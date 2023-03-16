import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { FaBell, FaComments, FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Settings = ({ id, activeTab, children }) => {
    return ( <
        div >
        <
        h5 > ACCOUNT SETTINGS < /h5> <
        div className = "row mt-3 p-2 px-3 border-bottom" > <
        div className = "col-1" >
        <
        FaUserCircle size = "50"
        className = 'my-5 active' / >
        <
        /
        div >
        <
        div className = "col-11 mt-5" >
        <
        h4 > Account < /h4> <
        h6 > Profile, Next of Kin, Security, Privacy < /h6> < /
        div >
        <
        /
        div >
        <
        div className = "row mt-3 p-2 px-3 border-bottom" > <
        div className = "col-1" >
        <
        FaBell size = "50"
        className = 'my-5 active' / >
        <
        /
        div >
        <
        div className = "col-11 mt-5" >
        <
        h4 > Notifications < /h4> <
        h6 > On Goals, Deposits < /h6> < /
        div >
        <
        /
        div >
        <
        div className = "row mt-3 p-2 px-3 border-bottom" > <
        div className = "col-1" >
        <
        FaComments size = "50"
        className = 'my-5 active' / >
        <
        /
        div >
        <
        div className = "col-11 mt-5" >
        <
        h4 > FAQs < /h4> <
        h6 > Learn More About Cyanase < /h6> < /
        div >
        <
        /
        div >
        <
        div className = "row mt-3 p-2 px-3 border-bottom" > <
        div className = "col-1" >
        <
        FaPhoneAlt size = "50"
        className = 'my-5 active' / >
        <
        /
        div >
        <
        div className = "col-11 mt-5" >
        <
        h4 > Help Centre < /h4> <
        h6 > Call, Whatsapp, Emails < /h6> < /
        div >
        <
        /
        div >
        <
        /div>
    );
};

export default Settings;