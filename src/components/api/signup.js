
import { Col, Container, Div, Row } from "atomize";
import React, { useState } from 'react';
import 'regenerator-runtime/runtime';
import Final from "./Form/Final";
import StepFour from './form/stepFour';
import StepOne from "./form/StepOne";
import StepThree from './form/stepThree';
import StepTwo from "./form/StepTwo";
import Verify from "./form/verify,js";


function Signup() {
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
  })

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


  // javascript switch case to show different form in each step

  const Mysteps = () => {

    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (


          <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />

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
  
            <Verify nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
  
          );
          case 5:
          return (
  
            <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
  
          );
      // Only formData is passed as prop to show the final value at form submit
      case 6:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Final values={formData} />
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
  return (
    <>
      <Div className="auth"

        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        textSize="display2"
        textWeight="500"
        top="50%"
        p={{ x: "1rem", y: "4rem" }}
      >


        <Div className="contact" bg={`#fff`}
          w={{ xs: '80%', md: '80vh' }} h={{ xs: 'auto', md: 'auto' }} p={{ x: "1rem", y: "1rem" }}
          align="center"
        >

          <Container>
            <Div></Div>
            <Mysteps />
          </Container>
        </Div>
      </Div>
    </>
  )
}

export default Signup;