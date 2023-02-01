import React from 'react';
import { useState } from "react";
import { Text, Div, Row, Col, Button } from "atomize";
import { Iconly } from "react-iconly";




// creating functional component ans getting props from app.js and destucturing them
const stepTwo = ({ nextStep, prevStep }) => {
    const [select, selected] = useState("home");

    return (

        <>

            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="subheader">
                    Choose investment option
                </Text>

            </Div>
            {/*************************Card section***************************** */}

            <Div>

                <Row>
                    <Col>
                        <Div
                            className={` ${select === "re" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                    borderColor="#ff9b00;"
                            onClick={() =>
                                selected("re")
                            }>
                            <Div p="0.5rem">
                                <Div m={{ l: "2rem" }}>
                                    <Iconly

                                        name="Home"
                                        primaryColor={` ${select === "re" ? '#fafafa' : '#252859'}`}
                                        set='bulk'
                                        stroke='bold'
                                        secondaryColor="orange"
                                    />
                                </Div>
                                <Text textSize="subheader" textWeight="500">
                                    Real Assets
                                </Text>
                            </Div>
                        </Div>
                    </Col>
                    <Col h="10rem">
                        <Div
                            className={` ${select === "cs" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                    borderColor="#ff9b00;"
                            onClick={() =>
                                selected("cs")
                            }>
                            <Div p="0.5rem">

                                <Div m={{ l: "2rem" }}>
                                    <Iconly

                                        name="Chart"
                                        primaryColor={` ${select === "cs" ? '#fafafa' : '#252859'}`}
                                        set='bulk'
                                        stroke='bold'
                                        secondaryColor="orange"
                                    />
                                </Div>

                                <Text textSize="subheader" textWeight="500">
                                    Company stocks
                                </Text>


                            </Div>
                        </Div>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Div
                            className={` ${select === "pe" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                    borderColor="#ff9b00;"
                            onClick={() =>
                                selected("pe")
                            }>
                            <Div p="0.5rem">
                                <Div m={{ l: "2rem" }}>
                                    <Iconly

                                        name="Work"
                                        primaryColor={` ${select === "pe" ? '#fafafa' : '#252859'}`}
                                        set='bulk'
                                        stroke='bold'
                                        secondaryColor="orange"
                                    />
                                </Div>
                                <Text textSize="subheader" textWeight="500">
                                    Private Equity
                                </Text>
                            </Div>
                        </Div>
                    </Col>
                    <Col h="10rem">
                        <Div
                            className={` ${select === "vc" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                    borderColor="#ff9b00;"
                            onClick={() =>
                                selected("vc")
                            }>
                            <Div p="0.5rem">

                                <Div m={{ l: "2rem" }}>
                                    <Iconly

                                        name="Graph"
                                        primaryColor={` ${select === "vc" ? '#fafafa' : '#252859'}`}
                                        set='bulk'
                                        stroke='bold'
                                        secondaryColor="orange"
                                    />
                                </Div>

                                <Text textSize="subheader" textWeight="500">
                                    Venture Capital
                                </Text>


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

export default stepTwo;