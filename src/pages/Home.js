import React from "react";
import { useState, useEffect } from "react";
import { Container, Text, Div, Col, Row, Icon, Modal,Button } from "atomize";
import "../../public/app.css";
import ResHome from "./ResHome";
import axios from "axios";
import StepOne from "../components/intro/stepone";
import StepTwo from "../components/intro/steptwo";
import StepThree from "../components/intro/stepthree";
import StepFour from "../components/intro/stepfour";
import Final from "../components/intro/final";



function Home() {
  const [currency, setCurrency] = useState();
  const [paySub, setPay] = useState(false);
  const [Account, setAccount] = useState();
  const [AccountCharge, setAccountCharge] = useState();
  const [deposit, setDeposit] = useState();
  const [networth, setNetworth] = useState();
  const [DollarNetworth, setDollarNetworth] = useState();
  const [DollarDeposit, setDollarDeposit] = useState();
  const [Tip, setTip] = useState();
  const [myId, setID] = useState();
  const [myActivity, setActivity] = useState([]);
  const [dp, setDp] = useState();
  const [charge, setCharge] = useState();
  const [Fname, setName] = useState();
  const [Lname, setLName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const myChange = <Icon color="white" name="Loading2" size="20px" />;
  const myOriginal = 'Pay now';
  const [buttonText, setButtonText] = useState(myOriginal);
  ////Get user login data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    setCurrency(data.currency);
    setDeposit(data.deposit);
    setNetworth(data.networth);
    setDollarNetworth(data.dollar_networth);
    setDollarDeposit(data.dollar_deposit);
    setTip(data.tip);
    setEmail(data.email);
    setPhone(data.Phone);
    setID(data.id);
    setDp(data.photo);
    setActivity(data.active);
    setName(data.fname);
    setLName(data.lname);
    setAccount(data.paid);
    setCharge(data.charge);
    
    setAccountCharge(data.amount);
    if (data.photo === '') {
      setDp("download.PNG");
    } else {

      setDp(data.photo)
    }
  }, []);


  // Stes to mage the steps
  const [step, setstep] = useState(1);
  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state


  const MySteps = () => {
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (


          <StepOne prevStep={prevStep} nextStep={nextStep} />

        );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (

          <StepTwo nextStep={nextStep} prevStep={prevStep} />

        );
      // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 3:
        return (

          <StepThree nextStep={nextStep} prevStep={prevStep} />

        );
      case 4:
        return (

          <StepFour nextStep={nextStep} prevStep={prevStep} />

        );
      // Only formData is passed as prop to show the final value at form submit
      case 5:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Final />
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
  ///Get started button state
  const [show, hide] = useState("show");

  // Show and hide States for the Deposit modal
  const [showTopUP, setTopUp] = useState(false);

  //Cyanase introduction modal
  const TopupModal = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="40vw"
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
  useEffect(() => {
    setTimeout(() => {


      if (Account === 'paid') {
        setPay(false)

      } else {
        setPay(true);

      }
    }, 3000)

  }, []);
  const AccountPay = ({ isOpen, onClose }) => {

    return (
      <>

        <Modal h="auto" isOpen={isOpen} onClose={onClose} align="center" rounded="md">
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
            <Text p={{ l: "0.5rem", t: "0.25rem" }} textWeight="600" textColor="#252859" textSize="heading">
            To activate your investment account you need to pay a  yearly subscription fee<span className="span">{currency}{AccountCharge}</span>. You can always invest and pay this later.
            </Text>

          </Div>

          <Div d="flex" justify="flex-end">
            <Button p="1rem" bg="orange" onClick={onClose}>
              Pay later
            </Button>
            <Button onClick={() => {

              PayNow();
            }
            } bg="info900">
              {buttonText}
            </Button>
          </Div>
        </Modal>

      </>



    );


  }

  function PayNow() {

    const ChargeAmount = parseInt(AccountCharge) + parseInt(charge);
    const PayType = "investSubscription";
    setButtonText(myChange);
    const textref = Math.floor((Math.random() * 3098) + 1);
    const ref = "cyanase-dollar" + textref + "flutter";

    const API_publicKey = "FLWPUBK-2f0d88d10a57d95acfd495bb18b32d43-X";

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
                setTopUp(true);

                const API_PATH = 'https://api.cyanase.com/api/app_update_pay.php';
                /// Make a request to update the data base
                axios({
                    method: 'POST',
                    url: `${API_PATH}`,
                    headers: { 'content-type': 'application/json' },
                    data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, currency: currency }
                })
                    .then(result => {

                        const message = result.data.message;
                        const stateMe = result.data.error


                        if (stateMe == 200) {
                            setButtonText(myOriginal);



                            console.log(result.data);

                        } else if (message === "success") {
                            setButtonText(myOriginal);
                            setAccount("paid")
                        }


                    })
                    .catch(error => alert(error));
            } else {
                // redirect to a failure page.
                const API_PATH = 'https://api.cyanase.com/api/app_update_pay.php';
                /// Make a request to update the data base
                axios({
                    method: 'POST',
                    url: `${API_PATH}`,
                    headers: { 'content-type': 'application/json' },
                    data: { id: myId, paytype: PayType, textref: ref, amount: ChargeAmount, currency: currency }
                })
                    .then(result => {

                        const message = result.data.message;
                        const stateMe = result.data.error


                        if (stateMe == 200) {
                            setButtonText(myOriginal);
                            
                        } else if (message === "success") {
                            setButtonText(myOriginal);
                            setAccount("paid");
                        }


                    })
                    .catch(error => alert(error));


            }

            // use this to close the modal immediately after payment.
        }
    });




}
  return (
    <>
      <Container>
        <Div className="cont">
          <Div>
            <Text textSize="subheader" textColor={`#252859`}><b>YOUR STATISTICS</b></Text>
          </Div>
          <Row>
            <Col size="9">
              <Row d="flex" align="center" flexDir="row">
                <Col>
                  <Div rounded="sm" className="my_card" justify="center" align="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>
                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="heading">{currency}<b>{deposit}</b></Text>
                  </Div>
                </Col>
                <Col >
                  <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                    <Text textSize="subheader" textColor="white">Networth</Text>
                    <Text textSize="heading" textColor="white">{currency}<b>{networth}</b></Text>
                  </Div>
                </Col>
                <AccountPay
                isOpen={paySub}
                onClose={() => setPay(false)}
              />
              </Row>
              {/*****************************************DOLLAR ACCOUNT DISPLAY**************************************************** */}
              <Div>
                <Text m={{ t: "1rem" }} textSize="subheader" textColor={`#252859`}>
                  <b>DOLLAR ACCOUNT</b>
                </Text>

                <Row>
                  <Col>
                    <Div bg="#f1f1f1" className='get_started'
                      shadow="3" p={{ y: "2rem", x: "1.25rem" }}>
                      <Text textSize="subheader" textAlign="center" textColor="#252859">Deposit</Text>
                      <Text textSize="heading" textAlign="center" textColor="#252859">USD <b>{DollarDeposit}</b></Text>

                    </Div>
                  </Col>
                  <Col>

                    <Div bg="#f1f1f1" className='get_started'
                      shadow="3" p={{ y: "2rem", x: "1.25rem" }}>

                      <Text textSize="subheader" textAlign="center" textColor="#252859">Networth</Text>
                      <Text textSize="heading" textAlign="center" textColor="#252859">USD <b>{DollarNetworth}</b></Text>

                    </Div>


                  </Col>
                </Row>
              </Div>

              {/********************************************GET STARTED*************************************************/}

              <Div className={` ${show === "show" ? 'display_yes' : 'display_none'}`}>
                <Div bg="#f1f1f1" className='get_started'
                  shadow="3" m={{ t: "1rem" }} p={{ y: "2rem", x: "1.25rem" }}>
                  <Row flexDir={{ xs: 'column', lg: 'row' }} >
                    <Col>
                      <Text
                        textWeight="500"
                        textSize="heading"
                        textColor="#252859"
                        textAlign="center"
                      >
                        <b>Welcome to Cyanase</b>
                      </Text>
                      <Text
                        textColor="#808080"
                        textSize="subheader"
                        textAlign="center"
                      >
                        Investments products, loans, sacco groups,investment clubs all in one package.
                      </Text>
                    </Col>
                    <Col>
                      <button
                        shadow="5"
                        bg="#252859"
                        rounded="circle"
                        onClick={() => {
                          hide("hide");
                          setTopUp(true);
                        }} className="button">
                        Learn more
                      </button>
                      <TopupModal
                        isOpen={showTopUP}
                        onClose={() => setTopUp(false)}
                      />
                    </Col>
                  </Row>
                </Div>
              </Div>


              <TopupModal
                isOpen={showTopUP}
                onClose={() => setTopUp(false)}
              />
              {/*********************************************** <Graph />********************************************/}
            </Col>
            <Col size="3">
              <Div

                className="sacco_stat"
                justify="center"
                rounded="md"
                p={{ y: "1rem", x: "0.25rem" }}
                bg={`#252859`}>

                <Text textColor="white" ><b> Your statistics.</b></Text>
                <Text textColor="white" >Total Sacco Activity</Text>
                <Div p={{ y: "1rem", x: "0.25rem" }} >

                  <Row flexDir={{ xs: 'column', lg: 'row' }} >
                    <Col>
                      <Text textColor="white" >35%</Text>
                      <Text textColor="white" >Loans</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >5%</Text>
                      <Text textColor="white" >Deposits</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >25%</Text>
                      <Text textColor="white" >Withdraw</Text>
                    </Col>
                  </Row>
                  {/**** *
               <Graph />**/}
                  <Text m={{ t: "1rem" }} textColor="white" >Total Sacco Activity</Text>
                  <Text textSize="subheader" textColor="white">{currency} <b>{deposit}</b></Text>
                </Div>

              </Div>

            </Col>
          </Row>
        </Div>
      </Container>


      {/* Resposive home butto0n design */}
      <Div className="ResHome">
        <ResHome />
      </Div>

    </>



  );
}

export default Home;
