import React, { FormEvent, ChangeEvent } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupThunk, siginThunk } from './thunks';
import styled from 'styled-components';
import Input from '../../../common/components/UIElements/Input/Input';
import { Wrapper, cyanBlue, gray } from '../../../common/utilities';
import BackToGame from '../../../common/components/UIElements/BackToGame/BackToGame';
import { Container } from '../../../common/utilities/Container';
import checkValidity from '../../../common/helpers/validation';
import { lighten } from 'polished';
import { AppState } from '../../../app/rootReducer';
import SignButton from '../components/SignButton/SignButton';
import { clearError } from './actions';
import { formState } from '../utilities/formState';

const Auth = (): JSX.Element => {
    const [formData, setFormdata] = React.useState(formState());
    const [isValid, setIsValid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const responseError = useSelector((state: AppState) => state.auth.error);
    const isLoading = useSelector((state: AppState) => state.auth.isLoading);

    const isSignup = path === '/account/signup';

    React.useEffect((): void => {
        setFormdata(formState());
        setErrorMessage(null);
        setIsValid(false);
        dispatch(clearError);
    }, [path]);

    const isFormValid = (): void => {
        if (
            formData.username.valid &&
            formData.username.touched &&
            formData.email.valid &&
            formData.email.touched &&
            formData.password.valid &&
            formData.password.touched &&
            isSignup
        ) {
            setIsValid(true);
        } else if (
            formData.email.valid &&
            formData.email.touched &&
            formData.password.valid &&
            formData.password.touched &&
            !isSignup
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    React.useEffect((): void => {
        isFormValid();
    }, [formData]);

    React.useEffect((): void => {
        if (responseError === 'Unauthorized') {
            setErrorMessage('Please provide valid email and password');
        } else {
            setErrorMessage(responseError);
        }
    }, [responseError]);

    const setMessage = (): void => {
        if (!formData.username.valid && isSignup) {
            setErrorMessage(formData.username.errorMessage);
        } else if (!formData.email.valid) {
            setErrorMessage(formData.email.errorMessage);
        } else if (!formData.password.valid) {
            setErrorMessage(formData.password.errorMessage);
        } else {
            setErrorMessage(null);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const {
            username: { value: username },
            email: { value: email },
            password: { value: password }
        } = formData;

        if (isValid) {
            dispatch(
                isSignup
                    ? signupThunk({
                          username,
                          email,
                          password
                      })
                    : siginThunk({
                          email,
                          password
                      })
            );
        } else {
            setMessage();
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormdata({
            ...formData,
            [e.target.name]: {
                ...formData[e.target.name],
                value: e.target.value,
                valid: checkValidity(
                    e.target.value,
                    formData[e.target.name].validation
                ),
                touched: true
            }
        });
        setErrorMessage(null);
    };

    return (
        <Wrapper>
            <Container>
                <BackToGame text='Back to Game' />
                <Form onSubmit={(e): void => handleSubmit(e)}>
                    <div>
                        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
                        {isSignup ? (
                            <Input
                                placeholder='Username'
                                onChange={handleChange}
                                value={formData.username.value}
                                name='username'
                                invalid={formData.username.valid}
                                touched={formData.username.touched}
                            />
                        ) : null}
                        <Input
                            placeholder='Email'
                            onChange={handleChange}
                            value={formData.email.value}
                            name='email'
                            invalid={formData.email.valid}
                            touched={formData.email.touched}
                        />
                        <Input
                            placeholder='Password'
                            onChange={handleChange}
                            value={formData.password.value}
                            name='password'
                            type='password'
                            invalid={formData.password.valid}
                            touched={formData.password.touched}
                        />
                        <ErrorMessage>{errorMessage}</ErrorMessage>

                        <SignButton loading={isLoading} isSignup={isSignup} />
                    </div>

                    <SignFooter>
                        {isSignup ? (
                            <>
                                <span>Have an account?</span>
                                <SignLink to='/account/login'>Log in</SignLink>
                            </>
                        ) : (
                            <>
                                <span>Don&rsquo;t have an account?</span>
                                <SignLink to='/account/signup'>
                                    Sign up
                                </SignLink>
                            </>
                        )}
                    </SignFooter>
                </Form>
            </Container>
        </Wrapper>
    );
};

const SignLink = styled(Link)`
    text-decoration: none;
    margin-left: 0.5rem;
    color: white;
`;

const Form = styled.form`
    max-width: 20rem;
    margin: 4rem auto 0;
    border-radius: 2px;

    h2 {
        margin: 1rem 0 2rem;
    }

    & > div:first-of-type {
        background-color: ${cyanBlue};
        padding: 1rem 3rem 3rem;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    letter-spacing: 0.5px;
`;

const SignFooter = styled.div`
    background-color: ${cyanBlue};
    margin: 1rem 0;
    padding: 1.25rem 0;
    color: ${lighten(0.3, gray)};
`;

export default Auth;
