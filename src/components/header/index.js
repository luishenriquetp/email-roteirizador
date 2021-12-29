import React from 'react'
import * as S from './styles'
import Logo from '../../assets/logo.png'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialInstagram} from 'react-icons/ti'

export const Header = () => (
  <S.Container>
          <S.Logo>
              <S.Item>
              <a href='https://www.jamef.com.br/contato' target="_blank"><img src={Logo} /></a>
            </S.Item>
          </S.Logo>
          <S.Items>
            <S.Item>
              <a href='https://www.facebook.com/jamefencomendasurgentes/' target="_blank"><TiSocialFacebook /></a>
            </S.Item>

            <S.Item>
              <a href='https://www.linkedin.com/company/jamef-encomendas-urg/' target="_blank"><TiSocialLinkedin  /></a>
            </S.Item>
            <S.Item>
            <a href='https://www.instagram.com/jamef_encomendas_urgentes/' target="_blank"><TiSocialInstagram  /></a>
            </S.Item>
          </S.Items>
  </S.Container>
)