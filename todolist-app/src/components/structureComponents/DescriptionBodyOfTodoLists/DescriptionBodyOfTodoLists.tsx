import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {useState} from "react";
import VStack from "../../basicComponents/VStack";
import ToDo from "../ToDo/ToDo";
import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
import "./DescriptionBodyOfTodoLists.css";

function DescriptionBodyOfTodoLists(){

    const { idList } = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const {
        data: list,
        isLoading,
        isError,
        error
    } = useQuery(
        ['descriptionOfList', idList],
        () => fetch(`http://localhost:3001/main/${idList}`).then((res) => res.json()),
        {
            onSuccess: (list) => {
                setTitle(list.title);
                setDescription(list.description);
            }
        }
    );
    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return(
        <>
                <VStack gap={1}>
                    <div className={"listDescription"}>
                        <HStack gap={20} alignItems={"center"}>
                            <Text type={"title"} children={title}></Text>
                            <HStack gap={8}>
                                <Link to={`/main/${idList}/listUpdate`}><FiEdit size={32} className={"listUpdateEditIcon"}/></Link>
                                {
                                    !list.todos.length ? <Link to={`/main/${idList}/listDelete`}><FiTrash size={32} className={"listDeleteIcon"}/></Link> : null
                                }

                            </HStack>
                        </HStack>
                        <Text type={"body"} children={description}></Text>
                    </div>
                        <HStack gap={4} justifyContent={"center"}>
                            <Link to={`/main/${idList}/createTodo`}>
                                <FiPlusCircle size={32} className={"todoAddIcon"}/>
                            </Link>
                        </HStack>
                    {
                          list.todos.length ?
                              list.todos.map((todo: any) => {
                                return (<ToDo key={todo.id_todo} toDoLabel={todo.title} idTodo={todo.id_todo}></ToDo>);
                              })
                              : <Text type={"body"}>Nema zadne Todos</Text>
                    }
                </VStack>
        </>
    )
}

export default DescriptionBodyOfTodoLists;