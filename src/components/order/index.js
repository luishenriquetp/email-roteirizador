import { Card } from '../card'
import * as S from './styles'


export const Order = (button) => (
    <S.Container>
            <S.Title>
                Dados do Pedido
            </S.Title>
            <Card>
                <S.TitleCard1>
                    Pedido: 07001234561
                </S.TitleCard1>
                <S.DescriptionCard1>
                    MICROONDAS38L 127V/60HZ DCRE2014/74610-3
                </S.DescriptionCard1>
                <S.TitleCard1>
                    Pedido: 07001234561
                </S.TitleCard1>
                <S.DescriptionCard1>
                    MICROONDAS38L 127V/60HZ DCRE2014/74610-3
                </S.DescriptionCard1>
            </Card>

            <Card flex>
                <S.LeftCard1>
                <S.TitleCard1>
                    Transportadora
                </S.TitleCard1>
                <S.DescriptionCard1>
                    Jamef Transportes Urgentes
                </S.DescriptionCard1> 
                <S.TitleCard1>
                    Motorista
                </S.TitleCard1>
                <S.DescriptionCard1>
                    Pedro Lima
                </S.DescriptionCard1> 
                </S.LeftCard1>
                
                <S.RightCard1>
                <S.TitleCard1>
                Local da Coleta
                </S.TitleCard1>
                <S.DescriptionCard1>
                Rua: R. Dr. José Américo C. Bahia, 1810
                </S.DescriptionCard1> 
                <S.DescriptionCard1>
                Bairro: Industrial
                </S.DescriptionCard1> 
                <S.DescriptionCard1>
                Cidade/UF: Contatem - MG
                </S.DescriptionCard1> 
                <S.DescriptionCard1>
                CEP:32210130
                </S.DescriptionCard1> 
                </S.RightCard1>
            </Card>

            {button && (
                <S.Button>
                    Comprovante de entrega
                </S.Button>
            )}

            



    </S.Container>
)