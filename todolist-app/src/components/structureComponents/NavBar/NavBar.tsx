import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import HStack from '../../basicComponents/HStack';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function AboutNavBar() {
    const navigate = useNavigate();
    const user = getDecodedToken(localStorage.getItem('access_token') as string);

    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        navigate('/');
        window.location.reload();
    };
    return (
        <>
            <div className={'aboutNavBar'}>
                <HStack alignItems={'baseline'} gap={305}>
                    <h2>
                        <Link to={`/main/${user.id}`} className={'toDoLogo'}>
                            ToDo App
                        </Link>
                    </h2>
                    <HStack gap={4} alignItems={'baseline'}>
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

export default AboutNavBar;
