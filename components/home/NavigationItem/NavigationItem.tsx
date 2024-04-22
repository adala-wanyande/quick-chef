import * as React from "react";
import { Typography, Box, Button, MenuItem, Menu, Divider } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const NavigationItem: React.FC<NavigationItemProps> = ({
  section,
  scrollToSection,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (section == "About") {
    return (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ py: "6px", px: "16px", mx: "8px" }}
          endIcon={<KeyboardArrowDown />}
        >
          <Typography variant="body2" color="text.primary">
            About
          </Typography>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>How Quick Chef Works</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Our Offerings</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <MenuItem
          onClick={() => scrollToSection(section)}
          sx={{ py: "6px", px: "16px", mx: "8px" }}
        >
          <Typography variant="body2" color="text.primary">
            {section}
          </Typography>
        </MenuItem>
      </Box>
    );
  }
};

export default NavigationItem;
