import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {useState} from "react";


function DescriptionBodyOfTodoLists(){
    const { idList } = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const {
        data: list,
        isLoading,
        isError,
        error
    } = useQuery(
        ['descriptionOfList', idList],
        () => fetch(`http://localhost:3001/main/${idList}`).then((res) => res.json()),
        {
            onSuccess: (list) => {
                setTitle(list.title);
                setDescription(list.description);
            }
        }
    );

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error: {error as string}</p>;

    return(
        <>
            <HStack gap={16} alignItems={"center"}>
                <Text type={"title"} children={title}></Text>
                <Link to={""}>Update</Link>
            </HStack>
                <Text type={"body"} children={description}></Text>
        </>
    )
}

export default DescriptionBodyOfTodoLists;