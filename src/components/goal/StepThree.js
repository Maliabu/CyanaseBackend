import React from 'react';
import { useState } from "react";
import { Text, Div, Row, Col, Button } from "atomize";


const StepThree = ({ nextStep, prevStep, values, handleFormData }) => {

    const [select, selected] = useState("home");
    const [depositType, setDepositType] = useState("auto");

    function setDeposit() {

        const Mydeposit = {"depositType":depositType};

        localStorage.setItem('depositType', JSON.stringify(Mydeposit));
      

    }

    return (

        <>

            <Text
                textSize="heading"
                textWeight="500"
                textAlign="center"
                textColor="#252859"
            >
                Deposit Type
            </Text>
            <Text
                textAlign="center"
                textColor="#828282"
                textWeight="500"
                textSize="subheader">
                How do you want to handle your investments
            </Text>

            {/*************************SACCO GROUPS***************************** */}
            <Div className={` ${select === "auto" ? 'selected' : 'not_selected'}`}
                m={{ t: "2rem" }} p="0.5rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
                onClick={() => {
                    selected("auto");
                    setDepositType("auto");
                    setDeposit();
                    
                }
                }>
                <input name="deposit_type" defaultValue={values.deposit_type} type="hidden" />

                <Div d="flex" justify="center" align="center">
                    <Text textSize="subheader" textWeight="500">
                        Auto deposit for goal
                    </Text>

                </Div>

                <Div d="flex" justify="center" align="center" >
                    <Text
                        textColor="#828282"
                    >
                        Make your deposits automatic
                        such that you do not miss out a single day

                    </Text>

                </Div>

            </Div>


            <Div className={` ${select === "one" ? 'selected' : 'not_selected'}`}
                m={{ t: "1rem" }} p="0.5rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
                onClick={() => {
                    selected("one");
                    setDepositType("one");
                    setDeposit();
                }
                }>


                <Div d="flex" justify="center" align="center">
                    <Text textSize="subheader" textWeight="500">
                        Manually invest
                    </Text>
                </Div>

                <Div d="flex" justify="center" align="center">
                    <Text>
                        Let me make deposits myself.

                    </Text>
                </Div>

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
                                prevStep()
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
                                {
                                nextStep();
                            
                            }
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>
        </>
    )

};
export default StepThree;