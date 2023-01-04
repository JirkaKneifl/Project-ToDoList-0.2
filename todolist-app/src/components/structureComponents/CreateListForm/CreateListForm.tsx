import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import {FormEvent, useState} from "react";
import {useMutation, useQuery} from "react-query";


function CreateListForm(){
    const { idList } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    const createListMutation = useMutation('createList', () =>
        fetch(`http://localhost:3001/main/createList`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, description})
        }).then(() => {
            console.log("createListMutation");
        }).catch()
    )

    const handleCreateSubmit = (e: FormEvent) => {
        e.preventDefault();
        createListMutation.mutate();
    }


    return(
        <>
            <form onSubmit={handleCreateSubmit}>
                <VStack gap={1}>
                    <Text type={"title"} children={"Add new list"}/>
                    <Text type={"body"} children={"Title"}></Text>
                    <input
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Text type={"body"} children={"Description"}></Text>
                    <textarea
                        name={description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        cols={20}
                    ></textarea>



                    <button type={"submit"} children={"Add List"}></button>
                </VStack>
            </form>
        </>
    )
}

export default CreateListForm;