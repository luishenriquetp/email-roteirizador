
import { Header } from '../header'
import { Steps } from '../steps'
import * as S from './styles'
import { Order } from '../order'
import { Feedback } from '../feedback'
import { Footer } from '../footer'
import MapPage from '../map'
import { StepsFull } from '../stepsfull'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLocation } from '../../services/location/getLocation'


export const Base = ({ map }) => {

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [clientInfo, setClientInfo] = useState(null);
    const [error, setError] = useState(false);
    const { token } = useParams()

    useEffect(() => {
        getLocation({ token, setOrigin, setDestination, setClientInfo, setError })
    }, [token])

    const firstName = clientInfo?.nomeCliente?.split(" ")
    console.log(clientInfo)
    return (
        <S.Container>
            <Header />
            <S.Content>
                {clientInfo && clientInfo?.tipoMensagem === '3' ? (
                    <>
                        <Feedback />
                        <StepsFull />
                        <S.Data>
                            <Order clientInfo={clientInfo} button={clientInfo?.linkAssinatura} />
                        </S.Data>
                    </>
                ) : (
                    <S.MapContainer>
                        {error ?
                            <div>
                                <p>Erro</p>
                            </div> : (
                                <>
                                    <S.MapTitle>
                                        Olá {firstName && firstName[0] || 'Não encontrado'}, seu pedido nº {clientInfo?.numeroDocumento?.substring(2, 11) || 'Não encontrado'} já está a caminho!
                                    </S.MapTitle>
                                    <S.Map>
                                        <MapPage origin={origin} destination={destination} />
                                    </S.Map>
                                    <S.StepsContainer>
                                        <Steps />
                                    </S.StepsContainer>
                                    <S.Data>
                                        <Order clientInfo={clientInfo} />
                                    </S.Data>
                                </>
                            )
                        }

                    </S.MapContainer>
                )}
            </S.Content>
            <Footer />
        </S.Container>
    )
}

