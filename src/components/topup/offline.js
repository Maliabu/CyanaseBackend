import React from 'react';
import { useState, useEffect } from "react";
import { Text, Div, Button, Icon, Notification, Col, Row } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import axios from "axios"

const Offline = ({ nextStepOnline, prevStepOnline }) => {
    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [UploadNote, SetUploadNote] = useState(false);
    const [showTopUP, setTopUp] = useState(false);
    const [File, setFile] = useState();
    const [myId, setID] = useState();
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Upload Document';
    const [buttonText, setButtonText] = useState(myOriginal);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));

        setID(data.id);

    }, []);

    function handlePicture(e) {

        setFile(URL.createObjectURL(e.target.files[0]));
        e.preventDefault();
        const formData = new FormData();
        formData.append("File", "setFile");
        const API_PATH = 'https://api.cyanase.com/api/change_dp.php';

        // MAKE AN AJAX REQUEST
        SetUploadNote(true);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: formData,
        })
            .then(resulta => {
                const message = resulta.data.message;
                const stateMe = resulta.data.status



                if (stateMe == 200) {
                    setButtonText(myOriginal);
                    SetText(message);
                    setError("yes");


                } else if (stateMe == 100) {
                    setButtonText(myOriginal);
                    SetText(message);
                    setError("none");
                }


            })
            .catch(error => console.log(error));
    }
    return (
        <>

            <Div justify="center">
                <Div d="flex" align="center" justify="center">
                    <Text textAlign="center" m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                        Make an offline deposit
                    </Text>
                </Div>
                <Text textAlign="center" textColor="#898989" textSize="subheader">
                    Deposit money to our  bank account and proceed to send us your deposit receipt
                </Text>
                <Div d="flex" justify="center">
                    <Row>

                        <Col w="auto">
                            <Text textWeight="900" textColor="#252859">
                                Bank name
                            </Text>
                            <Text textWeight="900" textColor="#252859">
                                Account name
                            </Text>
                            <Text textWeight="900" textColor="#252859" >
                                Account number
                            </Text>
                            <Text textWeight="900" textColor="#252859" >
                                SWIFT CODE
                            </Text>

                        </Col>

                        <Col>
                            <Text textColor="#252859" >
                                Diamond Trust bank
                            </Text>
                            <Text textColor="#252859">
                                cyanase Technology and Investment LTD
                            </Text>
                            <Text textColor="#252859">
                                0190514001
                            </Text>
                            <Text textColor="#252859">
                                DTKEUGKAXXX
                            </Text>
                        </Col>
                    </Row>




                </Div>
                <Div m={{ t: "2rem" }} d="flex" align="center" justify="center" className="topera">
                    <Text textColor="#252858">Send your deposit receipt to our Email:</Text>
                </Div>
                <Div>
                <Text textAlign="center"textColor="#252859" textSize="heading">deposit@cyanase.com</Text>
                </Div>
                <Div  >
                   

                    <Div m={{ t: "2rem", }} d="flex" align="center" justify="center">

                        <Button variant="primary"
                            align="center"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="24rem"
                            onClick={() =>
                                prevStepOnline(myChange)
                            }>

                            Previous
                        </Button>
                    </Div>

                </Div>


                {errors.fname && <p className="text-error">Your first name is required</p>}

            </Div>

        </>
    )

};
export default Offline;