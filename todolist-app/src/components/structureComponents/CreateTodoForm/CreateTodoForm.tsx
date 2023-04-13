import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import VStack from '../../basicComponents/VStack';
import Text from '../../basicComponents/Text/Text';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function CreateTodoForm() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const navigate = useNavigate();
    const { idList } = useParams();
    const [title, setTitle] = useState('');

    const createTodoMutation = useMutation('createTodo', () =>
        fetch(`http://localhost:3001/main/${user.id}/${idList}/createTodo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({ title }),
        })
            .then(() => {
                navigate(`/main/${user.id}/${idList}`);
            })
            .catch(),
    );

    const handleCreateSubmit = (e: FormEvent) => {
        createTodoMutation.mutate();
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleCreateSubmit}>
                <VStack gap={1}>
                    <Text
                        type={'title'}
                        children={<FormattedMessage id={'title.createTodoForm.addTodo'} />}
                    />
                    <Text type={'body'} children={<FormattedMessage id={'label.title'} />}></Text>
                    <input
                        className={'titleInput'}
                        type={'text'}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        type={'submit'}
                        children={<FormattedMessage id={'label.addTodo'} />}
                        className={'createButton'}
                    ></button>
                </VStack>
            </form>
        </>
    );
}
export default CreateTodoForm;
