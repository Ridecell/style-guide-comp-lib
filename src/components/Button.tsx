import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const RCButtonWithStyles = withStyles({
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
            <RCButtonWithStyles variant="contained" color="primary" {...componentProps}>{children}</RCButtonWithStyles>
        )
    } else {
        return (
            <RCButtonWithStyles variant="outlined" color="primary" {...componentProps}>{children}</RCButtonWithStyles>
        )
    }
}

export default RCButton;