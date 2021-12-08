
import { Header } from '../header'
import {Steps} from '../../components/steps'
import * as S from './styles'
import { Order } from '../order'
import { Feedback } from '../../components/feedback'
import { Footer } from '../../components/footer'


export const Email = () => (

    <S.Container>
        <Header/>       
        <S.Content>
        <S.MapContainer>
            <S.MapTitle>
                Pedido: 07001234561
            </S.MapTitle>
            <S.Map>
                Mapa
            </S.Map>
            <S.StepsContainer>
               <Steps/>
            </S.StepsContainer>
        </S.MapContainer>

        </S.Content>
        <S.Data>
            <Order>
            </Order>
            
        </S.Data>
        <Feedback/>
                <Footer/>
    </S.Container>

)