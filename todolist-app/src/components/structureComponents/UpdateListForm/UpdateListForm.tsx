import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import {FormEvent, useState} from "react";
import {useMutation, useQuery} from "react-query";
import "./UpdateListForm.css"

function UpdateListForm(){
    const { idList } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery(
        ['list', idList],
        () => fetch(`http://localhost:3001/main/${idList}/listUpdate`).then((res) => res.json()),
        {
            onSuccess: (data: any) => {
                setTitle(data.title);
                setDescription(data.description);
            },
        },
    );
    const updateListMutation = useMutation('updateList', () =>
        fetch(`http://localhost:3001/main/${idList}/listUpdate`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, description })
        }).then(() => {
            console.log("updateListMutation");
        }).catch()
    )

    const handleUpdateSubmit = (e: FormEvent) => {
        e.preventDefault();
        updateListMutation.mutate();
    }

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return(
        <>
            <form onSubmit={handleUpdateSubmit}>
                <Text type={"title"} children={"Update this list"}/>
                <VStack gap={1}>
                    <Text type={"body"} children={"Title"}></Text>
                    <input
                        className={"titleInput"}
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Text type={"body"} children={"Description"}></Text>
                    <textarea
                        className={"descriptionTextarea"}
                        name={description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        cols={20}
                    ></textarea>

                    <button className={"updateButton"} type={"submit"} children={"Update"}></button>
                </VStack>
            </form>
        </>
    )
}

export default UpdateListForm;