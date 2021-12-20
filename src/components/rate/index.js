import * as S from './styles'

export const Rate = ({value, color, onClick, selected}) => (
    <S.Container onClick={onClick} selected={selected}>
        <S.Square color={color}>
            {value}
        </S.Square>
    </S.Container>
)