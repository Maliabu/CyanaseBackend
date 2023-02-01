import React from 'react';
import { Text, Div } from "atomize";
import { Iconly } from "react-iconly";

const Final = ({ values }) => {

  //destructuring the object from values

  return (
    <>
      <Div d="flex" align="center" justify="center" className="toper">
        <Iconly

          name="ShieldDone"
          primaryColor={`#252859`}
          set='bulk'
          secondaryColor='orange'
          stroke='bold'
        />
      </Div>
      <Text
        textColor="#252859"
        textSize="heading"
        textAlign="center">
        Account Review
      </Text>
      <Text
        textColor="#808080"
        textSize="subheader"
        textAlign="center">
       Your registration details are being reviewed. You will be contacted in the next couple of days 
       for the next steps 
      
      </Text>
    </>
  );
};

export default Final;
