import React from 'react'
import * as S from './styles'
import Logo from '../../assets/logo.png'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialInstagram,TiSocialTwitter} from 'react-icons/ti'

export const Header = () => (
  <S.Container>
          <S.Logo>
            <S.Item>
              <img src={Logo} />
            </S.Item>
          </S.Logo>
          <S.Items>
            <S.Item>
              <TiSocialFacebook size='40'/>
            </S.Item>
            <S.Item>
              <TiSocialTwitter size='40' />
            </S.Item>
            <S.Item>
              <TiSocialLinkedin size='40' />
            </S.Item>
            <S.Item>
              <TiSocialInstagram size='40' />
            </S.Item>
          </S.Items>
  </S.Container>
)