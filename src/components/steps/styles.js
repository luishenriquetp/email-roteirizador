import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Step = styled.div`
    width:128px;
    height:124px;
    background-color:#37b872;
    border-radius:50%;
    display:grid;
    place-items: center;
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