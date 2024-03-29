import Text from '../../basicComponents/Text/Text';
import HStack from '../../basicComponents/HStack';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import VStack from '../../basicComponents/VStack';
import ToDo from '../ToDo/ToDo';
import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
import './DescriptionBodyOfTodoLists.css';
import { FormattedMessage } from 'react-intl';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function DescriptionBodyOfTodoLists() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const navigate = useNavigate();
    const { idList } = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const {
        data: list,
        isLoading,
        isError,
        error,
    } = useQuery(
        ['descriptionOfList', idList],
        () =>
            fetch(`http://localhost:3001/main/${user.id}/${idList}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }).then((res) => {
                return res.json();
            }),
        {
            onSuccess: (list) => {
                setTitle(list.title);
                setDescription(list.description);
            },
        },
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return (
        <>
            <VStack gap={1}>
                <div className={'listDescription'}>
                    <HStack gap={38} alignItems={'center'}>
                        <Text type={'title'} children={title}></Text>
                        <HStack gap={8}>
                            <button className={'onlyIconButton'}>
                                <Link to={`/main/${user.id}/${idList}/listUpdate`}>
                                    <FiEdit size={32} className={'listUpdateEditIcon'} />
                                </Link>
                            </button>
                            {!list.todos.length ? (
                                <button
                                    className={'onlyIconButton'}
                                    onClick={(e) => {
                                        fetch(
                                            `http://localhost:3001/main/${user.id}/${idList}/deleteList`,
                                            {
                                                method: 'DELETE',
                                                headers: {
                                                    Authorization: `Bearer ${localStorage.getItem(
                                                        'access_token',
                                                    )}`,
                                                },
                                            },
                                        )
                                            .then((response) => {
                                                if (!response.ok) {
                                                    throw new Error('Something went wrong');
                                                }
                                                navigate(`/main/${user.id}`);
                                            })
                                            .catch((e) => {
                                                console.log(e);
                                            });
                                    }}
                                >
                                    <Link to={''}>
                                        <FiTrash size={32} className={'listDeleteIcon'} />
                                    </Link>
                                </button>
                            ) : null}
                        </HStack>
                    </HStack>
                    <Text type={'body'} children={description}></Text>
                </div>
                <HStack gap={4} justifyContent={'center'}>
                    <Link to={`/main/${user.id}/${idList}/createTodo`}>
                        <FiPlusCircle size={32} className={'todoAddIcon'} />
                    </Link>
                </HStack>
                {list.todos.length ? (
                    list.todos.map((todo: any) => {
                        return (
                            <ToDo
                                key={todo.id_todo}
                                toDoLabel={todo.title}
                                idTodo={todo.id_todo}
                                userId={user.id}
                            ></ToDo>
                        );
                    })
                ) : (
                    <Text type={'small-body'}>
                        <FormattedMessage id={'small-body.descriptionBodyOfTodoLists'} />{' '}
                    </Text>
                )}
            </VStack>
        </>
    );
}

export default DescriptionBodyOfTodoLists;
