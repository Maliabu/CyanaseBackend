import React from 'react';
import { Text, Div, Button } from "atomize";
import { Iconly } from "react-iconly";
import { useState, useEffect} from "react";

const StepOne = ({ nextStep, setValue, links }) => {

    const [Id, setId] = useState();
    const [fname, setFname] = useState();
    
   
    ////Get user login data
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("loginData"));
      setFname(data.fname);
      setId(data.id);
    }, []);

    return (

        <>
            <Div m={{ t: "5rem" }}>
                <Text
                    textColor="black"
                    textAlign="center"
                    textSize="heading"
                    textWeight="500">
                    Hello, {fname}
                </Text>
                <Text
                    textAlign="center"
                    textSize="subheader"
                    textColor="gray700"
                    textWeight="500"
                >Let your dreams come true by investing for them
                </Text>
            </Div>

            <Div d="flex" align="center" justify="center" className="toper">
                <Iconly

                    name="TimeCircle"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                />
            </Div>

            <Div>
                <Text
                    textAlign="center"
                    textColor="#252859"
                    textWeight="500"
                    textSize={`35px`}
                >
                    Goal Investing
                </Text>
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

                    Get started
                </Button>
            </Div>
        </>

    )


}
export default StepOne;