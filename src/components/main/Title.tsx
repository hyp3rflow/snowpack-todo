import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  z-index: 20;
`;

const Title: React.FC = () => {
  return <TitleWrapper>Todo App</TitleWrapper>;
};

export default Title;
