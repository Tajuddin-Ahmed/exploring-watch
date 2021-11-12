import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
// import MakeAdmin from './MakeAdmin/MakeAdmin';
// import AddDoctor from './AddDoctor/AddDoctor';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from './MakeAddmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();
    const drawer = (
        <div>
            <Divider />
            <Toolbar />
            <Link style={{ textDecoration: "none" }} to="/products" underline="none">
                <Button color="inherit">Products</Button>
            </Link> <br />
            <Link style={{ textDecoration: "none" }} to={`${url}`} underline="none">
                <Button color="inherit">My Orders</Button>
            </Link> <br />
            <Link style={{ textDecoration: "none" }} to="/payment" underline="none">
                <Button color="inherit">Payment</Button>
            </Link><br />
            <Link style={{ textDecoration: "none" }} to="/review" underline="none">
                <Button color="inherit">Review</Button>
            </Link><br />
            {admin && <Box>
                <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`} underline="none">
                    <Button color="inherit">Make Admin</Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`} underline="none">
                    <Button color="inherit">Add Products</Button>
                </Link>
            </Box>}
            <Link to="" style={{ textDecoration: "none" }} underline="none">
                <Button onClick={logOut} color="inherit">logout</Button>
            </Link>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {/* <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route> */}
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
