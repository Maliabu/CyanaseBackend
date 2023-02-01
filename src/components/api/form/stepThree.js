import React from 'react';
import { Button, Col, Div, Text, Icon, Image, Input, Row } from "atomize";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Iconly } from "react-iconly";

// creating functional component ans getting props from app.js and destructuring them
const stepThree = ({ nextStep, prevStep }) => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });
    // on click submit state

    const myChange = <Icon color="white" name="Loading2" size="20px" />;
    const myOriginal = 'Continue';
    const [buttonText, setButtonText] = useState(myOriginal);
    const [Company, setCompany] = useState("");
    const [Url, setUrl] = useState("");
    const [Type, setType] = useState("");
    const [userID, setID] = useState("");
    const [myText, SetText] = useState("How should we contact you");
    const [errorColor, setError] = useState("none");
    const [inputs, setInputs] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    // hnadle on change in forms
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    /// get the user details
    useEffect(() => {
        const detail = JSON.parse(localStorage.getItem("details"));

        setType(detail.type);
        setCompany(detail.company);
        setUrl(detail.url);


    }, []);
     /// get the user details
     useEffect(() => {
        const data = JSON.parse(localStorage.getItem("loginData"));
        setID(data.id);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `/country.json`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
    }, []);
    const { loading, errorMessage, countries } = countryState;

    const [selectedCountry, setSelectedCountry] = useState();


    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.country_name === selectedCountry) {
            return true;
        }
        return false;
    });
    const dialCode = searchSelectedCountry && searchSelectedCountry.dial_code;
    // handle submit function
    const onSubmit = ( el) => {

        const Country = selectedCountry;
        const Phone = el.phone;
        const  Email = el.email;
        const code = Math.round(Math.random() * (900000 - 9999) + 1000);
        const MyCoder ={"code":code}
        localStorage.setItem('Contacts', JSON.stringify(el));
        localStorage.setItem('code', JSON.stringify(MyCoder));
        // change the status to loading
        setButtonText(myChange);
        // load net step
        // change the status to loading
        setButtonText(myChange);
        // load net step


        const API_PATH = 'https://api.cyanase.com/api/create_api_account.php';
        const EMAIL_PATH = 'https://cyanase.com/savers/email/app_verify.php';
        const API_KEY = "NUlOeDU0c2FEdUxxaVFqQkIxV2JlZz09";
        const MyCode = { "code": code };
        localStorage.setItem('Code', JSON.stringify(MyCode));
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { company: Company, website: Url, type: Type, email: Email, phone: Phone, id: userID, country: Country,code:code }
        })
            .then(result => {

                const message = result.data.message;
                const stateMe = result.data.code
                console.log(result.data);

                if (stateMe === "10") {
                    setButtonText(myOriginal);

                    /// SEnd verification email

                    axios({
                        method: 'POST',
                        url: `${EMAIL_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { email: Email, code:code }
                    })
                        .then(result => {

                            console.log(result.data);


                        })
                        .catch(error => console.log(error.data));
                    nextStep();

                    ///////

                } else {
                    SetText(message);
                    setError("yes");

                }

            })
            .catch(error => console.log(error));


    }

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
                <Text textAlign="center" className={` ${errorColor === "none" ? 'dey' : 'deye'}`}>
                    {myText}
                    </Text>
                <Div
                    m={{ t: "2rem" }}
                    d="flex"
                    flexDir="column"
                    justify="center"
                    align="center">

                    <section>
                        <Div className="">

                            <div>

                                <div>

                                </div>
                                <div className="grid justify-center mt-14 mx-10 space-y-10">

                                    <Div d="flex"
                                        flexDir="column"
                                        justify="center"
                                        align="center" >
                                        <select
                                            value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}
                                            className="myOptions"
                                        >
                                            <option className='select'>--Select Country--</option>

                                            {countries.map((item) => {
                                                return (
                                                    <option name="country" key={uuidv4()} value={item.country_name}>
                                                        {item.country_name}
                                                    </option>
                                                );
                                            })}
                                            {errors.country && <p className="text-error">Select country to continue</p>}
                                        </select>
                                    </Div>
                                    <div>

                                        <div className="flex space-x-4">

                                            <div>
                                                <Input defaultValue={dialCode} w={{ xs: '100%', md: '24rem' }}
                                                    m={{ t: "2rem" }}
                                                    {...register("phone", { required: true, minLength: 5, maxLength: 55 })}
                                                    placeholder="Enter your phone number"
                                                    name="phone" type="tel"
                                                    p={{ x: "2.5rem" }}
                                                    prefix={

                                                        <Iconly
                                                            className="ivn"
                                                            name="Call"
                                                            primaryColor={`#252859`}
                                                            set='bulk'
                                                            secondaryColor='orange'
                                                            stroke='bold'
                                                        />
                                                    }
                                                />

                                                {errors.phone && <p className="text-error">Your phone number is required</p>}


                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Div>
                    </section>
                    <Input
                        onKeyPress w={{ xs: '100%', md: '24rem' }}
                        m={{ t: "2rem" }}
                        {...register("email", { required: true, maxLength: 65 })}
                        placeholder="Enter email" onChange={handleChange} name="email" type="text"

                        p={{ x: "2.5rem" }}
                        prefix={

                            <Iconly
                                className="ivn"
                                name="Message"
                                primaryColor={`#252859`}
                                set='bulk'
                                secondaryColor='orange'
                                stroke='bold'
                            />
                        }
                    />

                    {errors.email && <p className="text-error">Check your email</p>}
                    <Row flexDir={{ xs: 'row', lg: 'row' }}>
                        <Col>
                            <Button onClick={prevStep}
                                align="center"
                                shadow="3"
                                hoverShadow="4"
                                bg={`#252859`}
                                m={{ t: "1rem" }}
                                w={{ xs: 'aut', md: 'auto' }}
                            >
                                Previous
                            </Button>
                        </Col>
                        <Col><Button type='submit'
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            m={{ t: "1rem" }}
                            w={{ xs: 'auto', md: 'auto' }}
                        >
                            {buttonText}
                        </Button></Col>
                    </Row>
                    <span className='dont'>Already have an account?<a>  <NavLink to="/login" >
                        Login
                    </NavLink></a></span>
                </Div>



            </form>


        </>
    );
};

export default stepThree;