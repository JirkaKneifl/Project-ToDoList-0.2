import * as React from "react";
import { Link } from "react-router-dom";
import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import "./RegisterForm.css"
import {useMutation} from "react-query";
import {FormEvent, useState} from "react";

function RegisterForm(){

    const [first_name, setFirstName] = useState('a');
    const [last_name, setLastName] = useState('a');
    const [email, setEmail] = useState('a@a');
    const [phone, setPhone] = useState('123456789');
    const [password, setPassword] = useState('a');
    const [confirmPassword, setConfirmPassword] = useState('a');

    const createUserMutation = useMutation('createUser', () =>
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({first_name, last_name, email, phone, password, confirmPassword})
        }).then(() => {
            console.log("createmutation probehl az sem")
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
                                required
                            />
                            <p>{first_name}</p>
                            <Text type={"body"}>Last name: </Text>
                            <input
                                type={"text"}
                                name={last_name}
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <Text type={"body"}>Email: </Text>
                            <input
                                type={"email"}
                                name={email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Text type={"body"}>Phone: </Text>
                            <input
                                type={"tel"}
                                name={phone}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Text type={"body"}>Password: </Text>
                            <input
                                type={"password"}
                                name={password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Text type={"body"}>Confirm password: </Text>
                            <input
                                type={"password"}
                                name={confirmPassword}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <button type={"submit"}>Register</button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={"Are you already registered?"}></Text><Link to={"/login"}>Login</Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;