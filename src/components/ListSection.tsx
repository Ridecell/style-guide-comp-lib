import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const HeaderWithStyles = withStyles((theme) => ({
    root: {
        // marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    }
}))(Typography);

const TableWithStyles = withStyles((theme) => ({
    root: {
        // marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    }
}))(Table);

export interface ListSectionProps {
    header: string,
    children: any,
    componentProps?: Object
}

const ListSection = ({ header, children, componentProps }: ListSectionProps) => {
    return (
        <>
        <HeaderWithStyles variant="h6">{header}</HeaderWithStyles>
        <TableWithStyles aria-label="simple table">
            <TableBody>
                {children}
            </TableBody>
        </TableWithStyles>
        </>
    )
}

export default ListSection;