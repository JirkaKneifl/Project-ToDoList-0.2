import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import HStack from "../../basicComponents/HStack";
import ListOfToDoLists from "../ListOfToDoLists/ListOfToDoLists";
import VStack from "../../basicComponents/VStack";


function Layout(props: { children: ReactNode }) {
    return (
        <>
            <VStack gap={4}>
                <NavBar></NavBar>
                <div className={"mainContent"}>
                    <HStack alignItems={"flex-start"} gap={32}>
                        <ListOfToDoLists></ListOfToDoLists>
                        {props.children}
                    </HStack>
                </div>
            </VStack>
        </>
    )
}

export default Layout;