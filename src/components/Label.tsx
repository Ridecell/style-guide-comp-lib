import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const RCLabeltWithStyles = withStyles((theme) => ({
    root: {
        margin: theme.spacing(0.25)
    },
    label: {
    },
}))(Chip);

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

export interface RCCompProps {
    text: string,
    componentProps?: Object
}

const RCLabel = ({ text, componentProps }: RCCompProps) => {
    return (
        <RCLabeltWithStyles label={text} variant="outlined" onDelete={handleDelete} {...componentProps} />
    )
}

export default RCLabel;