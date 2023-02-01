import React from 'react';
import { useState} from "react";
import { Text, Div, Row, Col, Button } from "atomize";


const StepFour = ({ nextStep,prevStep}) => {
    const [select, selected] = useState("home");

    return (

        <>
            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="subheader">
                    How do you want to deposit
                </Text>
            </Div>
            {/*************************SACCO GROUPS***************************** */}
            <Div className={` ${select === "sacco" ? 'selected' : 'not_selected'}`}
                    m={{ t: "5rem" }} p="0.5rem" 
                    border="1px solid"
                    borderColor="#ff9b00;"
                    rounded="md"
                    shadow="3"
                    onClick={() =>
                        selected("sacco")
                    }>
                    
                       
                           <Div d="flex" justify="center" align="center">
                           <Text textSize="subheader" textWeight="500">
                                Auto renew deposits
                            </Text>
                           </Div>

                           <Div d="flex" justify="center" align="center">
                            <Text>
                                Automate deposit

                            </Text>
                        </Div>
                   
                </Div>


                <Div className={` ${select === "one" ? 'selected' : 'not_selected'}`}
                    m={{ t: "1rem" }} p="0.5rem" 
                    border="1px solid"
                    borderColor="#ff9b00;"
                    rounded="md"
                    shadow="3"
                    onClick={() =>
                        selected("one")
                    }>
                    
                       
                           <Div d="flex" justify="center" align="center">
                           <Text textSize="subheader" textWeight="500">
                                One time deposit
                            </Text>
                           </Div>

                           <Div d="flex" justify="center" align="center">
                            <Text>
                                Make a one time deposit

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
                            nextStep()
                        }>

                        Next
                    </Button>
                </Col>
            </Row>  
            </Div>
        </>
    )

};
export default StepFour;