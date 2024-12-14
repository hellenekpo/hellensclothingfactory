import MailchimpSubscribe from "../MailchimpSubscribe/MailchimpSubscribe";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import styled from "styled-components";
import { desktop, mobile, tablet } from "../../utils/responsive";
import submitlogo from "../../images/submitlogo.png";
import submitlogohover from '../../images/submitlogohover.png'

const CustomForm = ({ status, message, onValidated }) => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = phoneNumberAutoFormat(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const phoneNumberAutoFormat = (number) => {
    const cleaned = number.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return number;
  };

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const birthday = birthdayRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;

    if (email && name && birthday && phoneNumber && email.includes("@")) {
      onValidated({
        EMAIL: email,
        NAME: name,
        BIRTHDAY: birthday,
        PHONE_NUMB: phoneNumber,
      });
    }
  };

  return (
    <StyledContainer>
      {status === "sending" && <StatusMessage>Sending your info...</StatusMessage>}
      {status === "error" && <StatusMessage dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && (
        <>
          <StatusMessage dangerouslySetInnerHTML={{ __html: message }} />
          {navigate('/thanks')}
        </>
      )}
      <Label>Name</Label>
      <Input ref={nameRef} type="text" placeholder="Jane Doe" />
      <Label>Email Address</Label>
      <Input ref={emailRef} type="email" placeholder="janedoe@example.com" />
      <Label>Phone Number</Label>
      <Input
        ref={phoneNumberRef}
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="(832) 000-0000"
      />
      <Label>Birthday</Label>
      <Input ref={birthdayRef} type="text" maxLength={5} placeholder="01/10" />
      <SubmitLogo
        src={submitlogo}
        id="submitlogo"
        onMouseOut={() => changeSubmitOnHover("submitlogo")}
        onMouseOver={() => changeSubmitOnHover("submitlogo")}
        onClick={handleSubmit}
      />
    </StyledContainer>
  );
};

const TimedPopupForm = () => {
  const url = "https://hellenekpo.us21.list-manage.com/subscribe/post?u=dff47d8965e0b26c6c341b88c&id=e9993bbbf0";
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
      )}
    />
  );
};

export default TimedPopupForm;

const StyledContainer = styled.div`
    height: 500px;
    width: 350px;
    border-radius: 15px;
    padding: 15px 10px;
    display: inline-block;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mobile({ width: "200px" })}
`;

const StatusMessage = styled.div`
    transform: translate(-5%, 0%);
    font-weight: bold;
    color: #e62490;
    height: 20px;
    width: 390px;
    font-size: 10px;
    font-family: "Lucida Console", "Courier New", monospace;
`;

const Label = styled.p`
  transform: translate(-5%, 0%);
  font-weight: bold;
  color: #fd5392;
  height: 20px;
  width: 390px;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
`;

const Input = styled.input`
  transform: translate(-3%, 0%);
  border-width: 5px;
  border-color: #fd5392;
  font-weight: bold;
  color: #fd5392;
  padding: 5px;
  height: 20px;
  width: 100%;
  font-size: 15px;
  font-family: "Lucida Console", "Courier New", monospace;
`;

const SubmitLogo = styled.img`
    width: 40%;
    transform: translate(-50%, 375%);
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    ${desktop({ display: "block" })}
    ${tablet({ display: "block", width: "20%" })}
    ${mobile({ display: "block", width: "20%" })}
`;

let hover = false;
const changeSubmitOnHover = (submit) => {
  if (submit === "submitlogo") {
    if (!hover) {
      document.getElementById(submit).src = submitlogohover;
      hover = true;
    } else {
      document.getElementById(submit).src = submitlogo;
      hover = false;
    }
  }
};