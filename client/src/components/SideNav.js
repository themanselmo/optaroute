import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { useState } from 'react'

const SideNav = () => {
    const [leftState, setLeftState] = useState({
        left: false,
    })

    const toggleDrawer = (anchor, isOpen) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeftState({...leftState, [anchor]: isOpen})
    }

    const list = (anchor) => (
        <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {['Home', 'Routes'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Logout'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Box>
    );
    
    return (
        <div id="Side-Nav">
           
                <React.Fragment key={'left'}>
                    <Button onClick={toggleDrawer('left', true)}><DehazeIcon /></Button>
                    <Drawer
                    anchor={'left'}
                    open={leftState['left']}
                    onClose={toggleDrawer('left', false)}
                    >
                    {list('left')}
                    </Drawer>
                </React.Fragment>
          
        </div>
    )
}

export default SideNav