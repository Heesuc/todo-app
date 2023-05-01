import '../scss/TodoTemplate.scss';

export interface TodoTemplateChildProps {
    children: React.ReactNode;
}

const TodoTemplate = ({children}: TodoTemplateChildProps) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정 관리</div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default TodoTemplate;