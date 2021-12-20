import * as S from './styles'
import {Smile} from '../../assets/smile'
import {Truck} from '../../assets/truck'
import {Check} from '../../assets/check'

export const Steps = () => (
    <S.Container>
        <S.Step>
            <Smile/>
        </S.Step>
        <S.Step>
            <Truck/>
        </S.Step>
        <S.Step>
            <Check/>
        </S.Step>
            <S.Line/>
        <S.LineGrey/>
    </S.Container>
    
)