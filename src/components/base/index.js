
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
    const [valueFilial, setValueFilial] = useState();
    const [valueDocumento, setValueDocumento] = useState();
    const [valueSerie, setValueSerie] = useState();
    const { token } = useParams()

    useEffect(() => {
        getLocation({ token, setOrigin, setDestination, setClientInfo, setError })
    }, [token])

    useEffect(() => {
        const numberDocumento = clientInfo?.numeroDocumento
        const filial = numberDocumento?.substring(0,2)
        const documento = numberDocumento?.substring(2,11)
        const serie = numberDocumento?.substring(11)
        setValueFilial(filial)
        setValueDocumento(documento)
        setValueSerie(serie)
    }, [clientInfo])

    console.log(valueFilial, valueDocumento, valueSerie)

    const firstName = clientInfo?.nomeCliente?.split(" ")

    return (
        <S.Container>
        <Header />
        <S.Content>
        {clientInfo && clientInfo?.tipoMensagem === '3' ? (
            <>
            <Feedback valueFilial={valueFilial} valueDocmento={valueDocumento} valueSerie={valueSerie}/>
            <StepsFull />
            <S.Data>
            <Order clientInfo={clientInfo} button={clientInfo?.tipoServico==='entrega'} link={clientInfo?.linkAssinatura} />
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

