import { useState } from "react";
import { Text, Div, Row, Col, Button, Radiobox,Label } from "atomize";
import React from "react";

const StepSix = ({ nextStep, prevStep, values, handleFormData }) => {

    const [Gain, setGain] = useState("0");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");
    
    function MyToggle(a) {
        setGain(a);

    }
values.gain = Gain;

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
                <Row m={{ t: { xs: '1rem', md: '3rem' } }}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">  The table below shows the highest one-year gain and one year </span>
                                loss on five different hypothetical
                                investments of $10,000. Given the potential profit/ loss, where would you invest your money??
                            </Text>

                        </Div>
                        <Row>
                            <Col>
                                <Text textWeight="600">
                                    Portfolio
                                </Text>
                                <Text textWeight="600">
                                    Highest Gain
                                </Text>
                                <Text textWeight="600">
                                    Highest loss
                                </Text>
                            </Col>

                            <Col>
                                <Text textWeight="600">
                                    A
                                </Text>
                                <Text>
                                    $1000
                                </Text>
                                <Text>
                                    $200
                                </Text>
                            </Col>
                            <Col>
                                <Text textWeight="600">
                                    B
                                </Text>
                                <Text>
                                    $1500
                                </Text>
                                <Text>
                                    $450
                                </Text>
                            </Col>
                            <Col>
                                <Text>
                                    C
                                </Text>
                                <Text>
                                    $2500
                                </Text>
                                <Text>
                                    $1200
                                </Text>
                            </Col>
                            <Col>
                                <Text textWeight="600">
                                    D
                                </Text>
                                <Text>
                                    $4000
                                </Text>
                                <Text>
                                    $2200
                                </Text>
                            </Col>
                        </Row>
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


                                        onClick={() => {
                                            MyToggle(2);
                                            handleFormData("gain")
                                        }}

                                        checked={Gain === 2}
                                        name="gain"
                                    />
                                    A
                                </Label>
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(3);
                                            handleFormData("gain")
                                        }}

                                        checked={Gain === 3}
                                        name="gain"
                                    />
                                    B
                                </Label>

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(5);
                                            handleFormData("gain")
                                        }}

                                        checked={Gain === 5}
                                        name="gain"
                                    />
                                    C
                                </Label>
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onClick={() => {
                                            MyToggle(7);
                                            handleFormData("gain")
                                        }}

                                        checked={Gain === 7}
                                        name="gain"
                                    />
                                    A
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

                                if (Gain === "0") {

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
export default StepSix;