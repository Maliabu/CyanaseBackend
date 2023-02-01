import React from 'react';
import { useState, useEffect } from "react";
import { Text, Input, Div, Button, Icon, Modal } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import Online from "../topup/online";
import Offline from "../topup/offline";
import Wallet from "../topup/wallet";
import AccountType from "../topup/AccountType";
import DepositType from "../topup/AccountType";
const Final = ({ prevStep, values }) => {


    // States to handle errors in the form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //states to hide and show calculation
    const [hideDiv, showDiv] = useState("yes");
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Deposit from wallet';
    const [buttonText, setButtonText] = useState(myOriginal);
    const [currency, setCurrency] = useState();
    const [charge, setCharge] = useState();
    const [myId, setID] = useState();
    const [AmountValue, setAmount] = useState();
    const [Wallet, setWallet] = useState("");
    const [TextError, setErrors] = useState("none");
    const [myText, setText] = useState("Deposit from your wallet");
    const [myActivity, setActivity] = useState([]);
    const [showTopUP, setTopUp] = useState(false);
    const [weekly, setWeekly] = useState();
    const [Monthly, setMonthly] = useState();
    const [time, setTime] = useState();
    const [goal, setGoal] = useState();
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


    ///Get amount
    useEffect(() => {
        const GoalAmount = JSON.parse(localStorage.getItem("GoalAmount"));
        const value = JSON.parse(localStorage.getItem("MonthWeekAmount"));
        setWeekly(Math.round(value.week));
        setMonthly(Math.round(value.month));
        setAmount(GoalAmount.amount);
       

    }, []);
    ///get deposit type

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setWallet(data.wallet);
        setCharge(data.charge);
        setID(data.id);
        setActivity(data.active);
    }, []);


    const ModalSteps = ({ isOpen, onClose }) => {

        const [stepp, setstep] = useState(1);
        //state for form data
        const [formData, setFormData] = useState();


        // function for going to next step by increasing step state by 1
        const nextStepOnline = () => {
            setstep(stepp + 1);
        };
        const [directions, setValues] = useState("online");

        // Function for going back to previous directional page
        const back = () => {

            setValues("personal");
        }
        // function for going to previous step by decreasing step state by 1
        const prevStepOnline = () => {
            setstep(stepp - 1);
        };

        // handling form input data by taking onchange value and updating our previous form data state
        const handleInputData = input => e => {
            // input value from the form
            const { value } = e.target;

            //updating for data state taking previous state and then adding new value to create new object


        }

        const MySteps = () => {

            if (directions === "online") {
                switch (stepp) {
                    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 1:
                        return (


                            <DepositType setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    case 2:
                        return (


                            <AccountType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );

                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 3:
                        return (

                            <Online nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );

                    // default case to show nothing
                    default:
                        return (
                            <div className="App">
                            </div>
                        );
                }

            } else if (directions === "offline") {

                switch (stepp) {
                    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 1:
                        return (


                            <DepositType setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    case 2:
                        return (


                            <AccountType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 3:
                        return (

                            <Offline nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );

                }

            } else if (directions === "wallet") {

                switch (stepp) {
                    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm

                    case 1:
                        return (


                            <DepositType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    case 2:
                        return (


                            <AccountType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 3:
                        return (

                            <Wallet nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );

                }

            }





        }
        // javascript switch case to show different form in each step


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
                    size="16px"
                    onClick={onClose}
                    cursor="pointer"
                />
                <MySteps />

            </Modal>
        );
    };
    return (
        <>

            <Div

                m={{ t: "2rem" }}
                justify="center">



                <Div
                    d="flex"
                    justify="center"
                >
                    <Text
                        textAlign="center"
                        m={{ t: "1rem" }}
                        textSize="heading"
                        textColor="#252859"
                        textWeight="500">
                        Make a deposit to continue
                    </Text>
                </Div>
                <Div d="flex" justify="center">

                    <Text
                        textAlign="center"
                        textColor="#898989">
                        Deposit from Wallet
                    </Text>
                </Div>
                <ModalSteps
                    isOpen={showTopUP}
                    onClose={() => setTopUp(false)}
                />
                <Div m={{ t: "1rem" }}>

                    <Div d="flex" align="center" >
                        <Text p="0.5rem" textWeight="600" textColor="#252859" textSize="subheader">
                            Goal:
                        </Text>
                        <Text p="0.5rem" textColor="#252859" textAlign=" center"  textSize={{ xs: 'subheader', md: 'heading' }}>
                            {goal}
                        </Text>
                    </Div>
                    <Div d="flex" align="center" >
                        <Text p="0.5rem" textWeight="600" textColor="#252859" textSize="subheader">
                            Target:
                        </Text>
                        <Text p="0.5rem" textColor="#252859" textAlign=" center"  textSize={{ xs: 'subheader', md: 'heading' }}>
                            {currency}{AmountValue}
                        </Text>
                    </Div>
                    <Div d="flex" align="center" >
                        <Text p="0.5rem" textWeight="600" textColor="#252859" textSize="subheader">
                            Time Frame:
                        </Text>
                        <Text p="0.5rem" textColor="#252859" textAlign=" center"  textSize={{ xs: 'subheader', md: 'heading' }}>
                            {time} days
                        </Text>
                    </Div>
                    <Div d="flex" align="center" >
                        <Text p="0.5rem" textWeight="600" textColor="#252859" textSize="subheader">
                            Weekly investment:
                        </Text>
                        <Text p="0.5rem" textColor="#252859" textAlign=" center"   textSize={{ xs: 'subheader', md: 'heading' }}>
                            {currency}{weekly}
                        </Text>
                    </Div>
                    <Div d="flex" align="center" >
                        <Text p="0.5rem" textWeight="600" textColor="#252859" textSize="subheader">
                            Monthly investment:
                        </Text>
                        <Text p="0.5rem" textColor="#252859" textAlign=" center"  textSize={{ xs: 'subheader', md: 'heading' }}>
                        {currency}{Monthly}
                        </Text>
                    </Div>
                </Div>
                <Div justify="center">
                    <Div d="flex" justify="center">
                        <Button w="24rem"
                            m={{ t: "2rem", }} className="button2"
                            onClick={() =>
                                setTopUp(true)
                            }
                            bg="warning700"
                            shadow="3"
                            hoverShadow="4"
                        >
                            Start depositing now
                        </Button>
                    </Div>


                    <Div m={{ t: "2rem", }} d="flex" align="center" justify="center">

                        <Button variant="primary"
                            align="center"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="24rem"
                            onClick={() =>
                                prevStep()
                            }>

                            Previous
                        </Button>
                    </Div>

                </Div>
            </Div>

        </>
    )

};
export default Final;