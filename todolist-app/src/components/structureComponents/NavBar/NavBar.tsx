import { Link } from 'react-router-dom';
import './NavBar.css';
import HStack from '../../basicComponents/HStack';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import Text from '../../basicComponents/Text/Text';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function AboutNavBar() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    return (
        <>
            <div className={'aboutNavBar'}>
                <HStack alignItems={'baseline'} gap={300}>
                    <h2>
                        <Link to={`/main/${user.id}`} className={'toDoLogo'}>
                            ToDo App
                        </Link>
                    </h2>
                    <HStack gap={4} alignItems={'baseline'}>
                        <Link to={`/profile/${user.id}`} className={'navLink'}>
                            <Text type={'body'}>{user.username}</Text>
                        </Link>
                        <Link className={'navLink'} to={'/main/settings'}>
                            <FiSettings className={'navLinkIcon'}></FiSettings>
                        </Link>
                        <Link className={'navLink'} to={'/'}>
                            <FiLogOut className={'navLinkIcon'}></FiLogOut>
                        </Link>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}

export default AboutNavBar;
