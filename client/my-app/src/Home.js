import React, { Component } from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import newlogo1 from './images/newlogo1.png'
import signup from './images/signup.png'
import helene from './images/helene.png'
import signupfor from './images/signupfor.png'
import config from './config.json'
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();
import { render } from "react-dom";
import MailchimpSubscribe from "./MailchimpSubscribe";

const CustomForm = ({ status, message, onValidated }) => {
    let email, name, birthday;
    const submit = () =>
        email &&
        name &&
        birhday &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <Container2
            style={{
                height: "500px",
                width: "350px",
                borderRadius: 15,
                padding: 10,
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-0%)"
                }}
        >
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <SignUpForUpdates src={signupfor} alt="comingsoon" style={{
                width: "100%",
                transform: "translate(-50%,-175%)",
                display: "inline-block",
                position: "absolute",
            }}/>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <p
                style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}

            >
                Name</p>
            <input
                id="inputID"
                style={{
                    borderWidth: 5,
                    borderColor: 'hotpink', fontWeight: "bold", color:"#e62490", padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (name = node)}
                type="text"
                placeholder="Jane Doe"
            />
            <br />
            <p
                style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}
            >
                Email Address</p>
            <input
                id="inputID"
                style={{ fontWeight: "bold", color:"#e62490", padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (email = node)}
                type="email"
                placeholder="janedoe@example.com"
            />
            <br />
            <p
                style={{ transform: "translate(-5%, 0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}

            >Birthday</p>
            <input
                id="inputID"
                style={{ fontWeight: "bold", color:"#e62490", padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (birthday = node)}
                type="text"
                placeholder="01/10"
            />
            <br />
            <br />
            <br />
            <button style={{ transform: "translate(0%,-50%)", background: "#e62490", fontSize: "20px", padding: 5, fontFamily: "Lucida Console, Courier New, monospace, bold" }}
                    onClick={submit}>
                Submit
            </button>
        </Container2>
    );
};
const Container2 = styled.div`
  ${mobile({width: "200px",})}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ComingSoon = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-150%);

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const SignUpForUpdates = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-0%);

    ${desktop({display: "block",})}
    ${tablet({display:"block", width: "20%",})}
    ${mobile({display: "block", width: "20%",})}
`;

const SignUpFor = styled.img`
  max-width:100%;
  max-height:40%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-0%);

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block", width: "30%"})}
`;



const Home = () => {
    const url =
        "https://hellenekpo.us21.list-manage.com/subscribe/post?u=dff47d8965e0b26c6c341b88c&id=e9993bbbf0";
  return (
    <Container>
		<ComingSoon src={helene} alt="comingsoon"/>
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    </Container>

  )
}

export default Home