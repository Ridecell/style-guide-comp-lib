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
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Label from './Label';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Icon from '@material-ui/core/Icon';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SidePanel from './SidePanel';

import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

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

const MoreActionsMenu = withStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5)
    }
}))(Menu);

export interface RCCompProps {
    title: string,
    componentProps?: Object
}

export interface StatusLabel {
    type: "warning" | "success" | "info",
    label: string
}

export interface ItemDetail {
    id: number,
    isSelected: boolean,
    name: string,
    phone: string,
    email: string,
    streetAddress: string,
    city: string,
    state: string,
    zip: number,
    status: StatusLabel,
    statusPhone: string,
    statusPayment: string,
    statusLicense: boolean,
    actions: string
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    cellID: {
        width: theme.spacing(2)
    },
    conditionContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    conditionIcon: {
        fontSize: theme.typography.fontSize,
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    }
}));

function createData(id: number, isSelected: boolean, name: string, phone: string, email: string, streetAddress: string, city: string, state: string, zip: number, status: StatusLabel, statusPhone: string, statusPayment: string, statusLicense: boolean, actions: string) {
    return { id, isSelected, name, phone, email, streetAddress, city, state, zip, status, statusPhone, statusPayment, statusLicense, actions };
}

function createLabel(type: "warning" | "success" | "info", label: string) {
    return { type, label }
}

const BasicTable = ({ title, componentProps }: RCCompProps) => {

    const rows = [
        createData(1, false, 'John Baker', '(916) 234-7658', 'john.baker@ridecell.com', '58 Middle Point Rd', 'San Francisco', 'California', 94124, createLabel('warning', 'incomplete'), '(916) 234-7658', 'Visa...4242', false, 'actions'),
        createData(2, false, 'George Lobos', '(916) 232-1363', 'george.lobos@ridecell.com', '212 Rey St', 'San Francisco', 'California', 94134, createLabel('success', 'complete'), '(916) 232-1363', 'Visa...4242', true , 'actions'),
        createData(3, false, 'Patrick Broski', '(415) 257-6549', 'patrick.broski@ridecell.com', '212 Rey St', 'San Francisco', 'California', 94134, createLabel('warning', 'incomplete'), '(415) 257-6549', '', false , 'actions'),
        createData(4, false, 'Melanie Fuller', '(831) 884-0958', 'melanie.fuller@ridecell.com', '1845 25th St', 'San Francisco', 'California', 94107, createLabel('warning', 'incomplete'), '(831) 884-0958', 'Visa...4242', false , 'actions'),
        createData(5, false, 'Ross McBright', '(619) 589-2322', 'ross.mcbright@ridecell.com', '1845 25th St', 'San Francisco', 'California', 94107, createLabel('success', 'complete'), '(619) 589-2322', 'Visa...4242', true , 'actions'),
    ];

    // console.log(rows);

    const classes = useStyles();

    const [tableRows, setTableRows] = React.useState(rows);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [itemDetail, setItemDetail] = React.useState({} as ItemDetail);
    const [showPanel, setShowPanel] = React.useState(false);
    const [panelID, setPanelID] = React.useState(0);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleRowClick = (id: number, event: any) => {
        const rowIndex = tableRows.indexOf(tableRows.find(row => row.id === id)!);
        tableRows[rowIndex].isSelected = true;
        setItemDetail(tableRows[rowIndex]);
        setTableRows(tableRows);
        setShowPanel(false);
        setShowPanel(true);
        setPanelID(id);
        // alert("Display side panel \n Row: " + id);
        // console.log(id);
        console.log(itemDetail);
    };

    const handlePanelClose = () => {
        setShowPanel(false);
        tableRows.map((row) => row.isSelected = false)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleMoreActionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // More on event.stopPropagation(): https://stackoverflow.com/questions/52939515/how-to-avoid-conflicting-onclick-functions-on-a-react-component
        event.stopPropagation();
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMoreActionsClose = () => {
        setMenuAnchorEl(null);
    };

    return (
        <>
            <TableContainer>
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
                        {tableRows.map((row) => (
                            <TableRow key={row.id} hover onClick={(event) => handleRowClick(row.id, event)} selected={row.isSelected}>
                                {/* ID */}
                                <TableCell component="th" scope="row" className={classes.cellID}>
                                    {row.id}
                                </TableCell>
                                {/* Name */}
                                <TableCell width="15%">
                                    <Link href="#" noWrap>
                                        {row.name}
                                    </Link>
                                    <Typography variant="caption" color="textSecondary" display="block" noWrap>{row.phone}</Typography>
                                </TableCell>
                                {/* Status */}
                                <TableCell width="100%">
                                    <Label text={row.status.label} style={row.status.type} />
                                    <div className={classes.conditionContainer}>
                                        <PhoneIcon className={classes.conditionIcon} />
                                        <CreditCardIcon className={classes.conditionIcon} />
                                        <FingerprintIcon className={classes.conditionIcon} />
                                    </div>
                                </TableCell>
                                {/* Actions */}
                                <TableCell>
                                    <IconButton color="primary" aria-label="actions" onClick={handleMoreActionsClick}>
                                        <Dots />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tableRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                align="center"
            />
            <SidePanel anchor={'right'} open={showPanel} onClose={handlePanelClose}>
                <ListSection header={itemDetail.name}>
                    <ListItem label="Phone" textLine1={itemDetail.phone} />
                    <ListItem label="Email" textLine1={itemDetail.email} link={`mailto:${itemDetail.email}`} />
                    <ListItem label="Address" textLine1={itemDetail.streetAddress} textLine2={`${itemDetail.city},${itemDetail.state} ${itemDetail.zip}`} />
                </ListSection>
                <ListSection header="Verification Status">
                    <ListItem label="Phone" textLine1={itemDetail.statusPhone} />
                    <ListItem label="Payment" textLine1={itemDetail.statusPayment} />
                    {/* <ListItem label="License" textLine1={`${itemDetail.statusLicense ? 'verfified' : 'unverified'}`} colorWarning={true} /> */}
                    <ListItem label="License" textLine1={`${itemDetail.statusLicense ? 'verfified' : 'unverified'}`} colorWarning={itemDetail.status.type === "warning"} />
                </ListSection>
            </SidePanel>
            <MoreActionsMenu
                anchorEl={menuAnchorEl}
                keepMounted
                open={Boolean(menuAnchorEl)}
                onClose={handleMoreActionsClose}
            >
                <MenuItem onClick={handleMoreActionsClose}>
                    <ListItemIcon><RefreshIcon fontSize="small" /></ListItemIcon>
                    Reset Password
                </MenuItem>
                <MenuItem onClick={handleMoreActionsClose}>
                    <ListItemIcon><DeleteOutlineIcon fontSize="small" /></ListItemIcon>
                    Delete
                </MenuItem>
            </MoreActionsMenu>
        </>
    );
}

export default BasicTable;
