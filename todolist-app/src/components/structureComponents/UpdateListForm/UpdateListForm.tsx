import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import { useParams} from "react-router-dom";
import * as React from "react";
import {FormEvent, useState} from "react";
import {useMutation, useQuery} from "react-query";
import "./UpdateListForm.css"
import { useNavigate } from 'react-router-dom';
import {FormattedMessage} from "react-intl";

function UpdateListForm(){
    const navigate = useNavigate();
    const { idList } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {
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
            navigate(`/main/${idList}`);
        }).catch()
    )

    const handleUpdateSubmit = (e: FormEvent) => {
        updateListMutation.mutate();
        e.preventDefault();
    }

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return(
        <>
            <form onSubmit={handleUpdateSubmit}>
                <Text type={"title"} children={<FormattedMessage id={"title.updateListForm.updateList"}/> }/>
                <VStack gap={1}>
                    <Text type={"body"} children={<FormattedMessage id={"label.title"}/>}></Text>
                    <input
                        className={"titleInput"}
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Text type={"body"} children={<FormattedMessage id={"label.description"}/>}></Text>
                    <textarea
                        className={"descriptionTextarea"}
                        name={description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        cols={20}
                    ></textarea>

                    <button className={"updateButton"} type={"submit"} children={<FormattedMessage id={"label.update"}/>}></button>
                </VStack>
            </form>
        </>
    )
}

export default UpdateListForm;