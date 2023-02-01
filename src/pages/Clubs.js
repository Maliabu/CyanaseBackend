import React  from "react";
import { Div, Text } from "atomize";
import { Iconly } from 'react-iconly';

function Clubs() {
  return (
    <>
    <Div className="cont">
    <Div d="flex" justify="center">
    <Div m={{t:"10rem"}}className="under"  p="1rem">
             <Iconly
 
               name="Work"
               primaryColor={`#252859`}
               set='bulk'
               secondaryColor='orange'
               stroke='bold'
             />
           </Div>
    </Div>
    <Text textSize="heading" textAlign="center" textWeight="500" textColor="#252859"> 
    Form Sacco investment clubs with your friends & family and grow together
    </Text>
    <Text textSize="subheader" textAlign="center" textWeight="500" textColor="#808080"> 
 (Feature is Under development)
    </Text>
    </Div>
 
    </>
  );
}

export default Clubs;
