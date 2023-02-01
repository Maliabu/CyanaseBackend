import React from 'react';
import { useState } from "react";
import { Text, Div, Icon, Button } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import '../auth.css';

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {


    // set states for th required components
    const [inputs, setInputs] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    // on click submit state

    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Continue';
    const [buttonText, setButtonText] = useState(myOriginal);

    // hnadle on change in forms
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    // handle submit function
    const onSubmit = (e) => {

        // change the status to loading
        setButtonText(myChange);
        // load net step

        nextStep();
    }
    //creating error state for validation
    const [error, setError] = useState(false);


    return (
        <>

            <Div>
                <Div className="icon_svg" align="center" textAlign="center">
                    <Iconly

                        name="Activity"
                        primaryColor={`#252859`}
                        set='bulk'
                        secondaryColor='orange'
                        stroke='bold'
                    />
                </Div>
                <Text
                    textWeight="600"
                    textColor="#252859"
                    textSize="heading"
                    textAlign="center">
                    Welcome to the Cyanase Investors API
                </Text>
                <Text
                    textAlign="center"
                    textColor="#82828282"
                >
                    Integrate our API into your systems to  enable your customers access
                    banking and wealth management products.
                </Text>
                <Div d="flex" align="center" justify="center">
                    <Button variant="primary" type='submit'
                    onClick={()=>nextStep()}
                        align="center"
                        shadow="3"
                        hoverShadow="4"
                        bg={`#252859`}
                        m={{ t: "1rem" }}
                        w={{ xs: '100%', md: '24rem' }}
                    >
                        Create developer account
                    </Button>
                </Div>
            </Div>
        </>

    );
};

export default StepOne;