import React, { useState } from "react";
import '../App.css';
import TopUp2 from './TopUp2';
import Form from 'react-bootstrap/Form';

const TopUp = () => {
    const TopUp1 = () => {
        return ( < div className = "text-center" >
            Make a Deposit <
            div className = "row bg-light py-4 px-3 rounded-25 mt-5" >
            <
            Form.Group className = "mb-3 bg-white p-3 px-5" >
            <
            Form.Label > Amount to Deposit < /Form.Label>  <
            Form.Control type = "number"
            id = 'phone'
            required placeholder = "UGX 10,000" / >
            <
            Form.Control.Feedback type = "invalid" >
            This field is required. <
            /Form.Control.Feedback> < /
            Form.Group > <
            h6 className = "p-3 text-center border border-warning rounded-25 text-warning px-5"
            onClick = {
                () => { setStep(step + 1) }
            }
            type = "submit" > Next < /h6>   <
            h6 className = "p-3 text-center border border-warning rounded-25 text-warning px-5"
            onClick = {
                () => { setStep(step - 1) }
            } > Previous < /h6>  < /
            div >
            <
            /div>
        )
    }
    const [step, setStep] = useState(0);
    const [isActive, setActive] = useState("");
    const [isActive2, setActive2] = useState("");
    if (step === 1) {
        return ( < TopUp1 / > )
    } else if (step === 2) {
        return ( < TopUp2 / > );
    }
    const getId = () => {
        setActive("blue-dark rounded-25 text-warning");
        setActive2("");
    }
    const getId2 = () => {
        setActive2("blue-dark rounded-25 text-warning mt-3");
        setActive("");
    }
    return ( <
        div >

        Choose the currency in which you would like to invest your money <
        div className = "row py-4 px-3 rounded-25 mt-5" >
        <
        div className = { isActive }
        onClick = { getId }
        id = "Basic" >
        <
        div className = "row shadow-sm p-4 rounded-25 account"
        onClick = { getId2 } > <
        h4 className = "bolder" >
        BASIC ACCOUNT - UGX < /h4>  <
        p > Deposit and maintain your account in your local currency.(Transaction charges apply) < /p> </div >
        <
        /
        div >
        <
        div className = { isActive2 }
        id = "Dollar"
        onClick = { getId2 } >
        <
        div className = "row shadow-sm p-4 rounded-25 mt-2 account"

        id = "Dollar" > < h4 className = "bolder" >
        DOLLAR ACCOUNT - USD < /h4>  <
        p > Deposit in your local currency and we shall change it to USD(Standard charges apply) < /p> < /
        div >
        <
        /div> <
        h6 className = "p-3 border border-warning rounded-25 mt-5 text-center text-warning px-5"
        onClick = {
            () => { setStep(step + 1) }
        }
        type = "submit" > Next < /h6>  < /
        div > < /
        div >
    )
}

export default TopUp;