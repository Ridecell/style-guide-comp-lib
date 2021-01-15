import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const RCLabelWarning = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const RCLabelSuccess = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const RCLabelInfo = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

export interface RCCompProps {
    text: string,
    onDelete?: any,
    style: "warning" | "success" | "info",
    componentProps?: Object
}

const RCLabel = ({ text, onDelete, style, componentProps }: RCCompProps) => {
    switch (style) {
        case "warning" : {
            return <RCLabelWarning label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        case "success" : {
            return <RCLabelSuccess label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        case "info" : {
            return <RCLabelInfo label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        default: {
            return <RCLabelInfo label={text} variant="default" onDelete={onDelete} {...componentProps} />
        }
    }
}

export default RCLabel;