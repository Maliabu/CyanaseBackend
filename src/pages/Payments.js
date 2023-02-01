import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


    
    function Payments({ AmountValue, URL, PayType, MyKey,setButtonText }){

       
        const PayProcess = ({ isOpen, onClose }) => {
    
            return (
                <Modal
                    m={{ t: "8rem" }}
                    isOpen={isOpen}
                    onClose={onClose}
                    rounded="md"
                    maxW="24rem"
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
                    <Div d="flex" align="center" justify="center">
                        <Icon name="Loading" size="40px" />
                    </Div>
    
                    <Text textSize="subheader" textWeight="700" textAlign="center" textColor="#252859">
                        Processing {PayType} please wait....
                    </Text>
                </Modal>
            );
        };
    
    
    
        setButtonText(myChange);
        const textref = Math.floor((Math.random() * 30) + 1);
        const ref = "cyanse-deposit" + textref + "flutter";
    
        const API_publicKey = MyKey;
    
        const x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: Email,
            amount: AmountValue,
            customer_phone: Phone,
            customer_firstname: Fname,
            customer_lastname: Lname,
            custom_title: 'Deposit',
            custom_description: 'membership',
            currency: currency,
            txref: ref,
    
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function () { },
            callback: function (response) {
                const txref = response.data.txRef; // collect txRef returned and pass to a 					server page to complete status check.
    
                if (
                    response.data.chargeResponseCode == "00" || response.data.chargeResponseCode == "0"
                ) {
                    setTopUp(true);
    
                    const API_PATH = URL;
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, amount: AmountValue, currency: currency }
                    })
                        .then(result => {
    
                            const message = result.data.message;
                            const stateMe = result.data.error
    
    
                            if (stateMe == 200) {
                                setButtonText(myOriginal);
    
    
    
                                console.log(result.data);
    
                            } else if (message === "success") {
                                setButtonText(myOriginal);
                                setTopup(false);
                            }
    
    
                        })
                        .catch(error => alert(error));
                } else {
                    // redirect to a failure page.
    
                    setTopUp(true);
    
                    const API_PATH = URL;
                    /// Make a request to update the data base
                    axios({
                        method: 'POST',
                        url: `${API_PATH}`,
                        headers: { 'content-type': 'application/json' },
                        data: { id: myId, paytype: PayType, textref: ref, amount: AmountValue, currency: currency }
                    })
                        .then(result => {
    
                            const message = result.data.message;
                            const stateMe = result.data.error
                            console.log(result.data);
    
                            if (stateMe == 200) {
                                setButtonText(myOriginal);
    
                                setTopup(false);
    
    
                            } else if (message === "success") {
    
                                setTopUp(false);
                            }
    
    
                        })
                        .catch(error => alert(error));
    
    
                }
    
                // use this to close the modal immediately after payment.
            }
        });
        return (

            <>
                <PayProcess
                    isOpen={showTopUP}
                    onClose={() => setTopUp(false)}
                />
            </>
        )
    
    } 
    export default Payments;

   

