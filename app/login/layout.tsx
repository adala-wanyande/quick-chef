import MobileNavigationBar from "@/components/MobileNavigationBar/MobileNavigationBar";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavigationBar isSignInPage={true} isSignUpPage={false} />
      <MobileNavigationBar isSignInPage={true} isSignUpPage={false} />
      {children}
    </>
  );
};

export default LoginLayout;
