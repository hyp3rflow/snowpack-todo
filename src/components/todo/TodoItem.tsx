import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { Todo } from 'models/Todo';

import { changeTodoStateArgs } from 'pages/MainPage';
import TodoMeta from './TodoMeta';
import TodoContent from './TodoContent';

const Wrapper = styled.div`
  display: flex;

  padding: 15px;
  margin: 0px 20px;
  margin-top: 20px;

  border-radius: 15px;
  background: #fff;
  box-shadow: 20px 20px 60px #d3d4d5, -20px -20px 60px #ffffff;

  &:last-child {
    margin-bottom: 20px;
  }
`;

const CloseWrapper = styled.div`
  margin-left: auto;
`;

interface TodoItemProps {
  todo: Todo;
  changeTodoState: (args: changeTodoStateArgs) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { todo, changeTodoState, deleteTodo } = props;
  const { id, title, content, pinned, checked } = todo;

  return (
    <Wrapper>
      <TodoMeta
        id={id}
        pinned={pinned}
        checked={checked}
        changeTodoState={changeTodoState}
      />
      <TodoContent checked={checked} title={title} content={content} />
      <CloseWrapper onClick={() => deleteTodo(id)}>
        <GrClose />
      </CloseWrapper>
    </Wrapper>
  );
};

export default TodoItem;
