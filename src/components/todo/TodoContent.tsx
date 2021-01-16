import React from 'react';
import styled from 'styled-components';

interface ContentWrapperProps {
  checked: boolean;
}

const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;

  div {
    line-height: 30px;
    text-decoration-line: ${(p) => (p.checked ? 'line-through' : 'none')};
    font-size: 20px;
    font-weight: 600;
  }

  article {
    line-height: 24px;
  }
`;

interface TodoContentProps {
  checked: boolean;
  title: string;
  content: string;
}

const TodoContent: React.FC<TodoContentProps> = (props: TodoContentProps) => {
  const { checked, title, content } = props;

  return (
    <ContentWrapper checked={checked}>
      <div>{title}</div>
      <article>{content}</article>
    </ContentWrapper>
  );
};

export default TodoContent;
