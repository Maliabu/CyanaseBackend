import React from "react";
import { Div, Text, Input, Button, Row, Col, } from "atomize";
import { Iconly } from "react-iconly";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";



const Amount = ({ values, nextStep, prevStep, handleFormData }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputs, setInputs] = useState({});
    const [time, setTime] = useState();
    const [goal, setGoal] = useState();
    const [weekly, setWeekly] = useState();
    const [monthly, setMonthly] = useState();
    const [TextError, setErrors] = useState("none");
    ////Get user login data
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("GoalTime"));
        const value = JSON.parse(localStorage.getItem("MonthWeek"));
        setWeekly(value.week);
        setMonthly(value.month);
        setTime(data.time);
        setGoal(data.goal);
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const onSubmit = (el) => {
        // change the status to loading
        const WeeklyInvestment = (parseInt(el.amount) / parseInt(weekly));
        const MonthlyInvestment = (parseInt(el.amount) / parseInt(monthly));
        const MonthWeek = {"month": MonthlyInvestment,"week": WeeklyInvestment}
        localStorage.setItem('GoalAmount', JSON.stringify(el));
        localStorage.setItem('MonthWeekAmount', JSON.stringify(MonthWeek));
        nextStep();

    }
    return (
        <>
            <Div

                m={{ t: "2rem" }}
                justify="center">



                <Div
                    d="flex"
                    justify="center"
                >
                    <Text
                        textAlign="center"
                        m={{ t: "1rem" }}
                        textSize="heading"
                        textColor="#252859"
                        textWeight="500">
                        How much does it cost to achieve this goal
                    </Text>
                </Div>
                <Div m={{ t: "1rem" }} d="flex" align="center" justify="center">

                    <Text textWeight="500" textAlign="center" textColor="#252859"textSize={{ xs: 'subheader', md: 'heading' }}>
                        Okay, so you want to<span className="span">{goal}</span> in<span className="span"> {time} days</span>! Tell us how much <span className="span"> {goal}</span>
                        costs and we help you
                        calculate how much you need to invest
                    </Text>
                </Div>
                <Div d="flex" justify="center">
                </Div>
                <Div justify="center">

                    <form className="myform" onSubmit={handleSubmit(onSubmit)}>
                        <Div d="flex" justify="center">
                            <Input w={{ xs: '18.5rem', md: '24rem' }}
                                {...register("amount", { required: true, maxLength: 15 })}
                                placeholder="Enter amount" name="amount" type="text"
                                m={{ t: "3rem" }}
                                p={{ x: "2.5rem" }}
                                defaultValue={values.amount}
                                onChange={handleChange}
                                prefix={

                                    <Iconly
                                        className="ivn"
                                        name="Wallet"
                                        primaryColor={`#252859`}
                                        set='bulk'
                                        secondaryColor='orange'
                                        stroke='bold'
                                    />
                                }
                            />

                        </Div>
                        <Div d="flex" align="center" justify="center">
                            {errors.amount && <Text textAlign="center" className="text-error">Amount is required</Text>}
                        </Div>


                        <Div d="flex" justify="center">
                            <Row m={{ t: "2rem", l: "2rem" }} d="flex" align="center" justify="center">
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

    );
}

export default Amount;