import { useState } from "react";
import { Text, Div, Row, Col, Button, Label, Radiobox } from "atomize";
import React from "react";

const StepFour = ({ nextStep, prevStep, values, handleFormData }) => {
    const [select, selected] = useState("home");
    const [Amount, setAmount] = useState("0");
    const [source, SeTSource] = useState("0");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");
   

    function MyToggle(a) {
        setAmount(a);

    }
    function toggleTime(b) {
        SeTSource(b);


    }
    values.amount = Amount;

    values.source = source;
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
                <Row flexDir={{ xs: 'column', lg: 'row' }} m={{ t: { xs: '1rem', md: '3rem' } }}
                >
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">How much </span> do you want to invest?
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
                                                    MyToggle(1);
                                                    handleFormData("amount")
                                                }}

                                                checked={Amount === 1}
                                                name="amount"
                                            />
                                           below $1k
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    MyToggle(2);
                                                    handleFormData("amount")
                                                }}

                                                checked={Amount === 2}
                                                name="amount"
                                            />
                                            $1k-$2k
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    MyToggle(3);
                                                    handleFormData("amount")
                                                }}

                                                checked={Amount === 3}
                                                name="amount"
                                            />
                                            $2k-$5k
                                        </Label>

                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    MyToggle(5);
                                                    handleFormData("amount")
                                                }}

                                                checked={Amount === 5}
                                                name="amount"
                                            />
                                            $5k-$10k
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onClick={() => {
                                                    MyToggle(7);
                                                    handleFormData("amount")
                                                }}

                                                checked={Amount === 7}
                                                name="amount"
                                            />
                                            above $10k
                                        </Label>
                                    </Div>
                                </div>

                            </Div>
                        </Div>
                    </Col>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">What is your source </span>of capital for investing?
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

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox

                                        onChange={() => {
                                            toggleTime(2);
                                            handleFormData("source")
                                        }}

                                        checked={source === 2}
                                        name="source"
                                    />
                                    Employment
                                </Label>
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox

                                        onChange={() => {
                                            toggleTime(3);
                                            handleFormData("source")
                                        }}

                                        checked={source === 3}
                                        name="source"
                                    />
                                    Inheritance / Gift
                                </Label>
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox

                                        onChange={() => {
                                            toggleTime(5);
                                            handleFormData("source")
                                        }}

                                        checked={source === 5}
                                        name="source"
                                    />
                                    Savings / Superannuation
                                </Label>

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox

                                        onChange={() => {
                                            toggleTime(7);
                                            handleFormData("source")
                                        }}

                                        checked={source === 7}
                                        name="source"
                                    />
                                    Others
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

                                if (source === "0") {

                                    /// next button
                                    setMyText("All fields are required");
                                    setError("yes");


                                } else {

                                    if (Amount === 0) {
                                        setMyText("All fields are required");
                                        setError("yes");


                                    } else {

                                        nextStep();

                                    }


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
export default StepFour;