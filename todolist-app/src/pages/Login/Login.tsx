import * as React from "react";
import LoginForm from "../../components/structureComponents/LoginForm/LoginForm";
import Text from "../../components/basicComponents/Text/Text";
import VStack from "../../components/basicComponents/VStack";
import "./Login.css"
import SwitchLanguageButton from "../../components/contexts/language/SwitchLanguageButton";

function Login() {
    return(
        <>
            <div className={"backgroundOfPage"}>
                <SwitchLanguageButton></SwitchLanguageButton>
                <VStack gap={1} alignItems={"center"}>
                    <div className={"toDoLogo"}>
                        <Text type={"title"} children={"ToDo App"}/>
                    </div>
                    <LoginForm></LoginForm>
                </VStack>
            </div>
        </>
    )
}

export default Login;