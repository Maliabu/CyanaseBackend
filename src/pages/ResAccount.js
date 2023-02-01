import { useState, useEffect } from 'react';
import React from "react";
import { Div, Text, Container, Modal, Icon, Input, Button, Notification, Image } from "atomize";
import { Iconly } from 'react-iconly';
import { useForm } from "react-hook-form";
import axios from 'axios';


function ResAccount() {

  /// states to show and hide errors
  const [myText, SetText] = useState("Add details to change password");
  const [kinText, setKin] = useState("Who should handle your account incase your not here");
  const [myId, setID] = useState();
  const [kinFname, setKinFname] = useState();
  const [KinLname, setKinLname] = useState();
  const [kinEmail, setKinEmail] = useState();
  const [KinPhone, setKinPhone] = useState();
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Photo, setPhoto] = useState();
  const [verified, setVerified] = useState("Pending");

  /// Hide and show componets
  const [show, hide] = useState("show");
  ///// upload note
  const [UploadNote, SetUploadNote] = useState(false);

  ////Get user login data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    setID(data.id);
    setEmail(data.email);
    setFname(data.fname);
    setLname(data.lname);
    setPhone(data.phone);
    if(data.photo===''){
      setPhoto("download.PNG");
    }else{

      setPhoto(data.photo)
    };
    setKinEmail(data.kemail);
    setKinFname(data.kfname);
    setKinLname(data.klname);
    setKinPhone(data.kphone);
    setVerified(data.verified);


  }, []);

  ///Set user profile picture
  const [File, setFile] = useState();

  function handlePicture(e) {

    setFile(URL.createObjectURL(e.target.files[0]));
    e.preventDefault();
    const formData = new FormData();
    formData.append("File", "setFile");
    const API_PATH = 'https://api.cyanase.com/api/change_dp.php';

    // MAKE AN AJAX REQUEST
    SetUploadNote(true);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
    })
      .then(resulta => {
        const message = resulta.data.message;
        const stateMe = resulta.data.status



        if (stateMe == 200) {
          setButtonText(myOriginal);
          SetText(message);
          setError("yes");


        } else if (stateMe == 100) {
          setButtonText(myOriginal);
          SetText(message);
          setError("none");
        }


      })
      .catch(error => console.log(error));
  }

  if (verified == 1) {

    setVerified("Completed")
  }
  const myChange = <Icon color="white" name="Loading2" size="20px" />;
  const myOriginal = 'Change';
  const [buttonText, setButtonText] = useState(myOriginal);
  const [errorColor, setError] = useState("none");
  // handle on change in forms
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  /// When user submits password change
  const onSubmitPassword = (datal) => {


    /// Set the default error back to noramal
    SetText("Add details to continue");

    /// Set the error color back to default
    setError("none");
    // change the status to laoding
    setButtonText(myChange);

    // send data to the API
    const API_PATH = 'https://api.cyanase.com/api/app_change_password.php';

    // MAKE AN AJAX REQUEST

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { id: myId, old: datal.opassword, new: datal.npassword }
    })
      .then(resulta => {
        const message = resulta.data.message;
        const stateMe = resulta.data.status



        if (stateMe == 200) {
          setButtonText(myOriginal);
          SetText(message);
          setError("yes");


        } else if (stateMe == 100) {
          setButtonText(myOriginal);
          SetText(message);
          setError("none");
        }


      })
      .catch(error => alert(error));
  }


  //when user sets next of kin

  const onSubmitKin = (datal) => {


    /// Set the default error back to noramal
    SetText("  Who should handle your account incase your not here");

    /// Set the error color back to default
    setError("none");
    // change the status to laoding
    setButtonText(myChange);

    // send data to the API
    const API_PATH = 'https://api.cyanase.com/api/kin.php';

    // MAKE AN AJAX REQUEST

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { id: myId, fname: datal.fname, lname: datal.lname, email: datal.email, phone: datal.phone }
    })
      .then(resulta => {
        const message = resulta.data.message;
        const stateMe = resulta.data.status


        if (stateMe == 200) {
          setButtonText(myOriginal);
          setKin(message);
          setError("yes");


        } else if (stateMe == 100) {
          setButtonText(myOriginal);
          SetKin(message);
          setError("none");
        }


      })
      .catch(error => alert(error));
  }
  /// Show POPUP menue button
  const [showTopUP, setTopUp] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  //change Password
  const ChangePassword = () => {


    return (
      <>
        <form className="myform" onSubmit={handleSubmit(onSubmitPassword)}>

          <Div d="flex" justify="center" className="topera">

            <Iconly

              name="Lock"
              primaryColor={`#252859`}
              set='bulk'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
          <Div>
            <Text m={{ t: "1rem" }}
              textAlign="center"
              textColor="#252859" textWeight="500"
              textSize="heading">
              Change password
            </Text>
            <Text textSize="subheader" textAlign="center"
              className={` ${errorColor === "none" ? 'dey' : 'deye'}`}
            >
              {myText}
            </Text>
          </Div>
          <Div d="flex" justify="center">

            <Input w={{ xs: '100%', md: '24rem' }}
              {...register("opassword", { required: true, maxLength: 15 })}
              placeholder="Enter old password" name="opassword" type="password"
              m={{ t: "3rem" }}
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Password"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />
          </Div>
          <Div d="flex" align="center" justify="center">
            {errors.opassword && <Text textAlign="center" className="text-error">
              Your old password is required
            </Text>}
          </Div>
          <Div d="flex" justify="center">

            <Input w={{ xs: '100%', md: '24rem' }}
              {...register("npassword", { required: true, maxLength: 15 })}
              placeholder="Enter new password" name="npassword" type="password"
              m={{ t: "3rem" }}
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Password"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />
          </Div>
          <Div d="flex" justify="center">
            {errors.npassword && <Text textAlign="center" className="text-error">
              Your new password is required</Text>}
          </Div>

          <Div d="flex" justify="center">
            <Input w={{ xs: '100%', md: '24rem' }}
              {...register("cpassword", { required: true, maxLength: 15 })}
              placeholder="Enter new password" name="cpassword" type="password"
              m={{ t: "3rem" }}
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Password"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />

          </Div>
          <Div d="flex" align="center" justify="center">
            {errors.cpassword && <Text textAlign="center" className="text-error">
              Confirm new password
            </Text>}
          </Div>
          <Div m={{ t: "2rem" }} d="flex" align="center" justify="center">
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
    )



  }
  //Change Next of kin
  const NextOfKin = () => {
    return (
      <>
        <form className="myform" onSubmit={handleSubmit(onSubmitKin)}>
          <Div justify="center">
            <Div d="flex" justify="center" className="topera">

              <Iconly

                name="People"
                primaryColor={`#252859`}
                set='bulk'
                secondaryColor='orange'
                stroke='bold'
              />
            </Div>
            <Div>
              <Text m={{ t: "1rem" }} textAlign="center" textColor="#252859" textWeight="500">
                Add Next Of kin
              </Text>
              <Text textAlign="center" textColor="#808080">
                {kinText}
              </Text>
            </Div>

            <Div d="flex" justify="center">

              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("fname", { required: true, })}
                placeholder="first name" name="fname" type="text" defaultValue={kinFname}
                m={{ t: "2rem" }}
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


            </Div>
            <Div d="flex" align="center" justify="center">
              {errors.fname && <Text textAlign="center"
                className="text-error">First name is required</Text>}
            </Div>
            <Div d="flex" justify="center">

              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("lname", { required: true, })}
                placeholder="last name" name="lname" type="text"
                defaultValue={KinLname}
                m={{ t: "2rem" }}
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


            </Div>
            <Div d="flex" align="center" justify="center">
              {errors.lname && <Text textAlign="center"
                className="text-error">last name is required</Text>}
            </Div>
            <Div d="flex" justify="center">
              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("email", { required: true, })}
                placeholder="Enter their email address" name="email" type="text" defaultValue={kinEmail}
                m={{ t: "2rem" }}
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


            </Div>
            <Div d="flex" align="center" justify="center">
              {errors.email && <Text textAlign="center"
                className="text-error">Email address is required</Text>}
            </Div>

            <Div d="flex" justify="center">
              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("phone", { required: true, maxLength: 15 })}
                placeholder="Enter Phone number" name="phone" type="text" defaultValue={KinPhone}
                m={{ t: "2rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="Calling"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />

            </Div>
            <Div d="flex" align="center" justify="center">
              {errors.phone && <Text textAlign="center" className="text-error">
                Phone number is required
              </Text>}
            </Div>

            <Div d="flex" justify="center">
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

          </Div>
        </form>


      </>
    )
  }

  //Change account details
  const AccountDetails = () => {
    return (
      <>
        <Div>
          <Text textWeight="700">
            Account Details
          </Text>
          <Div m="2rem" d="flex" align="center" justify="center">
            <Notification
              m={{ t: "10rem" }}
              bg="info700"
              textColor="#252859"
              isOpen={UploadNote}
              onClose={() => SetUploadNote(false)}
              prefix={
                <Icon

                  name="infoSolid"
                  color="white"
                  size="18px"
                  m={{ r: "0.5rem" }}
                />

              }
            >
              Uploading image please wait.....
            </Notification>
            <Image
              className={` ${show === "show" ? 'display_none ' : 'display_yes aimagz'}`}
              w="150px" h="150px"
              src={File} rounded="circle" />

            <Image
              className={` ${show === "show" ? 'display_yes imagz' : 'display_none'}`}

              w="150px" h="150px"
              src={`../image/profile_pic/${Photo}`} rounded="circle" />
          </Div>

          <label htmlFor='file-upload'>
            <Div className="Zindex">
              <Iconly
                onClick={() => hide("yes")}
                name="Camera"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'

              />
              <input id="file-upload" style={{ display: "none" }} onChange={handlePicture} type="file" />
            </Div>
          </label>

          <Div
            hoverBg="gray300"
            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
              <Iconly

                name="User"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Name
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              {Fname} {Lname}
            </Text>
          </Div>
          <Div
            hoverBg="gray300"
            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} className="listings">
              <Iconly

                name="Calling"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Phone number
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              {Phone}
            </Text>
          </Div>
          <Div

            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} className="listings">
              <Iconly

                name="Message"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Email
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              {Email}
            </Text>
            <Div rounded="md" m={{ t: "0.5rem" }} p="1rem" bg="gray300" d="flex" justify="center">
              <Text m={{ t: "0.8rem" }} textWeight="500" textSize="subheader">
                Account status
              </Text>
              <Div m={{ l: "2rem" }}>
                <Button
                  bg="#252859"
                  rounded="ci"

                >
                  {verified}
                </Button>
              </Div>

            </Div>
          </Div>
        </Div>
      </>
    )


  }
  ///Account details settings


  ////SET THE TYPE OF MODAL TO DISPLAY WHEN USER CLICKS CHOOSES A SETINGS OPTIONS
  const [myModal, ChangeModal] = useState("password");

  let DisplayPopup = "";

  if (myModal == "password") {

    DisplayPopup = <ChangePassword />;

  } else if (myModal === "account") {


    DisplayPopup = <AccountDetails />;

  } else if (myModal == "kin") {

    DisplayPopup = <NextOfKin />;

  }
  ///pop up modals

  const ShowPopup = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW={{ xs: 'auto', md: '40vw' }}
        m={{ t: "2rem" }}
        h="auto"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />

        {DisplayPopup}

      </Modal>
    );
  };

  return (
    <>
      <Container>
        <ShowPopup
          isOpen={showTopUP}
          onClose={() => setTopUp(false)}
        />
        <Div>
          <Text textSize="heading"
            m={{ t: "1rem" }}
            textWeight="500"
          > Account Settings</Text>
          <Div
            onClick={() => {
              ChangeModal("password");
              setTopUp(true);
            }
            }>
            <Div

              p={{ y: "0.25rem" }}
              m={{ t: "1rem", }}
              className="listings">
              <Iconly

                name="Password"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}
                textColor={`#ff9b00`}
                textWeight="700"
                m={{ l: "0.7rem", }}>
                Password
              </Text>
            </Div>
            <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
              Change user password
            </Text>
          </Div>

        </Div>
        <Div>

          <Div
            onClick={() => {

              ChangeModal("kin");
              setTopUp(true);
            }

            }

            p={{ y: "0.25rem" }}
            m={{ t: "1rem", }}
            className="listings">
            <Iconly

              name="User"
              primaryColor={`black`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'
            />
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"
              m={{ l: "0.7rem", }}>
              Next of Kin
            </Text>
          </Div>
          <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
            Who should be in charge incase your not here.
          </Text>
        </Div>
        <Div>

          <Div
            onClick={() => {

              ChangeModal("account");
              setTopUp(true);
            }

            }

            p={{ y: "0.25rem" }}
            m={{ t: "1rem", }}
            className="listings">
            <Iconly

              name="People"
              primaryColor={`black`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'
            />
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"
              m={{ l: "0.7rem", }}>
              Account Details
            </Text>
          </Div>
          <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
            Check your user bio
          </Text>
        </Div>

      </Container>
    </>
  );
}

export default ResAccount;
