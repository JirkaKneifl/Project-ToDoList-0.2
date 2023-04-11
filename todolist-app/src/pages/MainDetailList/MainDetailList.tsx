import DescriptionBodyOfTodoLists from '../../components/structureComponents/DescriptionBodyOfTodoLists/DescriptionBodyOfTodoLists';
import './MainDetailList.css';
import LayoutProgress from '../../components/structureComponents/LayoutProgress/LayoutProgress';

function MainDetailList() {
    return (
        <>
            <LayoutProgress>
                <div className={'detailList'}>
                    <DescriptionBodyOfTodoLists></DescriptionBodyOfTodoLists>
                </div>
            </LayoutProgress>
        </>
    );
}

export default MainDetailList;
