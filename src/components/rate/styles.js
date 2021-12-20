import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
    width:100%;
    display:grid;
    place-items:center;
    padding:${props => props.selected && '1.4px'};
    border: ${props => props.selected && '2px solid black'};
    border-radius: ${props => props.selected && '12px'}
`

export const Square = styled.div`
width: 60px;
height: 60px;
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
font-size: ${convertToRem(28)};
line-height: 50px;
color: #FFF;

 @media (max-width: 750px) {
    width:34px;
    height:34px;
    font-size: ${convertToRem(24)};
    line-height: 30px;
 }
`


