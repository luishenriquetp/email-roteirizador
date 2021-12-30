import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    max-width:600px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:70px auto;

    @media (max-width: 500px) {
        width: 90%;
    }
`

export const Step = styled.div`
    text-align:center;
    height:105px; 
    position: relative;   
`

export const Line = styled.div`
    max-width:600px;
    width:600px;
    height:3px;
    background-color:#37b872;
    position: absolute;
    margin-bottom:21px;
    @media (max-width:740px) {
        margin-bottom:40px;
        width:100%;
    }

    @media (max-width: 550px) {
        width: 90%;
    }
`

export const Icon = styled.div`
    width:90px;
    height:90px;
    background-color:#37B872;
    border-radius:50%;
    display:grid;
    place-items: center;
    margin-bottom:10px;

    @media (max-width:740px) {
        width:60px;
        height:60px;
    }
`

export const Text = styled.div`
    width:90px;
    color:#5D5D5D;
    text-align:center;
    font-size:14px;
    font-family:Lato, sans-serif;
    
    @media (max-width:740px) {
        width:60px;
        font-size:12px;
    }
`