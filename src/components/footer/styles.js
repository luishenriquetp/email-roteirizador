import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'

export const Container = styled.div`
    margin-bottom:20px;
`

export const Footer = styled.div`
    display:grid;
    place-items:center;
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: ${convertToRem(20)};
    line-height: 29px;
    text-align: center;
    color: #5D5D5D;

    @media (max-width:520px) {
        font-size: ${convertToRem(12)};
    }
`