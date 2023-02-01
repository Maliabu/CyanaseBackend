import { Text, Div, Row, Col, Button, Radiobox, Label } from "atomize";
import React, { useState } from "react";

const StepThree = ({ nextStep, prevStep, values, handleFormData }) => {

    const [Risk, setValue] = useState("0");
    const [formerInvestment, SeTformer] = useState("0");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");

    function SetRisk(a) {
        setValue(a);

    }
    function toggleTime(b) {
        SeTformer(b);


    }
    values.risk = Risk;

    values.formerInvestment = formerInvestment;


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
                                <span className="span">What have you</span> invested in the past?
                            </Text>

                        </Div>
                        <Div

                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                            borderColor="#ff9b00;"
                        >
                            <Div p="0.5rem">
                                <div className="row radio">
                                    <Div
                                        m={{ t: "1rem" }}>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                onChange={() => {
                                                    toggleTime(1);
                                                    handleFormData("formerInvestment")
                                                }}

                                                checked={formerInvestment === 1}
                                                name="formerInvestment"
                                            />
                                            Treasuries
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                onChange={() => {
                                                    toggleTime(2);
                                                    handleFormData("formerInvestment")
                                                }}

                                                checked={formerInvestment === 2}
                                                name="formerInvestment"
                                            />
                                            Credit
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                onChange={() => {
                                                    toggleTime(3);
                                                    handleFormData("formerInvestment")
                                                }}

                                                checked={formerInvestment === 3}
                                                name="formerInvestment"
                                            />
                                            Listed Equity
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                onChange={() => {
                                                    toggleTime(5);
                                                    handleFormData("formerInvestment")
                                                }}

                                                checked={formerInvestment === 5}
                                                name="formerInvestment"
                                            />
                                            Treasuries
                                        </Label>
                                    </Div>
                                </div>
                            </Div>
                        </Div>
                    </Col>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500"textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">What is the</span> maximum loss you can withstand?
                            </Text>

                        </Div>

                        <Div

                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                            borderColor="#ff9b00;"
                        >
                            <Div p="0.5rem">
                                <div className="row radio">
                                    <Div
                                        m={{ t: "1rem" }}>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    SetRisk(2);
                                                    handleFormData("risk")
                                                }}

                                                checked={Risk === 2}
                                                name="risk"
                                            />
                                            less than 10%
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    SetRisk(3);
                                                    handleFormData("risk")
                                                }}

                                                checked={Risk === 3}
                                                name="risk"
                                            />
                                            10- 15%
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    SetRisk(5);
                                                    handleFormData("risk")
                                                }}

                                                checked={Risk === 5}
                                                name="risk"
                                            />
                                            15- 20%
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    SetRisk(7);
                                                    handleFormData("risk")
                                                }}

                                                checked={Risk === 7}
                                                name="risk"
                                            />
                                            Up to 25%
                                        </Label>
                                    </Div>
                                </div>
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

                                if (formerInvestment === "0") {

                                    /// next button
                                    setMyText("All fields are required");
                                    setError("yes");


                                } else {

                                    if (Risk === 0) {
                                        setMyText("All fields are required");
                                        setError("yes");


                                    } else {

                                        nextStep();

                                    }


                                }
                            }
                        }
                            >

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>

    )

};
export default StepThree;