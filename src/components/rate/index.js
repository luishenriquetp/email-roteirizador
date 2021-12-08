import * as S from './styles'

export const Rate = ({value, color, onClick}) => (
    <S.Container onClick={onClick}>
        <S.Square color={color}>
            {value}
        </S.Square>
    </S.Container>
)