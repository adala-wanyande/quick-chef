import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent: React.FC<ButtonProps> = ({ color, variant, text, link }) => {
  return (
    <Button
      color={color}
      variant={variant}
      href={link}
      target="_blank"
      sx={{ width: "100%" }}
    >
      {text}
    </Button>
  );
};
export default ButtonComponent;
