import { Card } from '../card'
import * as S from './styles'
import { BsFileEarmarkPost } from "react-icons/bs";


export const Order2 = (button) => (
    <S.Container>
            <S.Title>
                Dados do Pedido
            </S.Title>
            <Card>
            <S.TitleCard1>
                    Nº do Pedido
                </S.TitleCard1>
                <S.DescriptionCard1>
                07001234561
                </S.DescriptionCard1>
                <S.TitleCard1>
                    Cliente
                </S.TitleCard1>
                <S.DescriptionCard1>
                    N/A
                </S.DescriptionCard1>
                <S.TitleCard1>
                    Chegada
                </S.TitleCard1>
                <S.DescriptionCard1>
                16/11/2021 às 17:30
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

            



    </S.Container>
)