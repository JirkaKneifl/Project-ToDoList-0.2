import { Link, useNavigate, useParams } from 'react-router-dom';
import './NavBarProgress.css';
import HStack from '../../basicComponents/HStack';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { getDecodedToken } from '../../../utils/getDecodedToken';
import ProgresBar from '../../basicComponents/progres-bar';
import { useEffect, useState } from 'react';

function NavBarProgres() {
    const navigate = useNavigate();
    const user = getDecodedToken(localStorage.getItem('access_token') as string);

    const { idList, userId } = useParams();
    const [completedTodos, setCompletedTodos] = useState('');
    const [totalTodos, setTotalTodos] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/main/${userId}/${idList}/countCompletedTodos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((res) => {
            res.json().then((data) => {
                setCompletedTodos(data);
            });
        });

        fetch(`http://localhost:3001/main/${userId}/${idList}/countTodos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((res) => {
            res.json().then((data) => {
                setTotalTodos(data);
            });
        });
    }, []);
    console.log('completed: ', completedTodos.length);
    console.log('total: ', totalTodos.length);

    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <div className={'aboutNavBar'}>
                <HStack alignItems={'baseline'} gap={200}>
                    <h2>
                        <Link to={`/main/${user.id}`} className={'toDoLogo'}>
                            ToDo App
                        </Link>
                    </h2>
                    <HStack gap={4} alignItems={'baseline'}>
                        <h4 className={'todoDone'}>
                            <Text type={'meta'}>
                                {completedTodos.length} OF {totalTodos.length} TODOS DONE
                            </Text>
                        </h4>
                        <ProgresBar
                            completed={completedTodos.length}
                            total={totalTodos.length}
                        ></ProgresBar>
                        <Link to={`/profile/${user.id}`} className={'navLink'}>
                            <Text type={'body'}>{user.username}</Text>
                        </Link>
                        <Link className={'navLink'} to={`/main/${user.id}/settings`}>
                            <FiSettings className={'navLinkIcon'}></FiSettings>
                        </Link>
                        <button className={'logOut'} onClick={handleLogOut}>
                            <FiLogOut className={'navLinkIcon'}></FiLogOut>
                        </button>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}

export default NavBarProgres;
