import React from "react";
import { useState, useEffect } from "react";
import { Text, Div, Button, Row, Col } from "atomize";
import { Iconly } from "react-iconly";
import { NavLink } from "react-router-dom";

const Final = ({ nextStep, prevStep, links, values }) => {
  const {
    risk,
    gain,
    amount,
    time,
    objective,
    policy,
    impact,
    formerInvestment,
    borrow,
    source,
    tax,
  } = values;
  const [select, selected] = useState("home");
  const [Investor, setTEXT] = useState();
  const [credit, setCredit] = useState();
  const [cash, setCash] = useState();
  const [venture, setVenture] = useState();
  const [returnz, setReturn] = useState();

  useEffect(() => {
    const TotalRisk =
      parseInt(risk) +
      parseInt(gain) +
      parseInt(amount) +
      parseInt(time) +
      parseInt(objective) +
      parseInt(policy) +
      parseInt(impact) +
      parseInt(formerInvestment) +
      parseInt(borrow) +
      parseInt(source) +
      parseInt(tax);

    if (TotalRisk >= "13" && TotalRisk <= "23") {
      setTEXT("Conservative");
      setCash("40");
      setCredit("45");
      setVenture("10");
      setReturn("5");
    } else if (TotalRisk >= "24" && TotalRisk <= "28") {
      setTEXT("Conservative");
      setCash("30");
      setCredit("50");
      setVenture("15");
      setReturn("5");
    } else if (TotalRisk >= "29" && TotalRisk <= "34") {
      setTEXT("Moderate");
      setCash("25");
      setCredit("50");
      setVenture("17.5");
      setReturn("7.5");
    } else if (TotalRisk >= "35" && TotalRisk <= "40") {
      setTEXT("Moderate");
      setCash("15");
      setCredit("55");
      setVenture("20");
      setReturn("10");
    } else if (TotalRisk >= "41" && TotalRisk <= "45") {
      setTEXT("Assertive");
      setCash("15");
      setCredit("40");
      setVenture("30");
      setReturn("15");
    } else if (TotalRisk >= "46" && TotalRisk <= "50") {
      setTEXT("Assertive");
      setCash("10");
      setCredit("35");
      setVenture("35");
      setReturn("20");
    } else if (TotalRisk >= "50" && TotalRisk <= "55") {
      setTEXT("Aggressive");
      setCash("10");
      setCredit("20");
      setVenture("30");
      setReturn("40");
    } else if (TotalRisk >= "56" && TotalRisk <= "60") {
      setTEXT("Aggressive");
      setCash("5");
      setCredit("15");
      setVenture("35");
      setReturn("45");
    }

    const RiskProfileResults = {
      venture: venture,
      cash: cash,
      credit: credit,
      investor: Investor,
      total: TotalRisk,
      return: returnz,
    };

    localStorage.setItem("RiskProfile", JSON.stringify(RiskProfileResults));
  }, []);

  return (
    <>
      <Div align="center" d="flex" justify="center"></Div>
      {/*************************Card section***************************** */}

      <Div>
        {/*************************PERSONAL INVESTMENTS***************************** */}
        <Div
          p={{ x: "2rem", y: "2rem" }}
          borderColor="#252859"
          border="2px solid"
          className={` ${select === "personal" ? "selected" : "not_selected"}`}
          m={{ t: "1rem" }}
          rounded="md"
          shadow="3"
        >
          <Div d="flex" align="center" justify="center" className="toper">
            <Iconly
              name="Heart2"
              primaryColor={`#252859`}
              set="bulk"
              secondaryColor="orange"
              stroke="bold"
            />
          </Div>

          <Div>
            <Text textWeight="500" textSize="subheader" textColor="#252859">
              We grade investors as
              <span className="span">
                Conservative, Aggressive, Assertive and Moderate
              </span>
              . and based on your submission, we grade you a
              <span className="span">{Investor} investor.</span> Your money will
              always be invested as follows.
            </Text>
          </Div>
          <Row>
            <Col>
              <Text textSize="subheader" textWeight="500">
                Cash
              </Text>
              <Text>
                <b>{cash}</b>%
              </Text>
            </Col>
            <Col>
              <Text textWeight="500" textSize="subheader">
                Credit
              </Text>
              <Text>
                <b>{credit}</b>%
              </Text>
            </Col>

            <Col>
              <Text textWeight="500" textSize="subheader">
                Venture
              </Text>
              <Text>
                <b>{venture}</b>%
              </Text>
            </Col>
            <Col>
              <Text textWeight="500" textSize="subheader">
                Absolute return
              </Text>
              <Text>
                <b>{returnz}</b>%
              </Text>
            </Col>
          </Row>
          <NavLink
            to={`${links === "resDeposit" ? "/ResDeposit" : "/Deposit"}`}
          >
            <Div d="flex" justify="center">
              <Button
                variant="primary"
                align="center"
                shadow="3"
                hoverShadow="4"
                bg={`#ff9b00`}
                p="0.5rem"
                m={{ t: "1rem" }}
                rounded="circle"
              >
                Make a deposit To invest
              </Button>
            </Div>
          </NavLink>
        </Div>
      </Div>
    </>
  );
};
export default Final;
