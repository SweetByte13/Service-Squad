import React, { useContext, useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

function ProfileForm({ setUser }) {
    const navigate = useNavigate();
    const useAppContext = () => useContext(AppContext);
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const profileSchema = yup.object().shape({
        firstName: yup.string().min(1, 'First name too short!').max(15, 'First name too long!'),
        lastName: yup.string().min(1, 'Last name too short!').max(15, 'Last name too long!'),
        email: yup.string().email("Invalid email address"),
        phoneNumber: yup.string().min(10, 'Phone number too short!').max(17, 'Phone number too long!'),
        zipCode: yup.number().integer().min(10000, 'Invalid zip code').max(99999, 'Invalid zip code!'),
        interests: yup.string().required('Interest is required!'),
        skills: yup.string().required('Skills are required!'),
        hoursWanted: yup.number().integer().min(1, 'Minimum of 1 hour required!'),
    });

    const handleFormSubmit = (values, { setSubmitting }) => {
        setLoading(true);
        const endpoint = `/api/volunteer/${user.id}`;
        fetch(endpoint, {
            method: 'PATCH',
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
            navigate("/");
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setSubmitting(false);
            setLoading(false);
        });
    };

    const handleAccountDelete = () => {
        if (!window.confirm("Are you sure you want to delete your account?")) {
            return;
        }
        const endpoint = `/api/volunteer/${user.id}`;
        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((resp) => {
            if (resp.ok) {
                alert('Your account has been deleted. We are sorry to see you go!');
                setUser(null);
                navigate("/");
            } else {
                throw new Error('Invalid credentials');
            }
        }).catch((error) => {
            setError(error.message);
        });
    };

    const initialValues = {
        firstName: user?.first_name || '',
        lastName: user?.last_name || '',
        email: user?.email || '',
        phoneNumber: user?.phone_number || '',
        zipCode: user?.zipcode || '',
        interests: user?.interests || '',
        skills: user?.skills || '',
        hoursWanted: user?.hours_wanted || ''
    };

    return (
        <Container className="profile-container">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={profileSchema}
                onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label htmlFor='firstName'>First Name:</label>
                            <input
                                id='firstName'
                                name='firstName'
                                placeholder='First Name'
                                required
                                value={values.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='lastName'>Last Name:</label>
                            <input
                                id='lastName'
                                name='lastName'
                                placeholder='Last Name'
                                required
                                value={values.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='email'>Email:</label>
                            <input
                                id='email'
                                name='email'
                                placeholder='Email'
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='zipCode'>Zip Code:</label>
                            <input
                                id='zipCode'
                                name='zipCode'
                                type='zipCode'
                                placeholder='Zip Code'
                                value={values.zipCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='phoneNumber'>Phone Number:</label>
                            <input
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='Phone Number'
                                required
                                value={values.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='hoursWanted'>Hours Wanted:</label>
                            <input
                                id='hoursWanted'
                                name='hoursWanted'
                                type='hoursWanted'
                                placeholder='Hours Wanted'
                                value={values.hoursWanted}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='skills'>Skills:</label>
                            <input
                                id='skills'
                                name='skills'
                                type='skills'
                                placeholder='Skills'
                                value={values.skills}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='interests'>Interests:</label>
                            <input
                                id='interests'
                                name='interests'
                                type='interests'
                                placeholder='Interests'
                                value={values.interests}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="button-submit">
                            <button type='submit' disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
                        </div>
                        <div>
                            <button type="button" className="button-delete" onClick={handleAccountDelete}>Delete Account</button>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </form>
                )}
            </Formik>
        </Container>
    );
}

export default ProfileForm;
