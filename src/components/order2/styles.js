import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
    padding:10px;
`

export const Title = styled.div`
font-family: Lato;
    font-weight: 700;
    font-size: ${convertToRem(30)};
    text-align:center;
    margin-bottom:18px;
    color:#5D5D5D;


    @media (max-width:520px) {
        font-size: ${convertToRem(28)};
    }
    
`

export const TitleCard1 = styled.div`
    font-size:${convertToRem(20)};
    color:#5D5D5D;
    padding-top:20px;
    margin-bottom:10px;

    @media (max-width:520px) {
        font-size: ${convertToRem(12)};
    }
    
    
`

export const DescriptionCard1 = styled.div`
    font-size:${convertToRem(14)};
    color:#5F5F5F;
    margin-bottom:15px;
    font-weight: 400;

    @media (max-width:520px) {
        font-size: ${convertToRem(8)};
    }
`

export const LeftCard1 = styled.div`
border-right: 1px solid #ccc;
width:50%;
`

export const RightCard1 = styled.div`
    padding-left:15px;
`

export const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700px;
    font-size:${convertToRem(18)};
    color:#fff;
    border-radius:10px;
    background: #BA000A;
    cursor:pointer;
    width:280px;
    height:55px;
    margin:30px auto;
    font-family:Lato, sans-serif;
    font-weight:700;
    svg {
        margin-right:10px;
    }
    &:hover {
        background: ${darken(0.1,'#BA000A')};
    }


    @media (max-width:740px) {
        width:170px;
        height:40px;
        font-size:${convertToRem(14)};
    }
`