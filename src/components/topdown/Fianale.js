import { useState } from "react";
import { Text, Div } from "atomize";
import React from 'react';

const Finale = ({ nextStep, prevStep }) => {
    const [select, selected] = useState("home");

    return (

        <>
            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="subheader">
                    Choose deposit method
                </Text>
            </Div>
            <Div h="100%" m={{ t: "2rem" }} p="0.5rem" rounded="md">
                <Div >
                    <Div
                        onClick={() =>
                            selected("online")
                        }
                        className={` ${select === "online" ? 'selected' : 'not_selected'}`}
                        rounded="circle"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        shadow="4"
                        p="1rem"
                        m={{ t: "1rem" }}
                        d="flex"
                        align="center"
                        justify="center">
                        <Text textWeight="500">
                            Online deposit
                        </Text>
                    </Div>
                    <Div
                        onClick={() =>
                            selected("offline")
                        }
                        className={` ${select === "offline" ? 'selected' : 'not_selected'}`}
                        m={{ t: "1rem" }}
                        rounded="circle"
                        shadow="4"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        p="1rem"
                        d="flex"
                        align="center"
                        justify="center">
                        <Text textWeight="500">
                            Offline deposit
                        </Text>
                    </Div>
                    <Div
                        className={` ${select === "wallet" ? 'selected' : 'not_selected'}`}
                        m={{ t: "1rem" }}
                        onClick={() =>
                            selected("wallet")
                        }
                        rounded="circle"
                        shadow="4"
                        border="1px solid"
                        borderColor="#ff9b00;"
                        p="1rem"
                        d="flex"
                        align="center"
                        justify="center">
                        <Text textWeight="500">
                            Use my wallet
                        </Text>
                    </Div>
                </Div>

            </Div>



        </>
    )

};
export default Finale;