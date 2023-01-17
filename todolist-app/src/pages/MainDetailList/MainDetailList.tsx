import Layout from "../../components/structureComponents/Layout/Layout";
import DescriptionBodyOfTodoLists
    from "../../components/structureComponents/DescriptionBodyOfTodoLists/DescriptionBodyOfTodoLists";
import "./MainDetailList.css";

function MainDetailList(){
    return (
        <>
            <Layout>
                <div className={"detailList"}>
                    <DescriptionBodyOfTodoLists></DescriptionBodyOfTodoLists>
                </div>
            </Layout>
        </>
    );
}

export default MainDetailList;