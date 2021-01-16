import React from 'react';
import styled from 'styled-components';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { changeTodoStateArgs } from 'pages/MainPage';

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 3px;

  align-items: center;
`;

const PinIcon = styled.div`
  margin-left: 2px;

  svg {
    width: 23px;
    height: 23px;
  }
`;

const CheckIcon = styled.div`
  margin-top: 3px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

interface TodoMetaProps {
  id: string;
  pinned: boolean;
  checked: boolean;
  changeTodoState: (args: changeTodoStateArgs) => void;
}

const TodoMeta: React.FC<TodoMetaProps> = (props: TodoMetaProps) => {
  const { id, pinned, checked, changeTodoState } = props;

  return (
    <MetaWrapper>
      <PinIcon onClick={() => changeTodoState({ id, pinned: !pinned })}>
        {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
      </PinIcon>
      <CheckIcon onClick={() => changeTodoState({ id, checked: !checked })}>
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </CheckIcon>
    </MetaWrapper>
  );
};

export default TodoMeta;
