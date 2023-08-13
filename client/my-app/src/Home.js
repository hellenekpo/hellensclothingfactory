import React, {Component, useState} from 'react';
import './Home.css';
import styled from 'styled-components'
import { desktop, tablet, mobile } from './responsive';
import * as AWS from 'aws-sdk';
import helene from './images/helene.png'
import submitlogo from './images/submitlogo.png'
import submitlogohover from './images/submitlogohover.png'
import signupfor from './images/signupfor.png'
import {useNavigate} from 'react-router-dom';
import config from './config.json'
AWS.config.update(config);
import MailchimpSubscribe from "./MailchimpSubscribe";

const CustomForm = ({ status, message, onValidated }) => {
    const navigate = useNavigate();
    let email, name, birthday, phoneNumber;
    const [value, setValue] = useState("");
    const onChange = (e) => {
        const targetValue = phoneNumberAutoFormat(e.target.value);
        setValue(targetValue);
    };
    const phoneNumberAutoFormat = (phoneNumber) => {
        const number = phoneNumber.trim().replace(/[^0-9]/g, "");

        if (number.length < 4) return number;
        if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "($1)$2");
        if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "($1)$2-$3");
        return number.replace(/(\d{3})(\d{4})(\d{4})/, "($1)$2-$3");
    };
    const submit = () => {
        email &&
        name &&
        birthday &&
        phoneNumber &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value,
            BIRTHDAY: birthday.value,
            PHONE_NUMB: phoneNumber.value
        });
    }

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
            {status === "sending" &&
                <div
                    style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "10px", fontFamily: "Lucida Console, Courier New, monospace" }}
                >
                Sending your info...</div>}
            {status === "error" && (
                <div
                    style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "10px", fontFamily: "Lucida Console, Courier New, monospace" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:"#e62490",  height: "20px", width: "390px", fontSize: "10px", fontFamily: "Lucida Console, Courier New, monospace" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />,
                navigate('/aboutus')
            )}
            <p
                style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:'#fd5392',  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}

            >
                Name</p>
            <input
                id="inputID"
                style={{
                    transform: "translate(-3%,-0%)",
                    borderWidth: 5,
                    borderColor: '#fd5392', fontWeight: "bold", color:'#fd5392', padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (name = node)}
                type="text"
                placeholder="Jane Doe"
            />
            <br />
            <p
                style={{ transform: "translate(-5%,0%)", fontWeight: "bold", color:'#fd5392',  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}
            >
                Email Address</p>
            <input
                id="inputID"
                style={{
                    transform: "translate(-3%,-0%)",
                    borderWidth: 5,
                    borderColor: '#fd5392', fontWeight: "bold", color:'#fd5392', padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (email = node)}
                type="email"
                placeholder="janedoe@example.com"
            />
            <br />
            <p
                style={{ transform: "translate(-5%, 0%)", fontWeight: "bold", color:'#fd5392',  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}

            >Phone Number</p>
            <input
                onChange={onChange}
                value={value}
                maxLength={13}
                id="inputID"
                style={{
                    transform: "translate(-3%,-0%)",
                    borderWidth: 5,
                    borderColor: '#fd5392', fontWeight: "bold", color:'#fd5392', padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (phoneNumber = node)}
                type="tel"
                placeholder="(832)000-0000"
            />
            <br />
            <p
                style={{ transform: "translate(-5%, 0%)", fontWeight: "bold", color:'#fd5392',  height: "20px", width: "390px", fontSize: "20px", fontFamily: "Lucida Console, Courier New, monospace" }}

            >Birthday</p>
            <input
                maxLength={5}
                id="inputID"
                style={{
                    transform: "translate(-3%,-0%)",
                    borderWidth: 5,
                    borderColor: '#fd5392', fontWeight: "bold", color:'#fd5392', padding: 5, height: "20px", width: "100%", fontSize: "15px", fontFamily: "Lucida Console, Courier New, monospace" }}
                ref={node => (birthday = node)}
                type="text"
                placeholder="01/10"
            />
            <br />
            <br />
            <br />
            <SubmitLogo src={submitlogo} id="submitlogo" style={{
                width: "40%",
                transform: "translate(-48%,375%)",
                display: "inline-block",
                position: "absolute",
                }}
                        onMouseOut={() => {
                            changeSubmitOnHover("submitlogo");
                        }}
                        onMouseOver={() => {
                            changeSubmitOnHover("submitlogo");
                        }}
                onClick={submit}
                />
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
  transform:translate(-50%,-190%);

    ${desktop({display: "block",})}
    ${tablet({display:"block"})}
    ${mobile({display: "block",})}
`;
const SignUpForUpdates = styled.img`
  max-width:50%;
  max-height:20%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-95%);

  ${desktop({display: "block",})}
  ${tablet({display:"block"})}
  ${mobile({display: "block",})}
`;

const SubmitLogo = styled.img`
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
let hover = false;
const changeSubmitOnHover= (submit) => {
    if (submit === "submitlogo") {
        if (!hover) {
            document.getElementById(submit).src = submitlogohover;
            hover = true;
        }
        else {
            document.getElementById(submit).src = submitlogo;
            hover = false;
        }
    }
}

const Home = () => {
    const url =
        "https://hellenekpo.us21.list-manage.com/subscribe/post?u=dff47d8965e0b26c6c341b88c&id=e9993bbbf0";
  return (
    <Container>
		<ComingSoon src={helene} alt="comingsoon"/>
        <SignUpForUpdates src={signupfor} alt="signup"/>
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