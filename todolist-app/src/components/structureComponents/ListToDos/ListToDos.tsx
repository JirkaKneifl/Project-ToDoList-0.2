import HStack from "../../basicComponents/HStack";
import Text from "../../basicComponents/Text/Text";
import {Link} from "react-router-dom";


function ListToDos() {


    return (
        <>
            <HStack gap={1}>
                <input type={"checkbox"}/>
                <Text type={"small-body"}>
                    children
                </Text>
                <Link to={`/deleteToDo/:idtodo`}></Link>
            </HStack>
        </>
    )
}

export default ListToDos;