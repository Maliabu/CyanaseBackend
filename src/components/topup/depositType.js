import React from 'react';
import { useState } from "react";
import { Text, Div, Button } from "atomize";
import { NavLink } from "react-router-dom";


const DepositType = ({ nextStepOnline, prevStepOnline, setValues, myLinks }) => {
    const [select, selected] = useState("home");
    ///Get the link type for the investment


    return (

        <>
            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="heading">
                    Choose deposit method
                </Text>
            </Div>
            <Div m={{ t: "2rem" }} p="0.5rem" rounded="md">
                <Div >
                    <Div
                        onClick={() => {
                            nextStepOnline();
                            selected("online");
                            setValues("online");
                        }

                        }
                        className={` ${select === "online" ? 'selected' : 'not_selected'}`}
                        rounded="md"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        shadow="4"
                        p="1rem"
                        m={{ t: "1rem" }}
                    >
                        <Div

                            d="flex"
                            align="center"
                            justify="center">
                            <Text textWeight="500">
                                Online deposit
                            </Text>
                        </Div>

                        <Div d="flex" align="center" justify="center">
                            <Text className="div_notes">
                                Make instant deposit through our platform
                            </Text>
                        </Div>
                    </Div>
                    <Div
                        onClick={() => {

                            selected("offline");
                            setValues("offline");
                            nextStepOnline();

                        }

                        }
                        className={` ${select === "offline" ? 'selected' : 'not_selected'}`}
                        m={{ t: "1rem" }}
                        rounded="md"
                        shadow="4"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        p="1rem"

                    >
                        <Div d="flex"
                            align="center"
                            justify="center">
                            <Text textWeight="500">
                                Offline deposit
                            </Text>
                        </Div>

                        <Div d="flex" align="center" justify="center">
                            <Text className="div_notes">
                                Deposit money in our bank account and send us a deposit receipt
                            </Text>
                        </Div>
                    </Div>
                    <Div
                        className={` ${select === "wallet" ? 'selected' : 'not_selected'}`}
                        m={{ t: "1rem" }}
                        onClick={() => {
                            selected("wallet");
                            setValues("wallet");
                            nextStepOnline();

                        }

                        }
                        rounded="md"
                        shadow="4"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        p="1rem"
                    >
                        <Div d="flex"
                            align="center"
                            justify="center">
                            <Text textWeight="500">
                                Use my wallet
                            </Text>
                        </Div>

                        <Div d="flex" align="center" justify="center">
                            <Text className="div_notes">
                                Use your already existing balance in your digital wallet
                            </Text>
                        </Div>
                    </Div>
                </Div>

            </Div>
            <NavLink to={`${myLinks === "resDeposit" ? '/ResInvestment' :'/investment'}`}>
                <Button variant="primary"
                    align="center"
                    shadow="3"
                    hoverShadow="4"
                    bg={`#252859`}
                    p="0.5rem"
                    rounded="circle"
                    w="100%">

                    Edit my risk profile
                </Button>
            </NavLink>


        </>
    )

};
export default DepositType;