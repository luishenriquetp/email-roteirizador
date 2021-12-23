
import { Header } from '../header'
import {Steps} from '../steps'
import * as S from './styles'
import { Order } from '../order'
import { Feedback } from '../feedback'
import { Footer } from '../footer'
import MapPage from '../map'
import { StepsFull } from '../stepsfull'
import { useEffect, useState } from 'react'
import { getLocation } from '../../services/location/getLocation'


export const Base = ({map}) => {
    
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [clientInfo, setClientInfo] = useState(null);
    
    useEffect(() => {
        
        getLocation({setOrigin, setDestination, setClientInfo})
    },[])

    console.log(clientInfo)

    return(
            <S.Container>
            <Header/>       
            <S.Content>
            {map ? (
                <S.MapContainer>
                    <S.MapTitle>
                    Olá {clientInfo?.nomeClient|| 'Não encontrado'}, seu pedido nº {clientInfo?.numeroDocumento || 'Não encontrado'} já está a caminho!
                    </S.MapTitle>
                    <S.Map>
                        <MapPage origin={origin} destination={destination}/>
                    </S.Map>
                    <S.StepsContainer>
                        <Steps/>
                    </S.StepsContainer>
                    <S.Data>
                        <Order clientInfo={clientInfo}/>
                    </S.Data>
                </S.MapContainer>
            
            ):(
                <>
                    <Feedback/>
                    <StepsFull/>
                    <S.Data>
                        <Order button/>
                    </S.Data>
                </>
            )}
            </S.Content>
            <Footer/>
        </S.Container>
    )
}
    
    