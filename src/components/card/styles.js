import styled from "styled-components"

export const Container = styled.div`
display:${props => props.flex && 'flex'};
justify-content:${props => props.flex && 'space-between'};
font-family: Lato, sans-serif;
font-weight: 700;
background: rgba(255, 255, 255, 0.54);
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
border-radius: 30px;
margin:30px 65px;
padding: 25px;
`

