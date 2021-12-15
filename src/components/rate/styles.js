import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
    width:100%;
`

export const Square = styled.div`
width: 74px;
height: 74px;
display:grid;
place-items:center;
background: ${props => props.color};
&:hover{
    background: ${props => darken(0.1,props.color)};
    cursor:pointer;
}
border-radius: 10px;
font-family:Lato, sans-serif,
font-style: normal;
font-weight: bold;
font-size: ${convertToRem(48)};
line-height: 78px;
color: #FFF;
@media (max-width: 1160px) {
    width:55px;
    height:55px;
    font-size: ${convertToRem(38)};
    line-height: 55px;
 }

 @media (max-width: 930px) {
    width:40px;
    height:40px;
    font-size: ${convertToRem(32)};
    line-height: 40px;
 }

 @media (max-width: 750px) {
    width:30px;
    height:30px;
    font-size: ${convertToRem(24)};
    line-height: 30px;
 }
`


