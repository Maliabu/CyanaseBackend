import React from 'react';
import { useState,useEffect } from 'react';
import './Navbar.css';
import { Div, Col, Row, Text, Container } from "atomize";
import { Iconly } from 'react-iconly';
import { Link } from 'react-router-dom';



const Navbar = (isOpen, onClose) => {
  //// Get user dp
  const [dp, setDp] = useState("download.PNG");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [isactive, setactive] = useState('home');
  const [Fname, setName] = useState();
  const [Lname, setLName] = useState();
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    
    setName(data.fname);
    setLName(data.lname);
    if(data.photo===''){
      setDp("download.PNG");
    }else{

      setDp(data.photo)
    }
    
    
   
  });

  return (
    <>


      <nav className='nav-menu active'>
        <Container>

          <ul className='nav-menu-items'>
            
              <img className="logo" src="../image/logh.png" />
           
            <br></br><br></br>
            <Div rounded="md" className="my_tag" p="0.75rem">
              <Row>
                <Col size="4"> <img className="dp" src={`../image/profile_pic/${dp}`} />
                </Col>
                <Col size="8">
                  <Text textWeight="600" textColor="white">{Fname} {Lname}</Text>
                  <Text textSize="caption" textWeight="300" textColor="white">User</Text>
                </Col>
              </Row>
            </Div>
            <Div className="nav-text" m={{ t: "3rem", l: "2rem" }}>
             <Text textWeight="500" textColor="#252859">DASHBOARD</Text>
              <li >
                <Link to="/">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Category"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text  className={` ${isactive ==="home" ?   'myactive nav-text' : 'nav-text not_active' }`}
                     onClick={() => {
      
                      setactive("home");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Home</Text>
                  </Div>
                </Link>
              </li>
              <li>
                <Link to="/Goal">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="User"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="personal" ? 'myactive nav-text' : 'nav-text not_active'}`} onClick={() => {
      
                      setactive("personal");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Personal Investments</Text>
                  </Div>
                </Link>
              </li>
              <li >
                <Link to="./Sacco">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="People"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="sacco" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("sacco");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Sacco groups</Text>
                  </Div>
                </Link>
              </li>

              <li >
                <Link to="./Clubs">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Work"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text  className={` ${isactive ==="clubs" ?   'myactive nav-text' : 'nav-text not_active' }`}
                     onClick={() => {
      
                      setactive("clubs");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Investment clubs</Text>
                  </Div>
                </Link>
              </li>
            </Div>
            <Div className="nav-text" m={{ t: "2rem", l: "2rem" }}>
              <Text textWeight="500">ACTIVITY</Text>
              <li >
                <Link to="./Deposit">
                  <Div p={{ y: "0.25rem" }} m={{ t: "2rem", }} className="listings">
                    <Iconly

                      name="Wallet"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="deposit" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("deposit");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Deposit</Text>
                  </Div>
                </Link>

              </li>
              <li >
                <Link to="./Loan">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Filter"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="loans" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("loans");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>loans</Text>
                  </Div>
                </Link>

              </li>
              <li >
                <Link to="./Withdraw">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Folder"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="withdraw" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("withdraw");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Withdraw</Text>
                  </Div>
                </Link>

              </li>
            </Div>
            <Div className="nav-text" m={{ t: "2rem", l: "2rem" }}>
              <Text textWeight="500">SETTINGS</Text>
              <li >
                <Link to="./Account">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Setting"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="account" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("account");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Account</Text>
                  </Div>
                </Link>
              </li>
              <li >
                <Link to="./investment">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Graph"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text className={` ${isactive ==="investment" ?   'myactive nav-text' : 'nav-text not_active' }`} onClick={() => {
      
                      setactive("investment");
                      
              
                      }} textWeight="500" m={{ l: "0.7rem", }}>Investment</Text>
                  </Div>
                </Link>
              </li>
              <li >
                <Link to="/">
                  <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
                    <Iconly

                      name="Document"
                      primaryColor={`#252859`}
                      set='bulk'
                      secondaryColor='orange'
                      stroke='bold'
                    /> <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>FAQ</Text>
                  </Div>
                </Link>

              </li>

            </Div>
          </ul>

        </Container>

      </nav>
    </>
  );
}

export default Navbar;
