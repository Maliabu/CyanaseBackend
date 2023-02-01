import React from 'react';
import { useState, useRef } from 'react';
import { Text, Icon, Div, Col, Row, Input, SideDrawer, Modal, Button } from "atomize";
import { Iconly } from 'react-iconly';
import { useEffect } from 'react';
import axios from 'axios';
import ResGoal from './ResGoal';
import MyMenue from './ResMenue';
import { Link } from 'react-router-dom';


function ResHome() {

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

  function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
      isMounted.current = true;

      return () => {
        isMounted.current = false;
      };
    });

    return isMounted;
  }

  const isMountedRef = useIsMounted();


  useEffect(() => {

    async function fetchData() {

      const data = await Promise.resolve(JSON.parse(localStorage.getItem("loginData")));
      
      // only update state if component is mounted
      if (isMountedRef.current) {

        setCurrency(data.currency);
        setDeposit(data.deposit);
        setNetworth(data.networth);
        setDollarNetworth(data.dollar_networth);
        setDollarDeposit(data.dollar_deposit);
        setTip(data.tip);
        setID(data.id);
        setDp(data.photo);
        setActivity(data.active);
        setName(data.fname);
        setLName(data.lname);
        setAccount(data.paid);
        setCharge(data.charge);
        setCharge(data.charge);
        setEmail(data.email);
        setPhone(data.Phone);
        setAccountCharge(data.amount)
        if (data.photo === '') {
          setDp("download.PNG");
        } else {

          setDp(data.photo)
        }
      }
    }
    fetchData();

  }, [isMountedRef]);


  //State to show Goals Modal
  const [show, setShow] = useState(false);
  //State to show menue Modal
  const [showMenue, setMenue] = useState(false);

  // States to show  the search bar
  const [ShowSearch, setSearch] = useState(false);

  /// show pay moadal
  useEffect(() => {

    const builder = JSON.parse(localStorage.getItem("loginData"));
    
    setTimeout(() => {


      if (builder.paid === 'paid') {
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
            <Text p={{ l: "0.5rem", t: "0.25rem" }} textWeight="600" textColor="#252859" textSize="subheader">
              To activate your investment account you need to pay a  yearly subscription fee<span className="span">{currency}{AccountCharge}</span>. You can always invest and pay this later.
             
            </Text>
            <Text>You can always invest and apy this later</Text>
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




              } else if (message === "success") {
                setButtonText(myOriginal);
                setAccount("paid");
                setPay(false);
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


              console.log(result.data);
              if (stateMe == 200) {
                setButtonText(myOriginal);




              } else if (message === "success") {
                setButtonText(myOriginal);
                setAccount("paid");
                setPay(false);
              }


            })
            .catch(error => alert(error));


        }

        // use this to close the modal immediately after payment.
      }
    });




  }

  /// Constant for the Goals drawer
  const GoalDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer bg="gray1F00" isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "50rem" }}>
        <Div onClick={onClose} d="flex" m={{ b: "4rem", l: "1rem" }}>
          <Icon size="30px" name="LeftArrowSolid" color={`#252859`} />

        </Div>
        <Div m={{ l: "2rem" }}>
          <ResGoal />
        </Div>

      </SideDrawer>
    );
  };

  //// Constant tp draw th menu
  const MenueDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer bg="gray1F00" isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "50rem" }}>
        <Div onClick={onClose} d="flex" m={{ b: "4rem" }}>
          <Icon size="30px" name="LeftArrowSolid" color={`#252859`} />

        </Div>

        <MyMenue />
      </SideDrawer>
    );
  };
  ///// Constant to draw the search bar
  const SearchDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer
        bg="#252859"
        isOpen={isOpen} onClose={onClose}
        w={{ xs: "100vw", md: "50rem" }}
      >

        <Icon onClick={onClose} size="25px" name="LeftArrowSolid" color="white" />


        <Div
          m={{ t: "0.5rem" }}
          rounded="md"
          d="flex" align="center" bg="#3C426B"
          p="1rem"
          justify="center"
        >
          <Input
            bg="#3C426B"
            textColor="white"
            w="17rem"
            placeholder="Type here...."
            suffix={

              <Div
                pos="absolute"
                top="0"
                right="0"

                rounded={{ r: "md" }}
                p="0.5rem"
              >
                <Icon name="Search" color="white" />
              </Div>
            }
          />
        </Div>
        <Text top="50%" pos="absolute" textSize="30px" textAlign="center" textColor="#757575">
          Search and join SACCOs & investment clubs
        </Text>
      </SideDrawer>
    );
  };
  return (
    <>
      <Div className="card">
        {/**************** *************UPPER BLUE SECTION****************************************** */}
        <Div rounded="md" align="center" className="upper-card" bg={`#252859`}>
          <Row p={{ y: "1rem", x: "1.25rem" }} flex="row">
            <Col
              size="10"
              onClick={() => setSearch(true)}>
              <Div w="100%" rounded="md" d="flex" align="center" className="search"  >
                <Iconly
                  primaryColor='white'
                  name="Search"
                  set='broken'
                  stroke='bold'

                />
                <Div d="flex" flexGrow="1" justify="flex-end">
                  <p> Welcome back, {Fname}</p>
                </Div>

              </Div>
            </Col>
            <SearchDrawer
              isOpen={ShowSearch}
              onClose={() => setSearch(false)}
            />
            <Col size={`2%`}>
              <Div className="dp_res" >
                <img className="dp" src={`../image/profile_pic/${dp}`} />
              </Div>

            </Col>
          </Row>
          <Div p="0.5rem">
            <Div p={{ x: "0.5rem", y: "0.5rem" }} d="flex">
              <Div>
                <Text textSize="paragraph">Nov, 5</Text>
                <Text textSize="subheader"><b>Your statistics</b></Text>
              </Div>

              <AccountPay
                isOpen={paySub}
                onClose={() => setPay(false)}
              />
              <Div flexGrow="1" d="flex" justify="flex-end" >
                <Row>
                  <Col>
                    <Div
                      onClick={() => setMenue(true)}
                      h="40px" w="40px"
                      rounded="circle"
                      bg="#3C426B"
                      p={{ x: "0.5rem", y: "0.5rem" }}>

                      <Iconly
                        primaryColor='#ff9b00'
                        name="Home"
                        set='broken'
                        stroke='bold'
                      />
                    </Div>

                  </Col>
                  <Col>

                    <Div h="40px" w="40px" align="center" rounded="circle" bg="#3C426B" p={{ x: "0.5rem", y: "0.5rem" }}>
                      <Link to="/Wallet">
                        <Iconly
                          primaryColor='#ff9b00'
                          name="Wallet"
                          set='broken'
                          stroke='bold'

                        />{' '}
                      </Link>
                    </Div>


                  </Col>
                  <Col>
                    <Div
                      onClick={() => setShow(true)}
                      h="40px" w="40px"
                      rounded="circle"
                      bg="#3C426B"
                      p={{ x: "0.5rem", y: "0.5rem" }}>

                      <Iconly
                        primaryColor='#ff9b00'
                        name="TimeCircle"
                        set='broken'
                        stroke='bold'
                      />
                    </Div>
                    <GoalDrawer
                      isOpen={show}
                      onClose={() => setShow(false)}
                    />
                  </Col>
                </Row>

                <MenueDrawer
                  isOpen={showMenue}
                  onClose={() => setMenue(false)}
                />


              </Div>
            </Div>
            {/***********************************LOCAL CURRENCY INVESTMENT STATISTICS**************************************************/}
            <Div className="text" p="0.2rem">
              <Row>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">

                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="title">{currency}<b>{deposit}</b></Text>
                  </Div>
                </Col>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">

                    <Text textSize="subheader">Networth</Text>
                    <Text textSize="title">{currency} <b>{networth}</b></Text>
                  </Div>
                </Col>
              </Row>



            </Div>

            {/***********************************DOLLAR ACCOUNT CURRENCY**************************************************/}
            <Text m={{ t: "1rem" }} textSize="subheader"><b>Dollar account</b></Text>
            <Div className="text" p="0.2rem">
              <Row>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">

                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="title">USD<b>{DollarDeposit}</b></Text>
                  </Div>
                </Col>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">

                    <Text textSize="subheader">Networth</Text>
                    <Text textSize="title">USD <b>{DollarNetworth}</b></Text>
                  </Div>
                </Col>
              </Row>



            </Div>
            {/***********************************Saving tips**************************************************/}
            <Div bg="#3C426B" rounded="md" m={{ t: "1rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
              <Row flex="row">
                <Col size="2">
                  <Div h="40px" w="40px" align="center" rounded="circle" bg="#3C426B" p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Iconly
                      primaryColor='#ff9b00'
                      name="InfoCircle"
                      set='broken'
                      stroke='bold'
                      size="medium"
                    />
                  </Div>
                </Col>
                <Col size="8">
                  <Text><b>Saving Tips</b></Text>
                  <Text>{Tip}</Text>
                </Col>
              </Row>


            </Div>
          </Div>
        </Div>
        {/**************** *************LOWER WHITE SECTION****************************************** */}
        <Div className="lower_part">
          <Div d="flex" align="center" m={{ t: "0.5rem" }} >

            {/**************** *************MESSAGE NOTE SECTION****************************************** */}
            {/******** <Row>
              <Col>
                <Div d="flex" align="center" p={{ x: "0.5rem", y: "0.5rem" }}>
                  <img className="sacco_text" src="image/dp.jpg" />
                  <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" w="20-px" h="20px" rounded="circle" bg="blue" textColor="white">
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
            */}
            {/**************** *************AUTO SAVE SECTION****************************************** */}
            {/* <Div p="0.5rem">
              <Div className="auto_save" p="0.5rem" d="flex" flexGrow="1" align="flex-end" justify="flex-end" rounded="md" bg="#252859">
                <Text textColor="white">Auto save</Text>
                < Switcher />
              </Div>
          </Div>***/}
          </Div>

          {/**************** *************RECENT ACTIVITY SECTION****************************************** */}

          <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
            <Text className="text_fst"><b>Recent activity</b></Text>

            {myActivity.length === 0 ? '' : myActivity.map((data) => {
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
export default ResHome;