import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background: #C32424;
  height:70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:#fff;
  padding: 0 80px;

    @media screen and (max-width: 610px) {
     padding: 0 30px;
    }
    @media screen and (max-width: 450px) {
      height: 70px;
    }
`;

export const Logo = styled.div`
width: 180px;
height: 100%;
margin-top: 20px;

@media screen and (max-width: 560px) {
  width: 180px;
  height: 80px;
  margin-top: 35px;
}

@media screen and (max-width: 420px) {
  width: 150px;
  height: 80px;
  margin-top: 40px;
}
@media screen and (max-width: 360px) {
    width:120px;
  height:70px;
}

img {
  width: 100%;
  height: 100%;
}
`

export const Items = styled.div`
display: flex;
align-items: center;
a {
  color:#fff;
}

@media screen and (max-width: 450px) {
  margin: 10px 0;
}
`;

export const Item = styled.li`
margin: 0 10px;
list-style-type: none;
svg {
  width:35px;
  height:35px;
  @media screen and (max-width: 420px) {
    width:25px;
  height:25px;
}

@media screen and (max-width: 360px) {
    width:20px;
  height:20px;
}
}
`;