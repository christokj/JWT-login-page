import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import useLoginStore from "../store/LoginStore";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

function MyLoginForm() {

    let { setToggle } = useLoginStore();

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const toLogin = async (data) => {
        try {
            const response = await axios.post('/users/log-in', data);
            console.log(response.data);
            toast("Success");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast(error.response.data.error);
              } else {
                toast('An unexpected error occurred');
              }
        }
    }

    return (
        <>
            <Container align='center'>
                <Box height={200} width={400} m={4}  >
                    <Typography sx={{ marginY: 5 }} align='center' variant='h4'>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit(toLogin)} >
                        <Stack spacing={4} align='center' sx={{ flexDirection: 'column' }} >
                            <TextField id="Email" label="Email" variant="outlined" {...register("email")} />
                            <TextField id="Password" label="Password" variant="outlined" {...register("password")} />
                            <Button variant="contained" type="submit">Login</Button>
                        </Stack>
                    </form>
                    <Typography align='center' variant='subtitle1'>
                        New ? <Link onClick={setToggle}> SignUp Here </Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default MyLoginForm;