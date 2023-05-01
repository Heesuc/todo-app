import TodoListItem, {TodoListItemType} from "./TodoListItem";
import '../scss/TodoList.scss';


const TodoList = (props: TodoListItemType[]) => {
    return (
        <div className="TodoList">
            {props.map(todoListItem => (
                <TodoListItem todo={todoListItem} key={todoListItem.id}/>
            ))};
        </div>
    )
}

export default TodoList;