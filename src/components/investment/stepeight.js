import { useState, useEffect } from "react";
import { Text, Div, Row, Col, Button, Radiobox, Icon, Label, Modal } from "atomize";
import React from "react";
import axios from 'axios';
import Final from "./Final";
import { Iconly } from "react-iconly";

const StepEight = ({ nextStep, prevStep, values, handleFormData }) => {

    ///// my values
    const { risk, gain, amount, time, objective, policy, impact, formerInvestment,
        borrow, source, tax } = values;
    //// function to submit and handle risk profile data
    const [Investor, setTEXT] = useState();
    const [credit, setCredit] = useState();
    const [cash, setCash] = useState();
    const [venture, setVenture] = useState();
    const [returnz, setReturn] = useState();
    const [showSubmit, setSubmit] = useState(false);
    const [UserID, setID] = useState();

    const Processing = () => {

        return (
            <>
                <Text textWeight="900" textColor="#808080">Processing...</Text>
            </>
        )

    }

    const [Html, setHtml] = useState(<Processing />);


    ////Get user login data
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));

        setID(data.id);
    }, []);
    ///function subit datat


    function ApiRequest() {


        const API_PATH = 'https://api.cyanase.com/api/risk_profile.php';
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { id: UserID, risk: risk, gain: gain, amount: amount, time: time, objective: objective, policy: policy, impact: impact, formerInvestment: formerInvestment, borrow: borrow, source: source, tax: tax }
        })
            .then(resulta => {
                const message = resulta.data.message;
                const stateMe = resulta.data.status;
            
                if (stateMe == 200) {

                    const MyLogin = JSON.parse(localStorage.getItem("loginData"));

                    const newAmount = {
                        ...MyLogin,
                        "CompletedProfile": "YES",
                    };

                    localStorage.setItem('loginData', JSON.stringify(newAmount));
                    nextStep();
                }


            })
            .catch(error => console.log(error));


    }

    const SubmitRiskProfile = ({ isOpen, onClose }) => {

        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="md"
                maxW="40vw"
                top="50%"
                m={{ t: "2rem" }}
                h="auto"
            >
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    onClick={onClose}
                    cursor="pointer"
                />
                {Html}

            </Modal>
        );
    };

    const [Impact, setImpact] = useState("0");
    function MyToggle(a) {
        setImpact(a);

    }
    values.impact = Impact;

    return (

        <>



            <Div>
                <Div align="center" d="flex" justify="center">
                    <Text textColor="#828282" textWeight="500" textSize={{ xs: 'subheader', md: 'heading' }}>
                        Answer questions to continue
                    </Text>

                </Div>
                <Row m={{ t: { xs: '1rem', md: '3rem' } }}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500"  textSize={{ xs: 'subheader', md: 'heading' }}>
                                <span className="span">Considering inflation,</span>  growth investing is often used to
                                counteract its effect. Which of the following options best
                                resonates with you?
                            </Text>
                        </Div>
                        <Div

                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="1auto"
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
                                            handleFormData("impact")
                                        }}

                                        checked={Impact === 2}
                                        name="impact"
                                    />
                                    I am comfortable with the arrangement to beat inflation
                                </Label>

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onChange={() => {
                                            MyToggle(3);
                                            handleFormData("impact")
                                        }}

                                        checked={Impact === 3}
                                        name="impact"
                                    />
                                    I know the risks associated with inflation, but I would prefer middle ground
                                </Label>

                                <Label
                                    align="center"
                                    textWeight="600"
                                    textSize="subheader"
                                >
                                    <Radiobox


                                        onChange={() => {
                                            MyToggle(5);
                                            handleFormData("impact")
                                        }}

                                        checked={Impact === 5}
                                        name="impact"
                                    />
                                    It could reduce my savings but I have no tolerance for loss
                                </Label>

                            </Div>
                        </Div>
                    </Col>

                </Row>

                <SubmitRiskProfile
                    isOpen={showSubmit}
                    onClose={() => setSubmit(false)}
                />
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

                                if (Impact === "0") {

                                    /// next button
                                    setTEXT("All fields are required");
                                    setError("yes");


                                } else {






                                    ApiRequest();
                                    setSubmit(true);



                                }
                            }}
                        >

                            Submit
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>
    )

};
export default StepEight;