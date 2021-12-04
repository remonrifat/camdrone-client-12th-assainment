import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 650, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            CAM DRONE
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white' }}>
                            IF YOU LOVE DRONES, THEN YOU LOVE US
                        </Typography>

                        <a href="/login"><Button variant="contained" style={{}} sx={{ bgcolor: 'text.primary' }}>GO TO ORDER</Button></a>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    );
};

export default AppointmentBanner;