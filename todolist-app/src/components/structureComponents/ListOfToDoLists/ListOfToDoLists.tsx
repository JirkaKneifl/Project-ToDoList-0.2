import VStack from "../../basicComponents/VStack";
import "./ListOfToDoLists.css";
import {Link} from "react-router-dom";
import { FiPlusCircle } from 'react-icons/fi';
import HrSeparator from "../../basicComponents/HrSeparator/HrSeparator";
import {useQuery} from "react-query";
import HStack from "../../basicComponents/HStack";
import Text from "../../basicComponents/Text/Text";
import {FormattedMessage} from "react-intl";

function ListOfLists(){

    const {
        data: lists,
        isLoading,
        isError,
        error
    } = useQuery('listLists',() =>
        fetch('http://localhost:3001/main').then((res) => res.json())
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return (
        <>
            <div className={"listOfToDoListsPanel"}>

                <HrSeparator width={"80%"}></HrSeparator>
                <VStack alignItems={"stretch"} justifyContent={"center"} gap={2}>
                    {
                        !lists.length
                            ? <HStack gap={16} justifyContent={"center"}>
                                <VStack gap={0} alignItems={"center"}>
                                    <Text type={"body"} children={<FormattedMessage id={"body.listOfToDoLists.noLists"}/> }/>
                                    <Text type={"small-body"} children={<FormattedMessage id={"body.listOfToDoLists.letsGoAdd"}/>}/>
                                </VStack>
                              </HStack>
                            : lists?.map((list: any) => {
                                console.log("jsme v listoftodos", list)
                                const id_list: number = list.id_list;
                                return <Link
                                    key={list.id_list}
                                    to={`/main/${id_list}`}
                                    className={"sidebarItem"}
                                >
                                    <Text type={"body"}>{list.title}</Text>
                                </Link>
                            })
                    }
                    <HrSeparator width={"80%"}></HrSeparator>
                    <HStack gap={1} alignItems={"center"} justifyContent={"space-around"}>
                        <Link to={"/main/createList"}><FiPlusCircle size={32} className={"addButtonIcon"}></FiPlusCircle></Link>
                    </HStack>
                </VStack>
            </div>
        </>
    )
}

export default ListOfLists;
