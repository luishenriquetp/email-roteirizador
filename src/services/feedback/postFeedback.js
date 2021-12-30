import { api } from './feedback'

export const postFeedback = async ({ rateValue, textValue, setFeedback, setLoading, valueFilial, valueDocumento, valueSerie }) => {

  const body = {
    'pesquisa': {
      "filialOrigem": valueFilial,
      "documento": valueDocumento,
      "serie": valueSerie,
      "notaAvaliacao": rateValue,
      "motivoNota": textValue || ''
    }
  }
  try {
    setLoading(true)
    await api.post('', body, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    setLoading(false)
    setFeedback('Feedback enviado com sucesso!')
  } catch (error) {
    setLoading(false)
    setFeedback(error?.response?.data?.title)
  }

}
