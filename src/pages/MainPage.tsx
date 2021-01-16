import React, { useState } from 'react';
import { Todo } from 'models/Todo';

import TodoHeader from 'containers/todo/TodoHeader';
import LayoutWrapper from 'components/base/Layout';
import TodoList from 'containers/todo/TodoList';

const initTodo = [
  {
    id: '123213',
    pinned: false,
    checked: false,
    title: 'hi',
    content: 'hello',
  },
  {
    id: 'sadsad',
    pinned: false,
    checked: false,
    title: 'hi',
    content: 'hello',
  },
  {
    id: 'qweqwe',
    pinned: false,
    checked: false,
    title: 'hi',
    content: 'hello',
  },
];

export interface changeTodoStateArgs {
  id: string;
  pinned?: boolean;
  checked?: boolean;
}

const Main: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([...initTodo]);

  const addTodoList = (todo: Todo) => {
    setTodoList([...todoList, todo]);
  };

  const changeTodoState = (args: changeTodoStateArgs) => {
    const { id } = args;

    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...args };
        }
        return todo;
      })
    );

    console.log(todoList);
  };

  const deleteTodo = (id: string) => {
    console.log('hi!');
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log(todoList);
  };

  return (
    <LayoutWrapper>
      <TodoHeader submit={addTodoList} />
      <TodoList
        todoList={todoList}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
      />
    </LayoutWrapper>
  );
};

export default Main;
