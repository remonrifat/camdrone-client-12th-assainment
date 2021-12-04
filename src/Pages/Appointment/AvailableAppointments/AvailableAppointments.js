import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
// import Booking from '../Booking/Booking';



const bookings = [
    {
        "id": 1,
        "name": "DJI Mini 2",
        "description": "The Mini 2's camera resolution has been improved. ",
        "space": 41
    },
    {
        "id": 2,
        "name": "DJI Mavic Air 2",
        "description": "The DJI Mavic Air 2 is the best drone for those who",
        "space": 34
    },
    {
        "id": 3,
        "name": "Ryze Tech Tello ",
        "description": "$100, the Ryze Tech Tello—designed by DJI—makes for . ",
        "space": 22
    },
    {
        "id": 4,
        "name": "DJI Mavic 2 Zoom",
        "description": "The Mavic 2 is available in two versions: the $1,449 .",
        "space": 21
    },
    {
        "id": 5,
        "name": "DJI Air 2S",
        "description": "The Mavic 2 is available in two versions: the $1,449 ",
        "space": 23
    },
    {
        "id": 6,
        "name": "Parrot AnafiA",
        "description": "The Anafi has a good selection of flight modes to take ",
        "space": 12
    }
]


const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h1" sx={{ color: 'text.primary', mb: 4 }} > BOOKING ON {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success"> Order Booked Successfully — Thanks For Your patient!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}

                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;