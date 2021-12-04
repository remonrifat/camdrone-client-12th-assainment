import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, description, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <><Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>

                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {description}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} AVAILABLE IN STOCK
                </Typography>
                <Button onClick={handleBookingOpen} variant="h4" sx={{ bgcolor: 'warning.main' }} variant="outlined">BUY DRONE</Button>
            </Paper>
        </Grid >
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal></>
    );
};

export default Booking;