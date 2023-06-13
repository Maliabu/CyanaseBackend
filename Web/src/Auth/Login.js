import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_URL_LOGIN } from '../apis';
import axios from 'axios';

class Login extends Component {
    //state for form data
    state = {
        username: '',
        password: ''
    };
    Show = true;

    success = () => {
        document.getElementById("successMessage").style.backgroundColor = "#ff8a00"
        document.getElementById("successMessage").innerHTML = "Successful"
        document.getElementById("successMessage").style.color = "white"
        document.getElementById("infoMessage").style.display = 'block'
        document.getElementById("infoMessage").style.color = "#ff8a00"
        document.getElementById("infoMessage").style.backgroundColor = '#ffb85c3c'
        document.getElementById("infoMessage").innerText = "You are logged in"
        setTimeout(() => {
            document.getElementById("infoMessage").style.display = 'none'
        }, 4000);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state, this.props);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('password', this.state.password);
        form_data.append('username', this.state.username);
        axios.post(`${API_URL_LOGIN}`, form_data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .catch(function(error) {
                const errorDisplay = () => {
                    document.getElementById("errorMessage").innerText = error.response
                    document.getElementById("errorMessage").style.display = 'block'
                    document.getElementById("errorMessage").style.color = "red"
                    document.getElementById("errorMessage").style.backgroundColor = '#ff353535'
                    setTimeout(() => {
                        document.getElementById("errorMessage").style.display = 'none'
                    }, 6000);
                }
                const errorSignUp = () => {
                    document.getElementById("successMessage").innerHTML = "Something went wrong"
                    document.getElementById("successMessage").style.backgroundColor = "red"
                    document.getElementById("successMessage").style.color = "white"
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "Login Unsuccessful"
                    }, 2000);
                }
                if (error.response) {
                    const responses = error.response.data.detail
                    if (error.response.status === 400) {
                        errorDisplay(responses)
                    } else if (error.response.status === 500) {
                        errorDisplay(responses)
                    } else if (error.response.status === 404) {
                        errorDisplay(responses)
                    } else if (error.response.status === 403) {
                        errorDisplay(responses)
                    }
                    errorSignUp();
                } else if (error.request) {
                    console.log(error.request);
                    errorDisplay(error);
                    errorSignUp();
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    errorSignUp();
                    errorDisplay(error);
                }
            })
            .then((response) => {
                const errorDisplay = (response) => {
                    document.getElementById("errorMessage").innerText = response.data.message
                    document.getElementById("errorMessage").style.display = 'block'
                    document.getElementById("errorMessage").style.color = "red"
                    document.getElementById("errorMessage").style.backgroundColor = '#ff353535'
                    setTimeout(() => {
                        document.getElementById("errorMessage").style.display = 'none'
                    }, 6000);
                }
                const errorSignUp = () => {
                    document.getElementById("successMessage").innerHTML = "Something went wrong"
                    document.getElementById("successMessage").style.backgroundColor = "red"
                    document.getElementById("successMessage").style.color = "white"
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "Login Unsuccessful"
                    }, 2000);
                    setTimeout(() => {
                        document.getElementById("successMessage").style.backgroundColor = "none"
                    }, 1000);
                }
                if (response.data.success === false && response.status === 200) {
                    errorDisplay(response);
                    errorSignUp()
                } else {
                    this.success()
                    window.location.pathname = "/home"
                }
                console.log(response)
                const token = response.data.token
                localStorage.setItem('token', token)

                /**
                 * The 'then' method is executed only when the request is successfull.
                 */
            });
    }
    render() {
        return ( <
            div > <
            div className = 'row rounded-4 justify-content-center bg-light p-lg-5 p-2' >
            <
            Form className = 'bg-whiter rounded-4 p-lg-5 py-3 col-lg-5 col-12'
            onSubmit = { this.handleSubmit } >
            <
            div className = 'row justify-center p-3' > <
            h2 className = 'text-center' > LOGIN < /h2> <
            h6 className = 'active mt-3 text-center' > < b > Enter your Credentials below to login to your API Account < /b>  < /
            h6 > <
            /
            div > <
            Form.Group className = "mb-3 shadow-sm rounded-2 p-3 px-5" >
            <
            Form.Label > Email < /Form.Label> <
            Form.Control type = "text"
            id = 'username'
            required = "required"
            value = { this.state.username }
            onChange = { this.handleChange }
            placeholder = "support@cyanase.com" / > < /
            Form.Group > <
            Form.Group className = "mb-3 shadow-sm rounded-2 p-3 px-5" >
            <
            Form.Label > Password < /Form.Label> <
            Form.Control type = "password"
            id = 'password'
            required = "required"
            value = { this.state.password }
            onChange = { this.handleChange }
            placeholder = "password" / > < /
            Form.Group > <
            div className = 'row justify-content-center' > <
            Button variant = "warning"
            className = 'shadow text-center'
            id = 'successMessage'
            type = "submit" >
            Login <
            /Button> < /
            div >
            <
            p className = 'mt-5 text-center' > Have no account ? Please < span className = 'active bolder' > { this.props.button } < /span>or < span className = 'active bolder' > Forgot password? < /span > < /p > <
            h6 id = "errorMessage"
            className = 'py-2 mt-3 rounded border border-danger text-center fade-in'
            style = {
                { display: 'none' }
            } > hey < /h6><
            h6 id = "infoMessage"
            className = 'py-2 mt-3 rounded warning text-center fade-in'
            style = {
                { display: 'none' }
            } > hey < /h6>  < /
            Form >
            <
            div className = "mt-5 bg-light d-none rounded row justify-content-center" >
            <
            img className = 'rounded-circle text-center avatar border border-warning'
            src = "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
            alt = "investors" / > <
            h4 className = 'avatar-name text-center mt-2 p-3 bg-text'
            id = 'guest' > Guest < /h4> < /
            div > < /div> < /
            div >
        );
    }
}
export default Login;