import React from 'react';
import{ useState}  from 'react';
import StepOne from '../components/deposit/stepone';
import StepTwo from '../components/deposit/steptwo';
import StepThree from '../components/deposit/stepthree';
import StepFour from '../components/deposit/stepfour';
import SaccoStepTwo from '../components/deposit/saccoStepTwo';
import Final from '../components/deposit/Final';
import 'regenerator-runtime/runtime';
import { Container, Text, Div, Col, Row } from "atomize";

function Deposit() {
  const linkType = "Deposit";
  //state for steps
  const [step, setstep] = useState(1);


  //state for form data
  const [formData, setFormData] = useState({


  });
  // states for changing determning the direction of the deposit
  const [direction, setValue] = useState("personal");

  // Function for going back to previous directional page
  const back = () => {

    setValue("personal");
  }
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
    setFormData(prevStep => ({
      ...prevStep,
      [input]: value
    }));
  }
  //Steps one takes if they choose personal Investments
  const AllSteps = () => {


    if (direction === "personal") {
      switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <StepOne links={linkType} setValue={setValue} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

          );
        // Only formData is passed as prop to show the final value at form submit
        case 2:
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

    } else if (direction === "sacco") {

      switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <SaccoStepTwo back={back} prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

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
        // Only formData is passed as prop to show the final value at form submit
        case 5:
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



    } else if (direction === "club") {
      switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <SaccoStepTwo back={back} prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

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
        // Only formData is passed as prop to show the final value at form submit
        case 5:
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
    // javascript switch case to show different form in each step


  }
  {/*******DEPOSIT MODAL***************************************************************** */ }

  return (
    <>
      <Container>
        <Div className="conti">
          <Div w="100" m={{ t: "5rem", l: "10rem" }}>
            <Text
              textAlign="center"
              textSize="heading" m={{ t: "1rem" }}
              textWeight="500">
              Deposit
            </Text>

            {/******************ADDING THE SLIDING COMPONENTS OF THE REACT APP******************/}

            <AllSteps />
          </Div>
        </Div>
      </Container>

    </>

  );

}
export default Deposit