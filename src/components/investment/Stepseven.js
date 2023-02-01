import { useState } from "react";
import { Text, Div, Row, Col, Button, Radiobox,Label } from "atomize";
import React  from "react";

const StepSeven = ({ nextStep, prevStep, values,handleFormData }) => {
   
    
    const [Borrow, setBorrow] = useState("0");
    const [checkError, setError] = useState("none");
    const [myText, setMyText] = useState(" Answer questions to continue");
   
    function MyToggle(a) {
        setBorrow(a);

    }
values.borrow = Borrow;

const [Policy, setPolicy] = useState("0");
    function MyPolicy(b) {
        setPolicy(b);

    }
values.policy = Policy;
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
                <Row flexDir={{ xs: 'column', lg: 'row' }} m={{ t:{xs: '1rem', md: '3rem'}}}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">Would you borrow</span> to invest?
                               
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
                                            MyToggle(2);
                                            handleFormData("borrow")
                                        }}

                                        checked={Borrow === 2}
                                        name="borrow"
                                    />
                                    YES
                                </Label>
                                

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onChange={() => {
                                            MyToggle(3);
                                            handleFormData("borrow")
                                        }}

                                        checked={Borrow === 3}
                                        name="borrow"
                                    />
                                    NO
                                </Label>
                                
               
                            </Div>
                        </Div>
                    </Col>
                  <Col>
                  <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">Would you take up an</span> insurance?
                               
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
                                            MyPolicy(2);
                                            handleFormData("policy")
                                        }}

                                        checked={Policy === 2}
                                        name="policy"
                                    />
                                    YES
                                </Label>
                                
                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onChange={() => {
                                            MyPolicy(1);
                                            handleFormData("policy")
                                        }}

                                        checked={Policy === 1}
                                        name="policy"
                                    />
                                    NO
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

                                if (Borrow === "0") {

                                    /// next button
                                    setMyText("All fields are required");
                                    setError("yes");


                                } else {

                                    if (Policy === 0) {
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
export default StepSeven;