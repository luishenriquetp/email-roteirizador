import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {darken} from 'polished'

export const Container = styled.div`
    
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

font-family: Hind Siliguri;
font-style: normal;
font-weight: bold;
font-size: ${convertToRem(48)};
line-height: 78px;
color: #FFF;
`

