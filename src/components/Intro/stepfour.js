import React from "react";
import { Text, Div, Row, Col, Button } from "atomize";
import { Iconly } from "react-iconly";



const stepFour = ({ nextStep, prevStep }) => {


    return (

        <>
            <Div m={{ t: "2rem" }}>
                <Div d="flex" justify="center" className="under" p="1rem">
                    <Iconly

                        name="People"
                        primaryColor={`#252859`}
                        set='bulk'
                        secondaryColor='orange'
                        stroke='bold'
                    />
                </Div>

                <Div d="flex" justify="center" textSize="heading">
                    <Text
                        textAlign="center"
                        textColor="#252859"
                        textSize="heading"
                        textWeight="500"
                    >
                        Sacco & Investment Clubs
                    </Text>
                </Div>
                <Text
                    textSize="subheader"
                    textAlign="center"
                    textWeight="500"
                >
                   Grow together with your friends and family.
                </Text>
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
                                nextStep()
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>



    );
};

export default stepFour;