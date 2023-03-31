import { Link } from 'react-router-dom';
import './AboutNavBar.css';
import HStack from '../../basicComponents/HStack';
import { FormattedMessage } from 'react-intl';

function AboutNavBar() {
    return (
        <>
            <div className={'aboutNavBar'}>
                <HStack alignItems={'baseline'} gap={330}>
                    <h2>
                        <Link to={'/'} className={'toDoLogo'}>
                            ToDo App
                        </Link>
                    </h2>
                    <HStack gap={4}>
                        <Link className={'aboutNavLink'} to={'/login'}>
                            <FormattedMessage id={'Login'} />
                        </Link>
                        <Link className={'aboutNavLink'} to={'/register'}>
                            <FormattedMessage id={'Register'} />
                        </Link>
                    </HStack>
                </HStack>
            </div>
        </>
    );
}
export default AboutNavBar;
