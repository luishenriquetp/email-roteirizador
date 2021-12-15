
import { Header } from '../header'
import {Steps} from '../steps'
import * as S from './styles'
import { Order } from '../order'
import { Feedback } from '../feedback'
import { Footer } from '../footer'
import MapPage from '../map'


export const Base = ({map}) => (

    <S.Container>
        
        <Header/>       
        
        <S.Content>
        {map ? (
            <S.MapContainer>
            <S.MapTitle>
                Pedido: 07001234561
            </S.MapTitle>
            <S.Map>
                <MapPage/>
            </S.Map>
            <S.StepsContainer>
               <Steps/>
            </S.StepsContainer>
        </S.MapContainer>
        ):(
            <Feedback/>
        )}
        

        </S.Content>
        
        <S.Data>
            <Order/>
        </S.Data>
                
        <Footer/>

    </S.Container>

)