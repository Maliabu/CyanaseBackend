import React from 'react';
import { useState } from 'react';
import InvestmentOne from '../components/investment/investmentOne';
import StepTwo from '../components/investment/steptwo';
import StepThree from '../components/investment/stepthree';
import StepFour from '../components/investment/stepfour';
import StepFive from '../components/investment/stepfive';
import StepSix from '../components/investment/stepSix';
import StepEight from '../components/investment/stepeight';
import StepSeven from '../components/investment/Stepseven';
import Final from '../components/investment/Final';
import 'regenerator-runtime/runtime';
import { Container, Text, Div, Col, Row } from "atomize";

function ResInvestment() {
  const links ="resDeposit";
  //state for steps
  const [step, setstep] = useState(1);

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
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  //Steps one takes if they choose personal Investments
  const AllSteps = () => {



      switch (step) {

        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <InvestmentOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />

          );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
          return (

            <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
        // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 3:
          return (

            <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
        case 4:
          return (

            <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
          case 5:
            return(
              <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            );
            case 6:
            return(
              <StepSix nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            );
            case 7:
            return(
              <StepSeven nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            );
            case 8:
            return(
              <StepEight nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            );
        // Only formData is passed as prop to show the final value at form submit
        case 9:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                    <Final links={links} values={formData} />
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


  };

  // javascript switch case to show different form in each step

  return (
    <>
     
        <Div m={{ t: "1rem"}}>
         
          <Div align="center" d="flex" justify="center">
            <Text textColor="#252859" textWeight="500" textSize="heading">
              Investment Settings
            </Text>
          </Div>
          {/******************ADDING THE SLIDING COMPONENTS OF THE REACT APP******************/}

          <AllSteps />
        </Div>
    



    </>

  );

}
export default ResInvestment;