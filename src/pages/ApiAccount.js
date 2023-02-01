import React  from "react";
import { Container, Div } from "atomize";
import "../../public/app.css";
import Signup from "../components/api/signup";


function ApiAccount() {



    return (


        <>
            <Container>
                <Div className="cont">
                    <Signup/>
                </Div>
            </Container>

        </>
    )

}
export default ApiAccount;