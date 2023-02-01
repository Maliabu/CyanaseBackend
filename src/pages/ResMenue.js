import React from 'react';
import { Div, Text } from "atomize";
import { Iconly } from 'react-iconly';

function MyMenue() {



    return (
        <>
        <Text
                    textColor="#252859"
                    textSize="subheader"
                    textWeight="500">
                   Category
                </Text>
            <Div border="1px solid"
                borderColor="#ff9b00;"

                m={{ t: "1rem" }} p="0.3rem"

                rounded="md"
                shadow="3"
            >
                
                <Div d="flex" align="center" p="0.5rem">

                    <Div m={{ l: "2rem" }}>
                        <Iconly

                            name="User"
                            primaryColor="#252859"
                            set='broken'

                            stroke='bold'
                        />
                    </Div>

                    <Text textColor="#252859" p="0.2rem" textSize="subheader" textWeight="600">
                        Investment Clubs
                    </Text>
                </Div>
                <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                    <Text textColor="#808080" className="div_notes">
                        Check, create, chat with members in your investment clubs
                    </Text>
                </Div>

            </Div>
            {/*************************SACCO GROUPS***************************** */}
            <Div

                m={{ t: "0.5rem" }} p="0.3rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
            >
                <Div d="flex" align="center" p="0.5rem">

                    <Div m={{ l: "2rem" }}>
                        <Iconly

                            name="People"

                            set='broken'

                            stroke='bold'
                        />
                    </Div>

                    <Text textColor="#252859" p="0.2rem" textSize="subheader" textWeight="600">
                        Sacco group
                    </Text>
                </Div>
                <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                    <Text textColor="#808080" className="div_notes">
                        Create, form sacco groups
                    </Text>
                </Div>

            </Div>
            {/*************************INVESTMENT CLUBS***************************** */}
            <Div

                m={{ t: "0.5rem" }} p="0.3rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
            >
                <Div d="flex" align="center" p="0.5rem">

                    <Div m={{ l: "2rem" }}>
                        <Iconly

                            name="Work"
                            primaryColor="#252859"
                            set='broken'

                            stroke='bold'
                        />
                    </Div>

                    <Text textColor="#252859" p="0.2rem" textSize="subheader" textWeight="600">
                        Loans
                    </Text>
                </Div>
                <Div d="flex" align="center" m={{ l: "2.5rem", b: "1.5rem" }}>
                    <Text textColor="#808080" className="div_notes">
                        Create a loan page, Request a loan from your sacco group
                    </Text>
                </Div>

            </Div>
            <Text textSize="subheader" textAlign="center" textWeight="500" textColor="#808080">
                (These features are still  Under development)
            </Text>
        </>
    );
}

export default MyMenue;
