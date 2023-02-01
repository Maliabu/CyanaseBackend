import React from 'react';
import { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, SideDrawer, Modal, Input } from "atomize";
import "../../public/app.css";
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
import Online from "../components/topup/online";
import Offline from "../components/topup/offline";
import Wallet from "../components/topup/wallet";
import axios from "axios";
import AccountType from "../components/topup/AccountType";
import DepositType from "../components/topup/AccountType";




function Goal() {

  //states for my data
  const [completed, setCompleted] = useState(40);
  const [loading, finished] = useState("yes");
  const [WalletAmount, setWalletAmount] = useState();
  const [userID, setID] = useState();
  const [charge, setCharge] = useState();
  const [myActivity, setActivity] = useState([]);
  const [myGoals, setGoals] = useState([]);
  const [Processing, setProcessing] = useState(false);
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Wallet, setWallet] = useState();
  const [currency, setCurrency] = useState();
  const [goalID, setGoalID] = useState();
  const [goalText, setGoalText] = useState();
  const [checker, setChecker] = useState();
  const myChange = <Icon color="white" name="Loading2" size="20px" />;
  const myOriginal = 'Deposit';
  const [buttonText, setButtonText] = useState(myOriginal);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    setCurrency(data.currency);
    setEmail(data.email);
    setFname(data.fname);
    setLname(data.lname);
    setPhone(data.phone);
    setID(data.id);
    setActivity(data.active);
    setWallet(data.wallet);
    setCharge(data.charge);
    setChecker(data.checker)

  }, [])
  //states for form data
  const GoalArray = Object.keys(myGoals);

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
        .catch(error => alert(error));

    }, 3000);
  }, []);
  const [formData, setData] = useState({
    goal: "",
    time: "",
    deposit_type: "",
    amount: "",
    reminder: "",
    mydate: "",
  });
  // States to handle errors in the form
  const { register, handleSubmit, formState: { errors } } = useForm();

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
  //states to handle the previous and next buttons
  const [step, setstep] = useState(1);

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


  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };
  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = InputData => e => {
    // input value from the form
    const { value } = e.target;
    console.log(value)
    //updating for data state taking previous state and then adding new value to create new object
    setData(prevStep => ({
      ...prevStep,
      [InputData]: value
    }));
  }

  ///MY POPUP  MODAL

  const MyModal = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW={{ xs: 'auto', md: '40vw' }}
        m={{ t: "5rem" }}
        h="60vh"
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





      </Modal>
    );

  }
  ///// States to hadnle deposits


  const GoalSteps = () => {

    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (


          <StepOne nextStep={nextStep} values={formData} handleFormData={handleInputData} />

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
  ////////////// Hnadle the atopu

  const handleTopup = input => e => {
    // input value from the form
    setWalletAmount(e.target.value);

    //updating for data state taking previous state and then adding new value to create new object

  }

  /****************************************************** * PROGRESS BAR STATES*****************/

  /////// *******************************************SIDE DRAWER STATE *****************************************

  const GoalDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "50rem" }}>
        <Div onClick={onClose} d="flex" m={{ b: "4rem" }}>
          <Icon size="35px" name="LeftArrowSolid" color={`#252859`} />
        </Div>
        <GoalSteps />

      </SideDrawer>
    );
  };
  // states to show and hide the set goals sidedrawer
  const [showDrawer, setShow] = useState(false);
  //// *****************************TOP UP BUTTON STATE MODAL****************************************************

  // states to show and hide topup wallet modal
  const [showTopUPSteps, setTopUpSteps] = useState(false);
  const [showTopUpGoal, setTopUpGoal] = useState(false);

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
      <Container>

        <Div m={{ t: "5rem" }} className="cont menu">

          <Row flexWrap="wrap" d="flex" align="center" flexDir="row">

            <Col h="auto">
              <Div>
                <Text textSize="subheader" textColor={`#252859`}><b>WALLET</b></Text>

                <Div rounded="sm" className="my_card" justify="center" align="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>

                  <Text textSize="subheader">Account balance</Text>
                  <Text textSize="heading">{currency}<b>{Wallet}</b></Text>

                  <Button m={{ t: "0.5rem" }} className="button2"
                    onClick={() =>
                      setTopUpSteps(true)
                    }
                    bg="warning700"
                    shadow="3"
                    hoverShadow="4"
                  >
                    Top up
                  </Button>
                  <ModalSteps
                    isOpen={showTopUPSteps}
                    onClose={() => setTopUpSteps(false)}
                  />
                </Div>
              </Div>
              {/*******************************************************RECENT ACTIVITY********************************************/}
              <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
                <Text className="text_fst"><b>Recent activity</b></Text>

                {myActivity.length === 0 ? '' :
                  myActivity.map((data) => {
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
            </Col>
            {/***************************** Goal columns *************************/}
            <Col h="auto">
              <Div d="flex">
                <MyModal
                  isOpen={showTopUpGoal}
                  onClose={() => setTopUpGoal(false)}
                />
                <Text textSize="subheader" textColor={`#252859`}><b>GOALS</b></Text>

                <Button
                  onClick={() =>
                    setShow(true)
                  }
                  h="2rem"
                  w="7.5rem"
                  rounded="md"
                  m={{ l: "20rem", }}

                  className="button2"
                  bg={`#252859`}


                >
                  Set goal
                </Button>


                <GoalDrawer
                  isOpen={showDrawer}
                  onClose={() => setShow(false)}
                />
                <PayProcess
                  isOpen={Processing}
                  onClose={() => setProcessing(false)}
                />
              </Div>
              <Div className={` ${loading === "yes" ? 'display_yes' : 'display_none'}`}>
                <Icon color="#252859" name="Loading2" size="40px" />
              </Div>
              {myGoals.length === 0 ? '' :
                myGoals.map((data) => {
                  return (
                    <Div m={{ t: "1rem" }} key={data.goal_id} rounded="md" p={{ y: "2rem", x: "1.25rem" }} bg="#f5f5f5">
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
                        <Div>
                          <Button
                            p={{ x: "2rem", y: "0.5rem" }}
                            onClick={() => {

                              setTopUpGoal(true);
                              setGoalID(data.goal_id);
                              setGoalText(data.goal);
                            }}
                            bg="#ff9b00"
                            rounded="circle"
                            shadow="5"
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

              <Div className={` ${checker === "yes" ? 'display_none' : 'display_yes'}`} p={{ y: "2rem", x: "1.25rem" }} bg="#f5f5f5">
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
                    <Text textSize="subheader" textColor="#252859"><b>Your goal e.g trip to london</b></Text>
                    <Text textColor="#CDCCCC"><b>Created 1st january 2020</b></Text>
                  </Div>
                  <Div>
                    <Button
                      p={{ x: "2rem", y: "0.5rem" }}

                      bg="#ff9b00"
                      rounded="circle"
                      shadow="5"
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
                      <Text textColor="#252859" textWeight="500">{currency} 200,000</Text>
                    </Col>
                  </Row>
                  {/***************************** Progress bar *************************/}
                  <Div>
                    <ProgressBar bgcolor={"#252859"} completed={50} />
                  </Div>

                </Div>

              </Div>
              {/********* 
              <Div
                shadow="4"
                m={{ t: "0.5rem" }}
                rounded="md"
                className="goal-resp" p={{ y: "2rem", x: "1.25rem" }}>
                {/************************************Chat System************************************
                
                <Div d="flex">

                  <Div m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Text className="my-small-text" textColor="fafafa"><b>My chats</b></Text>
                    <Row>
                      <Col>
                        <Div d="flex" align="center" p={{ x: "0.5rem", y: "0.5rem" }}>
                          <img className="sacco_text" src="image/bg.png" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" w="20px" h="20px" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                          <img className="sacco_text" src="image/dp.jpg" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                          <img className="sacco_text" src="image/dp.jpg" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                        </Div>
                      </Col>


                    </Row>
                  </Div>

                </Div>



              </Div>
            */}
            </Col>

          </Row>


        </Div>

      </Container>
      {/* Resposive home butto0n design */}


    </>



  );
}

export default Goal;
