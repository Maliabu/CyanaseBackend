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
import { FaBell, FaHome, FaUserCircle, FaUsers, FaUniversity, FaWallet, FaHandHoldingUsd, FaDonate, FaUserCog, FaComments, FaDollarSign, FaLightbulb } from 'react-icons/fa';

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
        div className = 'row' >
        <
        div className = 'col-lg-2 p-5 bg-light scroll-y' > <
        div >
        <
        img src = { Header }
        width = '60%'
        height = '80%'
        alt = "investors" / > <
        /div>   <
        div className = 'row mt-5 mb-5 p-2 blue-dark rounded-25' >
        <
        div className = 'col-4 pt-2' >
        <
        img src = { Profile }
        className = "rounded-circle"
        width = '90%'
        height = '80%'
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
        h6 className = 'p-2 px-4 pt-5 grey-text' > ACTIVITY < /h6>   <
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
        h6 className = 'p-2 pt-5 px-4 grey-text' > SETTINGS < /h6>   <
        div className = ' py-3 px-4 d-flex flex-row' >
        <
        FaUserCog size = "25"
        className = 'lighter' / >
        <
        TabNavItem title = "Account Profile"
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
        TabNavItem title = "Investments Risk Profile"
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
        div className = 'col-lg-10 px-lg-5' >
        <
        div className = "row py-5" >
        <
        div className = 'col-8 rounded-25 bg-light' > <
        p className = 'mt-2' > <
        FaLightbulb size = "25"
        className = 'text-warning position-relative border border-warning p-1 rounded-circle' / > < span className = 'text-warning bolder' > Tips: < /span> <span className='mx-3'>Make tiny daily investments instead of saving your money</span > < /p > < /
        div > <
        div className = 'col-1 rounded-25' >
        <
        img src = { Profile }
        className = "rounded-circle border mx-2"
        width = '50%'
        height = '90%'
        alt = "investors" / >
        <
        FaBell size = "27"
        className = 'text-warning position-relative' / >
        <
        span className = "position-absolute top-15 start-65 translate-middle px-2 bg-warning rounded-pill" > 0 <
        span className = "visually-hidden" > New alerts < /span> < /
        span > <
        /
        div > <
        div className = " col-3 text-center" >
        <
        div className = 'flex-row d-flex rounded-25 border py-2 justify-content-center' > <
        TabNavItem title = "API Account"
        onClick = { handleTab2 }
        id = "tab11"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> | <
        TabNavItem title = "Logout"
        onClick = { handleTab2 }
        id = "tab12"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /
        div > < /
        div > < /
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