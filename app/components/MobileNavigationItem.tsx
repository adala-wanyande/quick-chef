import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const MobileNavigationItem: React.FC<NavigationItemProps> = ({section, scrollToSection}) => {
  return (
    <MenuItem onClick={() => scrollToSection(section)}>
        <Typography variant="body2" color="text.primary">
          {section}
        </Typography>
    </MenuItem>
  )
}

export default MobileNavigationItem