/**
 - Use as your primary method for navigation
 - Something more here
 **/

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import Logo from '../images/logo.png';
// icons
import Exit from '@material-ui/icons/ExitToApp';
import AddCircle from '@material-ui/icons/AddCircle';
// data
import { Icon, IconButton } from '@material-ui/core';

const TabsRC = withStyles((theme) => ({
    root: {
    },
    indicator: {
        height: 5,
    },
}))(Tabs);

const TabRC = withStyles((theme) => ({
    root: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 12,
        textTransform: 'capitalize',
        lineHeight: .8,
        minWidth: 104,
        '&:hover': {
            color: theme.palette.text.primary,
        },
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

const PopoverRC = withStyles((theme) => ({
    // pointer event css property solution for hover menus: https://stackoverflow.com/questions/54705254/how-to-keep-showing-the-popover-on-hovering-on-the-anchorel-and-popover-as-w
    root: {
        pointerEvents: 'none',
    },
    paper: {
        marginTop: 60,
        minWidth: 240
    }
}))(Popover);

const MenuWithStyles = withStyles((theme) => ({
    root: {
        pointerEvents: 'none',
    },
    paper: {
        marginTop: 60,
        minWidth: 240
    }
}))(Menu);

const MenuListRC = withStyles((theme) => ({
    // pointer event css property solution for hover menus: https://stackoverflow.com/questions/54705254/how-to-keep-showing-the-popover-on-hovering-on-the-anchorel-and-popover-as-w
    root: {
        pointerEvents: 'auto',
        marginBottom: 8,
    },
}))(MenuList)

const ListSubheaderRC = withStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.subtitle1.fontSize,
        lineHeight: theme.typography.subtitle1.lineHeight,
        marginTop: 16,
        marginBottom: 4,
    }
}))(ListSubheader);

const MenuItemRC = withStyles((theme) => ({
    root: {
        // height: 48
        padding: 0,
    },
    gutters: {
        paddingRight: 0,
        paddingLeft: 16,
    }
}))(MenuItem);

const MenuItemDisabled = withStyles((theme) => ({
    root: {
        // color: theme.palette.text.disabled,
        // flexGrow: 1,
        paddingTop: 8,
        paddingBottom: 8,
    },
}))(Typography);

const LinkRC = withStyles((theme) => ({
    root: {
        display: 'block',
        flexGrow: 1,
        paddingTop: 8,
        paddingBottom: 8,
        color: theme.palette.text.primary,
    },
}))(Link);


const IconLinkRC = withStyles((theme) => ({
    root: {
        display: 'inline-block',
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        lineHeight: 1,
        color: theme.palette.primary.main,
    },
}))(Link);

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

export interface RCCompProps {
    selectedTabIndex: Number,
    menuItemsData: Array<TabItem>,
    componentProps?: Object
}

export interface MenuItem {
    isHeading: boolean,
    isDisabled?: boolean,
    id: string,
    name: string,
    route?: string,
    addItemRoute?: string
}

export interface TabItem {
    id: string,
    name: string,
    icon: any,
    tabMenuItems?: Array<MenuItem>
}

const RCMenu = ({ selectedTabIndex, menuItemsData, componentProps }: RCCompProps) => {
    const classes = useStyles();

    const menuData: Array<TabItem> = menuItemsData;

    const [tabIndex, setTabsIndex] = React.useState(0);
    const handleTabsChange = (event: any, newIndex: number) => {
        // setTabsIndex(newIndex);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [menuItems, setMenuItems] = React.useState(Array<MenuItem>());
    const handleMenuOpen = (id: string, event: any) => {
        setAnchorEl(null);
        setAnchorEl(event.currentTarget);
        setMenuItems(menuData.filter(tabItem => tabItem.id == id)[0].tabMenuItems!);
        console.log(menuItems);
    };

    const handleMenuItemClick = (route: string) => {
        // do stuff
        console.log(route);
        // then close
        setAnchorEl(null);
    };

    const handleMenuItemAddClick = (route: string) => {
        // do stuff
        console.log(route);
        // then close
        setAnchorEl(null);
    }

    const handleMenuClose = (event: any) => {
        console.log("menu close triggered");
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
                    <TabsRC
                        value={selectedTabIndex}
                        onChange={handleTabsChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="menu tabs"
                        {...componentProps}
                    >
                        {menuData.map(
                            tabItem => tabItem.tabMenuItems ?
                                <TabRC icon={tabItem.icon} label={tabItem.name} onMouseEnter={(event) => handleMenuOpen(tabItem.id, event)} key={tabItem.id} />
                                :
                                <TabRC icon={tabItem.icon} label={tabItem.name} key={tabItem.id} />
                        )}
                    </TabsRC>
                    <PopoverRC
                        id="mouse-over-popover"
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        keepMounted
                        onClose={handleMenuClose}
                        // using onMouseLeave on the parent paper component to trigger close once the pointer leaves the menu
                        PaperProps={{ onMouseLeave: handleMenuClose }}
                        disableRestoreFocus
                    >
                        <MenuListRC>
                            {
                                menuItems.map(
                                    menuItem => menuItem.isHeading ?
                                        <ListSubheaderRC id="nested-list-subheader">{menuItem.name}</ListSubheaderRC>
                                        :
                                        <MenuItemRC key={menuItem.id} disabled={menuItem.isDisabled}>
                                            {Boolean(menuItem.isDisabled) ?
                                                <MenuItemDisabled variant="body1">{menuItem.name}</MenuItemDisabled>
                                                :
                                                <LinkRC href={menuItem.route} underline="none">{menuItem.name}</LinkRC>}
                                            {Boolean(menuItem.addItemRoute) && Boolean(!menuItem.isDisabled) ?
                                                <IconLinkRC href={menuItem.addItemRoute}><AddCircle fontSize="small" /></IconLinkRC>
                                                : <></>}
                                        </MenuItemRC>
                                )
                            }
                        </MenuListRC>
                    </PopoverRC>
                </Box>
                <Box>
                    <TabRC icon={<Exit />} label="Logout" />
                </Box>
            </Box>
        </Paper>
    )
}

export default RCMenu;