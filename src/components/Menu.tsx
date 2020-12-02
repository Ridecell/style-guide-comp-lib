import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../images/logo.png';
// icons
import Dashboard from '@material-ui/icons/Dashboard';
import DataUsage from '@material-ui/icons/DataUsage';
import DriveEta from '@material-ui/icons/DriveEta';
import People from '@material-ui/icons/People';
import Chart from '@material-ui/icons/InsertChart';
import Settings from '@material-ui/icons/Settings';
import Exit from '@material-ui/icons/ExitToApp';

const TabsWithStyles = withStyles((theme) => ({
    root: {
    },
    indicator: {
        height: 5,
    },
}))(Tabs);

const TabWithStyles = withStyles((theme) => ({
    root: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 12,
        textTransform: 'capitalize',
        lineHeight: .8,
        minWidth: 104
    },
    textColorPrimary: {
    },
    selected: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
    },
    labelIcon: {
        // minHeight: 100
    },
    fullWidth: {
        flexGrow: 0
    }
}))(Tab);

const MenuWithStyles = withStyles((theme) => ({
    // root: {
    //     top: 72
    // },
    paper: {
        marginTop: 60,
        minWidth: 240
    }
}))(Menu);

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 32
    },
    image: {
    },
    img: {
        maxHeight: 24
    },
}));


const handleDelete = () => {
    console.info('You clicked the delete icon.');
};




interface RCCompProps {
    // text: string,
    componentProps?: Object
}

const RCMenu = ({ componentProps }: RCCompProps) => {
    const menuData = [
        {
            tabID: "dashboard",
            tabName: "Dashboard",
            tabIcon: <Dashboard />,
            tabMenuItems: []
        },
        {
            tabID: "activity",
            tabName: "Activity",
            tabIcon: <DataUsage />,
            tabMenuItems: [
                "Jobs",
                "Active Jobs",
                "Past Jobs",
                "Checkouts",
                "Active Checkouts",
                "Past Checkouts"
            ]
        },
        {
            tabID: "vehicles",
            tabName: "Vehicles",
            tabIcon: <DriveEta />,
            tabMenuItems: [
                "Vehicles",
                "Available Vehicles",
                "Vehicle Groups",
                "Controls",
                "Access"
            ]
        },
        {
            tabID: "users",
            tabName: "Users",
            tabIcon: <People />,
            tabMenuItems: []
        },
        {
            tabID: "reports",
            tabName: "Reports",
            tabIcon: <Chart />,
            tabMenuItems: []
        },
        {
            tabID: "settings",
            tabName: "Settings",
            tabIcon: <Settings />,
            tabMenuItems: []
        },
    ]
    const [tabIndex, setTabsIndex] = React.useState(0);
    // const tabSelectionHistory = [];
    const handleTabsChange = (event: any, newIndex: number) => {
        setTabsIndex(newIndex);
        console.log("tab index:");
        console.log(newIndex);
        console.log("target:");
        console.log(event.currentTarget);
        // tabSelectionHistory.push(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const classes = useStyles();

    const [menuItems, setMenuItems] = React.useState([""]);
    const handleTabClick = (id: string, event: any) => {
        setAnchorEl(event.currentTarget);
        setMenuItems(menuData.filter(tabItem => tabItem.tabID == id)[0].tabMenuItems);
    };

    const handleMenuItemClick = (event: any) => {
        // do stuff
        setAnchorEl(null);
    };

    const handleMenuClose = (event: any) => {
        setAnchorEl(null);
        // setTabsValue(tabSelectionHistory.pop());
    };

    return (
        <Paper square>
            <Box display="flex">
                <Box className={classes.logo}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="logo" src={Logo} />
                    </ButtonBase>
                </Box>
                <Box flexGrow={1}>
                    <TabsWithStyles
                        value={tabIndex}
                        onChange={handleTabsChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="menu tabs"
                        {...componentProps}
                    >
                        {menuData.map(
                            tabItem => <TabWithStyles icon={tabItem.tabIcon} label={tabItem.tabName} onClick={(event) => handleTabClick(tabItem.tabID, event)} key={tabItem.tabID} />
                        )}
                    </TabsWithStyles>
                    <MenuWithStyles
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        // open={true}
                        onClose={handleMenuClose}
                    >
                        {
                            menuItems.map(menuItem => <ListItem key={menuItem} button onClick={handleMenuItemClick}><ListItemText primary={menuItem} /></ListItem>)
                        }
                        {/* <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Jobs</ListSubheader>
                            }
                        >
                            <ListItem button onClick={handleMenuItemClick}><ListItemText primary="Active Jobs" /></ListItem>
                            <ListItem button><ListItemText primary="Past Jobs" /></ListItem>
                        </List>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Checkouts</ListSubheader>
                            }
                        >
                            <ListItem button><ListItemText primary="Active Checkouts" /></ListItem>
                            <ListItem button><ListItemText primary="Past Checkouts" /></ListItem>
                        </List> */}
                    </MenuWithStyles>
                    {/* <MenuWithStyles
                        id="settings-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">General</ListSubheader>
                            }
                        >
                            <ListItem button onClick={handleMenuItemClick}><ListItemText primary="Services" /></ListItem>
                            <ListItem button><ListItemText primary="Stations" /></ListItem>
                            <ListItem button><ListItemText primary="Regions" /></ListItem>
                        </List>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Jobs</ListSubheader>
                            }
                        >
                            <ListItem button><ListItemText primary="Job Settings" /></ListItem>
                            <ListItem button><ListItemText primary="Job Types" /></ListItem>
                            <ListItem button><ListItemText primary="Job Rules" /></ListItem>
                        </List>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">Automations</ListSubheader>
                            }
                        >
                            <ListItem button><ListItemText primary="All Automations" /></ListItem>
                        </List>
                    </MenuWithStyles> */}
                </Box>
                <Box>
                    <TabWithStyles icon={<Exit />} label="Logout" />
                </Box>
            </Box>
        </Paper>
    )
}

export default RCMenu;