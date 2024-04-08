import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Box, Button, Menu, Divider } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const MobileNavigationItem: React.FC<NavigationItemProps> = ({section, scrollToSection}) => {
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
      <Box>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ py: "6px", px: "16px" }}
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
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
    <MenuItem onClick={() => scrollToSection(section)}>
        <Typography variant="body2" color="text.primary">
          {section}
        </Typography>
    </MenuItem>
  )
}
}

export default MobileNavigationItem