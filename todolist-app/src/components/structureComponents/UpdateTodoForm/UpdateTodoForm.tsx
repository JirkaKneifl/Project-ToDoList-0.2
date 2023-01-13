import Text from "../../basicComponents/Text/Text";
import VStack from "../../basicComponents/VStack";
import * as React from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import './UpdateTodoForm.css';

function UpdateTodoForm(){
    const { idList, idTodo } = useParams();
    const [title, setTitle] = useState('');

    const {
        isLoading,
        isError,
        error
    } = useQuery<unknown, Error>(
        ['todo', idList, idTodo ],
        () => fetch(`http://localhost:3001/main/${idList}/updateTodo/${idTodo}`).then((res) => res.json()),
        {
            onSuccess: (data: any) => {
                setTitle(data.title);
            },
        },
    );

    const updateTodoMutation = useMutation('updateTodo', () =>
        fetch(`http://localhost:3001/main/${idList}/updateTodo/${idTodo}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title })
        }).then(()=>{
            console.log("updateTodoMutation");
        }).catch()
    )

    const handleUpdateSubmit = () => {
        updateTodoMutation.mutate();
    }

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error?.message}</p>;

    return (
        <>
            <form onSubmit={handleUpdateSubmit}>
                <Text type={"title"} children={"Update this Todo"}/>
                <VStack gap={1}>
                    <Text type={"body"} children={"Title"}></Text>
                    <input
                        className={"titleInput"}
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button className={"updateButton"} type={"submit"} children={"Update"}></button>
                </VStack>
            </form>
        </>
    )
}

export default UpdateTodoForm;