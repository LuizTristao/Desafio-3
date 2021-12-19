import styled from "styled-components";

const Background = styled.div`
  background-color: #D7D5FF;
	padding: 8rem 6rem;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

`;

const Painel = styled.input`
	width: 470px;
	height: 65px;
	background: #FFFFFF;
	border-radius: 6px;
	margin: 10px 0;
	border: none;
	display: flex;
	align-items: center;
	justify-items: start;
`;

const Botao = styled.button`
width: 471px;
height: 50px;

background: #6C63FF;
box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
border-radius: 5px;

border: none;

font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 24px;
/* identical to box height */

display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
margin: 30px 0;

`;

const Titulo = styled.h2`
font-family: Merriweather;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 40px;
display: flex;
align-items: center;
margin-bottom: 50px;

color: #2B2B2B;
`;
export {Background,Painel,Botao,Titulo};
