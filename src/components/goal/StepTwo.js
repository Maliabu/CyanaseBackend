import React from 'react';
import { Text, Div, Row, Col, Button, Input } from "atomize";
import { Iconly } from "react-iconly";
import { useState } from "react";
import { useForm } from "react-hook-form";





const StepTwo = ({ nextStep, prevStep, values, handleFormData }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const onSubmit = (el) => {
        // change the status to loading
       
        localStorage.setItem('GoalTime', JSON.stringify(el));
        const WeeklyTime = parseInt(el.time) / parseInt("7"); 
        const MonthlyTime = parseInt(el.time) / parseInt("30");
        const MonthWeek = {"week":WeeklyTime, "month":MonthlyTime}
        localStorage.setItem('MonthWeek', JSON.stringify(MonthWeek));
        nextStep();

    }
    return (

        <>
            <Text
                textSize="heading"
                textWeight="500"
                textAlign="center"
                textColor="#252859"
            >
                Add your goal
            </Text>

            <Text
                textColor="#828282"
                textWeight="500"
                textAlign="center"
                textSize="subheader">
                What do you want to achieve
            </Text>

            <Div m={{ t: "2rem" }} p="0.5rem" rounded="md">
               
                
                <Div>

                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <Div >
                    <Div d="flex" align="center" justify="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text textAlign="center" textColor="black" m={{ t: "0.6rem" }} textWeight="500">
                            What do you want to achieve?
                        </Text>
                    </Div>
                 

                </Div>
                    <Div d="flex" justify="center">
                        <Input w={{ xs: '18.5rem', md: '24rem' }}
                            {...register("goal", { required: true, minLength: 5 })}
                            placeholder="E.g build a home" name="goal" type="text"
                          
                            p={{ x: "2.5rem" }}
                            onChange={handleChange}
                            defaultValue={values.goal}
                            prefix={

                                <Iconly
                                    className="ivn"
                                    name="TimeCircle"
                                    primaryColor={`#252859`}
                                    set='bulk'
                                    secondaryColor='orange'
                                    stroke='bold'
                                />
                            }
                        />

                    </Div>
                    <Div d="flex" align="center" justify="center">
                        {errors.goal && <Text textAlign="center" className="text-error">Your goal is required</Text>}
                        </Div>
                    <Div m={{t:"1rem"}} d="flex" align="center" justify="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text textAlign="center" textColor="black" m={{ t: "1rem" }} textWeight="500">
                            How long do you wish to accomplish your goal(number in days)?
                        </Text>
                    </Div>
                        <Div d="flex" justify="center">
                            <Input w={{ xs: '18.5rem', md: '24rem' }}
                                {...register("time", { required: true, maxLength: 15, minLength:3 })}
                                placeholder="E.g 700 days" name="time" type="number"
                               
                                p={{ x: "2.5rem" }}
                                defaultValue={values.time}
                                onChange={handleChange}
                                prefix={

                                    <Iconly
                                        className="ivn"
                                        name="TimeCircle"
                                        primaryColor={`#252859`}
                                        set='bulk'
                                        secondaryColor='orange'
                                        stroke='bold'
                                    />
                                }
                            />

                        </Div>
                        <Div d="flex" align="center" justify="center">
                        {errors.time && <Text textAlign="center" className="text-error">Enter time in days</Text>}
                        </Div>
                        

                        <Div m ={{t:"2rem"}}d="flex" justify="center">
                <Row m={{ t: "3rem", l: "2rem" }} d="flex" align="center" justify="center">
                    <Col>
                        <Button variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="5rem"
                            onClick={() =>
                                prevStep()
                            }>

                            Previous
                        </Button>
                    </Col>

                    <Col>
                        <Button
                        type="submit"
                        variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            p="0.5rem"
                            m={{ l: "1rem" }}
                            rounded="circle"
                            w="5rem"
                          >

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>
                    </form>


                </Div>
            </Div>
            

        </>
    )

};
export default StepTwo;