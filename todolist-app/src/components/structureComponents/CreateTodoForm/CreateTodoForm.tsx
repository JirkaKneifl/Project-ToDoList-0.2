import {useState} from "react";
import {useMutation} from "react-query";
import {redirect, useParams} from "react-router-dom";
import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import * as React from "react";


function CreateTodoForm(){
    const { idList } = useParams();
    const [title, setTitle] = useState('');

    const createTodoMutation = useMutation('createTodo', () =>
        fetch(`http://localhost:3001/main/${idList}/createTodo`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title })
        }).then(() => {
            console.log("createListMutation");
        }).catch()
    )

    const handleCreateSubmit = () => {
        createTodoMutation.mutate();
        return redirect("http://localhost:3000/main/:idList");
    }

    return (
        <>
            <form onSubmit={handleCreateSubmit}>
                <VStack gap={1}>
                    <Text type={"title"} children={"Add new Todo"}/>
                    <Text type={"body"} children={"Title"}></Text>
                    <input
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type={"submit"} children={"Add List"}></button>
                </VStack>
            </form>
        </>
    )
}

export default CreateTodoForm;