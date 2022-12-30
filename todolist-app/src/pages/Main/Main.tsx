//toto je halvni strana
// - task/todos adder
// - list tasku
// - zobrazeni uzivatele -> pripadne button na detail pro uzivatele

import ToDoAdder from "../../components/structureComponents/ToDoAdder/ToDoAdder";
import ListToDos from "../../components/structureComponents/ListToDos/ListToDos";
import NavBar from "../../components/structureComponents/NavBar/NavBar";
import VStack from "../../components/basicComponents/VStack";
import ListOfToDoLists from "../../components/structureComponents/ListOfToDoLists/ListOfToDoLists";
import HStack from "../../components/basicComponents/HStack";
import "./Main.css"
import {useQuery} from "react-query";
import DescriptionBodyOfTodoLists
    from "../../components/structureComponents/DescriptionBodyOfTodoLists/DescriptionBodyOfTodoLists";

function Main(){



    return (
        <>
            <VStack gap={4}>
                <NavBar></NavBar>
                <div className={"mainContent"}>
                    <HStack alignItems={"flex-start"} gap={32}>
                        <ListOfToDoLists></ListOfToDoLists>
                        <VStack alignItems={"flex-start"} justifyContent={"center"} gap={1}>
                            <DescriptionBodyOfTodoLists></DescriptionBodyOfTodoLists>
                        </VStack>
                    </HStack>
                </div>
            </VStack>
        </>
    );
}

export default Main;