import React, { Component } from 'react'
import {Form, Button, Container } from 'react-bootstrap'
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import {withRouter} from './withRouter'
import API from '../RestApi'
import { withRouter } from './withRouter'

class Login extends Component {
    
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    login(){
        let email = this.state.email
        let password = this.state.password
        const LoginApi = API['login']+"?q="+email
        fetch(LoginApi).then((response)=>{
            return response.json();
        }).then((result) => {
            if(result.length > 0){
                localStorage.setItem('login', JSON.stringify(result))
                this.props.navigate('/list')
            }else{
                alert("Please check your email and password")
            }
        })
    }
    render() {
    return (
        <Container className="Login">
        <h1 className='text-center' style={{marginTop:'30px'}}>Login Form</h1>
        <Form>
        <Form.Group size="lg" placeholder='email' controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>this.setState({email : e.target.value})}
            autoFocus
            type="email"
            />
        </Form.Group>
        <br />
        <Form.Group size="lg" placeholder='password' controlId="password" onChange={(e)=>this.setState({password : e.target.value})}>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            />
        </Form.Group>
        <div className="col-md-12 text-center">
            <Button onClick={()=>{this.login()}} size="lg" type="button" style={{marginTop:'30px'}}>
            Login
        </Button>
        </div>
        
        </Form>
    </Container>
    )
  }
}

export default withRouter(Login)
