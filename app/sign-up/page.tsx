import React from "react";
import Email from "./components/Email";
import VerifyEmail from "./components/VerifyEmail";
import PhoneNumber from "./components/PhoneNumber";
import CreatePassword from "./components/CreatePassword";
import Names from "./components/Names";

const SignUp = () => {
  return (
    <>
      <Email />
      <VerifyEmail />
      <PhoneNumber />
      <CreatePassword />
      <Names />
    </>
  );
};

export default SignUp;
