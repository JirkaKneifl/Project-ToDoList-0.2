import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import * as React from "react";
import {FormEvent, useState} from "react";
import {useMutation} from "react-query";
import './CreateList.css';
import { useNavigate } from 'react-router-dom';
import {FormattedMessage} from "react-intl";



function CreateListForm(){
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    const createListMutation = useMutation('createList', () =>
        fetch(`http://localhost:3001/main/createList`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, description})
        }).then(() => {
            console.log("createListMutation");
            navigate('/main');
        }).catch()
    )

    const handleCreateSubmit = async (e: FormEvent) => {
        createListMutation.mutate();
        e.preventDefault();
    }

    return(
        <>
            <form onSubmit={handleCreateSubmit}>
                <VStack gap={1}>
                    <Text type={"title"} children={<FormattedMessage id={"title.createListForm.addList"}/> }/>
                    <Text type={"body"} children={<FormattedMessage id={"label.title"}/>}></Text>
                    <input
                        className={"titleInput"}
                        type={"text"}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Text type={"body"} children={<FormattedMessage id={"label.description"}/> }></Text>
                    <textarea
                        className={"descriptionTextarea"}
                        name={description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        cols={20}
                    />
                    <button type={"submit"} children={<FormattedMessage id={"label.addList"}/> } className={"createButton"}></button>
                </VStack>
            </form>
        </>
    )
}

export default CreateListForm;