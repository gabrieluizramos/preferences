import React from 'react';

import { Link } from 'gatsby';

import * as S from './styles';

const Header = () => (
  <S.Header>
    <Link to="/">
      <S.Title>
        Gabriel / Ramos
      </S.Title>
      <S.Subtitle>
        ⟨ pintor de pixel ⟩
      </S.Subtitle>
    </Link>
  </S.Header>
);

export default Header;
