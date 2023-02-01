import React, { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, Modal, Notification } from "atomize";
import "../../public/app.css";
import axios from "axios";






function Api() {

    const [showModal, HideModal] = useState(false);
    const [show, setShow] = useState("none");
    const [SeeKey, HideKey] = useState(false);
    const [showNote, HideNote] = useState(false);
    const [api, setapi] = useState();
    const [name, setName] = useState();
    const [website, setWebsite] = useState();
    const [Verified, setVerified] = useState();
    const [Deposits, setDeposits] = useState();
    const [Requests, setRequests] = useState();
    const [email, setEmail] = useState();
    const [API_ID, setAPI_ID] = useState();
    const [myText, setText] = useState(" Would you like to change your API keys?");
    ////Get user login data
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));

        setapi(data.api);
        setName(data.company);
        setWebsite(data.website);
        setVerified(data.APIverified);
        setDeposits(data.ApiDeposits);
        setRequests(data.totalRequest);
        setEmail(data.APIemail);
        setAPI_ID(data.api_id);

    });
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Yes, change';
    const [buttonText, setButtonText] = useState(myOriginal);

    /// change key
    function ChangeKEY() {

        setButtonText(myChange);
        setText('Processing...')
        /// send an api request
        // send data to the API

        const API_PATH = 'https://api.cyanase.com/api/getApiKey.php';




        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { id: API_ID }
        })
            .then(result => {

                const NewApi = result.data.api;
                const stateMe = result.data.status;

                console.log(result.data);

                if (stateMe == 100) {
                    setButtonText(myOriginal);
                    setText('Done!');
                    setShow("yes");
                    setapi(NewApi);
                    const MyLogin = JSON.parse(localStorage.getItem("loginData"));
                    const newApi = {
                        ...MyLogin,
                        "api": NewApi,
                    };

                    localStorage.setItem('loginData', JSON.stringify(newApi));


                } else {

                }

            })
            .catch(error => console.log(error));


    }
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
                        <Text p={{ l: "0.5rem", t: "0.25rem" }} textColor="#252859" textSize="subheader">
                            <b>API KEY</b>
                        </Text>

                    </Div>
                    <Text p={{ l: "0.5rem", t: "0.25rem" }} textColor="#252859" textSize="subheader">
                        {api}
                    </Text>
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
                        {myText}
                    </Text>
                </Div>
                <Text
                    textAlign="center" textSize="subheader">
                    {api}
                </Text>
                <Div d="flex" justify="flex-end">
                    <Button
                        onClick={onClose}
                        bg="gray200"
                        textColor="medium"
                        m={{ r: "1rem" }}
                    >
                        Cancel
                    </Button>
                    <Button onClick={() => ChangeKEY()} bg="info700">
                        {buttonText}
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
                                        <Text textSize="heading"><b>{Requests}</b></Text>
                                    </Div>
                                </Col>
                                <Col >
                                    <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                                        <Text textSize="subheader" textColor="white">Amount transferred</Text>
                                        <Text textSize="heading" textColor="white">UGX <b>{Deposits}</b></Text>
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
                                            <Text textColor="#252859">#######rjudyugirjj###....</Text>
                                            <Notification
                                                isOpen={showNote}
                                                onClose={() => HideModal(false)}
                                            >
                                                Copied
                                            </Notification>
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
                                            <Text textColor="#252859">{name}</Text>
                                            <Text textColor="#252859">{email}</Text>
                                            <Text textColor="#252859">{website}</Text>
                                            <Text textColor="#252859">verified: <b>{Verified}</b></Text>
                                            <Button
                                                bg="#252859"
                                                shadow="4"
                                                m={{ t: "1rem" }}
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