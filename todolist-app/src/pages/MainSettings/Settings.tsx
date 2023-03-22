import SwitchLanguageButton from "../../components/contexts/language/SwitchLanguageButton";
import SwitchThemeButton from "../../components/contexts/theme/SwitchThemeButton";
import VStack from "../../components/basicComponents/VStack";
import HStack from "../../components/basicComponents/HStack";
import Layout from "../../components/structureComponents/Layout/Layout";
import Text from "../../components/basicComponents/Text/Text";
import {FormattedMessage} from "react-intl";

function Settings() {

    return (
        <>
            <Layout>
            <VStack gap={4}>
                <Text type={"title"} children={<FormattedMessage id={"title.settings"}/>}></Text>
                <SwitchLanguageButton></SwitchLanguageButton>
                <Text type={"small-body"} children={<FormattedMessage id={"small-body.settings"}/> }></Text>
                <HStack gap={4}>
                    <Text type={"body"} children={<FormattedMessage id={"body.color.settings"}/>}></Text>
                    <SwitchThemeButton></SwitchThemeButton>
                </HStack>
            </VStack>
            </Layout>
        </>
    )
};

export default Settings;