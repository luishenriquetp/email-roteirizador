import { Card } from '../card'
import * as S from './styles'
import { BsFileEarmarkPost } from "react-icons/bs";


export const Order = ({button, clientInfo}) => {
    
return(
    
    <S.Container>
            <S.Title>
                Dados do Pedido
            </S.Title>
            <Card>
            <S.TitleCard1>
                    Nº do Pedido
                </S.TitleCard1>
                <S.DescriptionCard1>
                {clientInfo?.numeroDocumento || 'Não encontrado'}
                </S.DescriptionCard1>
                <S.TitleCard1>
                    Cliente
                </S.TitleCard1>
                <S.DescriptionCard1>
                    {clientInfo?.nomeCliente || 'Não encontrado'}
                </S.DescriptionCard1>
                <S.TitleCard1>
                    Chegada
                </S.TitleCard1>
                <S.DescriptionCard1>
                {clientInfo?.horaPrevisao || 'Não encontrado'}
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
                    {clientInfo?.motorista || 'Não encontrado'}
                </S.DescriptionCard1> 
                </S.LeftCard1>
                
                <S.RightCard1>
                <S.TitleCard1>
                Local da Coleta
                </S.TitleCard1>
                <S.DescriptionCard1>
                {clientInfo?.endereco || 'Não encontrado'}
                </S.DescriptionCard1> 

                </S.RightCard1>
            </Card>

            {button && (
                <S.Button>
                    <BsFileEarmarkPost/>Comprovante de entrega
                </S.Button>
            )}
    </S.Container>
)
}


