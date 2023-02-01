import React from 'react';
import { useState, useEffect } from "react";
import { Text, Input, Div, Button, Icon } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import axios from "axios";

const Wallet = ({ nextStepOnline, prevStepOnline }) => {
    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Deposit from wallet';
    const [buttonText, setButtonText] = useState(myOriginal);
    const [currency, setCurrency] = useState();
    const [charge, setCharge] = useState();
    const [myId, setID] = useState();
    const [AmountValue, setAmount] = useState();
    const [Wallet, setWallet] = useState("");
    const [TextError, setErrors] = useState("none");
    const [myText, setText] = useState("Deposit from your wallet");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setWallet(data.wallet);
        setCharge(data.charge);
        setID(data.id);
    }, []);


    const Changer = input => e => {

        setAmount(e.target.value);



    }


    function WalletDeposits() {


        if (AmountValue < Wallet) {

            setButtonText(myChange);
            /// Make an API request

            const API_PATH = 'https://api.cyanase.com/api/wallet_dp_investment.php';

            const AmountCharge = parseInt(AmountValue) + parseInt(charge);
            const NewAmount = parseInt(Wallet) - parseInt(AmountCharge);
            /// Make a request to update the data base
            axios({
                method: 'POST',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: { id: myId, amount: AmountValue, AmountCharge: AmountCharge, }
            })
                .then(result => {

                    const message = result.data.message;
                    const stateMe = result.data.error
                    console.log(result.data);

                    if (stateMe == 200) {
                        setButtonText(myOriginal);




                    } else if (message === "success") {

                        setButtonText(myOriginal);

                        setWallet(NewAmount);
                        const MyLogin = JSON.parse(localStorage.getItem("loginData"));

                        const newAmount = {
                            ...MyLogin,
                            "wallet": NewAmount,
                        };
                        alert("done");
                        localStorage.setItem('loginData', JSON.stringify(newAmount));
                    }


                })
                .catch(error => alert(error));


        } else {
            setErrors("yes");
            setText("You have insufficient balance on your wallet");

        }
    }
    const onSubmit = (datal) => {

        WalletDeposits();


    }
    return (
        <>

            <Div m={{ t: "2rem" }} justify="center">
                <Div d="flex" justify="center">
                    <Text textAlign="center" m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                        Make a deposit to continue
                    </Text>
                </Div>
                <Div d="flex" justify="center">

                    <Text textAlign="center" textColor={` ${TextError === "none" ? '#898989' : 'red'}`}>
                        {myText}
                    </Text>
                </Div>
                <Div m={{ t: "1rem" }} d="flex" align="center" justify="center">

                    <Text textAlign="center" textColor="#252859" textSize="heading">
                        <span className="span">Balance:</span> {currency}{Wallet}
                    </Text>
                </Div>
                <Div justify="center">
                    <form className="myform" onSubmit={handleSubmit(onSubmit)}>


                        <Div d="flex" justify="center">

                            <Input w={{ xs: '18.5rem', md: '24rem' }}
                                {...register("amount", { required: true, maxLength: 15 })}
                                placeholder="Enter amount" name="amount" type="text"
                                m={{ t: "3rem" }}
                                p={{ x: "2.5rem" }}

                                onChange={Changer("amount")}
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
                        {errors.amount && <p className="text-error">Enter amount to continue</p>}
                        <Div d="flex" justify="center">
                            <Button w="24rem" type="submit"
                                m={{ t: "2rem", }} className="button2"
                                bg="warning700"
                                shadow="3"
                                hoverShadow="4"
                            >
                                {buttonText}
                            </Button>

                        </Div>
                    </form>
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
export default Wallet;