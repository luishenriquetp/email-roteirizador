import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 5px 4px 15px rgba(94, 94, 94, 0.37);
border-radius: 10px;
margin: 30px 50px;
padding:30px 100px;
font-family:Lato, sans-serif;
font-weight:bold;

`

export const TitleCard = styled.div`
    font-size:${convertToRem(36)};
    color:#5D5D5D;
`

export const DescriptionCard = styled.div`
    font-size:${convertToRem(24)};
    color:#5F5F5F;
    margin-bottom:15px;
`

export const RateCard = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin: 50px 0 50px 0;
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
    &::placeholder{
        padding: 20px 0 0 20px;
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
    
    }
`
