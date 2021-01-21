import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Color } from '@material-ui/core';

const TableCellWithStyles = withStyles((theme) => ({
    root: {
        borderWidth: 0,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        paddingLeft: 0,
        paddingRight: theme.spacing(1),
        verticalAlign: 'top'
    }
}))(TableCell);

export interface ListItemProps {
    label: string,
    textLine1: string,
    textLine2?: string,
    link?: string,
    colorWarning?: boolean,
    componentProps?: Object
}

const RCListItem = ({ label, textLine1, textLine2, link, colorWarning, componentProps }: ListItemProps) => {
    return (
        <TableRow>
            <TableCellWithStyles>
                <Typography variant="body2" color="textSecondary">{label}</Typography>
            </TableCellWithStyles>
            <TableCellWithStyles>
                {Boolean(link) ?
                    <Link href={link} variant="body2">{textLine1}</Link>
                    :
                    <Typography variant="body2" color={`${colorWarning ? 'error' : 'textPrimary'}`}>{textLine1}</Typography>
                }
                {Boolean(textLine2) ?
                    <Typography variant="body2">{textLine2}</Typography> : <></>}
            </TableCellWithStyles>
        </TableRow>
    )
}

export default RCListItem;