import AboutNavBar from "../../components/structureComponents/AboutNavBar/AboutNavBar";
import VStack from "../../components/basicComponents/VStack";
import Text from "../../components/basicComponents/Text/Text";
import "./About.css"
import HStack from "../../components/basicComponents/HStack";
import {FormattedMessage} from "react-intl";
import SwitchThemeButton from "../../components/contexts/theme/SwitchThemeButton";


function About () {
    return (
        <>
            <section id={"about"}>
                <SwitchThemeButton></SwitchThemeButton>
                <AboutNavBar></AboutNavBar>
                <VStack gap={0}>
                    <VStack gap={0} alignItems={"center"}>
                        <Text type={"title"} children={<FormattedMessage id={"about.title"}/>}></Text>
                    </VStack>
                    <HStack gap={90}>
                        <div></div>
                        <VStack gap={0} alignItems={"center"}>
                            <Text type={"body"} children={<FormattedMessage id={"about.body"}/>}></Text>
                        </VStack>
                        <div></div>
                    </HStack>
                    <HStack gap={90}>
                        <div></div>
                        <VStack gap={1}>
                            <VStack gap={1}>
                                <Text type={"small-body"} children={<FormattedMessage id={"about.small-body1"}/>}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"small-body"} children={<FormattedMessage id={"about.small-body2"}/>}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"small-body"} children={<FormattedMessage id={"about.small-body3"}/>}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"small-body"} children={<FormattedMessage id={"about.small-body4"}/>}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"small-body"} children={<FormattedMessage id={"about.small-body5"}/>}/>
                            </VStack>
                        </VStack>
                        <div></div>
                    </HStack>
                </VStack>
            </section>
        </>
    )
}

export default About;