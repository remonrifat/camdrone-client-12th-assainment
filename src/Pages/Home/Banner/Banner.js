import React from 'react';
import chair from '../../../images/chair.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';





const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}



const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <h1>Welcome To CAM DRONE   !</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '100%', mt: '5' }} src={chair} alt="" />
                </Grid>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            GET YOUR HANDS ON THE MOST <br />
                            ADVANCED DRONE
                        </Typography>
                        <Typography variant='h5' sx={{ my: 5, fontSize: 13, fontWeight: 300, color: 'red', fontWeight: 'bold' }}>
                            Drone technology has advanced rapidly in the last couple of years and with that, the number of drone manufacturers out there. Some drone companies offer bundle offers, some offer great customer service, some have excellent after-sales care and some are big brands with a big advertising budget.
                        </Typography>
                        <Button sx={{ bgcolor: 'text.primary' }} variant="contained" style={{}}>Wanna Order?</Button>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;