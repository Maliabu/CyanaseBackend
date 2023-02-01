import { Button, Col, Div, Row, Text } from "atomize";
import React, { useState } from "react";




// creating functional component ans getting props from app.js and destucturing them
const SaccoStepTwo = ({ nextStep, prevStep, back }) => {
    const [select, selected] = useState("personal");

    return (

        <>

          
            <Text textSize="subheader" textAlign="center" textWeight="500" textColor="#808080">
                (Feature is Under development)
            </Text>
            {/**<Div>
                <Div align="center" d="flex" justify="center">
                    <Text textColor="#898989" textWeight="500" textSize="subheader">
                        Select a Sacco Group
                    </Text>

                </Div>
                <Div
                    bg="#eeeeee"
                    rounded="md"
                    m={{ t: "1rem" }}
                    p="0.5rem">
                    <Row>
                        <Col size="3">
                            <img className="sacco_text" src="image/dp.jpg" />
                        </Col>
                        <Col size="7">
                            <Text textWeight="700" textSize="subheader">
                                Lawyers Hub
                            </Text>
                            <Text textColor="#898989">
                                Created Jan:22:2022
                            </Text>
                        </Col>
                        <Col size="2">
                            <Text textWeight="500" textColor="#898989">
                                507 members
                            </Text>
                        </Col>
                    </Row>
                </Div>
                <Div
                    bg="#eeeeee"
                    rounded="md"
                    m={{ t: "1rem" }}
                    p="0.5rem">
                    <Row>
                        <Col size="3">
                            <img className="sacco_text" src="image/dp.jpg" />
                        </Col>
                        <Col size="7">
                            <Text textWeight="700" textSize="subheader">
                                Lawyers Hub
                            </Text>
                            <Text textColor="#898989">
                                Created Jan:22:2022
                            </Text>
                        </Col>
                        <Col size="2">
                            <Text textWeight="500" textColor="#898989">
                            507 members
                            </Text>
                        </Col>
                    </Row>
                </Div><Div
                    bg="#eeeeee"
                    rounded="md"
                    m={{ t: "1rem" }}
                    p="0.5rem">
                    <Row>
                        <Col size="3">
                            <img className="sacco_text" src="image/dp.jpg" />
                        </Col>
                        <Col size="7">
                            <Text textWeight="700" textSize="subheader">
                                Springs of Glory
                            </Text>
                            <Text textColor="#898989">
                                Created Jan:22:2022
                            </Text>
                        </Col>
                        <Col size="2">
                            <Text textWeight="500" textColor="#898989">
                            507 members
                            </Text>
                        </Col>
                    </Row>
                </Div><Div
                    bg="#eeeeee"
                    rounded="md"
                    m={{ t: "1rem" }}
                    p="0.5rem">
                    <Row>
                        <Col size="3">
                            <img className="sacco_text" src="image/dp.jpg" />
                        </Col>
                        <Col size="7">
                            <Text textWeight="700" textSize="subheader">
                                Meat Packers
                            </Text>
                            <Text textColor="#898989">
                                Created Jan:22:2022
                            </Text>
                        </Col>
                        <Col size="2">
                            <Text textWeight="500" textColor="#898989">
                            507 members
                            </Text>
                        </Col>
                    </Row>
                </Div><Div
                    bg="#eeeeee"
                    rounded="md"
                    m={{ t: "1rem" }}
                    p="0.5rem">
                    <Row>
                        <Col size="3">
                            <img className="sacco_text" src="image/dp.jpg" />
                        </Col>
                        <Col size="7">
                            <Text textWeight="700" textSize="subheader">
                                Highway OBs
                            </Text>
                            <Text textColor="#898989">
                                Created Jan:22:2022
                            </Text>
                        </Col>
                        <Col size="2">
                            <Text textWeight="500" textColor="#898989">
                            507 members
                            </Text>
                        </Col>
                    </Row>
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
                            onClick={() => {
                                
                                back();
                            }
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
                                nextStep()
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
                        </Div>****/}

        </>



    );
};

export default SaccoStepTwo;