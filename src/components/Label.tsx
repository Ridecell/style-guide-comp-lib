import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const RCLabelDefault = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'capitalize'
    }
}))(Chip);

const useStyles = makeStyles((theme) => ({
    labelWarning: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
    labelSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
    },
    labelInfo: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
    }
}))

const RCLabelWarning = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const RCLabelSuccess = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const RCLabelInfo = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))(Chip);

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

export interface RCCompProps {
    text: string,
    onDelete?: any,
    style?: "warning" | "success" | "info",
    componentProps?: Object
}

const RCLabel = ({ text, onDelete, style, componentProps }: RCCompProps) => {
    const classes = useStyles();
    switch (style) {
        case "warning" : {
            return <RCLabelDefault className={classes.labelWarning} label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        case "success" : {
            return <RCLabelDefault className={classes.labelSuccess} label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        case "info" : {
            return <RCLabelDefault className={classes.labelInfo} label={text} variant="default" onDelete={onDelete} {...componentProps} />
            break;
        }
        default: {
            return <RCLabelDefault label={text} variant="outlined" onDelete={onDelete} {...componentProps} />
        }
    }
}

export default RCLabel;