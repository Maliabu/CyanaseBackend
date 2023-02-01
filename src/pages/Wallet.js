import React from 'react';
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Modal, Text, Icon, Div, Col, Row, Button, Input } from "atomize";
import { Iconly } from 'react-iconly';
import { Link } from 'react-router-dom';
import axios from "axios";
import DepositType from "../components/topup/depositType";
import Online from "../components/topup/online";
import Offline from "../components/topup/offline";
import Wallet from "../components/topup/wallet";
import AccountType from "../components/topup/AccountType";


function MyWallet() {
    
    const [select, selected] = useState("home");

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
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setWallet(data.wallet);
        setCharge(data.charge);
        setID(data.id);
        setActivity(data.active);
    }, []);

    ///When the user clicks the top up model
    const { register, handleSubmit, formState: { errors } } = useForm();


    /// Process payment

    

   
    // states to show and hide topup wallet modal
    const [showTopUP, setTopUp] = useState(false);
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
    
    
                                <AccountType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline}  prevStepOnline={prevStepOnline}handleFormData={handleInputData} values={formData} />
    
                            );
                        
                    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                    case 3:
                        return (

                            <Online  nextStepOnline={nextStepOnline} prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

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


                            <DepositType setValues={setValues} nextStepOnline={nextStepOnline}  handleFormData={handleInputData} values={formData} />

                        );
                        case 2:
                        return (


                            <AccountType setFormData={setFormData} setValues={setValues} nextStepOnline={nextStepOnline}  prevStepOnline={prevStepOnline} handleFormData={handleInputData} values={formData} />

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


                            <DepositType setFormData={setFormData}  setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

                        );
                    case 2:
                        return (


                            <AccountType setFormData={setFormData}  setValues={setValues} nextStepOnline={nextStepOnline} handleFormData={handleInputData} values={formData} />

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
            <Div className="card">
                {/**************** *************UPPER BLUE SECTION****************************************** */}
                <Div rounded="md" align="center" className="upper-card" bg={`#252859`}>

                    <br></br>
                    <Link to="/">
                        <Div className="back" p="0.5rem">
                            <Icon

                                name="LeftArrow"
                                color="white"
                                size="35px"
                            />
                        </Div>
                    </Link>

                    <Div p="0.5rem">
                        <Text d="flex" align="center" justify="center" textColor="#898989" textSize="heading" textWeight="600">My Wallet</Text>
                        <Div className="wallet_svg" d="flex" justify="center" align="center" rounded="circle" p="0.5rem" >
                            <Iconly
                                primaryColor='#ff9b00'
                                secondaryColor='orange'
                                name="Wallet"
                                set='bulk'
                                stroke='bold'

                            />
                        </Div>
                        <Div bg="#3C426B" rounded="md" m={{ t: "1rem" }} p={{ x: "0.5rem", y: "0.7rem" }}>
                            <Text m={{ t: "0.5rem" }} d="flex" justify="center" align="center"><b>Account balance</b></Text>
                            <Text m={{ t: "0.5rem" }} d="flex" justify="center" align="center" textSize="heading">{currency}{Wallet}</Text>

                            <Button m={{ t: "0.5rem" }} className="button2"
                                bg="warning700"
                                shadow="3"
                                hoverShadow="4"
                                onClick={() =>
                                    setTopUp(true)
                                }
                            >
                                Top up
                            </Button>
                            <ModalSteps
                                isOpen={showTopUP}
                                onClose={() => setTopUp(false)}
                            />
                        </Div>
                    </Div>
                </Div>
                {/**************** *************LOWER WHITE SECTION****************************************** */}
                <Div className="lower_part">

                    {/**************** *************RECENT ACTIVITY SECTION****************************************** */}

                    <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
                        <Text className="text_fst"><b>Recent activity</b></Text>
                        {myActivity.map((data) => {
                  return (

                    <Div key={data.id}

                      rounded="md"
                      className="recent_row"
                      m={{ t: "0.5rem" }}
                      p={{ x: "0.5rem", y: "0.5rem" }}>

                      <Row >
                        <Col>
                          <Div m={{ t: "2em" }}>
                            <Iconly

                              name="Wallet"
                              primaryColor={`#252859`}
                              set='bulk'
                              secondaryColor='orange'
                              stroke='bold'



                            />
                          </Div>

                        </Col>
                        <Col >
                          <Div>
                            <Text textSize="subheader" textWeight="500">{data.activity}</Text>
                            <Text textWeight="500">{currency} {data.amount}</Text>
                            <Text textColor="green">{data.status}</Text>
                          </Div>

                        </Col>
                        <Col >
                          <Div className="time">
                            <Text textColor="orange" textWeight="500">Yesterday</Text>
                            <Text textWeight="500">2:00 hrs</Text>

                          </Div>

                        </Col>
                      </Row>
                    </Div>
                  )
                })}
                    </Div>
                </Div>
            </Div>
        </>

    );

}
export default MyWallet;