import * as React from "react";
import {Link, redirect} from "react-router-dom";
import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import "./RegisterForm.css"
import {useMutation} from "react-query";
import {FormEvent, useState} from "react";
import { useNavigate } from 'react-router-dom';

function RegisterForm(){
    const navigate = useNavigate();
    const [first_name, setFirstName] = useState('sagdag');
    const [last_name, setLastName] = useState('gdsag');
    const [email, setEmail] = useState('sdgas@sffas.cd');
    const [phone, setPhone] = useState('123 456 789');
    const [password, setPassword] = useState('');

    const createUserMutation = useMutation('createUser', () =>
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({first_name, last_name, email, phone, password})
        }).then(() => {
            console.log("createmutation probehl az sem")
            navigate('/main');
        }),
    );

    const handleRegisterSubmit = (e: FormEvent) => {
        e.preventDefault();
        createUserMutation.mutate();
    }
    return (
        <>
            <div className={"registerForm"}>
                <form onSubmit={handleRegisterSubmit}>
                    <VStack gap={1}>
                        <Text type={"title"} children={"Register"}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}>First name:</Text>
                            <input
                                type={"text"}
                                name={first_name}
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                                pattern="[a-zA-Z]+"
                                required
                            />
                            <Text type={"body"}>Last name: </Text>
                            <input
                                type={"text"}
                                name={last_name}
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                pattern="[a-zA-Z]+"
                                required
                            />
                            <Text type={"body"}>Email: </Text>
                            <input
                                type={"email"}
                                name={email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                            <Text type={"body"}>Phone: </Text>
                            <input
                                type={"tel"}
                                name={phone}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                pattern="^\d{9}$|^\d{3}[- ]?\d{3}[- ]?\d{3}$"
                                required
                            />
                            <Text type={"body"}>Password: </Text>
                            <input
                                type={"password"}
                                name={password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                pattern="^[a-zA-Z\d!@#$%^&*]{6,30}$"
                                required
                            />
                            <Text type={"small-body"} children={"Test password: P@ssw0rd#5"}></Text>
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <button type={"submit"}>Register</button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={"Are you already registered?"}></Text><Link to={"/login"} className={"link"}>Login</Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;