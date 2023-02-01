import React from 'react';
import { useState, useEffect } from "react";
import { Text, Div, Row, Col, Button, Modal, Icon } from "atomize";
import axios from "axios"



// creating functional component ans getting props from app.js and destucturing them
const AccountType = ({ nextStepOnline, prevStepOnline, values, setFormData }) => {
    const [select, selected] = useState("home");
    const [dollarCharge, setDollarCharge] = useState();
    const [dollar, setDollar] = useState();
    const [paySub, setPay] = useState(false);
    const [currency, setCurrency] = useState();
    const [account, setAccount] = useState();
    const [showTopUP, setTopUp] = useState(false);
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [myId, setID] = useState();
    const [charge, setCharge] = useState();
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Pay now';
    const [buttonText, setButtonText] = useState(myOriginal);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setEmail(data.email);
        setFname(data.fname);
        setLname(data.lname);
        setPhone(data.phone);
        setID(data.id);
        setCharge(data.charge);
        setCurrency(data.currency);
        setDollarCharge("57000");
        setDollar(data.dollarSubscription);
    }, []);
 

    function PayNow() {

        const ChargeAmount = parseInt(dollarCharge) + parseInt(charge);
        const PayType = "dollarSubscription";
        setButtonText(myChange);
        const textref = Math.floor((Math.random() * 3098) + 1);
        const ref = "cyanase-dollar" + textref + "flutter";

        const API_publicKey = "FLWPUBK-2f0d88d10a57d95acfd495bb18b32d43-X";

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
                        data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, currency: currency }
                    })
                        .then(result => {

                            const message = result.data.message;
                            const stateMe = result.data.error


                            if (stateMe == 200) {
                                setButtonText(myOriginal);



                                console.log(result.data);

                            } else if (message === "success") {
                                setButtonText(myOriginal);
                                setDollar("yes")
                            }


                        })
                        .catch(error => alert(error));
                } else {
                    // redirect to a failure page.
                    const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, currency: currency }
                    })
                        .then(result => {

                            const message = result.data.message;
                            const stateMe = result.data.error


                            if (stateMe == 200) {
                                setButtonText(myOriginal);



                                console.log(result.data);

                            } else if (message === "success") {
                                setButtonText(myOriginal);
                                setDollar("yes")
                            }


                        })
                        .catch(error => alert(error));


                }

                // use this to close the modal immediately after payment.
            }
        });




    }

    function viannie() {


        const depositCurrency = { "depositCurrency": account };

        localStorage.setItem('depositCurrency', JSON.stringify(depositCurrency));
        nextStepOnline();

    }

    const DollarDeposits = ({ isOpen, onClose }) => {

        return (
            <>

                <Modal h="auto" isOpen={isOpen} onClose={onClose} align="center" rounded="md">
                    <Icon
                        name="Cross"
                        pos="absolute"
                        top="1rem"
                        right="1rem"
                        size="16px"
                        onClick={onClose}
                        cursor="pointer"
                    />
                    <Icon
                        name="Cross"
                        pos="absolute"
                        top="1rem"
                        right="1rem"
                        size="16px"
                        onClick={onClose}
                        cursor="pointer"
                    />
                    <Div d="flex" m={{ b: "4rem" }}>
                        <Icon
                            name="AlertSolid"
                            color="warning700"
                            m={{ t: "0.35rem", r: "0.5rem" }}
                        />
                        <Text p={{ l: "0.5rem", t: "0.25rem" }} textWeight="600" textColor="#252859" textSize="heading">
                            To activate your dollar investment account you need to pay subscription fee<span className="span">{currency}{dollarCharge}</span>
                        </Text>

                    </Div>

                    <Div d="flex" justify="flex-end">

                        <Button onClick={() => {

                            PayNow();
                        }
                        } bg="info900">
                            {buttonText}
                        </Button>
                    </Div>
                </Modal>

            </>



        );


    }
    return (

        <>


            <Text
                textAlign="center"
                textColor="#252859"
                textWeight="500"
                textSize="heading">
                Account type
            </Text>
            <Text
                textAlign="center"
                textColor="#828282"
                textWeight="500"
                textSize="subheader">
                Choose the currency in which you would like to invest your money
            </Text>


            {/*************************Card section***************************** */}

            <Div m={{ t: "2rem" }}>
                <DollarDeposits
                    isOpen={paySub}
                    onClose={() => setPay(false)}
                />
                <Row flexWrap="wrap" d="flex" align="center" flexDir="row">
                    <Col>
                        <Div
                            className={`${select === "dollar" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="auto"
                            w="auto"
                            border="1px solid"
                            borderColor="#ff9b00;"
                            onClick={() => {
                                selected("dollar");
                                if (dollar === "NO") {
                                    setAccount(currency);
                                    setPay(true);

                                } else {
                                    setAccount("dollar");

                                }


                            }
                            }>
                            <Div p="0.5rem">

                                <Text textAlign="center" textSize="heading" textWeight="500">
                                    Dollar account (USD)
                                </Text>
                                <Text textColor="#808080" textWeight="500">
                                    Deposit in your local currency and we shall change it to USD
                                    (Standard charges apply)
                                </Text>
                            </Div>
                        </Div>
                    </Col>
                    <Col h="10rem">
                        <Div
                            className={` ${select === "ugx" ? 'selected' : 'not_selected'}`}
                            p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="auto"
                            w="auto"
                            m={{ t: "0.5rem" }}
                            border="1px solid"
                            borderColor="#ff9b00;"
                            onClick={() => {
                                selected("ugx");
                                setAccount(currency);

                            }

                            }>
                            <Div p="0.5rem">

                                <Text textAlign="center" textSize="heading" textWeight="500">
                                    Basic account ({currency})
                                </Text>
                                <Text textColor="#808080" textWeight="500">
                                    Deposit and maintain your account in your local currency.
                                    (transaction charges apply)
                                </Text>
                            </Div>
                        </Div>
                    </Col>
                </Row>


            </Div>
            <Div d="flex" justify="center">
                <Row m={{ t: "2rem", l: "2rem" }} d="flex" align="center" justify="center">
                    <Col>
                        <Button variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="5rem"
                            onClick={() =>
                                prevStepOnline()
                            }>

                            Previous
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            p="0.5rem"
                            m={{ l: "1rem" }}
                            rounded="circle"
                            w="5rem"
                            onClick={() =>
                                viannie()
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>



    );
};

export default AccountType;