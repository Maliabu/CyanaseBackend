import { useState } from "react";
import { Text, Div, Row, Col, Button, Radiobox,Label } from "atomize";
import React from "react";

const StepFive = ({ nextStep, prevStep, values, handleFormData }) => {
  
    const [Tax, setTax] = useState("0");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");


    function MyToggle(a) {
        setTax(a);

    }
values.tax = Tax;
    return (

        <>



            <Div>
                <Div align="center" d="flex" justify="center">
                <Text
                        className={` ${checkError === "none" ? 'yom' : 'deye'}`}
                        textWeight="500"
                        textSize={{ xs: 'subheader', md: 'heading' }}>
                        {myText}
                    </Text>
                </Div>
                <Row flexDir={{ xs: 'column', lg: 'row' }} m={{ t: { xs: '1rem', md: '3rem' } }}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500"textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">Tax savings, in some instances, can be obtained from investments </span>.Which
                                of the following best describes your investment goal?
                            </Text>
                        </Div>
                        <Div

                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="auto"
                            border="1px solid"
                            borderColor="#ff9b00;"
                        >
                            <Div p="0.5rem">

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(2);
                                            handleFormData("tax")
                                        }}

                                        checked={Tax === 2}
                                        name="tax"
                                    />
                                    Preferably guaranteed returns, before tax savings
                                </Label>

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(3);
                                            handleFormData("tax")
                                        }}

                                        checked={Tax === 3}
                                        name="tax"
                                    />
                                    Stable, reliable returns, minimal tax savings
                                </Label>
                     
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(5);
                                            handleFormData("tax")
                                        }}

                                        checked={Tax === 5}
                                        name="tax"
                                    />
                                    Moderate variability in returns, reasonable tax savings
                                </Label>
            
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(7);
                                            handleFormData("tax")
                                        }}

                                        checked={Tax === 7}
                                        name="tax"
                                    />
                                    Unstable but potentially higher returns, maximize tax savings
                                </Label>
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
                            onClick={() => {

                                if (Tax === "0") {

                                    /// next button
                                    setMyText("All fields are required");
                                    setError("yes");


                                } else {

                                

                                        nextStep();



                                }
                            }}>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>
    )

};
export default StepFive;