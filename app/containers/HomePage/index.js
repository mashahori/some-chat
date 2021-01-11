/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Sidebar } from 'components';
import messages from './messages';
import * as S from './styles';

export default function HomePage() {
  return (
    <S.Wrapper>
      <Sidebar />
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </S.Wrapper>
  );
}
