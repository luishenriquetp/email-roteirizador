import { Card } from '../card'
import * as S from './styles'
import { BsFileEarmarkPost } from "react-icons/bs"
import { useState, useEffect } from 'react'
import { encryptName } from './encryptName'

export const Order = ({ clientInfo, link }) => {
    const [nameEncrypt, setNameEncrypt] = useState()
    const [NoLink, setNoLink] = useState(false)

    const handleNoLink = () => setNoLink(true)

    useEffect(() => {
        clientInfo && setNameEncrypt(encryptName(clientInfo?.nomeCliente))
    }, [clientInfo])
    
    const noLinkConstant = clientInfo?.tipoMensagem === '3' && clientInfo.tipoServico === 'entrega' && link === ''
    const hasLinkConstant = clientInfo?.tipoMensagem === '3' && clientInfo.tipoServico === 'entrega' && link !== ''

    const NotLink = () => (
        <S.NoLinkContainer>
            <S.NoLink onClick={handleNoLink}>
               <BsFileEarmarkPost />
                Comprovante de entrega
            </S.NoLink>
            {NoLink && 'Documento não encontrado'}
        </S.NoLinkContainer>
    )
    
    const HasLink = () => (
        <S.Button href={link} target='_blank'>
            <BsFileEarmarkPost />
            Comprovante de entrega
        </S.Button>
    )

    return (
        <S.Container>
            {clientInfo?.nomeCliente && (
                <>
                    <S.Title>
                        Dados do Pedido

                    </S.Title>
                    <Card>
                        <S.TitleCard1>
                            Nº do Pedido
                        </S.TitleCard1>
                        <S.DescriptionCard1>
                            {clientInfo?.numeroDocumento.substring(2, 11) || 'Não encontrado'}
                        </S.DescriptionCard1>
                        <S.TitleCard1>
                            Cliente
                        </S.TitleCard1>
                        <S.DescriptionCard1>
                            {nameEncrypt || 'Não encontrado'}
                        </S.DescriptionCard1>
                        <S.TitleCard1>
                            Chegada
                        </S.TitleCard1>
                        <S.DescriptionCard1>
                            {new Date(clientInfo?.horaPrevisao).toLocaleString('pt-br') || 'Não encontrado'}
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
                                Local da {clientInfo?.tipoServico || 'Não encontrado'}
                            </S.TitleCard1>
                            <S.DescriptionCard1>
                                {clientInfo?.endereco.rua || 'Não encontrado'}
                            </S.DescriptionCard1>
                            <S.DescriptionCard1>
                                {clientInfo?.endereco.bairro || 'Não encontrado'}
                            </S.DescriptionCard1>
                            <S.DescriptionCard1>
                                CEP: {clientInfo?.endereco.cep.substring(0, 5).concat('-').concat(clientInfo?.endereco.cep.substring(5, 8)) || 'Não encontrado'}
                            </S.DescriptionCard1>
                            <S.DescriptionCard1>
                                {clientInfo?.endereco.ufCidade || 'Não encontrado'}
                            </S.DescriptionCard1>
                        </S.RightCard1>
                    </Card>
                  {noLinkConstant && <NotLink />}
                  {hasLinkConstant && <HasLink />}
                </>
            )}

        </S.Container>
    )
}


