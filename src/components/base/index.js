import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../header';
import { Steps } from '../steps';
import * as S from './styles';
import { Order } from '../order';
import { Feedback } from '../feedback';
import { Footer } from '../footer';
import MapPage from '../map';
import { getLocation } from '../../services/location/getLocation';

export function Base({ map }) {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [clientInfo, setClientInfo] = useState(null);
  const [error, setError] = useState(false);
  const [valueFilial, setValueFilial] = useState();
  const [valueDocumento, setValueDocumento] = useState();
  const [valueSerie, setValueSerie] = useState();
  const [loading, setLoading] = useState();
  const { token } = useParams();
  const firstName = clientInfo?.nomeCliente?.split(' ');

  useEffect(() => {
    getLocation({
      token, setOrigin, setDestination, setClientInfo, setError, setLoading,
    });
  }, [token]);

  useEffect(() => {
    const numberDocumento = clientInfo?.numeroDocumento;
    const filial = numberDocumento?.substring(0, 2);
    const documento = numberDocumento?.substring(2, 11);
    const serie = numberDocumento?.substring(11);
    setValueFilial(filial);
    setValueDocumento(documento);
    setValueSerie(serie);
  }, [clientInfo]);



  return (
    <S.Container>
      <Header />
      <S.Content>
        {clientInfo && clientInfo?.tipoMensagem === '3' ? (
          <Feedback valueFilial={valueFilial} valueDocumento={valueDocumento} valueSerie={valueSerie} clientInfo={clientInfo} error={error} />
        ) : (
          <S.MapContainer>
            {loading ? (
              <S.ContainerError>
              <div>Carregando...</div>
              </S.ContainerError>
            ) : (
              <>
                {error
                    ? <S.ContainerError>

                      <p>Erro ao carregar as informações.</p>
                    </S.ContainerError>
                    : (
                        <>
                        <S.MapTitle>
                        Olá 
                        {' '}
                        {firstName && firstName[0] || 'Não encontrado'}
                        , seu pedido nº
                        {clientInfo?.numeroDocumento?.substring(2, 11) || 'Não encontrado'}
                        {' '}
                        já está a caminho!
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
                    )}
              </>
            )}
          </S.MapContainer>
        )}
      </S.Content>
      <Footer />
    </S.Container>
  );
}
