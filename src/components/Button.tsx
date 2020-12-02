import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const ButtonWithStyles = withStyles({
    root: {
    },
    label: {
    },
  })(Button);

interface RCButtonProps {
    type: string,
    children: string,
    componentProps?: Object
}

const RCButton = ({ type, children, componentProps }: RCButtonProps) => {
    if (type === "primary") {
        return (
            <ButtonWithStyles variant="contained" color="primary" {...componentProps}>{children}</ButtonWithStyles>
        )
    } else {
        return (
            <ButtonWithStyles variant="outlined" color="primary" {...componentProps}>{children}</ButtonWithStyles>
        )
    }
}

export default RCButton;