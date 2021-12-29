import {api, apiKey} from './api'

export const postFeedback = async({rateValue, textValue, setFeedback, setLoading, valueFilial, valueDocumento, valueSerie}) => {

  const body = {
    'pesquisa':{
      "filialOrigem": valueFilial,
      "documento": valueDocumento,
      "serie": valueSerie,
      "notaAvaliacao": rateValue,
      "motivoNota": textValue || ''
    }
  }
  try {
    setLoading(true)
    await api.post('', body , {
      headers: {
        'x-api-key': apiKey
      }
    })
    setLoading(false)
    setFeedback('Feedback enviado com sucesso!')
  } catch(error) {
    setLoading(false)
    setFeedback(error?.response?.data?.title)
  }

}
