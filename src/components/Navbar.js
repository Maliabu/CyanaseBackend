import React from "react";
import { useState } from 'react';
import { Div, Container } from "atomize";
import Mainbar from './Mainbar';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Iconly } from 'react-iconly';
import { Fragment } from "react/cjs/react.production.min";

const Navbar = () => {


  const [isactive, setactive] = useState('personal');

/// See if the user has read thw notification
const [notRead, read] = useState('yes');

  return (
    <>
      <Fragment><div className='navbar'>
        <Container>

          <Div d="flex" align="center" justify="center" textAlign="center" className="handler">

            <Div p={{ y: "0.25rem", x: "10%" }}>
              <Link to="/ResHome">
                <div className={` ${isactive === "home" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("home");


                }}>
                  <Iconly

                    name="Category"

                    set='broken'

                    stroke='bold'

                  /></div>
              </Link>
            </Div>


            <Div p={{ y: "0.25rem", x: "10%" }}>

              <Link to="/ResDeposit">
                <div className={` ${isactive === "wallet" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("wallet");


                }}>
                  <Iconly

                    name="Wallet"
                    set='broken'
                    stroke='bold'
                  /> </div>
              </Link>
            </Div>

            <Div p={{ y: "0.25rem", x: "10%" }}>

              <Link to="/ResNotification">
                <div className={` ${isactive === "note" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("note");
                  read("non");

                }}>
                  <Iconly

                    name="Notification"
                    set='broken'
                    stroke='bold'
                  /></div>
                <Div
                  className={` ${notRead === "yes" ? 'notes' : 'display_none'}`}
                  rounded="circle" textColor="white" bg="blue"
                  >
                  1
                </Div>
              </Link>
            </Div>


            <Div p={{ y: "0.25rem", x: "10%" }}>
              <Link to="/ResSetting"> <div className={` ${isactive === "set" ? 'icons' : 'viannie'}`} onClick={() => {

                setactive("set");


              }}>
                <Iconly

                  name="Setting"
                  set='broken'
                  stroke='bold'
                /></div>
              </Link>

            </Div>
          </Div>
        </Container>

      </div>

        <Div>

          {/* Navigation content*/}
          <Mainbar />


        </Div>
      </Fragment>

    </>
  );
}


export default Navbar;