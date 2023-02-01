import React, { useState, useEffect, useRef } from "react";
import { Text, Div, Row, Col, Button, Radiobox, Label, Notification, Icon } from "atomize";
import axios from 'axios';



const StepFive = ({ nextStep, prevStep, values, handleFormData }) => {
    ///// my values
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Submit';
    const [buttonText, setButtonText] = useState(myOriginal);
    const [MyDate, setDate] = useState();
    const [UploadNote, SetUploadNote] = useState(false);
    const [UserID, setID] = useState();
    const [time, setTime] = useState();
    const [goal, setGoal] = useState();
    const [Amount, setAmount] = useState();
    const [frequency, setFrequency] = useState();
    const [depositType, setDepositType] = useState();

    function MyToggle(a) {
        setDate(a);

    }
    ////Get user login data
    useEffect(() => {
        const GoalTime = JSON.parse(localStorage.getItem("GoalTime"));

        setTime(GoalTime.time);
        setGoal(GoalTime.goal);
    }, []);

    /// get user Id
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));

        setID(data.id);
    }, []);

    /// frequency
    useEffect(() => {
        const MyReminder = JSON.parse(localStorage.getItem("MyReminder"));

        setFrequency(MyReminder.reminder);

    }, []);
    ///Get amount
    useEffect(() => {
        const GoalAmount = JSON.parse(localStorage.getItem("GoalAmount"));

        setAmount(GoalAmount.amount);

    }, []);
    ///get deposit type
    useEffect(() => {
        const depositType = JSON.parse(localStorage.getItem("depositType"));

        setDepositType(depositType.depositType);

    }, []);
    /// Run API REquest 

    function ApiRequest() {
        setButtonText(myChange);
        const API_PATH = 'https://api.cyanase.com/api/goal_set.php';

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { id: UserID, goal: goal, time: time, amount: Amount, frequency: frequency, deposit_type: depositType, RemindDate: MyDate }
        })
            .then(resulta => {
                const message = resulta.data.message;
                const stateMe = resulta.data.status
     


                if (stateMe == 200) {
                    setButtonText(myOriginal);
                    nextStep();


                }


            })
            .catch(error =>{

                setError("yes");
                SetText("Check your internet connection");
                setButtonText(myOriginal);
                console.log(error.data);

            } );


    }
    return (
        <>
            <Div>
                <Text
                    textSize="heading"
                    textWeight="500"
                    textAlign="center"
                    textColor="#252859"
                >
                    Reminder
                </Text>
                <Text
                    textAlign="center"
                    textColor="#828282"
                    textWeight="500"
                    textSize="subheader">
                    Let us remind you when you forget to deposit
                </Text>
                <Text textSize="1rem"
                    textWeight="600" textAlign="center"
                    m={{ t: "2rem" }}>Select date</Text>
                <Div textColor="#252859" flexDir={{ xs: 'column', lg: 'row' }}
                    d={{ md: "flex" }} m={{ t: "1rem" }}>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >

                        <Radiobox
                            onChange={() => { MyToggle(1);  }}
                            checked={MyDate === 1}
                            name="mydate"
                        />
                        Monday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >

                        <Radiobox
                            onChange={() => { MyToggle(2); }}
                            checked={MyDate === 2}
                            name="mydate"
                        />
                        Tuesday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => { MyToggle(3); }}
                            checked={MyDate === 3}
                            name="mydate"
                        />
                        Wednesday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => { MyToggle(4); }}
                            checked={MyDate === 4}
                            name="mydate"
                        />
                        Thursday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => { MyToggle(5);  }}
                            checked={MyDate === 5}
                            name="mydate"
                        />
                        Friday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => { MyToggle(6); }}
                            checked={MyDate === 6}
                            name="mydate"
                        />
                        Saturday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => { MyToggle(7);  }}
                            checked={MyDate === 7}
                            name="mydate"
                        />
                        Sunday
                    </Label>
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
                                    ApiRequest()
                                }>

                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                </Div>
                <Notification
                    m={{ t: "10rem" }}
                    bg="info700"
                    textColor="#252859"
                    isOpen={UploadNote}
                    onClose={() => SetUploadNote(false)}
                    prefix={
                        <Icon

                            name="infoSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />

                    }
                >
                    Processing please wait.....
                </Notification>
            </Div>
        </>
    )


}
export default StepFive;