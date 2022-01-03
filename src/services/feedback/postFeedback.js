import { api } from './api'

export const postFeedback = async ({ rateValue, textValue, setFeedback, setLoading, valueFilial, valueDocumento, valueSerie , setIsSend}) => {

  const body = {
    'pesquisa': {
      "filialOrigem": valueFilial,
      "documento": valueDocumento,
      "serie": valueSerie,
      "notaAvaliacao": rateValue,
      "motivoNota": textValue || ''
    }
  }
  setIsSend(false)
  try {
    setLoading(true)
    await api.post('', body, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_FDB_KEY
      }
    })
    setFeedback('Feedback enviado com sucesso!')
    setLoading(false)
    setIsSend(true)
  } catch (error) {
    setFeedback(error?.response?.data?.title)
    setLoading(false)
    setIsSend(false)
  }

}
