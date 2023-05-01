import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { TodoListItemType } from "./components/TodoListItem";

const App = () => {
  const [todos, setTodos] = useState<TodoListItemType[]>([
    {
      id: 1,
      text: '리액트 기초를 알아보자',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어보기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/> 
    </TodoTemplate>
  ) 
}

export default App;