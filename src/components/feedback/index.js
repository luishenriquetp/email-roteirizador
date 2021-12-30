import { useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Rate } from '../rate';
import { values } from './constants';
import { postFeedback } from '../../services/feedback/postFeedback';
import * as S from './styles';
import { StepsFull } from '../stepsfull';
import { Order } from '../order';

const Error = () => (
  <S.ContainerError>
    <p>Erro ao carregar as informações.</p>
  </S.ContainerError>
)

export function Feedback({
  valueFilial,
  valueDocumento,
  valueSerie,
  clientInfo,
  error
}) {
  const [rateValue, setRateValue] = useState();
  const [textValue, setTextValue] = useState();
  const [feedback, setFeedback] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setTextValue(e);
  const handleAddRate = (rate) => setRateValue(rate);

  const handlePostFeedback = () => {
    if (rateValue) {
      postFeedback({
        rateValue, textValue, setFeedback, setLoading, valueFilial, valueDocumento, valueSerie,
      });
    } else {
      setFeedback('Por favor, preencha alguma nota antes de enviar a avaliação')
    }
  };

  const override = css`
    border: 3px solid #fff;
  `;

  return (
    <S.Container>
{/*       {error ? (
        <Error />
      ) : ( */}
        <>
          {clientInfo.servicoAvaliado === 'false' && (
            <S.FeedbackContainer>
              <S.TitleCard>
                Experiência no Atendimento
              </S.TitleCard>
              <S.DescriptionCard>
                Com base na experiência em seu último atendimento, em uma escala de 0 a 10, o quanto você indicaria a Jamef Transportes para outra pessoa?
              </S.DescriptionCard>

              <S.RateCard>
                {values.map((item) => (
                  <S.Column>
                    <Rate
                      selected={rateValue === item.value}
                      color={item.color}
                      value={item.value}
                      onClick={() => handleAddRate(item.value)}
                    />
                  </S.Column>
                ))}
              </S.RateCard>
              <S.TextArea
                placeholder='Em poucas palavras, descreva o que motivou sua nota sobre a sua experiência (opcional)'
                onChange={(e) => handleChange(e.target.value)}
              />
              <S.Button>
                <button onClick={handlePostFeedback}>
                  {loading
                    ? (
                      <S.Loading>
                        <ClipLoader color='#5D5D5D' loading={loading} css={override} size={30} />
                      </S.Loading>
                    ) : 'Enviar'}
                </button>

                <S.Feedback success={feedback === 'Feedback enviado com sucesso!'}>

                  {feedback}
                </S.Feedback>
              </S.Button>
            </S.FeedbackContainer>
          )}
          <StepsFull />
          <S.Data>
            <Order clientInfo={clientInfo} button={clientInfo?.tipoServico === 'entrega'} link={clientInfo?.linkAssinatura} />
          </S.Data>
        </>
{/*       )} */}
    </S.Container>
  );
}