import React from 'react';
import { useState } from "react";
import { Input, Div, Icon, Button } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import '../auth.css';

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep }) => {


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


            <form className="myform" onSubmit={handleSubmit(onSubmit)}>

                <Div className="icon_svg" align="center" textAlign="center">
                    <Iconly

                        name="Work"
                        primaryColor={`#252859`}
                        set='bulk'
                        secondaryColor='orange'
                        stroke='bold'
                    />
                </Div>
                <p className='dey'>How legal are you?</p>

                <Div

                    d="flex"
                    flexDir="column"
                    justify="center"
                    align="center">

                    <Input onKeyPress w={{ xs: '100%', md: '24rem' }} m={{ t: "2rem" }} {...register("fname", { required: true, maxLength: 15 })}
                        placeholder="Upload your certificate of Incorporation" onChange={handleChange} name="fname" type="file"

                        p={{ x: "2.5rem" }}
                        prefix={

                            <Iconly
                                className="ivn"
                                name="User"
                                primaryColor={`#252859`}
                                set='bulk'
                                secondaryColor='orange'
                                stroke='bold'
                            />
                        }
                    />

                    {errors.fname && <p className="text-error">Upload your certificate of Incorporation</p>}

                    <Input w={{ xs: '100%', md: '24rem' }} m={{ t: "2rem" }}   {...register("lname", { required: true, maxLength: 55 })}
                        placeholder="Upload your memorandum/articles of association" onChange={handleChange} name="lname" type="file"

                        p={{ x: "2.5rem" }}
                        prefix={

                            <Iconly
                                className="ivn"
                                name="User"
                                primaryColor={`#252859`}
                                set='bulk'
                                secondaryColor='orange'
                                stroke='bold'
                            />
                        }
                    />
                    {errors.lname && <p className="text-error">Upload your memorandum/articles of association</p>}
                    <Div d="flex" justify="center" align="center">

                        <Button variant="primary"
                            onClick={() => prevStep()}
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            m={{ t: "1rem" }}
                            w="10rem"

                        >
                            Previous
                        </Button>
                        <Button variant="primary" type='submit'

                            onClick={() => nextStep()}
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            m={{ t: "1rem", l: "1rem" }}
                            w="10rem"
                        >
                            Next
                        </Button>
                    </Div>


                </Div>



            </form>


        </>

    );
};

export default StepFour;