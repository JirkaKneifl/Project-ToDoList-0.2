import Button from "../../basicComponents/Button/Button";
import HStack from "../../basicComponents/HStack";
import "./ToDo.css";
import {Link} from "react-router-dom";
import { FiTrash, FiEdit } from 'react-icons/fi';

type toDoProps ={
    toDoLabel: string
}

function ToDo(props: toDoProps) {
    return (
        <>
        <div className={"todoBody"}>
            <HStack gap={8} justifyContent={"space-between"} alignItems={"center"}>
                <HStack gap={2}>
                    <input type="checkbox"/>
                    <label>{props.toDoLabel}</label>
                </HStack>
                <HStack gap={4}>
                    {/*<Button label={"Archvate"}></Button> -> archvovabni na posledy*/}
                    <Link to={""}><FiEdit size={20} className={"editTodoIcon"}/></Link>
                    <Link to={""}><FiTrash size={20} className={"deleteTodoIcon"}/></Link>
                </HStack>
            </HStack>
        </div>
        </>
    )
}

export default ToDo;