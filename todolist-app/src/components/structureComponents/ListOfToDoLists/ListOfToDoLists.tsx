import VStack from "../../basicComponents/VStack";
import "./ListOfToDoLists.css";
import {Link} from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import HrSeparator from "../../basicComponents/HrSeparator/HrSeparator";
import {useQuery} from "react-query";

function ListOfLists(){

    const {
        data: lists,
        isLoading,
        isError,
        error
    } = useQuery('listLists',() =>
        fetch('http://localhost:3001/main').then((res) => res.json())
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return (
        <>
            <div className={"listOfToDoListsPanel"}>
                <VStack alignItems={"stretch"} justifyContent={"flex-start"} gap={1}>
                    {lists?.map((list: any) => {
                        console.log("jsme v listoftodos", list)
                        const id_list: number = list.id_list;
                        return <Link
                            key={list.id_list}
                            to={`/main/${id_list}`}
                            className={"sidebarItem"}
                        >
                            {list.title}
                        </Link>
                    })}
                    <HrSeparator width={"80%"}></HrSeparator>
                    <Link to={"/main/createList"} className={"addButton"}><IoIosAddCircleOutline className={"addButtonIcon"}></IoIosAddCircleOutline>Add</Link>
                </VStack>
            </div>
        </>
    )
}

export default ListOfLists;
