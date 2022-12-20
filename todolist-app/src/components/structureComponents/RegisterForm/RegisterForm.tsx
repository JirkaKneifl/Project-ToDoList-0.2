import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";
import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import "./RegisterForm.css"
import {useMutation, useQuery} from "react-query";
import {FormEvent, useState} from "react";

function RegisterForm(){
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /*useQuery('register', () =>
        fetch('http://localhost:3000/register').then((res) => res.json()), {
            onSuccess: (data: any) => {
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setPassword(data.password);
                setConfirmPassword(data.confirm_password);
            }
        }
    );*/

    const createUserMutation = useMutation('createUser', () =>
        fetch('http://localhost:3000/register/', {
                method: 'POST',
                headers: {
                    contentType: 'application/json',
                },
                body: JSON.stringify({first_name, last_name, email, password, confirmPassword})
            }
        ));

    const handleRegisterSubmit = (e: FormEvent) => {
        e.preventDefault();
        createUserMutation.mutate();
    }
    return (
        <>
            <div className={"registerForm"}>
                <form onSubmit={handleRegisterSubmit}>
                    <VStack gap={1}>
                        <Text type={"title"} children={"Login"}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}>First name: </Text>
                            <input
                                type={"text"}
                                name={first_name}
                                value={first_name}
                            />
                            <Text type={"body"}>Last name: </Text>
                            <input
                                type={"text"}
                                name={last_name}
                                value={last_name}
                            />
                            <Text type={"body"}>Email: </Text>
                            <input
                                type={"email"}
                                name={email}
                                value={email}
                            />
                            <Text type={"body"}>Password: </Text>
                            <input
                                type={"password"}
                                name={password}
                                value={password}
                            />
                            <Text type={"body"}>Confirm password: </Text>
                            <input
                                type={"password"}
                                name={confirmPassword}
                                value={confirmPassword}
                            />
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <Button onClick={handleRegisterSubmit} label={"Register"}></Button>
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