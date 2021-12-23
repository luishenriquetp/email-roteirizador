
import { Header } from '../header'
import {Steps} from '../steps'
import * as S from './styles'
import { Order } from '../order'
import { Feedback } from '../feedback'
import { Footer } from '../footer'
import MapPage from '../map'
import { StepsFull } from '../stepsfull'


export const Base = ({map}) => (

    <S.Container>
        
        <Header/>       
        
        <S.Content>
        {map ? (
            <S.MapContainer>
            <S.MapTitle>
            Olá Pedro, seu pedido nº 07001234561 já está a
caminho!
            </S.MapTitle>
            <S.Map>
                <MapPage/>
            </S.Map>
            <S.StepsContainer>
               <Steps/>
            </S.StepsContainer>
            <S.Data>
                    <Order/>
            </S.Data>
        </S.MapContainer>
        
        ):(
            <>
                <Feedback/>
                <StepsFull/>
                <S.Data>
                    <Order/>
                </S.Data>
            </>
        )}
        

        </S.Content>
        
        
                
        <Footer/>

    </S.Container>

)