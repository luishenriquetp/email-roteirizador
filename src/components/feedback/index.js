import { useState } from 'react'
import {BsCheck} from 'react-icons/bs'
import { Rate } from '../rate'
import * as S from './styles'


export const Feedback = () => {
    const [rateValue, setRateValue] = useState()
    const [textValue, setTextValue] = useState()
    const handleChange = (e) => setTextValue(e)
    const handleAddRate = (rate) => setRateValue(rate)
    console.log(textValue)

    const values = [
        {
            color:"#B72825",
            value:0
        },
        {
            color:"#D62027",
            value:1
        },
        {
            color:"#F05223",
            value:2
        },
        {
            color:"#F36F21",
            value:3
        },
        {
            color:"#FAA823",
            value:4
        },
        {
            color:"#FFCA27",
            value:5
        },
        {
            color:"#ECDB12",
            value:6
        },
        {
            color:"#E8E73D",
            value:7
        },
        {
            color:"#C5D92D",
            value:8
        },
        {
            color:"#AFD136",
            value:9
        },
        {
            color:"#5DC96C",
            value:10
        },
    ]

    return (
        <S.Container>
            <S.TitleCard>
                Experiência no Atendimento
            </S.TitleCard>
            <S.DescriptionCard>
            Com base na experiência em seu último atendimento, em uma escala de 0 a 10, o quanto você indicaria a Jamef Transportes para  algum amigo ou familiar?
            </S.DescriptionCard>
            
            <S.RateCard>
                {values.map(item => {
                    const selected = rateValue === item.value
                    return (
                        <S.Column>        
                            {selected && <BsCheck size={50} style={{position:'absolute',top:'-50px'}} color={item.color}/>}
                            <Rate
                                color={item.color}
                                value={item.value}
                                onClick={() => handleAddRate(item.value)}/>
                        </S.Column>
                    )
                    
                })}
            </S.RateCard>
            <S.TextArea
                placeholder='Em poucas palavras, descreva o que motivou sua nota sobre a Experiência (opcional)' 
                onChange={(e) => handleChange(e.target.value)}/>
            <S.Button>
                <button>Enviar</button>
            </S.Button>
    </S.Container>

    )
}
