import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'
import {Exocard} from '../exocard/index'

export const Container = styled.div`
margin-top: 100px;

`

export const Content = styled.div`
`

export const Data = styled(Exocard)`
/* background: #FFFFFF;
box-shadow: 5px 4px 15px rgba(94, 94, 94, 0.37);
border-radius: 0px;
margin:0 50px;
@media (max-width:480px) {
    margin:0 10px;
} */
`

export const MapContainer = styled.div`
    max-width:900px;
    margin:30px auto;

`


export const MapTitle = styled.div`
    font-family: Lato;
    font-weight: 700;
    font-size: ${convertToRem(30)};
    text-align:center;
    margin-bottom:25px;
    color:#5D5D5D;

    @media (max-width:520px) {
        font-size: ${convertToRem(28)};
    }
`
export const Map = styled.div`
margin: 18px 0 61px 0;
height:450px;
background-color:#5D5D5D;
`
export const StepsContainer = styled.div`
    width:70%;
    justify-content:space-between;
    margin:50px auto;
    display:flex;
    align-items:center;
    position:relative;
`