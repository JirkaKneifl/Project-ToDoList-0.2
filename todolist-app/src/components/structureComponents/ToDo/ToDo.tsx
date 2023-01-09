import Button from "../../basicComponents/Button/Button";
import HStack from "../../basicComponents/HStack";
import "./ToDo.css";

type toDoProps ={
    toDoLabel: string
}

function ToDo(props: toDoProps) {
    return (
        <>
        <div className={"todoBody"}>
            <HStack gap={8} justifyContent={"space-between"} alignItems={"center"}>
                <HStack gap={2}>
                    <input type="checkbox"/>
                    <label>{props.toDoLabel}</label>
                </HStack>
                <HStack gap={2}>
                    {/*<Button label={"Archvate"}></Button> -> archvovabni na posledy*/}
                    <Button label={"Edit"}></Button>
                    <Button label={"X"}></Button>
                </HStack>
            </HStack>
        </div>
        </>
    )
}

export default ToDo;