import RegisterForm from "../../components/structureComponents/RegisterForm/RegisterForm";
import "./Register.css"
import Text from "../../components/basicComponents/Text/Text";
import VStack from "../../components/basicComponents/VStack";
import * as React from "react";

function Register() {


    return(
        <>
            <div className={"backgroundOfPage"}>
                <VStack gap={1} alignItems={"center"}>
                    <div className={"toDoLogo"}>
                        <Text type={"title"} children={"ToDo App"}/>
                    </div>
                    <RegisterForm></RegisterForm>
                </VStack>
            </div>
        </>
    )
}

export default Register;