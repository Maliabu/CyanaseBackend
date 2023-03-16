import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from "react";
import Personal from "./Personal";
import Deposit from "./Deposit";
import Sacco from './Sacco';
import Club from './Club';
import Settings from './Settings';
import RiskProfile from './RiskProfile';
import Api from '../Accounts/primaryUser';
import SecondaryUser from '../Accounts/SecondaryUser';
import TabNavItem from "../Accounts/TabNavItem";
import TabContent from "../Accounts/TabContent";
import Main from './Main';
import Header from '../images/Group 3525.png';
import Profile from '../images/Ellipse 6.png';
import Form from 'react-bootstrap/Form';
import { FaBell, FaHome, FaUserCircle, FaUsers, FaUniversity, FaSignOutAlt, FaWallet, FaHandHoldingUsd, FaDonate, FaUserCog, FaComments, FaDollarSign, FaUserSecret } from 'react-icons/fa';

const Home = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("tab3");
    };
    return ( <
        div className = 'row theForm dollar' >
        <
        div className = 'col-lg-3 p-5 bg-wallet scroll-y' > <
        div >
        <
        img src = { Header }
        width = '60%'
        height = '80%'
        alt = "investors" / > <
        /div>   <
        div className = 'row mt-5 mb-5 p-4 blue-dark rounded-25' >
        <
        div className = 'col-4' >
        <
        img src = { Profile }
        className = "rounded-circle"
        width = '80%'
        height = '90%'
        alt = "investors" / >
        <
        /div> <
        div className = 'col-6' >
        <
        h5 > username < /h5> <
        h6 > User < /h6> < /
        div > <
        /div> <
        div className = '' >
        <
        h6 className = 'p-2 px-4 grey-text' > DASHBOARD < /h6>  <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaHome size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Home"
        onClick = { handleTab1 }
        id = "tab1"
        className = "home"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = ' py-3  px-4 d-flex flex-row ' >
        <
        FaUserCircle size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Personal Investments"
        onClick = { handleTab2 }
        id = "tab2"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaUsers size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "SACCO Groups"
        onClick = { handleTab3 }
        id = "tab3"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div >
        <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaUniversity size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Investment Clubs"
        onClick = { handleTab3 }
        id = "tab4"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div >
        <
        h6 className = 'p-3 px-4 pt-5 grey-text' > ACTIVITY < /h6>   <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaWallet size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Deposits"
        onClick = { handleTab1 }
        id = "tab5"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaHandHoldingUsd size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Loans"
        onClick = { handleTab2 }
        id = "tab6"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaDonate size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Withdraws"
        onClick = { handleTab3 }
        id = "tab7"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div >
        <
        h6 className = 'p-3 pt-5 px-4 grey-text' > SETTINGS < /h6>   <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaUserCog size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Account"
        onClick = { handleTab1 }
        id = "tab8"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaDollarSign size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Investments"
        onClick = { handleTab2 }
        id = "tab9"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = 'py-3 px-4 d-flex flex-row' >
        <
        FaComments size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "FAQs"
        onClick = { handleTab3 }
        id = "tab10"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div > <
        /
        div >
        <
        /
        div > <
        div className = 'col-lg-9 px-lg-5' >
        <
        div className = "row py-5" >
        <
        div className = "col-6" >
        <
        Form >
        <
        Form.Group >
        <
        Form.Control type = "text"
        className = "p-3 search-icon rounded-25"
        required = { true }
        id = 'company_name'
        placeholder = "&#xf002;   Search" / > < /
        Form.Group > < /
        Form > <
        /div>   <
        div className = 'col-1' >
        <
        img src = { Profile }
        className = "rounded-circle border"
        width = '80%'
        height = '90%'
        alt = "investors" / >
        <
        /div>  <
        div className = 'col-1' > < FaBell size = "30"
        className = 'mt-2 text-warning' / > < /div> <
        div className = "px-3 col-2" >
        <
        div className = 'd-flex border text-center rounded-25  p-2' >
        <
        FaUserSecret size = "25" /
        >
        <
        TabNavItem title = "API Account"
        onClick = { handleTab2 }
        id = "tab11"
        className = 'mt-5'
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div > < /div > <
        div className = "px-3 col-2" >
        <
        div className = 'd-flex border text-center rounded-25 px-4 p-2' >
        <
        FaSignOutAlt size = "25" /
        >
        <
        TabNavItem title = "Logout"
        onClick = { handleTab2 }
        id = "tab12"
        className = 'mt-5'
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div > <
        /div > < /
        div >

        <
        TabContent id = "tab1"
        activeTab = { activeTab } > < Main / > < /TabContent> <
        TabContent id = "tab2"
        activeTab = { activeTab } > < Personal / > < /TabContent> <
        TabContent id = "tab3"
        activeTab = { activeTab } > < Sacco / > < /TabContent> <
        TabContent id = "tab4"
        activeTab = { activeTab } > < Club / > < /TabContent> <
        TabContent id = "tab5"
        activeTab = { activeTab } > < Deposit / > < /TabContent> <
        TabContent id = "tab6"
        activeTab = { activeTab } > < SecondaryUser / > < /TabContent> <
        TabContent id = "tab7"
        activeTab = { activeTab } > < SecondaryUser / > < /TabContent> <
        TabContent id = "tab8"
        activeTab = { activeTab } > < Settings / > < /TabContent><
        TabContent id = "tab9"
        activeTab = { activeTab } > < RiskProfile / > < /TabContent> <
        TabContent id = "tab11"
        activeTab = { activeTab } > < Api / > < /TabContent>< /
        div > < /div >
    );
}

export default Home;