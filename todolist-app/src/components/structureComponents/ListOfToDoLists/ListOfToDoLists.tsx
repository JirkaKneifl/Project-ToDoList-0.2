import VStack from "../../basicComponents/VStack";
import "./ListOfToDoLists.css";
import {Link} from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import HrSeparator from "../../basicComponents/HrSeparator/HrSeparator";
import {useQuery} from "react-query";

function ListOfLists(){

    const {
        data: todos,
        isLoading,
        isError,
        error
    } = useQuery('listTodos',() =>
        fetch('http://localhost:3000/main').then((res) => res.json())
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return (
        <>
            <div className={"listOfToDoListsPanel"}>
                <VStack alignItems={"stretch"} justifyContent={"flex-start"} gap={1}>
                    {todos?.map((todo: any) =>(
                    <h3 className={"sidebarItem"}>{todo.title}</h3>
                    ))}
                    <HrSeparator width={"80%"}></HrSeparator>
                    <Link to={""} className={"addButton"}><IoIosAddCircleOutline className={"addButtonIcon"}></IoIosAddCircleOutline>Add</Link>
                </VStack>
            </div>
        </>
    )
}

export default ListOfLists;
