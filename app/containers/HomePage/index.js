/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Sidebar, Form, List } from 'components';
import messages from './messages';
import * as S from './styles';

export default function HomePage() {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Container>
        <List />
        <Form />
      </S.Container>
    </S.Wrapper>
  );
}
