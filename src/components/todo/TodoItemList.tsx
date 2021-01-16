import { Todo } from 'models/Todo';
import { changeTodoStateArgs } from 'pages/MainPage';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Wrapper = styled.div`
  margin: 30px auto;
  width: 500px;
  min-height: 200px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

interface TodoItemListProps {
  todoList: Todo[];
  changeTodoState: (args: changeTodoStateArgs) => void;
  deleteTodo: (id: string) => void;
}

const TodoItemList: React.FC<TodoItemListProps> = (
  props: TodoItemListProps
) => {
  const { todoList, changeTodoState, deleteTodo } = props;
  const [sortedList, setSortedList] = useState<Todo[]>([]);

  useEffect(() => {
    setSortedList(
      todoList.slice().sort((a, b) => {
        if (a.pinned && !b.pinned) {
          return -1;
        }

        if (!a.pinned && b.pinned) {
          return 1;
        }

        return 0;
      })
    );
  }, [todoList]);

  return (
    <Wrapper>
      {sortedList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodoState={changeTodoState}
          deleteTodo={deleteTodo}
        />
      ))}
    </Wrapper>
  );
};

export default TodoItemList;
