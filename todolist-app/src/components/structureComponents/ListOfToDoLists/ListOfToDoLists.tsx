import VStack from '../../basicComponents/VStack';
import './ListOfToDoLists.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import HrSeparator from '../../basicComponents/HrSeparator/HrSeparator';
import { useQuery } from 'react-query';
import HStack from '../../basicComponents/HStack';
import Text from '../../basicComponents/Text/Text';
import { FormattedMessage } from 'react-intl';
import { getDecodedToken } from '../../../utils/getDecodedToken';

function ListOfLists() {
    const user = getDecodedToken(localStorage.getItem('access_token') as string);
    const navigate = useNavigate();
    const {
        data: lists,
        isLoading,
        isError,
        error,
    } = useQuery('listLists', () =>
        fetch(`http://localhost:3001/main/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
            .then((res) => (res.status === 401 ? navigate('/auth/login') : res))
            .then((res) => res!.json()),
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return (
        <>
            <div className={'listOfToDoListsPanel'}>
                <HrSeparator width={'80%'} />
                <VStack alignItems={'stretch'} justifyContent={'center'} gap={2}>
                    {!lists.length ? (
                        <HStack gap={16} justifyContent={'center'}>
                            <VStack gap={0} alignItems={'center'}>
                                <Text
                                    type={'body'}
                                    children={
                                        <FormattedMessage id={'body.listOfToDoLists.noLists'} />
                                    }
                                />
                                <Text
                                    type={'small-body'}
                                    children={
                                        <FormattedMessage
                                            id={'small-body.listOfToDoLists.letsGoAdd'}
                                        />
                                    }
                                />
                            </VStack>
                        </HStack>
                    ) : (
                        lists?.map((list: any) => {
                            const id_list: number = list.id_list;
                            return (
                                <Link
                                    key={list.id_list}
                                    to={`/main/${user.id}/${id_list}`}
                                    className={'sidebarItem'}
                                >
                                    <Text type={'body'}>{list.title}</Text>
                                </Link>
                            );
                        })
                    )}
                    <HrSeparator width={'80%'}></HrSeparator>
                    <HStack gap={1} alignItems={'center'} justifyContent={'space-around'}>
                        <Link to={`/main/${user.id}/createList`}>
                            <FiPlusCircle size={32} className={'addButtonIcon'}></FiPlusCircle>
                        </Link>
                    </HStack>
                </VStack>
            </div>
        </>
    );
}

export default ListOfLists;
