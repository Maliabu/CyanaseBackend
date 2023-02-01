import React from 'react';
import {useState, useEffect } from 'react';
import { Input, Div, Dropdown, Anchor } from "atomize";
import { Iconly } from 'react-iconly';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const [showDropdown, drop] = useState(false);
  const [createAccount, Api] = useState("create");
  const [Ortus, setOrtus] = useState("none");

  
  const [note, setNote] = useState();
  const [dp, setDp] = useState();

 ////Get user login data
 useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
  
    setOrtus(data.ortus);
   
    Api(data.apiAccount);
    if(data.photo===''){
      setDp("download.PNG");
    }else{

      setDp(data.photo)
    }
    setNote(data.note);
   
  }, []);

  
  const menuList = (
    <Div
      onClick={() =>
        drop(false)
      }>

      <Anchor d="block" p={{ y: "0.25rem" }}>
        <Link to={`${createAccount === "create" ? './ApiAccount' : './API'}`}>
          API account
        </Link>
      </Anchor>
     
      <Anchor d="block" p={{ y: "0.25rem" }}>
        <Link className= {`${Ortus === "none" ? 'display_none' : 'display_yes'}`} to='./Ortus'>
          Ortus capital
        </Link>
      </Anchor>
      <Anchor onClick={()=>{

localStorage.removeItem("loginID");  
window.location.replace('https://auth.cyanase.com');
      }}  d="block" p={{ y: "0.25rem" }}>
        Logout
      </Anchor>
    </Div>
  );
  const [notRead, read] = useState('yes');
  return (

    <>

      <Div className="mytop" m={{ t: "2rem" }} >
        <Div d="flex" justify="center" flex="row">

          <Input w={{ xs: '100%', md: '24rem' }} className="input"
            placeholder="Search here ..."
            name="phone" type="text"
            p={{ x: "2.5rem" }}
            prefix={

              <Iconly
                className="ivn"
                name="Search"
                primaryColor={`#252859`}
                set='bulk'
                secondaryColor='orange'
                stroke='bold'
              />
            }
          />


          <Link onClick={() => {

            read("non");


          }} to="/Notification">

            <Div d="flex" className="top_svg" p={{ y: "0.25rem", x: "2rem" }} >
              <Div m={{ t: "0.8rem", }}
              h="auto" w="auto"
                className={` ${notRead === "yes" ? 'notez' : 'display_none'}`}
                rounded="circle"
                textColor="white">
               {note}
              </Div>
              <Iconly
                primaryColor='#ff9b00'
                name="Notification"
                set='broken'
                stroke='bold'


              />

            </Div>

          </Link>


          <Div d="flex" align="center" justify="center" p={{ y: "0.25rem", x: "2rem" }} >
            <img className="dp" src={`../image/profile_pic/${dp}`}/>
          </Div>
          <Dropdown
            w=" 10rem"
            isOpen={showDropdown}
            onClick={() =>
              drop(true)
            }
            menu={menuList}
          >
            Account
          </Dropdown>

        </Div>






      </Div>


    </>
  );
}
export default Topbar;