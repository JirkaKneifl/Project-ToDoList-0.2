import { Link, useNavigate, useParams } from 'react-router-dom';
import './NavBarProgress.css';
import HStack from '../../basicComponents/HStack';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { getDecodedToken } from '../../../utils/getDecodedToken';
import ProgresBar from '../../basicComponents/progres-bar';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

function NavBarProgres() {
    const navigate = useNavigate();
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const [completed, setCompleted] = useState(0);
    const { idList } = useParams();

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
            }).then((res) => res.json()),
        {
            onSuccess: (list) => {
                console.log('pocet listu:', list.todos.length);
                const numberOfAllTodos = list.todos.length;
            },
        },
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        navigate('/');
        window.location.reload();
    };
    return (
        <>
            <div className={'aboutNavBar'}>
                <HStack alignItems={'baseline'} gap={150}>
                    <h2>
                        <Link to={`/main/${user.id}`} className={'toDoLogo'}>
                            ToDo App
                        </Link>
                    </h2>
                    <HStack gap={4} alignItems={'baseline'}>
                        <ProgresBar completed={completed}></ProgresBar>
                        <Link to={`/profile/${user.id}`} className={'navLink'}>
                            <Text type={'body'}>{user.username}</Text>
                        </Link>
                        <Link className={'navLink'} to={`/main/${user.id}/settings`}>
                            <FiSettings className={'navLinkIcon'}></FiSettings>
                        </Link>
                        <button className={'navLink'} onClick={handleLogOut}>
                            <FiLogOut className={'navLinkIcon'}></FiLogOut>
                        </button>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}

export default NavBarProgres;
