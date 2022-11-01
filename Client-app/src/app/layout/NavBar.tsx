import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavBarMenu } from './NavBarMenu';

export const NavBar = () => {
    return (
        <Box sx={{ display: 'flex', width: 'auto' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        Reactivities
                    </Typography>
                    <NavBarMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
