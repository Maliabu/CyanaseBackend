import { useState } from "react";
import { Text, Div, Row, Col, Button, Radiobox, Label, Input } from "atomize";
import React from "react";



// creating functional component ans getting props from app.js and destucturing them
const stepTwo = ({ nextStep, prevStep, handleFormData, values }) => {

    const [radio, radiosetter] = useState("yes");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");
    const [objective, setValue] = useState("0");
    const [selectedTime, setTime] = useState("0");

    function toggleSelectedCount(a) {
        setValue(a);
        values.objective = objective;

    }
    function toggleTime(b) {
        setTime(b);

        values.time = selectedTime;

    }






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
                <Row flexDir={{ xs: 'column', lg: 'row' }}m={{ t: { xs: '1rem', md: '3rem' } }}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">What are your</span> objectives for investing?
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
                                                    toggleSelectedCount(2);
                                                    handleFormData("objective")
                                                }}

                                                checked={objective === 2}
                                                name="objective"
                                            />
                                            Savings
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                value="2"
                                                onChange={() => {
                                                    toggleSelectedCount(3);
                                                    handleFormData("objective")
                                                }}

                                                checked={objective === 3}
                                                name="objective"
                                            />
                                            Retirement
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onChange={() => {
                                                    toggleSelectedCount(5);
                                                    handleFormData("objective")
                                                }}

                                                checked={objective === 5}
                                                name="objective"
                                            />
                                            Capital preservation
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onChange={() => {
                                                    toggleSelectedCount(7);
                                                    handleFormData("objective")
                                                }}

                                                checked={objective === 7}
                                                name="objective"
                                            />
                                            Profit Generation
                                        </Label>
                                    </Div>
                                </div>

                            </Div>
                        </Div>
                    </Col>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500"textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">What is your</span>investment time horizon?
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
                                                    handleFormData("time")
                                                }}

                                                checked={selectedTime === 1}
                                                name="time"
                                            />
                                            less than 1 year
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox

                                                value="2"
                                                onChange={() => {
                                                    toggleTime(2);
                                                    handleFormData("time")
                                                }}

                                                checked={selectedTime === 2}
                                                name="time"
                                            />
                                            1 - 2 years
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"
                                            textSize="subheader"
                                        >
                                            <Radiobox


                                                onChange={() => {
                                                    toggleTime(3);
                                                    handleFormData("time")
                                                }}

                                                checked={selectedTime === 3}
                                                name="time"
                                            />
                                            2- 5years
                                        </Label>
                                        <Label
                                            align="center"
                                            textWeight="600"

                                        >
                                            <Radiobox


                                                onChange={() => {
                                                    toggleTime(5);
                                                    handleFormData("time")
                                                }}

                                                checked={selectedTime === 5}
                                                name="time"
                                            />
                                            Greater than 5years
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

                                if (objective === "0") {

                                    /// next button
                                    setMyText("All fields are required");
                                    setError("yes");


                                } else {

                                    if (selectedTime === 0) {
                                        setMyText("All fields are required");
                                        setError("yes");


                                    } else {

                                        nextStep();

                                    }


                                }
                            }
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>



    );
};

export default stepTwo;