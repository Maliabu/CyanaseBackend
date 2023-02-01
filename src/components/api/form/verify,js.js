import React, { useState, useEffect } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image, Label, Radiobox } from "atomize";
import { Iconly } from "react-iconly";
import { useForm } from "react-hook-form";
import { NavLink, } from "react-router-dom";
import axios from "axios";
const Verify = ({ values, prevStep, nextStep }) => {
    //destructuring the object from values

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputs, setInputs] = useState({});
    const [Code, setCode] = useState();
    const [errorColor, setError] = useState("none");
    const [Email, setEmail] = useState("none");
    const [myText, SetText] = useState("Verify your account");
    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Continue';
    const [buttonText, setButtonText] = useState(myOriginal);
    const [userID, setID] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setID(data.id);
    }, []);

    useEffect(() => {
        const MyCode = JSON.parse(localStorage.getItem("code"));

        setCode(MyCode.code);


    }, []);
    useEffect(() => {
        const MyEmail = JSON.parse(localStorage.getItem("Contact"));


        setEmail(MyEmail.email);


    }, []);



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    //Verify user
    const onSubmit = (el) => {
        const InputCode = el.code;
      

        if (parseInt(InputCode) === parseInt(Code)) {


            const EMAIL_PATH = 'https://api.cyanase.com/api/update_verify.php';
            axios({
                method: 'POST',
                url: `${EMAIL_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: { id: userID, type: "api" }
            })
                .then(result => {

                    const state = result.data.message;

                    if (state === "verified") {

                        nextStep();

                    }
                })
                .catch(error => console.log(error.data));
        } else {

            SetText("Invalid verification code");
            setError("yes");

        }
    }
    return (
        <>
            <Div d="flex" align="center" justify="center" className="topera" >
                <Iconly

                    name="Message"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                />
            </Div>

            <Text   
                m={{ t: "1rem" }}
                textColor={` ${errorColor === "none" ? '#252859' : 'red'}`}
                textSize="heading"
                textAlign="center">
                {myText}
            </Text>
            <Text
                textColor="#808080"
                textSize="subheader"
                textAlign="center">
                A verification code has been sent to your email address  <span className="span">
                    {Email}</span> kindly check to verify your account.
            </Text>

            <form className="myform" onSubmit={handleSubmit(onSubmit)}>

                <Div

                    d="flex"
                    flexDir="column"
                    justify="center"
                    align="center">

                    <Input w={{ xs: '100%', md: '24rem' }} m={{ t: "2rem" }}   {...register("code", { required: true, maxLength: 55, })}
                        placeholder="Verification code" onChange={handleChange} name="code" type="text"

                        p={{ x: "2.5rem" }}
                        prefix={
                            <Icon
                                name="Email"
                                color="warning800"
                                size="16px"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                left="0.75rem"
                                transform="translateY(-50%)"
                            />
                        }
                    />
                    {errors.code && <p className="text-error">Please enter verification code</p>}

                    <Button type='submit'
                        align="center"
                        shadow="3"
                        hoverShadow="4"
                        bg={`#252859`}
                        m={{ t: "1rem" }}
                        w={{ xs: '100%', md: '24rem' }}
                    >
                        {buttonText}
                    </Button>

                </Div>



            </form>

        </>
    );
};

export default Verify;
