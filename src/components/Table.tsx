import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Label from './Label';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Icon from '@material-ui/core/Icon';

import Dots from '@material-ui/icons/MoreHoriz';

// const RCTabletWithStyles = withStyles((theme) => ({
//     root: {
//         margin: theme.spacing(0.25)
//     },
//     label: {
//     },
// }))(Chip);

const ShortCell = withStyles((theme) => ({
    root: {
        width: theme.spacing(2)
    }
}))(TableCell);

export interface RCCompProps {
    title: string,
    componentProps?: Object
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    cellID: {
        width: theme.spacing(2)
    },
    conditionContainer: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        display: 'flex',
        flexDirection: 'row'
    },
    conditionIcon: {
        fontSize: theme.spacing(2),
        marginRight: theme.spacing(1)
    }
}));

function createData(id: number, name: string, status: string, actions: string) {
    return { id, name, status, actions };
}

const rows = [
    createData(1, 'John Baker', 'incomplete', 'actions'),
    createData(2, 'George Lobos', 'incomplete', 'actions'),
    createData(3, 'Patrick Broski', 'incomplete', 'actions'),
    createData(4, 'Melanie Fuller', 'incomplete', 'actions'),
    createData(5, 'Ross McBright', 'incomplete', 'actions'),
];

const BasicTable = ({ title, componentProps }: RCCompProps) => {
    const classes = useStyles();

    return (
        <TableContainer>
            <h2>{title}</h2>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cellID}>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" className={classes.cellID}>
                                {row.id}
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    {row.name}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Label text={row.status} style="warning" />
                                <div className={classes.conditionContainer}>
                                    <PhoneIcon className={classes.conditionIcon} />
                                    <CreditCardIcon className={classes.conditionIcon} />
                                    <FingerprintIcon className={classes.conditionIcon} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <IconButton color="primary" aria-label="actions">
                                    <Dots />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
