import {api, apiKey} from './api'

export const postFeedback = async({rateValue, textValue, setFeedback, setLoading, valueFilial, valueDocumento, valueSerie}) => {

  const body = {
    'pesquisa':{
      "filialOrigem": valueFilial,
      "documento": '123456700',
      "serie": valueSerie,
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
  } catch(error) {
    setLoading(false)
    if(error.response.status === 400) {
      setFeedback('Erro ao enviar o feedback.')
    }
    if(error.response.status === 500) {
      setFeedback('Erro interno no servidor. Tente novamente em alguns instantes.')
    }
  }

}
