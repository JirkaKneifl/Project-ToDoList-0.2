import AboutNavBar from "../../components/structureComponents/AboutNavBar/AboutNavBar";
import VStack from "../../components/basicComponents/VStack";
import Text from "../../components/basicComponents/Text/Text";
import "./About.css"
import HStack from "../../components/basicComponents/HStack";


function About () {
    return (
        <>
            <section id={"about"}>
                <AboutNavBar></AboutNavBar>
                <VStack alignItems={"center"} gap={1}>
                    <Text type={"title"}>
                        Welcome to ToDo App, a straightforward and easy-to-use to-do list app.
                    </Text>
                    <HStack gap={90}>
                        <div></div>
                        <VStack gap={1}>
                            <VStack gap={1}>
                                <Text type={"body"} children={"Our app is designed to help you keep track of your tasks and to-dos in a simple and organized way. With ToDo App, you can easily create, edit, and delete your to-do lists, and manage the individual tasks within them."}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"body"} children={"We understand the importance of staying on top of your to-do list, and that's why we've created an app that is minimalistic yet powerful. Our clean interface makes it easy to navigate, and our basic yet essential tools help you stay organized and on top of your tasks."}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"body"} children={"Whether you're a busy professional, a student, or just looking to stay organized, ToDo App is the perfect solution. With our app, you'll be able to create and manage your to-do lists and tasks in a simple and straightforward way. Plus, you'll be able to easily delete tasks and lists once they are completed."}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"body"} children={"We are constantly working to improve our app and provide the best user experience. Our team is dedicated to providing you with the tools you need to stay organized, productive, and on top of your to-do list."}/>
                            </VStack>
                            <VStack gap={1}>
                                <Text type={"body"} children={"Thank you for choosing ToDo App, and we hope you enjoy using our app as much as we enjoyed creating it."}/>
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