import { Link } from 'react-router-dom';
import './NavBar.css';
import HStack from '../../basicComponents/HStack';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { getDecodedToken } from '../../../utils/getDecodedToken';
import ProgresBar from '../../basicComponents/progres-bar';
import { useEffect, useState } from 'react';

function AboutNavBar() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    const handleLogOut = () => {};
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
                        <ProgresBar bgcolor={'#6a1b9a'} completed={completed}></ProgresBar>
                        <Link to={`/profile/${user.id}`} className={'navLink'}>
                            <Text type={'body'}>{user.username}</Text>
                        </Link>
                        <Link className={'navLink'} to={`/main/${user.id}/settings`}>
                            <FiSettings className={'navLinkIcon'}></FiSettings>
                        </Link>
                        <Link className={'navLink'} to={'/'} onClick={handleLogOut}>
                            <FiLogOut className={'navLinkIcon'}></FiLogOut>
                        </Link>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}

export default AboutNavBar;
