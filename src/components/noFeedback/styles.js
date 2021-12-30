import styled from 'styled-components';
import { convertToRem } from '../../utils/convertToRem';
import { Exocard } from '../exocard/index'

export const Container = styled.div`
height: 500px;
`

export const Content = styled(Exocard)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Title = styled.div`
    font-family: Lato;
    font-weight: 700;
    font-size: ${convertToRem(30)};
    text-align:center;
    color:#5D5D5D;
    margin-bottom: 50px;
`

export const Description = styled.div`
    font-size:${convertToRem(14)};
    color:#5F5F5F;
    font-weight: 400;
    text-align:center;
`