import React from "react";
import { useState, useEffect } from "react";
import { Container, Text, Div, Col, Row, Icon, Modal } from "atomize";


function Ortus() {

    const [cInvestors, setCinvestors] = useState();
    const [Ctotal, setCtotal] = useState();
    const [MInvestors, setMinvestors] = useState();
    const [Mtotal, setMtotal] = useState();
    const [AInvestors, setAinvestors] = useState();
    const [Atotal, setAtotal] = useState();
    const [GInvestors, setGinvestors] = useState();
    const [Gtotal, setGtotal] = useState();
    const [currency, setCurrency] = useState();
    const [deposit, setDeposit] = useState();
    const [networth, setNetworth] = useState();
    const [DollarNetworth, setDollarNetworth] = useState();
    const [DollarDeposit, setDollarDeposit] = useState();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setCurrency(data.currency);
        setDeposit(data.deposit);
        setNetworth(data.networth);
        setDollarNetworth(data.dollar_networth);
        setDollarDeposit(data.dollar_deposit);
        setCinvestors(data.TotalConservative);
        setCtotal(data.depositConservative);
        setMinvestors(data.TotalModerate);
        setMtotal(data.depositModerate);
        setAinvestors(data.TotalAssertive);
        setAtotal(data.depositAssertive);
        setGinvestors(data.TotalAggressive);
        setGtotal(data.depositAggressive);

    }, []);

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
                                        <Text textSize="subheader">Total Deposit</Text>
                                        <Text textSize="heading">{currency}<b>{deposit}</b></Text>
                                    </Div>
                                </Col>
                                <Col >
                                    <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                                        <Text textSize="subheader" textColor="white">Networth</Text>
                                        <Text textSize="heading" textColor="white">{currency}<b>{networth}</b></Text>
                                    </Div>
                                </Col>

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
                                            <Text textSize="subheader" textAlign="center" textColor="#252859">Total Deposit</Text>
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

                            <Div >
                                <Div bg="#f1f1f1" className='get_started'
                                    shadow="3" m={{ t: "1rem" }} p={{ y: "2rem", x: "1.25rem" }}>
                                    <Text textSize="heading"><b>Investor statistics</b></Text>
                                    <Row>
                                        <Col><Text textColor="#252859"textSize="subheader"><b>Investor type</b></Text></Col>
                                        <Col><Text textColor="#252859"textSize="subheader"><b>Total deposits</b></Text></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Moderate investors
                                        </Col>
                                        <Col>
                                            {MInvestors}
                                        </Col>
                                        <Col>
                                            UGX {Mtotal}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Conservative investors
                                        </Col>
                                        <Col>
                                            {cInvestors}
                                        </Col>
                                        <Col>
                                            UGX {Ctotal}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Aggressive investors
                                        </Col>
                                        <Col>
                                         {GInvestors}
                                        </Col>
                                        <Col>
                                            UGX {Gtotal}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Assertive
                                        </Col>
                                        <Col>
                                            {AInvestors}
                                        </Col>
                                        <Col>
                                            UGX {Atotal}
                                        </Col>
                                    </Row>
                                </Div>
                            </Div>
                            {/*********************************************** <Graph />********************************************/}
                        </Col>
                        
                    </Row>
                </Div>
            </Container>




        </>



    );


}
export default Ortus;