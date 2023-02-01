import React from 'react';
import { Text, Div,Row, Col } from "atomize";
import "../../public/app.css";
import { useState,useEffect } from 'react';
import { Iconly } from 'react-iconly';
import axios from 'axios';


function ResNotification() {

  const [myNote, setNote] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    setNote(data.notify);
  }, []);

 
    return (
       <>
        <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
        <Text textSize="heading" m={{ t: "1rem" }}
          textWeight="500">
          Notification
        </Text>
      {myNote.map((data) => {
              return (
                <Div
                key={data.notify_id}
                m={{t:"1rem"}} d="flex" bg="gray300" rounded="md">
                <Div p="1rem">
                  <Iconly
                    name="Logout"
                    primaryColor={`#252859`}
                    set='broken'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                </Div>
                <Div p="1rem">
                  <Text
                    textSize={`20px`}
                    textColor={`#ff9b00`}
                    textWeight="700"
        
                  >
                  {data.type}
                  </Text>
                  <Text>
                   {data.note}
                  </Text>
                </Div>
              </Div>
              
              )
            })}


     
  

      
  </Div> 
       </>

    );
}
export default ResNotification