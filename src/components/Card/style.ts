import styled from "styled-components";

const RetanguloMaior = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
width: 340px;
height: 423px;
margin-bottom: 32px;



`;

const Imagem = styled.img`
width: 340px;
height: 222px;
`;

const Title = styled.h3`
font-family: Merriweather;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 30px;
display: flex;
align-items: flex-end;
margin-bottom: 20px;

color: #2B2B2B;
`;

const SubTitle = styled.p`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
/* or 167% */

display: flex;
align-items: center;

color: #555555;
`;

const RetanguloMenor = styled.div`
color: #FFFFFF;
padding: 24px 20px;

`;

export {RetanguloMaior,Imagem,Title,SubTitle,RetanguloMenor};

