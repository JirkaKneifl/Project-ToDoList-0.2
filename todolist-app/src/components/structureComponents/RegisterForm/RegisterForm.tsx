import * as React from 'react';
import { Link } from 'react-router-dom';
import VStack from '../../basicComponents/VStack';
import Text from '../../basicComponents/Text/Text';
import HStack from '../../basicComponents/HStack';
import './RegisterForm.css';
import { useMutation } from 'react-query';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function RegisterForm() {
    const navigate = useNavigate();
    const [first_name, setFirstName] = useState('Jirka');
    const [last_name, setLastName] = useState('Kneifl');
    const [email, setEmail] = useState('Jirka.kneifl@email.cz');
    const [phone, setPhone] = useState('123456789');
    const [password, setPassword] = useState('P@ssw0rd#5');

    const createUserMutation = useMutation(
        'createUser',
        () =>
            fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ first_name, last_name, email, phone, password }),
            }).then((res) => res.json()),
        {
            onSuccess: (data) => {
                console.log(data);
                navigate(`/auth/login`);
            },
        },
    );

    const handleRegisterSubmit = (e: FormEvent) => {
        e.preventDefault();
        createUserMutation.mutate();
    };
    return (
        <>
            <div className={'registerForm'}>
                <form onSubmit={handleRegisterSubmit}>
                    <VStack gap={1}>
                        <Text type={'title'} children={<FormattedMessage id={'Register'} />}></Text>
                        <VStack gap={1} justifyContent={'flex-start'}>
                            <Text type={'body'}>
                                <FormattedMessage id={'label.first-name'} />
                            </Text>
                            <input
                                type={'text'}
                                name={first_name}
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                                pattern="[a-zA-Z]+"
                                required
                            />
                            <Text type={'body'}>
                                <FormattedMessage id={'label.last-name'} />
                            </Text>
                            <input
                                type={'text'}
                                name={last_name}
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                pattern="[a-zA-Z]+"
                                required
                            />
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
                                <FormattedMessage id={'label.phone'} />
                            </Text>
                            <input
                                type={'tel'}
                                name={phone}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                pattern="^\d{9}$|^\d{3}[- ]?\d{3}[- ]?\d{3}$"
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
                            <Text type={'small-body'} children={'Test password: P@ssw0rd#5'}></Text>
                        </VStack>
                        <VStack gap={1} justifyContent={'flex-start'} alignItems={'center'}>
                            <button type={'submit'}>
                                <FormattedMessage id={'Register'} />
                            </button>
                        </VStack>
                        <HStack gap={1} alignItems={'baseline'}>
                            <Text
                                type={'small-body'}
                                children={<FormattedMessage id={'label.question.register'} />}
                            ></Text>
                            <Link to={'/login'} className={'link'}>
                                <FormattedMessage id={'Login'} />
                            </Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;
