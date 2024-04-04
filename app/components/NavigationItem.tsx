import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const NavigationItem: React.FC<NavigationItemProps> = ({
  section,
  scrollToSection,
}) => {
  return (
    <MenuItem
      onClick={() => scrollToSection(section)}
      sx={{ py: "6px", px: "12px" }}
    >
      <Typography variant="body2" color="text.primary">
        {section}
      </Typography>
    </MenuItem>
  );
};

export default NavigationItem;