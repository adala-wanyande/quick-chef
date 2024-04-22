import React from "react";
import Email from "./components/Email";
import VerifyEmail from "./components/VerifyEmail";
import PhoneNumber from "./components/PhoneNumber";
import CreatePassword from "./components/CreatePassword";

const SignUp = () => {
  return <>
  <Email />
  <VerifyEmail />
  <PhoneNumber />
  <CreatePassword />
  </>;
};

export default SignUp;
