import React from 'react';
import { useState } from "react";
import { Text, Div, Modal, Icon, Button } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";
import WithdrawType from "../topdown/WithdrawType";
import Online from "../topdown/online";
import Offline from "../topdown/offline";
import Wallet from "../topdown/wallet";


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, setValue,links }) => {

   
    const [select, selected] = useState("home");
    const [StepDirection, setDirection] = useState("sacco");

    /****************************withdraw MODAL************************ */
    const [showtopdown, settopdown] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    //Steps one takes if they choose personal Investments
    const ModalSteps = ({ isOpen, onClose }) => {

        const [stepp, setstep] = useState(1);
        //state for form data
        const [formData, setFormData] = useState({
            fname: "",
            lname: "",
            email: "",
            DOB: "",
            country: "",
            Phone: "",
            gender: "",
            userType: ""
        });


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
            setFormData(prevState => ({
                ...prevState,
                [input]: value
            }));
        }

        const MySteps = () => {

            if (directions === "online") {
                switch (stepp) {
                    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 1:
                        return (


                            <WithdrawType myLinks={links}setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 2:
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


                            <WithdrawType setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 2:
                        return (

                            <Offline nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

                        );

                }

            } else if (directions === "wallet") {

                switch (stepp) {
                    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 1:
                        return (


                            <WithdrawType setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 2:
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
                h="80vh"
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

    // Complete risk profile modal . This state checks mif user has completetd the risk profiler or not
    const [Profiler, showProfile] = useState("YES");
    const [showRisk, setRisk] = useState(false);
    const RiskProfile = ({ isOpen, onClose }) => {



        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="0"
                maxW={{ xs: 'auto', md: '40vw' }}
                m={{ t: "2rem" }}
                h="80vh"
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
                <Div m={{ t: "2rem" }} justify="center">
                    <Div d="flex" justify="center" className="toper">

                        <Iconly

                            name="Graph"
                            primaryColor={`#252859`}
                            set='bulk'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                    </Div>
                    <Div d="flex" justify="center">
                        <Text m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                            Complete Risk Profile
                        </Text>
                    </Div>
                    <Div d="flex" justify="center">
                        <Text m={{ t: "1rem" }} textSize="subheader" textColor="#252859" textWeight="500">
                            You will need to first complete your risk profile to continue.
                        </Text>
                    </Div>
                    <Div d="flex" justify="center">
                        <Text m={{ t: "1rem" }} textSize="paragraph" textColor="#898989" textWeight="500">
                            The risk profiler helps us understand the how you can accommodate
                            an investment risk and also identify the best investment options for you.
                        </Text>
                    </Div>

                    <Div d="flex" justify="center">

                        <NavLink to="/investment">
                            <Button w={{ xs: 'auto', md: '24rem' }}
                                m={{ t: "2rem",}} className="button2"
                                bg="warning700"
                                shadow="3"
                                hoverShadow="4"
                            >
                                Complete Risk Profile
                            </Button>
                        </NavLink>

                    </Div>


                    {errors.fname && <p className="text-error">Your first name is required</p>}

                </Div>


            </Modal>
        );
    }

    //Make it possible for use tp choose which withdraw direction they are taking
    const [show, hide] = useState("NONE");

    //states that determine which steps one is taking after they choose th withdraw method


    return (

        <>

            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="subheader">
                    Choose where to withdraw
                </Text>

            </Div>
            {/*************************Card section***************************** */}

            <Div>
                {/*************************PERSONAL INVESTMENTS***************************** */}
                <Div border="1px solid"
                    borderColor="#ff9b00;"
                    className={` ${select === "personal" ? 'selected' : 'not_selected'}`}
                    m={{ t: "1rem" }} p="0.3rem"

                    rounded="md"
                    shadow="3"
                    onClick={() => {
                        {
                            if (Profiler === "NO") {

                                settopdown(false);
                                setRisk(true);
                            } else {
                                settopdown(true);
                                setRisk(false);
                            };
                            setValue("personal");
                            selected("personal");

                        }
                    }

                    }>
                    <Div d="flex" align="center" p="0.5rem">

                        <Div m={{ l: "2rem" }}>
                            <Iconly

                                name="User"
                                primaryColor={` ${select === "personal" ? '#fafafa' : '#252859'}`}
                                set='broken'

                                stroke='bold'
                            />
                        </Div>

                        <Text p="0.2rem" textSize="subheader" textWeight="600">
                            Personal /Organization  investment
                        </Text>
                    </Div>
                    <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                        <Text className="div_notes">
                            Withdraw money from your personal investment account and continue
                        </Text>
                    </Div>
                    <ModalSteps
                        isOpen={showtopdown}
                        onClose={() => settopdown(false)}
                    />
                    <RiskProfile
                        isOpen={showRisk}
                        onClose={() => setRisk(false)}
                    />
                </Div>
                {/*************************SACCO GROUPS***************************** */}
                <Div
                    className={` ${select === "sacco" ? 'selected' : 'not_selected'}`}
                    m={{ t: "0.5rem" }} p="0.3rem"
                    border="1px solid"
                    borderColor="#ff9b00;"
                    rounded="md"
                    shadow="3"
                    onClick={() => {
                        {

                            selected("sacco");
                            hide("YES");
                            setValue("sacco");
                        }
                    }}>
                    <Div d="flex" align="center" p="0.5rem">

                        <Div m={{ l: "2rem" }}>
                            <Iconly

                                name="People"
                                primaryColor={` ${select === "sacco" ? '#fafafa' : '#252859'}`}
                                set='broken'

                                stroke='bold'
                            />
                        </Div>

                        <Text p="0.2rem" textSize="subheader" textWeight="600">
                            Sacco group
                        </Text>
                    </Div>
                    <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                        <Text className="div_notes">
                            Withdraw money from your sacco group
                            date with your group activities.
                        </Text>
                    </Div>

                </Div>
                {/*************************INVESTMENT CLUBS***************************** */}
                <Div
                    className={` ${select === "club" ? 'selected' : 'not_selected'}`}
                    m={{ t: "0.5rem" }} p="0.3rem"
                    border="1px solid"
                    borderColor="#ff9b00;"
                    rounded="md"
                    shadow="3"
                    onClick={() => {
                        {
                            selected("club");
                            setValue("club");
                        }
                    }}>
                    <Div d="flex" align="center" p="0.5rem">

                        <Div m={{ l: "2rem" }}>
                            <Iconly

                                name="Work"
                                primaryColor={` ${select === "club" ? '#fafafa' : '#252859'}`}
                                set='broken'

                                stroke='bold'
                            />
                        </Div>

                        <Text p="0.2rem" textSize="subheader" textWeight="600">
                            Investment club
                        </Text>
                    </Div>
                    <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                        <Text className="div_notes">
                            Withdraw from your investment club and build a joint dream.
                        </Text>
                    </Div>

                </Div>
                <Div className={` ${show === "NONE" ? 'display_none' : 'display_yes'}`}>
                    <Button

                        variant="primary"
                        align="center"
                        shadow="3"
                        hoverShadow="4"
                        bg={`#252859`}
                        p="0.5rem"
                        m={{ t: "1rem" }}
                        rounded="circle"
                        w="100%"
                        onClick={() =>
                            nextStep()
                        }>

                        Proceed
                    </Button>
                </Div>

            </Div>

        </>



    );
};

export default StepOne;