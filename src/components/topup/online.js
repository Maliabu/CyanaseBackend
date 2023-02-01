import React from 'react';
import { useState, useEffect } from "react";
import { Text, Input, Div, Button, Icon, Modal } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import axios from "axios";



const Online = ({ nextStepOnline, prevStepOnline, values, }) => {

    // handle change in button text

    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Deposit';
    const [buttonText, setButtonText] = useState(myOriginal);

    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [depositType, setDepositType] = useState();
    ///// states to handle my deposits type

    const PayType = "Investment";
    const URL = "cyanase.com";
    const [showTopUP, setTopUp] = useState(false);
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [myId, setID] = useState();
    const [currency, setCurrency] = useState();
    const [charge, setCharge] = useState();
    const [AmountValue, setAmount] = useState();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setEmail(data.email);
        setFname(data.fname);
        setLname(data.lname);
        setPhone(data.phone);
        setID(data.id);
        setCharge(data.charge);
    }, []);
    useEffect(() => {
        const dat = JSON.parse(localStorage.getItem("depositCurrency"));
        setDepositType(dat.depositCurrency);
        
    }, []);
    const PayProcess = ({ isOpen, onClose }) => {

        return (
            <Modal
                m={{ t: "8rem" }}
                isOpen={isOpen}
                onClose={onClose}
                rounded="md"
                maxW="24rem"
                h="auto"
            >
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    onClick={onClose}
                    cursor="pointer"
                />
                <Div d="flex" align="center" justify="center">
                    <Icon name="Loading" size="40px" />
                </Div>

                <Text textSize="subheader" textWeight="700" textAlign="center" textColor="#252859">
                    Processing {PayType} please wait....
                </Text>
            </Modal>
        );
    };
    function Payments({ MyAmount, URL, PayTyper }) {

        const ChargeAmount = parseInt(AmountValue) + parseInt(charge);
        const PayType = "Investment";
        setButtonText(myChange);
        const textref = Math.floor((Math.random() * 30) + 1);
        const ref = "cyanse-deposit" + textref + "flutter";

        const API_publicKey = "FLWPUBK-b248048d7e363a0497a7bf525c43d822-X";

        const x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: Email,
            amount: ChargeAmount,
            customer_phone: Phone,
            customer_firstname: Fname,
            customer_lastname: Lname,
            custom_title: 'Deposit',
            custom_description: 'membership',
            currency: currency,
            txref: ref,

            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function () { },
            callback: function (response) {
                const txref = response.data.txRef; // collect txRef returned and pass to a 					server page to complete status check.

                if (
                    response.data.chargeResponseCode == "00" || response.data.chargeResponseCode == "0"
                ) {
                    setTopUp(true);

                    const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, dataAmount: AmountValue, amount: ChargeAmount, currency: currency }
                    })
                        .then(result => {

                            const message = result.data.message;
                            const stateMe = result.data.error


                            if (stateMe == 200) {
                                setButtonText(myOriginal);



                                console.log(result.data);

                            } else if (message === "success") {
                                setButtonText(myOriginal);
                                setTopup(false);

                                const MyLogin = JSON.parse(localStorage.getItem("loginData"));

                                const newAmount = {
                                    ...MyLogin,
                                    "deposit": AmountValue,
                                };

                                localStorage.setItem('loginData', JSON.stringify(newAmount));
                            }


                        })                        .catch(error => alert(error));
                } else {
                    // redirect to a failure page.

                    setTopUp(true);

                    const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, dataAmount: AmountValue, amount: ChargeAmount, currency: currency }
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

                // use this to close the modal immediately after payment.
            }
        });

    }

    /// pay process modal

    const handleInputData = input => e => {
        // input value from the form
        setAmount(e.target.value);

        //updating for data state taking previous state and then adding new value to create new object

    }

    const Dollar = () => {

        return (

            <>

                <Div d="flex" justify="center">

                    <Text textColor="#898989">
                        Continue to deposit in {currency} and
                        we shall convert it to dollars {currency} 36900 rate
                    </Text>
                </Div>
            </>
        )

    }

    const Local = () => {

        return (

            <>

                <Div d="flex" justify="center">

                    <Text textColor="#898989">
                        Continue to deposit in {currency}
                       
                    </Text>
                </Div>
            </>
        )

    }

    ///function to process payments


    return (

        <>

            <Div m={{ t: "2rem" }} justify="center">
                <Div d="flex" justify="center">
                    <Text m={{ t: "1rem" }} textSize="subheader" textColor="#252859" textWeight="500">
                        Make a deposit to continue in {depositType}
                    </Text>
                </Div>
                {depositType == "dollar" ? <Dollar /> : <Local />}
                <PayProcess
                    isOpen={showTopUP}
                    onClose={() => setTopUp(false)}
                />
                <Div justify="center">
                    <Div d="flex" align="center" justify="center">
                        <Input w={{ xs: '18.5rem', md: '24rem' }}
                            {...register("amount", { required: true, maxLength: 15 })}
                            placeholder="Enter amount" name="amount" type="text"
                            m={{ t: "3rem" }}
                            p={{ x: "2.5rem" }}
                            onChange={handleInputData("amount")}
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

                    <Div d="flex" justify="center">
                        <Button w="24rem"
                            m={{ t: "2rem" }}
                            onClick={() => {

                                Payments(AmountValue, URL, PayType);

                            }
                            }
                            bg="warning700"
                            shadow="3"
                            hoverShadow="4"
                        >
                            {buttonText}
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


                {errors.fname && <p className="text-error">Your first name is required</p>}

            </Div>




        </>
    )

};
export default Online;