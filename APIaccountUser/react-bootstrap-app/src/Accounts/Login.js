import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_URL } from '../api';
import axios from 'axios';

class Login extends Component {
    //state for form data
    state = {
        email: '',
        moa: null,
        coi: null
    };
    success() {
        document.getElementById("successMessage").innerHTML = "Successful"
        document.getElementById("successMessage").style.backgroundColor = "green"
        document.getElementById("successMessage").style.color = "white"
        document.getElementById("successMessage").style.borderColor = "green"
        document.getElementById("errorMessage").style.display = 'block'
        document.getElementById("errorMessage").style.color = "green"
        document.getElementById("errorMessage").style.borderColor = "green"
        document.getElementById("errorMessage").innerText = "You are logged in"
        setTimeout(() => {
            document.getElementById("errorMessage").style.display = 'none'
        }, 6000);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    };
    handleFileChange = (e) => {
        this.setState({
            moa: e.target.files[0],
            coi: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('moa', this.state.moa, this.state.moa.name);
        form_data.append('email', this.state.email);
        form_data.append('coi', this.state.coi, this.state.coi.name);
        axios.post(`${API_URL}`, form_data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Accept': 'application/json'
                }
            })
            .catch(function(error) {
                const errorDisplay = (errorText) => {
                    document.getElementById("errorMessage").innerText = errorText
                    document.getElementById("errorMessage").style.display = 'block'
                    document.getElementById("errorMessage").style.color = "red"
                    document.getElementById("errorMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("errorMessage").style.display = 'none'
                    }, 6000);
                }
                const errorSignUp = () => {
                    document.getElementById("successMessage").innerHTML = "Something went wrong"
                    document.getElementById("successMessage").style.backgroundColor = "red"
                    document.getElementById("successMessage").style.color = "white"
                    document.getElementById("successMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "Login Unsuccessful"
                    }, 2000);
                }
                if (error.response) {
                    if (error.response.status === 400) {
                        errorDisplay(error.response.data.email)
                    } else if (error.response.status === 500) {
                        errorDisplay(error.response.data)
                    } else if (error.response.status === 404) {
                        errorDisplay(error.response.data)
                    }
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    errorSignUp();
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
        this.success();
        console.log(e);
    }
    render() {
        return ( <
            div >
            <
            Form className = 'rounded-lg '
            onSubmit = { this.handleSubmit } >
            <
            div className = 'row justify-center p-3' > <
            h2 className = 'text-center py-5' > LOGIN < /h2> <
            h6 className = 'text-warning' > < b > Enter your Credentials below to login to your API Account < /b>  < /
            h6 > <
            /
            div > <
            Form.Group className = "mb-3 shadow rounded-lg p-3 px-5" >
            <
            Form.Label > Email address < /Form.Label> <
            Form.Control type = "email"
            id = 'email'
            required = "required"
            value = { this.state.email }
            onChange = { this.handleChange }
            placeholder = "support@cyanase.com" / > <
            /Form.Group> < Form.Group 
            className = "mb-3" > <
            Form.Label > Memorandum of Association < /Form.Label> <
            Form.Control type = "file"
            id = 'moa'
            onChange = { this.handleFileChange }
            / > < /
            Form.Group > <
            Form.Group className = "mb-3" >
            <
            Form.Label > Certificate of Incorporation < /Form.Label> <
            Form.Control type = "file"
            id = 'coi'
            required = { true }
            onChange = { this.handleFileChange }
            / > < /
            Form.Group >
            <
            div className = 'row justify-content-center' > <
            Button variant = "warning"
            className = 'shadow text-center'
            id = 'successMessage'
            type = "submit" >
            Login <
            /Button> < /
            div >

            <
            p id = "errorMessage"
            className = 'py-3 mt-3 rounded border text-center fade-in'
            style = {
                { display: 'none' }
            } > hey < /p>  < /
            Form >
            <
            div className = "mt-5 bg-light rounded row justify-content-center" >
            <
            img className = 'rounded-circle text-center avatar border border-warning'
            src = "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
            alt = "investors" / > <
            h4 className = 'avatar-name text-center mt-2 p-3 bg-warning' > Guest < /h4> < /
            div > <
            /
            div >
        );
    }
}
export default Login;

// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {

//     state = {
//         email: '',
//         image: null,
//         image: null
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     };

//     handleImageChange = (e) => {
//         this.setState({
//             image: e.target.files[0]
//         })
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         let form_data = new FormData();
//         form_data.append('moa', this.state.image, this.state.image.name);
//         form_data.append('email', this.state.email);
//         form_data.append('coi', this.state.image, this.state.image.name);
//         let url = 'http://127.0.0.1:8000/registerPrimaryUser';
//         axios.post(url, form_data, {
//                 headers: {
//                     'content-type': 'multipart/form-data'
//                 }
//             })
//             .then(res => {
//                 console.log(res.data);
//             })
//             .catch(err => console.log(err))
//     };

//     render() {
//         return ( <
//             div className = "App" >
//             <
//             form onSubmit = { this.handleSubmit } >
//             <
//             p >
//             <
//             input type = "text"
//             placeholder = 'Email'
//             id = 'email'
//             value = { this.state.email }
//             onChange = { this.handleChange }
//             required / >
//             <
//             /p> <
//             p >
//             <
//             input type = "file"
//             id = "moa"
//             accept = "image/png, image/jpeg"
//             onChange = { this.handleImageChange }
//             required / >
//             <
//             /p>  <
//             p >
//             <
//             input type = "file"
//             id = "coi"
//             accept = "image/png, image/jpeg"
//             onChange = { this.handleImageChange }
//             required / >
//             <
//             /p> <
//             input type = "submit" / >
//             <
//             /form> < /
//             div >
//         );
//     }
// }

// export default App;