import "./Main.css"
import Layout from "../../components/structureComponents/Layout/Layout";
import {FiArrowLeft} from "react-icons/fi";
import Text from "../../components/basicComponents/Text/Text";
import HStack from "../../components/basicComponents/HStack";
import VStack from "../../components/basicComponents/VStack";
import {FormattedMessage} from "react-intl";


function Main(){
    return (
        <>
            <Layout>
                <HStack gap={16} justifyContent={"left"} alignItems={"first baseline"}>
                    <FiArrowLeft size={32}></FiArrowLeft>
                    <VStack gap={0} alignItems={"start"}>
                        <Text  type={"title"} children={<FormattedMessage id={"title.main"}/>}></Text>
                        <Text type={"small-body"} children={<FormattedMessage id={"small-body.main"}/>}></Text>
                    </VStack>
                </HStack>
            </Layout>
        </>
    );
}

export default Main;