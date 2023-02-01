import React from 'react';
import { useState, useEffect } from "react";
import { Text, Input, Div, Button, Icon } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import axios from "axios"


const Online = ({ nextStepOnline, prevStepOnline }) => {

    const [currency, setCurrency] = useState();
    const [paySub, setPay] = useState(false);
    const [Amount, setAmount] = useState();
    const [AccountCharge, setAccountCharge] = useState();
    const [deposit, setDeposit] = useState();
    const [networth, setNetworth] = useState();
    const [DollarNetworth, setDollarNetworth] = useState();
    const [DollarDeposit, setDollarDeposit] = useState();
    const [Tip, setTip] = useState();
    const [myId, setID] = useState();
    const [myActivity, setActivity] = useState([]);
    const [dp, setDp] = useState();
    const [charge, setCharge] = useState();
    const [Fname, setName] = useState();
    const [Lname, setLName] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Withdraw';
    const [buttonText, setButtonText] = useState(myOriginal);
    ////Get user login data
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setDeposit(data.deposit);
        setNetworth(data.networth);
        setPhone(data.Phone);
        setCharge(data.charge);

        setAccountCharge(data.amount);
        if (data.photo === '') {
            setDp("download.PNG");
        } else {

            setDp(data.photo)
        }
    }, []);
    function Withdraw() {
        setButtonText(myChange);


        const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
        /// Make a request to update the data base
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { id:""}
        })
            .then(result => {

                const message = result.data.message;
                const stateMe = result.data.error
                console.log(result.data);

                if (stateMe == 200) {
                    setButtonText(myOriginal);

                    setTopUp(false);


                } else if (message === "success") {

                    setButtonText(myOriginal);
                    setTopUp(false);

                    const MyLogin = JSON.parse(localStorage.getItem("loginData"));

                    const newAmount = {
                        ...MyLogin,
                        "deposit": AmountValue,
                    };

                    localStorage.setItem('loginData', JSON.stringify(newAmount));
                }


            })
            .catch(error => alert(error));

    }

    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleInputData = input => e => {
        // input value from the form
        setAmount(e.target.value);

        //updating for data state taking previous state and then adding new value to create new object

    }

    return (
        <>

            <Div m={{ t: "2rem" }} justify="center">
                <Div d="flex" justify="center">
                    <Text textAlign="center" m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                        Make a Withdraw to continue
                    </Text>
                </Div>
                <Div d="flex" justify="center">


                </Div>
                <Div m={{ t: "1rem" }} d="flex" align="center" justify="center">

                    <Text textAlign="center" textColor="#252859" textSize="heading">
                        <span className="span">Balance:</span> {currency} {networth}
                    </Text>
                </Div>
                <Div justify="center">
                    <Div d="flex" justify="center">
                        <Input w={{ xs: '18.5rem', md: '24rem' }}
                            {...register("amount", { required: true, maxLength: 15 })}
                            onChange={handleInputData("amount")}
                            placeholder="Enter amount" name="amount" type="text"
                            m={{ t: "3rem" }}
                            p={{ x: "2.5rem" }}
                            prefix={

                                <Iconly
                                    className="ivn"
                                    name="Wallet"
                                    primaryColor={`#252859`}
                                    set='bulk'
                                    secondaryColor='orange'
                                    stroke='bold'
                                />
                            }
                        />
                    </Div>
                    {errors.amount && <p className="text-error">Your amount is required</p>}
                    <Div d="flex" justify="center">
                        <Button w="24rem"
                            m={{ t: "2rem", }} className="button2"
                            onClick={() =>
                                Withdraw()
                            }
                            bg="warning700"
                            shadow="3"
                            hoverShadow="4"
                        >{buttonText}
                        </Button>
                    </Div>

                    <Div m={{ t: "2rem", }} d="flex" align="center" justify="center">

                        <Button variant="primary"
                            align="center"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="24rem"
                            onClick={() =>
                                prevStepOnline()
                            }>

                            Previous
                        </Button>
                    </Div>

                </Div>


              

            </Div>

        </>
    )

};
export default Online;