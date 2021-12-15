import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Step = styled.div`
    width:128px;
    height:128px;
    background-color:#37b872;
    border-radius:50%;
    display:grid;
    place-items: center;
    @media (max-width:1250px) {
        width:80px;
        height:80px;
    }
    @media (max-width:740px) {
        width:60px;
        height:60px;
    }
    @media (max-width:520px) {
        width:40px;
        height:40px;
    }
`


export const Line = styled.div`
    width:25%;
    height:3px;
    background-color:#37b872;
    position:absolute;
    z-index:-1;
`
export const LineGrey = styled.div`
    width:100%;
    height:3px;
    background-color:#cccccc;
    position:absolute;
    z-index:-2;
    `