import { Iconly } from 'react-iconly';
import { Div, Text } from "atomize";
import React  from "react";
function HelpCenter() {


    return (
        <>

            <Div>
                <Text textSize="heading" m={{ t: "1rem" }}
                    textWeight="500">
                    Contact us
                </Text>
                <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
                    We are available 24/7
                </Text>


                <Div m={{ t: "2rem" }}>
                    <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
                        <Iconly

                            name="Calling"
                            primaryColor={`black`}
                            set='broken'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                        <Text
                            textSize={`15px`}
                            textColor={`#ff9b00`}
                            textWeight="700"
                            m={{ l: "0.7rem", }}>
                            Call us
                        </Text>
                    </Div>
                    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
                        +256705640852
                    </Text>
                </Div>

                <Div m={{ t: "2rem" }}>
                    <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
                        <Iconly

                            name="Calling"
                            primaryColor={`black`}
                            set='broken'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                        <Text
                            textSize={`15px`}
                            textColor={`#ff9b00`}
                            textWeight="700"
                            m={{ l: "0.7rem", }}>
                            WhatsApp
                        </Text>
                    </Div>
                    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
                        +256705640852
                    </Text>
                </Div>
                <Div m={{ t: "2rem" }}>
                    <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
                        <Iconly

                            name="Message"
                            primaryColor={`black`}
                            set='broken'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                        <Text
                            textSize={`15px`}
                            textColor={`#ff9b00`}
                            textWeight="700"
                            m={{ l: "0.7rem", }}>
                            Email us
                        </Text>
                    </Div>
                    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
                        support@cyanase.com
                    </Text>
                </Div>
                <Div m={{ t: "2rem" }}>
                    <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
                        <Iconly

                            name="Send"
                            primaryColor={`black`}
                            set='broken'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                        <Text
                            textSize={`15px`}
                            textColor={`#ff9b00`}
                            textWeight="700"
                            m={{ l: "0.7rem", }}>
                            Social media
                        </Text>
                    </Div>
                    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
                        Cyanase (facebook, Twitter, Linkedin)
                    </Text>
                </Div>
            </Div>
        </>
    );
}

export default HelpCenter;
