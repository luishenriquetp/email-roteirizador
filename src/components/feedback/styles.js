import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'
import {Exocard} from '../exocard/index'

export const Container = styled(Exocard)``

export const TitleCard = styled.div`
    margin-bottom:20px;
    text-align:center;
    font-size:${convertToRem(30)};
    color:#5D5D5D;
    @media (max-width:520px) {
        font-size: ${convertToRem(28)};
        margin-top: 50px;
    }
`

export const DescriptionCard = styled.div`
    font-size:${convertToRem(20)};
    text-align:center;
    color:#5F5F5F;
    margin-bottom:15px;

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
    padding: 20px;
    font-size:12px;
    &::placeholder{
        padding: 1px;
        @media(max-width:1250px) {
            padding: 1px;
        }
    }
    @media(max-width:1250px) {
            padding: 15px;
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
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
    button {
        width:90px;
        height:45px;
        margin-top:32px;
        border:none;
        display:grid;
        place-items:center;
        font-weight:700;
        font-size:${convertToRem(18)};
        font-family:Lato, sans-serif;
        color:#fff;
        border-radius:10px;
        background: #5DC96C;
        cursor:pointer;
        &:hover {
            background: ${darken(0.1,'#5DC96C')};    
        }
        @media (max-width:740px) {
            width:80px;
            height:40px;
            font-size:${convertToRem(16)};
    }
}
`

export const Feedback = styled.div`
margin-top:10px;
color:${props=>props.success ? 'green':'red'};
`

export const Loading = styled.div`

`
export const Data = styled(Exocard)``

export const ContainerError = styled.div`
    display:grid;
    place-items:center;
    height: 75vh;
    font-size:30px;
    font-family:Lato, sans-serif;
    color:#5D5D5D;
    `