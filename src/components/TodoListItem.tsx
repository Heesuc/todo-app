import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';

export interface TodoListItemType {
    id: number,
    text: string,
    checked: boolean,
};

const TodoListItem = (props: TodoListItemType) => {
    return (
        <div className='TodoListItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>{props.text}</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;