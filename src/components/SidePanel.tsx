import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const SidePanelWithStyles = withStyles({
    paper: {
        width: '414px'
    },
})(Drawer);

export interface SidePanelProps {
    anchor: 'left' | 'right',
    onClose: any,
    open: any,
    children: any,
    componentProps?: Object
}

const SidePanel = ({ anchor, onClose, open, children, componentProps }: SidePanelProps) => {
    return (
        <SidePanelWithStyles anchor={anchor} open={open} onClose={onClose} hideBackdrop {...componentProps}>
            <Box display="flex" justifyContent="flex-end" m={1}>
                <IconButton onClick={onClose} ><CloseIcon /></IconButton>
            </Box>
            {/* <Divider light /> */}
            <Container>
                {children}
            </Container>
        </SidePanelWithStyles>
    )
}

export default SidePanel;