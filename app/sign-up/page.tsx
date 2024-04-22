"use client";

import React, { useState } from "react";
import supabase from "@/lib/supabase";
import Email from "@/components/sign-up/Email";
import VerifyEmail from "@/components/sign-up/VerifyEmail";
import PhoneNumber from "@/components/sign-up/PhoneNumber";
import CreatePassword from "@/components/sign-up/CreatePassword";
import Names from "@/components/sign-up/Names";

// Define the structure of the userData object
interface UserData {
  email: string;
  verificationCode: string;
  phoneNumber: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    email: "",
    verificationCode: "",
    phoneNumber: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const prevStep = (): void => {
    if (step > 1) setStep(step - 1);
  };

  // This generic function handler takes the key of UserData as parameter and returns a function that takes a string
  const handleChange = (input: keyof UserData) => (value: string) => {
    setUserData({ ...userData, [input]: value });
  };

  switch (step) {
    case 1:
      return <Email onNext={nextStep} onChange={handleChange("email")} />;
    case 2:
      return (
        <VerifyEmail
          onNext={nextStep}
          onBack={prevStep}
          onChange={handleChange("verificationCode")}
        />
      );
    case 3:
      return (
        <PhoneNumber
          onNext={nextStep}
          onBack={prevStep}
          onChange={handleChange("phoneNumber")}
        />
      );
    case 4:
      return (
        <CreatePassword
          onNext={nextStep}
          onBack={prevStep}
          onChange={handleChange("password")}
        />
      );
    case 5:
      return (
        <Names
          onFinish={() => handleSubmit(userData)}
          onBack={prevStep}
          onChange={handleChange("firstName")}
        />
      );
    default:
      return <div>Unknown step</div>;
  }
};

export default SignUp;

interface UserData {
  email: string;
  password: string;
  // Add other fields as necessary
}

// Import the Supabase client initialization

// The function now is explicitly declared to return a Promise<void>
async function handleSubmit(data: UserData): Promise<void> {
  try {
    // Destructuring to get 'error' from the response
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });

    // If there is an error, we throw it to catch it below
    if (error) throw error;

    // Log or handle successful signup
    console.log("Signup successful:", data);
    // Here you might want to redirect the user or show a success message
  } catch (error: any) {
    // Catching any errors and logging or handling them
    console.error("Signup failed:", error.message);
    // Optionally, handle the error in a user-friendly way, such as showing a notification
  }
}
