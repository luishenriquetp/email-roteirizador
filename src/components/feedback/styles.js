import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'
import {Exocard} from '../exocard/index'

export const Container = styled(Exocard)``

export const TitleCard = styled.div`
text-align:center;
    font-size:${convertToRem(64)};
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

export const DescriptionCard = styled.div`
    font-size:${convertToRem(36)};
    color:#5F5F5F;
    margin-bottom:15px;
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

export const RateCard = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin: 50px 0 50px 0;
    @media (max-width:480px) {
        flex-wrap: wrap;
        gap:10px;
        justify-content: flex-start;
    }
`

export const TextArea = styled.textarea`
    width:100%;
    height:215px;
    resize:none;
    background: #FFFFFF;
    border: 1px solid #B9B9B9;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 20px 0 0 20px;
    font-size:12px;
    &::placeholder{
        padding: 20px;
        @media(max-width:1250px) {
            padding: 10px;
        }
    }
    @media(max-width:1250px) {
            padding: 10px;
        }
`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
`
export const Button = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    button {
    border:none;
    display:grid;
    place-items:center;
    font-weight:700px;
    font-size:${convertToRem(36)};
    color:#fff;
    border-radius:10px;
    background: #5DC96C;
    cursor:pointer;
    &:hover {
        background: ${darken(0.1,'#5DC96C')};
    }
    width:210px;
    height:80px;
    margin-top:32px;
    @media (max-width:1250px) {
        width:150px;
        height:60px;
        font-size:${convertToRem(28)};
    }
    @media (max-width:740px) {
        width:150px;
        height:50px;
        font-size:${convertToRem(16)};
    }
    
    }
    
`
