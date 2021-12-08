import * as S from './styles'

export const Card = ({children, flex}) => (
    <S.Container flex={flex}>
        {children}
    </S.Container>

)