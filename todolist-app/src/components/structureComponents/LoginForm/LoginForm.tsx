import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import VStack from "../../basicComponents/VStack";
import "./LoginForm.css"
import {FormattedMessage} from "react-intl";


function LoginForm(){

    const handleSubmit =()=>{

    }

    return (
        <>
            <div className={"loginForm"}>
                <form onSubmit={handleSubmit}>
                    <VStack gap={1}>
                        <Text type={"title"} children={<FormattedMessage id={"Login"}/>}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}><FormattedMessage id={"label.email"}/></Text>
                            <input
                                type={"email"}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                            <Text type={"body"}><FormattedMessage id={"label.password"}/></Text>
                            <input
                                type={"password"}
                                pattern="^[a-zA-Z\d!@#$%^&*]{6,30}$"
                                required
                            />
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <button type={"submit"}><FormattedMessage id={"Login"}/></button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={<FormattedMessage id={"label.question.login"}/>}></Text><Link to={"/register"} className={"link"}><FormattedMessage id={"Register"}/></Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default LoginForm;