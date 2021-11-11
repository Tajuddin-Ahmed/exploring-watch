import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.jpg';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            type="email"
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnChange}
                            type="password"
                            variant="standard" />
                        <br />
                        <Button sx={{ width: '75%', mt: 2 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successful</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------------------</p>
                    <Button onClick='' variant="contained">Google Sign In</Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', marginTop: 70 }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;