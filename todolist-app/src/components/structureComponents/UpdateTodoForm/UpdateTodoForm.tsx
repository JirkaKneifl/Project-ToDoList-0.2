import Text from '../../basicComponents/Text/Text';
import VStack from '../../basicComponents/VStack';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import './UpdateTodoForm.css';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function UpdateTodoForm() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const navigate = useNavigate();
    const { idList, idTodo } = useParams();
    const [title, setTitle] = useState('');

    const { isLoading, isError, error } = useQuery<unknown, Error>(
        ['todo', idList, idTodo],
        () =>
            fetch(`http://localhost:3001/main/${user.id}/${idList}/updateTodo/${idTodo}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }).then((res) => res.json()),
        {
            onSuccess: (data: any) => {
                setTitle(data.title);
            },
        },
    );

    const updateTodoMutation = useMutation('updateTodo', () =>
        fetch(`http://localhost:3001/main/${user.id}/${idList}/updateTodo/${idTodo}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({ title }),
        })
            .then(() => {
                console.log('updateTodoMutation');
                navigate(`/main/${user.id}/${idList}`);
            })
            .catch(),
    );

    const handleUpdateSubmit = (e: FormEvent) => {
        updateTodoMutation.mutate();
        e.preventDefault();
    };

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error?.message}</p>;

    return (
        <>
            <form onSubmit={handleUpdateSubmit}>
                <Text
                    type={'title'}
                    children={<FormattedMessage id={'title.updateTodoForm.updateTodo'} />}
                />
                <VStack gap={1}>
                    <Text type={'body'} children={<FormattedMessage id={'label.title'} />}></Text>
                    <input
                        className={'titleInput'}
                        type={'text'}
                        name={title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button
                        className={'updateButton'}
                        type={'submit'}
                        children={<FormattedMessage id={'label.update'} />}
                    ></button>
                </VStack>
            </form>
        </>
    );
}

export default UpdateTodoForm;
