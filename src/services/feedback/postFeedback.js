import {api, apiKey} from './api'

export const postFeedback = async({rateValue, textValue, setFeedback, setLoading}) => {
  
  const body = {
    'pesquisa':{
      "filialOrigem": "10",
      "documento": "021220504",
      "serie": "1",
      "notaAvaliacao": rateValue,
      "motivoNota": textValue
  }
  }
  try {
    setLoading(true)
    await api.post('', body , {
      params: {
        'x-api-key': apiKey
      }
    })
    setLoading(false)
    setFeedback('Feedback enviado com sucesso!')
  } catch {
    setLoading(false)
    setFeedback('Erro ao enviar feedback.')
  }
  }
  