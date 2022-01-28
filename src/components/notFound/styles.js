import styled from 'styled-components'
import { convertToRem } from '../../utils/convertToRem'

export const Container = styled.div`
   margin-top:100px;
`

export const Content = styled.div`
display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size:30px;
   margin-top:200px;
   font-family:'Lato', sans-serif;
   color:#5D5D5D;



`

export const Message = styled.div`
   margin-bottom:150px;
   
   p {
    font-size:${convertToRem(20)};
    text-align:center;
    color:#5F5F5F;
    margin-bottom: 20px;
   }

   strong {
    text-align:center;
    font-size:${convertToRem(30)};
    color:#5D5D5D;
   }
`