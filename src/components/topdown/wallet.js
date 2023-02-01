import React from 'react';
import { useState } from "react";
import { Text, Input, Div, Button } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";


const Wallet = ({ nextStepOnline, prevStepOnline }) => {
    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>

            <Div m={{ t: "2rem" }} justify="center">
                <Div d="flex" justify="center">
                    <Text textAlign="center" m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                        Make a deposit to continue
                    </Text>
                </Div>
                <Div d="flex" justify="center">

                    <Text  textAlign="center" textColor="#898989">
                        Deposit from Wallet
                    </Text>
                </Div>
                <Div m={{t:"1rem"}} d="flex" align="center" justify="center">

                    <Text textAlign="center" textColor="#252859" textSize="heading">
                        <span className="span">Balance:</span> UGX345,567
                    </Text>
                </Div>
                <Div justify="center">
                    <Div d="flex" justify="center">
                        <Input w={{ xs: '18.5rem', md: '24rem' }}
                            {...register("amount", { required: true, maxLength: 15 })}
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
                    <Div d="flex" justify="center">
                        <Button w="24rem"
                            m={{ t: "2rem",}} className="button2"
                            onClick={() =>
                                setTopUp(true)
                            }
                            bg="warning700"
                            shadow="3"
                            hoverShadow="4"
                        >
                            Deposit
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
export default Wallet;