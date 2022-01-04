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
import GridLoader from 'react-spinners/GridLoader';
import Lottie from 'react-lottie';
import truck from '../../lotties/truck.json';

export function Base() {
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: truck,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (
    <S.Container>
      <Header />
      <S.Content>
        {clientInfo && clientInfo?.tipoMensagem === '3' ? (
          <Feedback error={error} valueFilial={valueFilial} valueDocumento={valueDocumento} valueSerie={valueSerie} clientInfo={clientInfo} />
        ) : (
          <S.MapContainer>
            {loading ? (
              <S.ContainerError>
                <S.Loading>Carregando...</S.Loading>
                <GridLoader color='#C32424' />
              </S.ContainerError>
            ) : (
              <>
                {error
                  ? <S.ContainerError>
                    <div>
                      <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                      />
                    </div>
                    <strong>Oops! Ocorreu um problema para exibir o conteúdo solicitado!</strong>
                    <p>Fique tranquilo! Estamos cientes e trabalhando na correção.</p>
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
                        <Order clientInfo={clientInfo} link={clientInfo?.linkAssinatura} />
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
