import React, { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, Modal, Notification } from "atomize";
import "../../public/app.css";


function Api() {

    const [showModal, HideModal] = useState(false);
    const [SeeKey, HideKey] = useState(false);
    const [showNote, HideNote] = useState(false);
    //// Modal to enable user change API keys
    const SeeKeys = ({ isOpen, onClose }) => {

        return (
            <>

                <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
                    <Icon
                        name="Cross"
                        pos="absolute"
                        top="1rem"
                        right="1rem"
                        size="16px"
                        onClick={onClose}
                        cursor="pointer"
                    />
                    <Icon
                        name="Cross"
                        pos="absolute"
                        top="1rem"
                        right="1rem"
                        size="16px"
                        onClick={onClose}
                        cursor="pointer"
                    />
                    <Div d="flex" m={{ b: "4rem" }}>
                        <Icon
                            name="AlertSolid"
                            color="warning700"
                            m={{ t: "0.35rem", r: "0.5rem" }}
                        />
                        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
                            hdghjhjriourigjiudrjudyugirjgkjfdkjdguigtko
                        </Text>
                    </Div>
                    <Div d="flex" justify="flex-end">
                        <Button onClick={onClose} bg="info700">
                            Copy
                        </Button>
                    </Div>
                </Modal>

            </>



        );


    }

    /// POP UP MODAL TO CHANGE KEYS
    const ChangeKeysModal = ({ isOpen, onClose }) => {

        return (
            <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    onClick={onClose}
                    cursor="pointer"
                />
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    onClick={onClose}
                    cursor="pointer"
                />
                <Div d="flex" m={{ b: "4rem" }}>
                    <Icon
                        name="AlertSolid"
                        color="warning700"
                        m={{ t: "0.35rem", r: "0.5rem" }}
                    />
                    <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
                        Would you like to change your API keys?
                    </Text>
                </Div>
                <Div d="flex" justify="flex-end">
                    <Button
                        onClick={onClose}
                        bg="gray200"
                        textColor="medium"
                        m={{ r: "1rem" }}
                    >
                        Cancel
                    </Button>
                    <Button onClick={onClose} bg="info700">
                        Yes, change
                    </Button>
                </Div>
            </Modal>
        );
    };

    return (


        <>
            <Container>
                <Div m={{ t: "4rem" }} className="cont">
                    <Row>
                        <Col size="9">
                            <Row d="flex" flexDir="row">
                                <Col>
                                    <Div rounded="sm" className="my_card" justify="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>
                                        <Text textSize="subheader">API requests</Text>
                                        <Text textSize="heading"><b>23,900,848</b></Text>
                                    </Div>
                                </Col>
                                <Col >
                                    <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                                        <Text textSize="subheader" textColor="white">Amount transfred</Text>
                                        <Text textSize="heading" textColor="white">UGX <b>70,004,848</b></Text>
                                    </Div>
                                </Col>

                            </Row>
                            {/*****************************************DOLLAR ACCOUNT DISPLAY**************************************************** */}
                            <Div>
                                <Text m={{ t: "1rem" }} textSize="subheader" textColor={`#252859`}>
                                    <b></b>
                                </Text>

                                <Row>
                                    <Col>
                                        <Div bg="#f1f1f1" className='get_started'
                                            shadow="3" p={{ y: "2rem", x: "1.25rem" }}>
                                            <Text textSize="subheader" textColor="#252859"><b>API KEY</b></Text>
                                            <Text textColor="#252859">hgvjfdytytuuruhvnfgdjsnryyujhvjhdfjvh..</Text>
                                       
                                            <Div m={{ t: "1rem" }} d="flex" align="center">
                                                <Button
                                                    bg="black"
                                                    shadow="4"
                                                    prefix={
                                                        <Icon
                                                            name="EyeSolid"
                                                            size="16px"
                                                            color="white"
                                                            m={{ r: "0.5rem" }}
                                                        />
                                                    }
                                                    onClick={() => {
                                                        HideKey(true);

                                                    }
                                                    }
                                                    rounded="circle"
                                                >
                                                    Preview
                                                </Button>

                                                <Button
                                                    m={{ l: "4rem" }}
                                                    bg="orange"
                                                    onClick={() => {
                                                        HideModal(true);
                                                       
                                                    }
                                                    }
                                                    rounded="circle"
                                                >
                                                    Regenerate
                                                </Button>
                                            </Div>
                                            <ChangeKeysModal
                                                isOpen={showModal}
                                                onClose={() => HideModal(false)}
                                            />
                                            <SeeKeys
                                                isOpen={SeeKey}
                                                onClose={() => HideKey(false)}
                                            />
                                        </Div>
                                    </Col>
                                    <Col>

                                        <Div bg="#f1f1f1" className='get_started'
                                            shadow="3" p={{ y: "2rem", x: "1.25rem" }}>

                                            <Text textSize="subheader" textColor="#252859"><b>ACCOUNT</b></Text>
                                            <Text textColor="#252859">Cyanase</Text>
                                            <Text textColor="#252859">support@cyanse.com</Text>
                                            <Text textColor="#252859">https://cyanase.com</Text>
                                            <Text textColor="#252859">verified: <b>Yes</b></Text>
                                            <Button
                                                    bg="#252859"
                                                    shadow="4"
                                                  m={{t:"1rem"}}
                                                    rounded="circle"
                                                >
                                                   Documentation
                                                </Button>



                                        </Div>


                                    </Col>
                                </Row>
                            </Div>

                            {/********************************************GET STARTED*************************************************/}




                            {/*********************************************** <Graph />********************************************/}
                        </Col>

                    </Row>
                </Div>
            </Container>

        </>
    )

}
export default Api;