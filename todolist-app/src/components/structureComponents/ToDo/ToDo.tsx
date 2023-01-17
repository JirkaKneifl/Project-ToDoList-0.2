import Button from "../../basicComponents/Button/Button";
import HStack from "../../basicComponents/HStack";
import "./ToDo.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import { FiTrash, FiEdit } from 'react-icons/fi';
import VStack from "../../basicComponents/VStack";

type toDoProps ={
    toDoLabel: string
    idTodo: any;
}

function ToDo(props: toDoProps) {
    const { idList } = useParams();
    const navigate = useNavigate();

    return (
        <>
        <div className={"todoBody"}>
            <HStack gap={8} justifyContent={"space-between"} alignItems={"center"}>
                <HStack gap={4} justifyContent={"center"} alignItems={"center"}>
                    <input type="checkbox"/>
                    <label>{props.toDoLabel}</label>
                </HStack>
                <HStack gap={4}>
                    {/*<Button label={"Archvate"}></Button> -> archvovabni na posledy*/}
                    <button className={"onlyIconButton"}><Link to={`/main/${idList}/updateTodo/${props.idTodo}`}><FiEdit size={20} className={"editTodoIcon"}/></Link></button>
                    <button className={"onlyIconButton"} onClick={(e) => {
                        fetch(`http://localhost:3001/main/${idList}/deleteTodo/${props.idTodo}`, { method: "DELETE" })
                            .then((response) => {
                                if(!response.ok){
                                    throw new Error('Something went wrong');
                                }
                                navigate(0);
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    }}>
                        <Link to={''}>
                            <FiTrash size={20} className={"deleteTodoIcon"}/>
                        </Link>
                    </button>
                </HStack>
            </HStack>
        </div>
        </>
    )
}

export default ToDo;