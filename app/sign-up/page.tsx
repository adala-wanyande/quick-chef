"use client";

import React, { useState } from "react";
import supabase from "@/lib/supabase";
import Email from "@/components/sign-up/Email";
import PhoneNumber from "@/components/sign-up/PhoneNumber";
import CreatePassword from "@/components/sign-up/CreatePassword";
import Names from "@/components/sign-up/Names";

interface UserData {
  email: string;
  phoneNumber: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    email: "",
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

  const handleChange = (input: keyof UserData) => (value: string) => {
    setUserData({ ...userData, [input]: value });
  };

  switch (step) {
    case 1:
      return <Email onNext={nextStep} onChange={handleChange("email")} />;
    case 2:
      return (
        <PhoneNumber
          onNext={nextStep}
          onBack={prevStep}
          onChange={handleChange("phoneNumber")}
        />
      );
    case 3:
      return (
        <CreatePassword
          onNext={nextStep}
          onBack={prevStep}
          onChange={handleChange("password")}
        />
      );
    case 4:
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
}

async function handleSubmit(data: UserData): Promise<void> {
  try {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: "https://quick-chef.vercel.app/private",
        data: {
          first_name: data.firstName,
          second_name: data.lastName,
          phone: data.phoneNumber,
        },
      },
    });

    if (error) throw error;
    console.log("Signup successful");
  } catch (error: any) {
    console.error("Signup failed:", error.message);
  }
}

