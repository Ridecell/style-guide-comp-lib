import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../images/logo.png';
// icons
import Exit from '@material-ui/icons/ExitToApp';
// data
import MenuItemsData from '../data/menu';

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

interface RCCompProps {
    // text: string,
    componentProps?: Object
}

interface MenuItem {
    isHeading: boolean,
    id: string,
    name: string,
    route?: string
}

interface TabItem {
    id: string,
    name: string,
    icon: any,
    tabMenuItems?: Array<MenuItem>
}

const RCMenu = ({ componentProps }: RCCompProps) => {
    const classes = useStyles();

    const menuData: Array<TabItem> = MenuItemsData;

    const [tabIndex, setTabsIndex] = React.useState(0);
    const handleTabsChange = (event: any, newIndex: number) => {
        setTabsIndex(newIndex);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuItems, setMenuItems] = React.useState(Array<MenuItem>());
    const handleTabClick = (id: string, event: any) => {
        setAnchorEl(event.currentTarget);
        setMenuItems(menuData.filter(tabItem => tabItem.id == id)[0].tabMenuItems!);
    };

    const handleMenuItemClick = (event: any) => {
        // do stuff
        setAnchorEl(null);
    };

    const handleMenuClose = (event: any) => {
        setAnchorEl(null);
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
                            tabItem => tabItem.tabMenuItems ?
                            <TabWithStyles icon={tabItem.icon} label={tabItem.name} onClick={(event) => handleTabClick(tabItem.id, event)} key={tabItem.id} />
                            :
                            <TabWithStyles icon={tabItem.icon} label={tabItem.name} key={tabItem.id} />
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
                            menuItems.map(
                                menuItem => menuItem.isHeading ? 
                                    <ListSubheader id="nested-list-subheader">{menuItem.name}</ListSubheader> 
                                    : 
                                    <ListItem component="li" key={menuItem.id} button onClick={handleMenuItemClick}><ListItemText primary={menuItem.name} /></ListItem>
                            )
                        }
                    </MenuWithStyles>
                </Box>
                <Box>
                    <TabWithStyles icon={<Exit />} label="Logout" />
                </Box>
            </Box>
        </Paper>
    )
}

export default RCMenu;