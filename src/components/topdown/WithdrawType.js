import React from 'react';
import { useState } from "react";
import { Text, Div } from "atomize";


const WithdrawType = ({ nextStepOnline, prevStepOnline, setValues, myLinks }) => {
  
    const [select, selected] = useState("home");  
    ///Get the link type for the investment
    return (

        <>
            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="heading">
                    Choose Withdraw method
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
                                Online Withdraw
                            </Text>
                        </Div>

                        <Div d="flex" align="center" justify="center">
                            <Text className="div_notes">
                                Make instant Withdraw through our platform
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
                                Offline Withdraw
                            </Text>
                        </Div>

                        <Div d="flex" align="center" justify="center">
                            <Text className="div_notes">
                               Request for a direct bank transfer into your  bank account
                            </Text>
                        </Div>
                    </Div>
                    
                </Div>

            </Div>
        </>
    )

};
export default WithdrawType;