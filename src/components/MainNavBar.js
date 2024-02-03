import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function MainNavBar() {
    return (
        <Box display='flex'>
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
              <Button variant="text">About Me</Button>
              <Button variant="text">Professional</Button>
              <Button variant="text">Portfolio</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default MainNavBar;