import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "DJI Mini 2",
        description: "A drone without a camera is like a body without a soul",
        img: whitening


    },
    {
        name: "DJI Mavic Air 2",
        description: "The world is a better place with drones",
        img: whitening
    },
    {
        name: "Ryze Tech Tello",
        description: "Delivering joy to the world, one drone at a time",
        img: whitening
    },
    {
        name: "DJI Mavic 2 Zoom",
        description: "They need water, or they will die.",
        img: whitening
    },
    {
        name: "DJI Air 2S",
        description: "The best drone experience on the market",
        img: whitening
    },
    {
        name: "Parrot AnafiA",
        description: "We build our drones for a reason",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'text.primary', fontWeight: 'bold' }} variant="h4" component="div">
                    OUR SERVICES
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }

                </Grid>
                <h1 sx={{ textAlign: 'center' }} >IF YOU LIKE  DRONE ,GO TO ORDER!</h1>
            </Container>
        </Box>
    );
};

export default Services;