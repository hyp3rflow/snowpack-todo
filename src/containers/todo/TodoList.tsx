import TodoItemList from 'components/todo/TodoItemList';
import { Todo } from 'models/Todo';
import { changeTodoStateArgs } from 'pages/MainPage';
import React from 'react';

interface TodoListProps {
  todoList: Todo[];
  changeTodoState: (args: changeTodoStateArgs) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { todoList, changeTodoState, deleteTodo } = props;

  return (
    <>
      <TodoItemList
        todoList={todoList}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoList;
