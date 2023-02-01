import React from 'react';
import { useState, useEffect } from "react";
import { Text, Button, Div, Col, Row, Icon, Modal, Input, Container } from "atomize";
import "../../public/app.css";
import axios from "axios";
import { Iconly } from 'react-iconly';
import ProgressBar from "../components/progressbar";
import { useForm } from "react-hook-form";
import StepOne from '../components/goal/StepOne';
import StepTwo from '../components/goal/StepTwo';
import StepThree from '../components/goal/StepThree';
import Final from '../components/goal/Final';
import StepFour from "../components/goal/StepFour";
import StepFive from "../components/goal/StepFive";
import Amount from '../components/goal/amount';



function ResGoal() {


    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Deposit';
    const [loading, finished] = useState("yes");
    const [buttonText, setButtonText] = useState(myOriginal);
    const [myGoals, setGoals] = useState([]);
    const [Processing, setProcessing] = useState(false);
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [myId, setID] = useState();
    const [currency, setCurrency] = useState();
    const [charge, setCharge] = useState();
    const [goalID, setGoalID] = useState();
    const [goalText, setGoalText] = useState();
    const [checker, setChecker] = useState();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setEmail(data.email);
        setFname(data.fname);
        setLname(data.lname);
        setPhone(data.phone);
        setID(data.id);
        setCharge(data.charge);
        setChecker(data.checker)
       
    }, []);

    useEffect(() => {

        setTimeout(() => {
    
          const API_PATH = 'https://api.cyanase.com/api/get_goal.php';
    
          const MyID = localStorage.getItem("loginID");
    
    
          axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: {id:MyID.qewwrueu}
    
          })
            .then(resulta => {
               
              setGoals(resulta.data.goalz);
    
              finished("no");
            })
            .catch(error => console.log(error));
    
        }, 3000);
      }, []);
    // States to handle errors in the form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputs, setInputs] = useState({});


    //states to handle the previous and next buttons
    const [step, setstep] = useState(1);

    //states for form data
    const [formData, setFormData] = useState({
        goal: "",
        mydate: "",
        deposit_type_one: "",
        amount: "",
        deposit_type_auto: "",

    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    // State to handle show and hiding goall addition modal
    const [showModal, hideModal] = useState(false);
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };
    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevStep => ({
            ...prevStep,
            [input]: value
        }));
    }


    const GoalSteps = () => {

        switch (step) {
            // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
            case 1:
                return (


                    <StepOne nextStep={nextStep} values={formData} />

                );
            case 2:
                return (


                    <StepTwo prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 3:
                return (


                    <Amount prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 4:
                return (


                    <StepThree prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 5:
                return (


                    <StepFour prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 6:
                return (


                    <StepFive prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            // O
            // O
            // Only formData is passed as prop to show the final value at form submit
            case 7:
                return (
                    <div className="App">
                        <Container>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                                    <Final prevStep={prevStep} values={formData} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                );

            // default case to show nothing
            default:
                return (
                    <div className="App">
                    </div>
                );
        }



    }

    const MyGoals = ({ isOpen, onClose }) => {
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="0"
                maxW="100vw"
                m="0"
                h="205vw"
            >
                <Icon m={{ l: "1rem" }} onClick={onClose} size="40px" name="LeftArrowSolid" color="gray400" />
                {/******Modal content */}
                <Div m={{ l: "2rem" }}>
                    <GoalSteps />
                </Div>

            </Modal>
        );
    };
    /// pay function


    const onSubmit = (datal) => {
        const AmountValue = datal.goalDeposit;

        const ChargeAmount = parseInt(AmountValue) + parseInt(charge);
        const PayType = "goal";
        setButtonText(myChange);
        const textref = Math.floor((Math.random() * 30) + 1);
        const ref = "cyanase-deposit-goal" + textref + "flutter";

        const API_publicKey = "FLWPUBK-b248048d7e363a0497a7bf525c43d822-X";

        const x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: Email,
            amount: ChargeAmount,
            customer_phone: Phone,
            customer_firstname: Fname,
            customer_lastname: Lname,
            custom_title: 'Deposit',
            custom_description: 'membership',
            currency: currency,
            txref: ref,

            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function () { },
            callback: function (response) {
                const txref = response.data.txRef; // collect txRef returned and pass to a 					server page to complete status check.

                if (
                    response.data.chargeResponseCode == "00" || response.data.chargeResponseCode == "0"
                ) {
                    setProcessing(true);

                    const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, dataAmount: AmountValue, currency: currency, goalID: goalID }
                    })
                        .then(result => {
                            console.log(result.data);
                            const message = result.data.message;
                            const stateMe = result.data.status


                            if (stateMe == 100) {
                                setButtonText(myOriginal);
                                setTopUp(false);
                                setProcessing(false)



                            } else if (message === "success") {
                                setButtonText(myOriginal);
                                setTopUp(false);
                                setProcessing(false)


                            }


                        })
                        .catch(error => alert(error));
                } else {
                    // redirect to a failure page.

                    setProcessing(true);

                    const API_PATH = 'https://api.cyanase.com/api/app_dp_money.php';
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, dataAmount: AmountValue, currency: currency, goalID: goalID }
                    })
                        .then(result => {

                            const message = result.data.message;
                            const stateMe = result.data.error
                            console.log(result.data);

                            if (stateMe == 200) {
                                setButtonText(myOriginal);

                                setProcessing(false);


                            } else if (message === "success") {

                                setButtonText(myOriginal);
                                setTopUp(false);
                                setProcessing(false);




                            }


                        })
                        .catch(error => alert(error));


                }

                // use this to close the modal immediately after payment.
            }
        });

    }

    /// States for change of conetent to display when user clicks a popup modal
    const [content, changeContent] = useState("deposit");

    ///state to show and hide modal MODAL
    const [showTopUP, setTopUp] = useState(false);


    ///MY POPUP  MODAL
    const Deposit = () => {

        return (

            <>

                <Div m={{ t: "2rem" }} justify="center">
                    <Div d="flex" justify="center">
                        <Text m={{ t: "1rem" }}
                            textSize="heading"
                            textColor="#252859"
                            textWeight="500">
                            {goalText}
                        </Text>
                    </Div>
                    <Div d="flex" justify="center">

                        <Text
                            textAlign="center"
                            textSize="subheader"
                            textColor="#898989">
                            Deposit money to achieve your financial goal
                        </Text>
                    </Div>
                    <Div justify="center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Div d="flex" align="center" justify="center">
                                <Input w={{ xs: '18.5rem', md: '24rem' }}
                                    {...register("goalDeposit", { required: true, maxLength: 15 })}
                                    placeholder="Enter amount" name="goalDeposit" type="number"

                                    m={{ t: "3rem" }}

                                    p={{ x: "2.5rem" }}
                                    prefix={

                                        <Iconly
                                            className="ivn"
                                            name="Wallet"
                                            primaryColor={`#252859`}
                                            set='bulk'
                                            secondaryColor='orange'
                                            stroke='bold'
                                        />
                                    }
                                    disabled={false}
                                />
                            </Div>
                            <Div d="flex" justify="center">
                                {errors.goalDeposit && <p className="text-error">Your amount is required</p>}
                            </Div>
                            <Div d="flex" justify="center">
                                <Button w="24rem" type="submit"
                                    m={{ t: "2rem" }}
                                    bg="#252859"
                                    shadow="3"
                                    hoverShadow="4"
                                >
                                    {buttonText}
                                </Button>
                            </Div>
                        </form>


                    </Div>




                </Div>




            </>
        )

    }

    const PayProcess = ({ isOpen, onClose }) => {

        return (
            <Modal
                m={{ t: "8rem" }}
                isOpen={isOpen}
                onClose={onClose}
                rounded="md"
                maxW="24rem"
                h="auto"
                bg="#252859"
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
                <Div d="flex" align="center" justify="center">
                    <Icon color="white" name="Loading" size="40px" />
                </Div>

                <Text textSize="subheader" textWeight="700" textAlign="center" textColor="white">
                    Processing deposit, please wait....
                </Text>
            </Modal>
        );
    };


    //MY modal handler
    const MyModal = ({ isOpen, onClose }) => {

        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="0"
                maxW={{ xs: 'auto', md: '40vw' }}
                m={{ t: "2rem" }}
                h="auto"
            >
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="20px"
                    onClick={onClose}
                    cursor="pointer"
                />

                <Deposit />
            </Modal>
        );

    }
    const [completed, setCompleted] = useState(40);


    return (
        <>
            <Div d="flex" align="center">
                <Text
                    textSize="heading"
                    textColor="#252859"
                    textWeight="500">
                    Your Goals
                </Text>
                <Div m={{ l: "2rem" }} p="0.5rem">
                    <Button
                        onClick={() => {
                            hideModal(true);


                        }
                        }
                        rounded="circle"
                        shadow="3"
                        bg="gray100"
                        border="1px solid"
                        borderColor="#252859"
                        textColor="#252859"
                    >
                        New goal
                    </Button>
                    <MyGoals
                        isOpen={showModal}
                        onClose={() => hideModal(false)
                        }
                    />
                </Div>

            </Div>

            <MyModal
                isOpen={showTopUP}
                onClose={() => setTopUp(false)}
            />
            <PayProcess
                isOpen={Processing}
                onClose={() => setProcessing(false)}
            />
            <Div className={` ${loading === "yes" ? 'display_yes' : 'display_none'}`}>
                <Icon color="#252859" name="Loading2" size="40px" />
            </Div>
            {myGoals.length ===0?'':
            myGoals.map((data) => {
                return (
                    <Div shadow="4" m={{ t: "1rem" }} key={data.goal_id} rounded="md" p={{ y: "1rem", x: "1.25rem" }} bg="white">
                        <Div d="flex">
                            <Div
                                className="goal-Svg"
                                h="30px" w="30px"
                                m={{ t: "0.5rem" }}
                                rounded="circle" bg="#F6ECDF"
                                p={{ x: "0.5rem", y: "0.5rem" }}>
                                <Iconly
                                    primaryColor='#ff9b00'
                                    name="AddUser"
                                    set='broken'
                                    stroke='bold'

                                />
                            </Div>
                            <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                                <Text textSize="subheader" textColor="#252859"><b>{data.goal}</b></Text>
                                <Text textColor="#CDCCCC"><b>Created {data.date} </b></Text>
                            </Div>
                            <Div p="0.5rem">
                                <Button
                                    onClick={() => {
                                        changeContent("deposit");
                                        setTopUp(true);
                                        setGoalID(data.goal_id);
                                        setGoalText(data.goal);
                                    }}
                                    bg="#ff9b00"
                                    rounded="circle"
                                    sgadow="5"
                                >
                                    Deposit
                                </Button>
                            </Div>
                        </Div>

                        <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                            <Row>
                                <Col>
                                    <Text textColor="#252859" textWeight="500">Week 1</Text>
                                </Col>
                                <Col>
                                    <Text textColor="#252859" textWeight="500">{currency} {data.amount} out of {data.setAmount}</Text>
                                </Col>
                            </Row>
                            {/***************************** Progress bar *************************/}
                            <Div>
                                <ProgressBar bgcolor={"#252859"} completed={data.percentage} />
                            </Div>

                        </Div>

                    </Div>
                )

            })}
            <Div className= {`${checker === "yes" ? 'display_none' : 'display_yes'}`} shadow="4"
                rounded="md" p={{ y: "1rem", x: "1.25rem" }} bg="white">
                <Div d="flex">
                    <Div
                        className="goal-Svg"
                        h="30px" w="30px"
                        m={{ t: "0.5rem" }}
                        rounded="circle" bg="#F6ECDF"
                        p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Iconly
                            primaryColor='#ff9b00'
                            name="AddUser"
                            set='broken'
                            stroke='bold'

                        />
                    </Div>
                    <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Text textSize="subheader" textColor="#252859"><b>Your goal e.g Trip to  Paris</b></Text>
                        <Text textColor="#CDCCCC"><b>Created 1st january 2020</b></Text>
                    </Div>
                    <Div p="0.5rem">
                        <Button

                            bg="#ff9b00"
                            rounded="circle"
                            sgadow="5"
                        >
                            Deposit
                        </Button>
                    </Div>
                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Row>
                        <Col>
                            <Text textColor="#252859" textWeight="500">Week 1</Text>
                        </Col>
                        <Col>
                            <Text textColor="#252859" textWeight="500">{currency} 500,000</Text>
                        </Col>
                    </Row>
                    {/***************************** Progress bar *************************/}
                    <Div>
                        <ProgressBar bgcolor={"#252859"} completed={completed} />
                    </Div>

                </Div>

            </Div>
        </>
    );

}
export default ResGoal