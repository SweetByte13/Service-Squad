import React from "react";
import { Formik } from 'formik';
import { Container } from '@mui/material';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
    const navigate = useNavigate();

    const LoginSchema = yup.object().shape({
        username: yup.string().required('Username required').min(6, 'Username must be at least 6 characters'),
        password: yup.string().required('Password required').min(8, 'Password must be at least 8 characters')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        fetch("/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error('Invalid credentials');
            }
        }).then((user) => {
            setUser(user);
            console.log(user);
            setTimeout(() => navigate("/"), 500);
        }).catch((error) => {
            alert(error.message);
        }).finally(() => {
            setSubmitting(false);
        });
    }

    const initialValues = {
        username: '',
        password: ''
    };

    return (
        <Container className="login-container">
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, handleChange, errors, touched, handleBlur }) => (
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                required
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.username && !!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                id='password'
                                name='password'
                                required
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.password && !!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="success" type="submit">Log In</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default LoginForm;
