import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from '../images/Path 80.png';
import Networth from '../images/Path 3.png';
import './style.scss';
import Modal from 'react-bootstrap/Modal';
import Learn from '../Accounts/Learn'

const Main = ({ id, activeTab, children }) => {
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return ( <
        div className = "scroll-y2 p-3 rounded-25 bg-light" >
        <
        div className = "row bg-white rounded-25 px-3 py-5" >

        <
        h6 className = "bolder grey-text" > YOUR STATISTICS < /h6>  <
        div className = "col-9" > <
        div className = "d-flex flex-row flex py-2" >
        <
        div className = "p-5 peach rounded-25 w-50 text-center" >
        <
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
        h6 className = "bolder mt-4" > Networth < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > UGX <
        h1 className = "px-2" > 0.0 < /h1></div >
        <
        img src = { Networth }
        className = "pt-2"
        width = '100%'
        height = '30%'
        alt = "investors" / >
        <
        /div > < /
        div >
        <
        /div>  <
        div >
        <
        div className = "px-3 bg-light rounded-25 py-5" >
        <
        h6 className = "bolder grey-text" > DOLLAR ACCOUNT < /h6>   <
        div className = "d-flex flex-row flex mt-3 my-2 dollar" >
        <
        div className = "p-5 light shadow-sm rounded-25 w-50 text-center" > <
        h6 className = "bolder mt-4" > Deposit < /h6>  <
        div className = "d-flex flex-row flex justify-content-center" > USD <
        h1 className = "px-2" > 0.0 < /h1></div > < /
        div >
        <
        div className = " px-3 w-50 text-center " >
        <
        div className = "shadow-sm light rounded-25 p-5" >
        <
        h6 className = "bolder mt-4" > Networth < /h6> <
        div className = "d-flex flex-row flex justify-content-center" > USD <
        h1 className = "px-2" > 0.0 < /h1></div >
        <
        /div > < /
        div > <
        /div>  < /
        div > <
        div className = "row p-5 mt-2 bg-white rounded-25" >
        <
        div className = "col-8 p-3" > <
        h4 className = "bolder" > Welcome to Cyanase < /h4>  <
        h6 > Investments products, loans, sacco groups, investment clubs all in one package. < /h6> < /
        div > <
        div className = "col-4 p-3" >
        <
        h6 className = "px-5 py-3 rounded-25 border border-warning text-warning text-center"
        onClick = { handleShow1 } > Learn More < /h6> < /
        div >
        <
        Modal show = { show1 }
        onHide = { handleClose1 }
        className = "modal" >
        <
        Learn / >
        <
        /Modal> < /
        div > < /
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