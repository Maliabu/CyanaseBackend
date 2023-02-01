import React  from "react";
import { Text, Div, Button, Image } from "atomize";


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep,}) => {

    //Make it possible for use tp choose which deposit direction they are taking
 
    return (

        <>
    <Div m={{t:"5rem"}}>
          <Div d="flex" justify="center" className="toper" p="1rem">
            <Image src="image/logo.png" w="250px" />
          </Div>

          <Div d="flex" justify="center" textSize="heading">
            <Text 
            textAlign="center"
            textColor="#252859"
            textSize="heading"
            textWeight="500"
            >
              Welcome to Cyanase investors
            </Text>
          </Div>
          <Text
            textSize="subheader"
            textAlign="center"
            textWeight="500"
          >
            Learn more about our products and services.
          </Text>
        </Div>
           
                <Div>
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

            

        </>



    );
};

export default StepOne;