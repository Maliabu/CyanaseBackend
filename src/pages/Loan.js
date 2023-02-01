import React from 'react';
import { StyleReset, ThemeProvider,Div,Container,Text } from "atomize";
import { Iconly } from 'react-iconly';

function Products() {
  return (
    <>
   <Div d="flex" justify="center">
   <Div m={{t:"10rem"}}className="under"  p="1rem">
            <Iconly

              name="Filter"
              primaryColor={`#252859`}
              set='bulk'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
   </Div>
   <Text textSize="heading" textAlign="center" textWeight="500" textColor="#252859"> 
   Loan money to your friends & family and earn an interest on it.
   </Text>
   <Text textSize="subheader" textAlign="center" textWeight="500" textColor="#808080"> 
(Feature is Under development)
   </Text>
   </>
  )
  }
export default Products;
