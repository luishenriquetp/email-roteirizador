import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
    padding:10px;
`

export const Title = styled.div`
font-family: Lato;
    font-weight: 700;
    font-size: ${convertToRem(64)};
    text-align:center;
    margin-bottom:18px;
    color:#5D5D5D;

    @media (max-width:1250px) {
        font-size: ${convertToRem(50)};
    }

    @media (max-width:740px) {
        font-size: ${convertToRem(40)};
    }
    @media (max-width:520px) {
        font-size: ${convertToRem(28)};
    }
    
`

export const TitleCard1 = styled.div`
    font-size:${convertToRem(36)};
    color:#5D5D5D;
    @media (max-width:1250px) {
        font-size: ${convertToRem(28)};
    }
    @media (max-width:740px) {
        font-size: ${convertToRem(20)};
    }
    @media (max-width:520px) {
        font-size: ${convertToRem(12)};
    }
    
    
`

export const DescriptionCard1 = styled.div`
    font-size:${convertToRem(24)};
    color:#5F5F5F;
    margin-bottom:15px;
    @media (max-width:1250px) {
        font-size: ${convertToRem(16)};
    }
    @media (max-width:740px) {
        font-size: ${convertToRem(12)};
    }
    @media (max-width:520px) {
        font-size: ${convertToRem(8)};
    }
`

export const LeftCard1 = styled.div`
border-right: 1px solid #ccc;
width:50%;
`

export const RightCard1 = styled.div``

export const Button = styled.div`
    display:grid;
    place-items:center;
    font-weight:700px;
    font-size:${convertToRem(36)};
    color:#fff;
    border-radius:10px;
    background: #BA000A;
    cursor:pointer;
    width:638px;
    height:110px;
    margin:0 auto;
    font-family:Lato, sans-serif;
    font-weight:700;
    &:hover {
        background: ${darken(0.1,'#BA000A')};
    }

    @media (max-width:1250px) {
        width:338px;
        height:60px;
        font-size:${convertToRem(28)};
    }
    @media (max-width:740px) {
        width:200px;
        height:50px;
        font-size:${convertToRem(16)};
    }
`