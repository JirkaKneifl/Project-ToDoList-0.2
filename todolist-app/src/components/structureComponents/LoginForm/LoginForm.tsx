import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Text from '../../basicComponents/Text/Text';
import HStack from '../../basicComponents/HStack';
import VStack from '../../basicComponents/VStack';
import './LoginForm.css';
import { FormattedMessage } from 'react-intl';
import { useMutation } from 'react-query';
import { FormEvent } from 'react';
import { getDecodedToken } from '../../../utils/getDecodedToken';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('Jirka.kneifl@email.cz');
    const [password, setPassword] = React.useState('P@ssw0rd#5');
    const username = email;

    const loginUserMutation = useMutation(
        'loginUser',
        () =>
            fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                body: JSON.stringify({ username, password }),
            }).then((res) => res.json()),
        {
            onSuccess: (data) => {
                localStorage.setItem('access_token', data.access_token);
                const decoded = getDecodedToken(data.access_token);
                navigate(`/main/${decoded.id}`);
            },
        },
    );

    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        loginUserMutation.mutate();
    };

    return (
        <>
            <div className={'loginForm'}>
                <form onSubmit={handleLoginSubmit}>
                    <VStack gap={1}>
                        <Text type={'title'} children={<FormattedMessage id={'Login'} />}></Text>
                        <VStack gap={1} justifyContent={'flex-start'}>
                            <Text type={'body'}>
                                <FormattedMessage id={'label.email'} />
                            </Text>
                            <input
                                type={'email'}
                                name={email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                            <Text type={'body'}>
                                <FormattedMessage id={'label.password'} />
                            </Text>
                            <input
                                type={'password'}
                                name={password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                pattern="^[a-zA-Z\d!@#$%^&*]{6,30}$"
                                required
                            />
                        </VStack>
                        <VStack gap={1} justifyContent={'flex-start'} alignItems={'center'}>
                            <button type={'submit'}>
                                <FormattedMessage id={'Login'} />
                            </button>
                            <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                    console.log(credentialResponse);
                                    const access_token = credentialResponse.credential as string;
                                    const decoded = jwtDecode(access_token);
                                    console.log(decoded);

                                    //zde musim poslat token na backend a tam ho zpracovat
                                    fetch('http://localhost:3001/auth/google-redirect', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Authorization: `Bearer ${credentialResponse.credential}`,
                                            'Access-Control-Allow-Origin': 'http://localhost:3000',
                                        },
                                        body: JSON.stringify({
                                            access_token: credentialResponse.credential,
                                        }),
                                    }).then((res) => res.json());
                                }}
                                onError={() => {
                                    console.log('Google login failed');
                                }}
                            />
                        </VStack>
                        <HStack gap={1} alignItems={'baseline'}>
                            <Text
                                type={'small-body'}
                                children={<FormattedMessage id={'label.question.login'} />}
                            ></Text>
                            <Link to={'/auth/register'} className={'link'}>
                                <FormattedMessage id={'Register'} />
                            </Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
