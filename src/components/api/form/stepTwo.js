import React from 'react';
import { useState } from "react";
import { Input, Div, Icon, Button } from "atomize";
import { useForm } from "react-hook-form";
import { Iconly } from "react-iconly";
import '../auth.css';

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep }) => {


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
    const onSubmit = (el) => {

        localStorage.setItem('details', JSON.stringify(el));
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
                <p className='dey'>Tell us about your company</p>

                <Div

                    d="flex"
                    flexDir="column"
                    justify="center"
                    align="center">

                    <Input onKeyPress w={{ xs: '100%', md: '24rem' }} m={{ t: "2rem" }}
                        {...register("company", { required: true, maxLength: 15 })}
                        placeholder="Company Name" onChange={handleChange} name="company" type="text"

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

                    {errors.company && <p className="text-error">Your company's name is required</p>}
                    <Div>
                        <select onChange ={handleChange} 
                        style={{width:"24rem",border: "1px solid rgb(201, 206, 214)",fontSize: "14px", height:"2.5rem",}}>
                            <option>Select company type</option>
                            <option value="fintech" name="type" onChange={handleChange}>
                                Fintech
                            </option>
                            <option value="car hailing" name="type" onChange={handleChange}>
                                Car hailing app
                            </option>
                            <option value="social" name="type" onChange={handleChange}>
                                Social media
                            </option>
                            <option value="edutech" name="type" onChange={handleChange}>
                                Edutech
                            </option>
                            <option value="others" name="type" onChange={handleChange}>
                                Others
                            </option>
                        </select>
                    </Div>
                    <Input w={{ xs: '100%', md: '24rem' }} m={{ t: "2rem" }} type="url"  {...register("url", { required: true, maxLength: 55 })}
                        placeholder="Company website https://" onChange={handleChange} name="url" pattern="https?://.+"

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
                    {errors.url && <p className="text-error">Your Website is required</p>}
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

export default StepTwo;