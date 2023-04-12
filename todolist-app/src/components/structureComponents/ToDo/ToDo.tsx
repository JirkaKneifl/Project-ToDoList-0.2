import HStack from '../../basicComponents/HStack';
import './ToDo.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { useMutation } from 'react-query';

type toDoProps = {
    toDoLabel: string;
    idTodo: any;
    userId: number;
};

function ToDo(props: toDoProps) {
    const { idList, idTodo } = useParams();
    const navigate = useNavigate();

    const handleOnChange = (e: any) => {
        if (e.target.checked) {
            useMutation(['checked', idList], () =>
                fetch(`http://localhost:3001/main/${props.userId}/${idList}/checked/${idTodo}`, {
                    method: 'PUT',
                    headers: {},
                }),
            );
        } else {
            localStorage.setItem(
                'checked',
                (Number(localStorage.getItem('checked')) - 1).toString(),
            );
        }
        console.log(localStorage.getItem('checked'));
    };

    return (
        <>
            <div className={'todoBody'}>
                <HStack gap={8} justifyContent={'space-between'} alignItems={'center'}>
                    <HStack gap={4} justifyContent={'center'} alignItems={'center'}>
                        <input type="checkbox" onChange={handleOnChange} />
                        <Text type={'body'}>{props.toDoLabel}</Text>
                    </HStack>
                    <HStack gap={4}>
                        {/*<Button label={"Archvate"}></Button> -> archvovabni na posledy*/}
                        <button className={'onlyIconButton'}>
                            <Link to={`/main/${props.userId}/${idList}/updateTodo/${props.idTodo}`}>
                                <FiEdit size={28} className={'editTodoIcon'} />
                            </Link>
                        </button>
                        <button
                            className={'onlyIconButton'}
                            onClick={(e) => {
                                fetch(
                                    `http://localhost:3001/main/${props.userId}/${idList}/deleteTodo/${props.idTodo}`,
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
                                        navigate(0);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
                            }}
                        >
                            <Link to={''}>
                                <FiTrash size={28} className={'deleteTodoIcon'} />
                            </Link>
                        </button>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}

export default ToDo;
