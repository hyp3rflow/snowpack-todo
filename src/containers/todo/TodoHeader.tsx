import React, { useState } from 'react';
import AddTodo from 'components/todo/AddTodo';
import Title from 'components/main/Title';
import HeaderWrapper from 'components/base/Header';
import { nanoid } from 'nanoid';
import { Todo } from 'models/Todo';

interface TodoHeaderProps {
  submit: (todo: Todo) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = (props: TodoHeaderProps) => {
  const { submit } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = () => {
    submit({
      id: nanoid(),
      title,
      content,
      pinned: false,
      checked: false,
    });
  };

  return (
    <HeaderWrapper>
      <Title />
      <AddTodo
        title={title}
        content={content}
        changeTitle={setTitle}
        changeContent={setContent}
        submit={onSubmit}
      />
    </HeaderWrapper>
  );
};

export default TodoHeader;
