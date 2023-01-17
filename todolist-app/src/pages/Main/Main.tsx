import "./Main.css"
import Layout from "../../components/structureComponents/Layout/Layout";
import {FiArrowLeft} from "react-icons/fi";
import Text from "../../components/basicComponents/Text/Text";
import HStack from "../../components/basicComponents/HStack";
import VStack from "../../components/basicComponents/VStack";


function Main(){
    return (
        <>
            <Layout>
                <HStack gap={16} justifyContent={"left"} alignItems={"first baseline"}>
                    <FiArrowLeft size={32}></FiArrowLeft>
                    <VStack gap={0} alignItems={"start"}>
                        <Text  type={"title"} children={"Welcome to your personal task manager!"}></Text>
                        <Text type={"small-body"} children={"Here you can easily add, edit, and delete your to-do lists and tasks. With this user-friendly interface, you can stay organized and on top of your daily tasks."}></Text>
                    </VStack>
                </HStack>
            </Layout>
        </>
    );
}

export default Main;