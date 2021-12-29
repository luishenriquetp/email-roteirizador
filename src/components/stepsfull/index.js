import * as S from './styles'
import {Smile} from '../../assets/smile'
import {Truck} from '../../assets/truck'
import {Check} from '../../assets/check'

export const StepsFull = () => (
    <S.Container>
        <S.Line/>
        <S.Step>
            <S.Icon>
                <Smile/>                
            </S.Icon>
            <S.Text>
                <p>Seu pedido será realizado hoje</p>
            </S.Text>
        </S.Step>
        

        <S.Step>
            <S.Icon>
                <Truck/>
            </S.Icon>
            <S.Text>
                <p>Pedido a caminho</p>
            </S.Text>
        </S.Step>

        <S.Step>
            <S.Icon>
                <Check/>
            </S.Icon>
            <S.Text>
                <p>Entrega finalizada</p>
            </S.Text>
        </S.Step>
    </S.Container>
    
)