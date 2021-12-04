import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setloginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();


    const location = useLocation();
    const history = useHistory();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
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
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', m: '3' }} src={login} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ color: 'secondary.main', fontSize: 'h6.fontSize', fontWeight: 'bold' }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            // id="filled-password-input"
                            label="Password"
                            type="password"
                            // autoComplete="current-password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit"
                            variant="outlined">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/register'><Button sx={{ color: 'secondary.main', fontFamily: 'Monospace' }} variant="outlined">New User? please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Login Successfully — Congratulation!</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                        <p>--------------=OR=--------------</p>
                        <Button sx={{ bgcolor: 'secondary.main', fontFamily: 'Monospace' }} onClick={handleGoogleSignIn} variant="outlined">Google Sign In</Button>
                    </form>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;