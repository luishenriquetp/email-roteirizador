import * as S from './styles'

export const Exocard = ({ children, ...rest }) => (
    <S.Container {...rest}>
        {children}
    </S.Container>

)