import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import VStack from "../../basicComponents/VStack";
import "./LoginForm.css"


function LoginForm(){

    const handleSubmit =()=>{

    }

    return (
        <>
            <div className={"loginForm"}>
                <form onSubmit={handleSubmit}>
                    <VStack gap={1}>
                        <Text type={"title"} children={"Login"}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}>Email: </Text>
                            <input
                                type={"email"}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                            <Text type={"body"}>Password: </Text>
                            <input
                                type={"password"}
                                pattern="^[a-zA-Z\d!@#$%^&*]{6,30}$"
                                required
                            />
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <button type={"submit"}>Login</button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={"Don't have an account yet?"}></Text><Link to={"/register"} className={"link"}>Register</Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default LoginForm;