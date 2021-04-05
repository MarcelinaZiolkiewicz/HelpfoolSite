import React from 'react';
import styled from "styled-components";

const LoginBox = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 180px;
  width: 400px;
  background-color: #dfe6e9;
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
`

const Label = styled.p`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
  margin-top: 15px;
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
`

const Login = () => {
    return(
        <LoginBox>
            <Content>
                <Label>
                    Logowanie
                </Label>
                <form>
                    <Input type="text" placeholder="Login"/>
                    <Input type="password" placeholder="Password"/>
                    <Submit>Login</Submit>
                </form>
            </Content>
        </LoginBox>
    );
}

export default Login;