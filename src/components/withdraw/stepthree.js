import React from 'react';
import { Text, Div, Row, Col, Button } from "atomize";
import { Iconly } from "react-iconly";


const StepThree = ({ nextStep, prevStep }) => {


    return (

        <>
            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="subheader">
                    Tell us about your goal.
                </Text>
            </Div>
            <Div m={{ t: "2rem" }} p="0.5rem" bg="#f1f0f0" rounded="md">
                <Div >
                <Div d="flex" align="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text m={{ t: "-0.6rem" }} textWeight="500">
                          What do you want to achieve?
                        </Text>
                    </Div>
                    <input placeholder="Build a mansion" type="text" name="goal" className="myInput" />
                </Div>
                <Div m={{ t: "2rem" }} >

                    <Div d="flex" align="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text m={{ t: "-0.6rem" }} textWeight="500">
                            How long tdo you wish to accomplish your goal?
                        </Text>
                    </Div>

                    <input placeholder="5 years" type="text" name="goal" className="myInput" />

                </Div>
                <Div d="flex" justify="center">
                <Button
                    variant="primary"
                    align="center"
                    justify="center"
                    shadow="3"
                    hoverShadow="4"
                    rounded="circle"
                    bg="orange"
                    m={{ t: "1rem" }}
                    p="0.5rem"
                    w={{ xs: '100%', md: '24rem' }}
                >

                    Calculate
                </Button>

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
                            nextStep()
                        }>

                        Skip
                    </Button>
                </Col>
            </Row>  
            </Div>
            
        </>
    )

};
export default StepThree;