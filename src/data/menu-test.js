import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dashboard from '@material-ui/icons/Dashboard';
import DataUsage from '@material-ui/icons/DataUsage';
import DriveEta from '@material-ui/icons/DriveEta';
import People from '@material-ui/icons/People';
import Chart from '@material-ui/icons/InsertChart';
import Settings from '@material-ui/icons/Settings';
import AccountBalance from '@material-ui/icons/AccountBalance';

const fontSize = "small";

const menuItemsData = [
    {
        id: "dashboard",
        name: "Dashboard",
        icon: "dashboard",
        // tabMenuItems: []
    },
    {
        id: "activity",
        name: "Activity",
        icon: "data_usage",
        tabMenuItems: [
            {
                isHeading: true,
                id: "jobs",
                name: "Jobs",
                route: "",
            },
            {
                isHeading: false,
                id: "activejobs",
                name: "Active Jobs",
                route: "",
                addItemRoute: "route here"
            },
            {
                isHeading: false,
                id: "pastjobs",
                name: "Past Jobs",
                route: ""
            },
            {
                isHeading: true,
                id: "checkouts",
                name: "Checkouts",
                route: ""
            },
            {
                isHeading: false,
                id: "activecheckouts",
                name: "Active Checkouts",
                route: "",
                addItemRoute: "route here"
            },
            {
                isHeading: false,
                id: "pastcheckouts",
                name: "Past Checkouts",
                route: ""
            }
        ]
    },
    {
        id: "vehicles",
        name: "Vehicles",
        icon: "drive_eta",
        tabMenuItems: [
            {
                isHeading: true,
                id: "vehicles",
                name: "Vehicles",
                route: ""
            },
            {
                isHeading: false,
                id: "avvehicles",
                name: "Available Vehicles",
                route: ""
            },
            {
                isHeading: false,
                id: "vehgroup",
                name: "Vehicle Groups",
                route: ""
            },
            {
                isHeading: true,
                id: "controls",
                name: "Controls",
                route: ""
            },
            {
                isHeading: false,
                id: "access",
                name: "Access",
                route: ""
            },
        ]
    },
    {
        id: "users",
        name: "Users",
        icon: "people",
        tabMenuItems: [
            {
                isHeading: true,
                id: "user",
                name: "User",
                route: ""
            },
            {
                isHeading: false,
                id: "allusers",
                name: "All Users",
                route: ""
            },
            {
                isHeading: false,
                id: "staff",
                name: "Staff",
                route: ""
            },
            {
                isHeading: false,
                id: "suppliers",
                name: "Suppliers",
                route: ""
            },
            {
                isHeading: false,
                id: "drivers",
                name: "Drivers",
                route: ""
            },
            {
                isHeading: false,
                id: "userg",
                name: "User Groups",
                route: ""
            },
        ]
    },
    {
        id: "reports",
        name: "Reports",
        icon: "assessment"
    },
    {
        id: "settings",
        name: "Settings",
        icon: "settings",
        tabMenuItems: [
            {
                isHeading: true,
                id: "general",
                name: "General",
                route: ""
            },
            {
                isHeading: false,
                id: "services",
                name: "Services",
                route: ""
            },
            {
                isHeading: false,
                id: "stations",
                name: "Stations",
                route: ""
            },
            {
                isHeading: false,
                id: "regions",
                name: "Regions",
                route: ""
            },
            {
                isHeading: true,
                id: "jobs",
                name: "Jobs",
                route: ""
            },
            {
                isHeading: false,
                id: "jsettings",
                name: "Job Settings",
                route: ""
            },
            {
                isHeading: false,
                id: "jtypes",
                name: "Job Types",
                route: ""
            },
            {
                isHeading: false,
                id: "jrules",
                name: "Job Rules",
                route: ""
            },
            {
                isHeading: true,
                id: "automations",
                name: "Automations",
                route: ""
            },
            {
                isHeading: false,
                id: "allauto",
                name: "All Automations",
                route: ""
            }
        ]
    },
];

export default menuItemsData;