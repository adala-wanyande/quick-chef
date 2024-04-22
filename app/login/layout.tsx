import MobileNavigationBar from "@/components/home/MobileNavigationBar/MobileNavigationBar";
import NavigationBar from "@/components/home/NavigationBar/NavigationBar";
import React from "react";
import Box from "@mui/material/Box";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavigationBar isSignInPage={true} isSignUpPage={false} />
        <MobileNavigationBar isSignInPage={true} isSignUpPage={false} />
        {children}
      </Box>
    </>
  );
};

export default LoginLayout;
