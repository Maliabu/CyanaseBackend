import React, { useState } from "react";
import '../App.css';
import Form from 'react-bootstrap/Form';
import { FaUserClock } from 'react-icons/fa';

const Goal = () => {
        const Goal6 = () => {
            return ( <
                div className = "py-5 text-center" >
                <
                FaUserClock className = "text-warning rounded-circle border border-warning p-2"
                size = "100" / >
                <
                h4 className = "bolder my-3" > Deposit < /h4> <
                h6 className = "mt-2" > Make a Deposit to
                continue < /h6> <
                div className = "py-5 px-3 rounded-25 text-start" >
                <
                p > < span className = "bolder" > Goal: < /span></p >
                <
                p > < span className = "bolder" > Target Amount: < /span></p >
                <
                p > < span className = "bolder" > Time Frame: < /span></p >
                <
                p > < span className = "bolder" > Weekly Investment: < /span></p >
                <
                p > < span className = "bolder" > Monthly Investment: < /span></p > < /
                div >
                <
                h6 className = "p-3 border border-warning rounded-25 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step + 1) }
                }
                type = "submit" > Deposit < /h6>  <
                h6 className = "p-3 border border-warning rounded-25 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step - 1) }
                }
                type = "submit" > Previous < /h6>  < /
                div >
            )
        }
        const Goal5 = () => {
            return ( <
                div className = "p-5 text-center" >
                <
                FaUserClock className = "text-warning rounded-circle border border-warning p-2"
                size = "100" / >
                <
                h4 className = "bolder my-3" > SET A REMINDER < /h4> <
                h6 className = "mt-2" > Let us remind you when you forget to deposit < /h6> <
                div className = "py-4 px-3 rounded-25 mt-5"
                key = "radio" >
                <
                Form >
                <
                Form > <
                div key = { `default-radio` }
                className = "mb-3" >
                <
                Form.Check label = "Monday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Tuesday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Wednesday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Thursday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Friday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Saturday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                Form.Check label = "Sunday"
                name = "group1"
                type = "radio"
                id = "default-radio" /
                >
                <
                /
                div > <
                /Form> < /
                Form > <
                h6 className = "p-3 border border-warning rounded-25 mt-5 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step + 1) }
                }
                type = "submit" > Next < /h6>  <
                h6 className = "p-3 border border-warning rounded-25 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step - 1) }
                }
                type = "submit" > Previous < /h6>  < /
                div > < /
                div >
            )
        }
        const Goal4 = () => {
            const [isActive, setActive] = useState("");
            const [isActive2, setActive2] = useState("");
            const getId = () => {
                setActive("blue-dark rounded-25 text-warning");
                setActive2("");
            }
            const getId2 = () => {
                setActive2("blue-dark rounded-25 text-warning mt-3");
                setActive("");
            }
            return ( <
                div className = "p-5 text-center" >
                <
                FaUserClock className = "text-warning rounded-circle border border-warning p-2"
                size = "100" / >
                <
                h4 className = "bolder my-3" > DEPOSIT TIME < /h4> <
                h6 className = "mt-2" > When do you want to deposit
                for this goal < /h6> <
                div className = "row py-4 px-3 rounded-25 mt-5" >
                <
                div className = { isActive }
                onClick = { getId }
                id = "Basic" >
                <
                div className = "row shadow-sm p-4 rounded-25 account"
                onClick = { getId2 } > <
                h4 className = "bolder" >
                WEEKLY < /h4>  <
                p > Remind me weekly to deposit towards this goal. < /p> </div >
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
                MONTHLY < /h4>  <
                p > Remind me monthly to deposit towards this goal. < /p> < /
                div >
                <
                /div> <
                h6 className = "p-3 border border-warning rounded-25 mt-5 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step + 1) }
                }
                type = "submit" > Next < /h6>  <
                h6 className = "p-3 border border-warning rounded-25 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step - 1) }
                }
                type = "submit" > Previous < /h6>  < /
                div > < /
                div >
            )
        }
        const Goal3 = () => {
            const [isActive, setActive] = useState("");
            const [isActive2, setActive2] = useState("");
            const getId = () => {
                setActive("blue-dark rounded-25 text-warning");
                setActive2("");
            }
            const getId2 = () => {
                setActive2("blue-dark rounded-25 text-warning mt-3");
                setActive("");
            }
            return ( <
                div className = "p-5 text-center" >
                <
                FaUserClock className = "text-warning rounded-circle border border-warning p-2"
                size = "100" / >
                <
                h4 className = "bolder my-3" > DEPOSIT TYPE < /h4> <
                h6 className = "mt-2" > How do you want to handle your investments < /h6> <
                div className = "row py-4 px-3 rounded-25 mt-5" >
                <
                div className = { isActive }
                onClick = { getId }
                id = "Basic" >
                <
                div className = "row shadow-sm p-4 rounded-25 account"
                onClick = { getId2 } > <
                h4 className = "bolder" >
                AUTO DEPOSIT < /h4>  <
                p > Make your deposits automatic such that you do not miss out a single day < /p> </div >
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
                MANUALLY INVEST < /h4>  <
                p > Let me make my own deposits < /p> < /
                div >
                <
                /div> <
                h6 className = "p-3 border border-warning rounded-25 mt-5 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step + 1) }
                }
                type = "submit" > Next < /h6>  <
                h6 className = "p-3 border border-warning rounded-25 text-center text-warning px-5"
                onClick = {
                    () => { setStep(step - 1) }
                }
                type = "submit" > Previous < /h6>  < /
                div > < /
                div >
            )
        }
        const Goal1 = () => {
            return ( < div className = "text-center p-5" >
                <
                FaUserClock className = "text-warning rounded-circle border border-warning p-2"
                size = "100" / >
                <
                h6 className = "mt-5" > Add a Goal < /h6> <
                div className = "row bg-light py-4 p-5 rounded-25 mt-5" > <
                Form.Group className = "mb-3 bg-white p-3 px-5" >
                <
                Form.Label > What is your Goal ? < /Form.Label>  <
                Form.Control type = "text"
                id = 'text'
                required placeholder = "Build a mansion" / >
                <
                Form.Control.Feedback type = "invalid" >
                This field is required. <
                /Form.Control.Feedback> < /
                Form.Group >
                <
                Form.Group className = "mb-3 bg-white p-3 px-5" >
                <
                Form.Label > How long do you wish to accomplish this Goal ? (years) < /Form.Label>  <
                Form.Control type = "number"
                id = 'number'
                required placeholder = "1 " / >
                <
                Form.Control.Feedback type = "invalid" >
                This field is required. <
                /Form.Control.Feedback> < /
                Form.Group >
                <
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
        const Goal2 = () => {
                return ( <
                    div className = "text-center mt-5" >
                    <
                    FaUserClock className = "text-warning rounded-circle border border-warning p-2 mt-5"
                    size = "100" / > < h6 className = "mt-5" > How much will it cost to accomplish this Goal ? < /h6> <
                    div className = "row bg-light py-4 px-3 rounded-25 mt-5" >
                    <
                    Form.Group className = "mb-3 bg-white p-3 px-5" >
                    <
                    Form.Label > Enter Amount < /Form.Label>  <
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
                    /div>) }
                    const [step, setStep] = useState(0);
                    if (step === 1) {
                        return ( < Goal1 / > )
                    } else if (step === 2) {
                        return ( < Goal2 / > );
                    } else if (step === 3) {
                        return ( < Goal3 / > );
                    } else if (step === 4) {
                        return ( < Goal4 / > );
                    } else if (step === 5) {
                        return ( < Goal5 / > );
                    } else if (step === 6) {
                        return ( < Goal6 / > );
                    }

                    return ( <
                        div className = "mt-5 pt-5 text-center" > <
                        FaUserClock className = "text-warning rounded-circle border border-warning p-2 mt-5"
                        size = "100" / >
                        <
                        h4 className = "bolder mt-5" > GOAL INVESTING < /h4> <
                        p className = "my-3" > Hello < span className = "active" > Patricia < /span></p >
                        <
                        h6 > Let your dreams come true by investing
                        for them < /h6> <
                        h6 className = "px-5 py-3 my-5 mx-2 border border-warning text-warning rounded-25"
                        onClick = {
                            () => { setStep(step + 1) }
                        } >
                        Get Started < /h6></div >
                    );
                }

                export default Goal;