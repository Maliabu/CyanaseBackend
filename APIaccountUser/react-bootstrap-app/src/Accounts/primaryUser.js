import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from "react";
import Login from "./Login";
import SignUp from './SignUp';
import SecondaryUser from './SecondaryUser';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";


const BasicExample = () => {
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
        div className = 'row theForm p-5' >
        <
        div className = 'col-lg-7 px-5' >
        <
        div className = 'd-flex flex-row p-5 bg-light rounded flex' >
        <
        div className = 'pl-5 py-3 px-lg-3' >

        <
        TabNavItem title = "Home"
        onClick = { handleTab1 }
        id = "tab1"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = 'px-lg-5 py-3 mx-3 border border-warning text-warning rounded ' >

        <
        TabNavItem title = "Login"
        onClick = { handleTab2 }
        id = "tab2"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > <
        div className = 'px-lg-5 p-sm-3 py-3 mx-3 border border-warning text-warning rounded ' >

        <
        TabNavItem title = "Secondary User"
        onClick = { handleTab3 }
        id = "tab3"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > < /
        div >
        <
        h1 className = 'w-100 text-center mt-5 pt-5' > Welcome to the API User Portal.This Portal is
        for API Accounts creations only. < /h1> <
        h6 className = 'text-warning text-center mt-5 p-3 border border-warning rounded' >
        <
        u > support @cyanase.com < /u> < /
        h6 >
        <
        div >
        <
        img src = "https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?w=740&t=st=1678295724~exp=1678296324~hmac=d43819b5a3fbe5776cd679d2f5d57cde36a046d1ee3ec3decf5cd0f54370c9b9"
        alt = "investors" / > <
        /div> < /
        div > <
        div className = 'col-lg-5 px-lg-5 bg-light ' >

        <
        TabContent id = "tab1"
        activeTab = { activeTab } > < SignUp / > < /TabContent> <
        TabContent id = "tab2"
        activeTab = { activeTab } > < Login / > < /TabContent> <
        TabContent id = "tab3"
        activeTab = { activeTab } > < SecondaryUser / > < /TabContent> < /
        div > < /div >
    );
}

export default BasicExample;