import React from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import useLoginStore from "../store/LoginStore";
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

function SignUpForm() {

    // axios.defaults.withCredentials = true;

    const { setToggle } = useLoginStore()

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        try {
            if(data.password !== data.Confirmpassword) {
                toast("Password mismatching");
            } else {
            const userData = {email, password}
            const response = await axios.post('/users/sign-up', userData);
            console.log(response.data);
            toast("Success");
            setToggle();
        }
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
                <Box height={400} width={400} m={4} >
                    <Typography sx={{ marginY: 5 }} align='center' variant='h4'>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={5}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <TextField {...field} label="Email" />}
                            />
                            {errors.username && <span>This field is required</span>}
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <TextField {...field} label="Password" />}
                            />
                            {errors.username && <span>This field is required</span>}
                            <Controller
                                name="Confirmpassword"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <TextField {...field} label="Confirm password" />}
                            />
                            {errors.username && <span>This field is required</span>}
                            <Button variant="contained" type='submit'>Sign Up</Button>
                        </Stack>
                    </form>
                    <Typography align='center' variant='subtitle1'>
                        Already existing? <Link onClick={setToggle}>Login Here</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default SignUpForm;