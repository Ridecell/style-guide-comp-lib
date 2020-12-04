import React from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
        visibility: 'hidden'
    },
    paper: {
      padding: theme.spacing(1),
    },
  }),
);

const PopoverTest = () => {
    // const classes = useStyles();

    const [buttonAnchor, setButtonAnchor] = React.useState<HTMLElement | null>(null);
    const [popoverShow, setpopoverShow] = React.useState<"visible" | "hidden">("hidden");

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log("should show");
        setButtonAnchor(event.currentTarget);
        // setpopoverShow("visible");
    };

    const handlePopoverClose = () => {
        console.log("should close");
        setButtonAnchor(null);
        // setpopoverShow("hidden");
    };

    const open = Boolean(buttonAnchor);  
    console.log(buttonAnchor);
    console.log(!!buttonAnchor);
    return (
        <>
            {/* <button onMouseOver={handlePopoverOpen}>The button</button> */}
            {/* <button onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>The button</button> */}
            {/* <Button onMouseOver={handlePopoverOpen} onMouseOut={handlePopoverClose}>The button</Button> */}
            <Card onMouseOver={handlePopoverOpen} onMouseOut={handlePopoverClose}>The button</Card>
            {/* <Button onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>The button</Button> */}
            {/* <Button 
                onMouseOver={handlePopoverOpen} 
                onMouseOut={handlePopoverClose}
            >
                    The button
            </Button> */}
            {/* <Button onClick={() => handlePopoverOpen}>The button</Button> */}
            <Popover
                // style={{visibility: popoverShow}}
                id="mouse-over-popover"
                open={!!buttonAnchor}
                anchorEl={buttonAnchor}
                // onClose={handlePopoverClose}
                // disableRestoreFocus
            >
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Popover>
        </>
    )
}

export default PopoverTest;