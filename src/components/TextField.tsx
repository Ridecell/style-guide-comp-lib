import React from 'react';
import { ThemeProvider, withStyles, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import { colors } from '@material-ui/core';

const SearcgFieldWithStyles = withStyles(theme => ({
    root: {
    },
    input: {
        borderRadius: theme.shape.borderRadius,
        borderWidth: 1,
        borderColor: theme.palette.grey[400],
        borderStyle: 'solid',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 1)} 0 0 0 0.1rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const TextFieldWithStyles = withStyles({
    // to be continued
    root: {
        '& label': {
            fontSize: '1.2rem'
          },
    },
    input: {
        fontSize: '10rem',
        color: 'green'
    },
})(TextField);

interface RCButtonProps {
    type: string,
    helpText?: string
}

const RCTextField = ({ type, helpText }: RCButtonProps) => {
    if (type === "search") {
        return (
            <SearcgFieldWithStyles placeholder="Search our database..." />
        )
    } else {
        return (
            <TextFieldWithStyles label="Address" helperText={helpText} />
        )
    }
}

export default RCTextField;