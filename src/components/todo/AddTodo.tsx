import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;
`;

const TitleInput = styled.input`
  font-size: 20px;
  margin-bottom: 10px;

  padding: 10px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
`;

const ContentInput = styled.input`
  font-size: 16px;

  padding: 10px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
`;

const AddButton = styled.button`
  width: 80px;
  border-radius: 10px;

  font-size: 16px;
  background-color: limegreen;
  font-weight: 600;
  color: white;

  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;

  &:hover {
    background-color: white;
    color: limegreen;
    border: 2px solid limegreen;
  }
`;

interface AddTodoProps {
  title: string;
  content: string;
  changeTitle: Dispatch<SetStateAction<string>>;
  changeContent: Dispatch<SetStateAction<string>>;
  submit: () => void;
}

const AddTodo: React.FC<AddTodoProps> = (props: AddTodoProps) => {
  const { title, content, changeTitle, changeContent, submit } = props;

  return (
    <Wrapper>
      <InputWrapper>
        <TitleInput
          value={title}
          onChange={(e) => changeTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <ContentInput
          value={content}
          onChange={(e) => changeContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </InputWrapper>
      <AddButton onClick={submit}>Add</AddButton>
    </Wrapper>
  );
};

export default AddTodo;
