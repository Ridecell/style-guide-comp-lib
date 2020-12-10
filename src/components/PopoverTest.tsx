import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    typography: {
        padding: theme.spacing(2),
    },
}))

const PopoverTest = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div>
                <Button aria-describedby={id} variant="contained" color="primary" onMouseEnter={handlePopoverOpen}>
                    Open Popover
                </Button>
                <Button aria-describedby={id} variant="contained" color="primary" onMouseEnter={handlePopoverOpen}>
                    Open Second Popover
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                    <Button>This is a button</Button>
                    <Button>This is a button</Button>
                    <Button>This is a button</Button>
                    <Button>This is a button</Button>
                </Popover>
            </div>
        </>
    )
}

export default PopoverTest