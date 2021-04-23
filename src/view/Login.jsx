import React, {useContext} from 'react';
import styled from "styled-components";

import {AdminContext} from "../context/AdminContext";

import {Redirect, Route} from "react-router-dom";

const LoginBox = styled.div`
  width: 400px;
  background-color: #dfe6e9;
  box-sizing: border-box;
  box-shadow: 8px 8px 7px gray;
  padding: 20px 10px;
  
  @media(min-width: 500px){
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  
  @media(max-width: 415px){
    width: 75vw;
    margin: 40% auto 0 auto;

    max-height: 70vh;
  }
`

const Input = styled.input`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #636e72;
  padding: 5px 10px;
  font-size: 18px;
  width: 180px;
  
  @media(max-width: 415px){
    width: 50vw;
  }
  
`

const Label = styled.p`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
`

const Submit = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid #636e72;
  padding: 5px 10px;
  font-size: 18px;
  transition: .3s;
  cursor: pointer;
   
  &:hover{
    background-color: #636e72;
    color: white;
  }
`

const Content = styled.div`
  margin: 0 auto;
  width: 10vw;
  @media(max-width: 415px){
    width: 80%;
  }
`

const Wrapper = styled.div`
  height: calc(100vh - 100px) ;
`

const Login = () => {

    const { handleLogin, isAdminLogged, password, login, handleLoginInput, handlePasswordInput } = useContext(AdminContext);

    return(
        <Wrapper>

            <Route render={() => (
                isAdminLogged ? <Redirect to="/admin"/> : null
            )}/>

            <LoginBox>
                <Content>
                    <Label>
                        Logowanie
                    </Label>
                    <form onSubmit={handleLogin}>

                        <Input
                            type="text"
                            placeholder="Login"
                            value={login}
                            onChange={handleLoginInput}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordInput}
                        />

                        <Submit>Login</Submit>
                    </form>
                </Content>
            </LoginBox>
        </Wrapper>
    );
}

export default Login;