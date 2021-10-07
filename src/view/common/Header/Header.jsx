import { Box } from '@material-ui/core';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import Bar from './Bar';
import DrawerContent from './DrawerContent';

function Header({ title, offer, to }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Bar
        toggleDrawer={toggleDrawer}
        title={title}
        offer={offer}
        to={to}
      />
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

export default Header;
