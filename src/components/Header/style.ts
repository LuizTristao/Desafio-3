import styled from "styled-components";

const Title = styled.h1`
	font-family: 'Merriweather', serif;
	font-size: 2.25rem;
	line-height: 2.938rem;

	font-style: normal;
	font-weight: normal;

	display: flex;
	align-items: center;

	color: #2B2B2B;

	margin-bottom: 1rem;
`;

const SubTitle = styled.p`
	font-size: 1rem;
	line-height: 2rem;

	font-family: 'Lato';
	font-style: normal;
	font-weight: normal;

	display: flex;
	align-items: center;

	color: #555555;

	margin-bottom: 2.75rem;
`;

const Button = styled.button`
	width: 10rem;
	height: 3rem;

	background: #6C63FF;
	border: none;
	box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
	border-radius: 5px;

	font-family: 'Lato';
	font-style: normal;
	font-weight: bold;
	font-size: 1.25rem;
	line-height: 1.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #FFFFFF;
`;

const BackgroundColored = styled.div`
	background-color: #D7D5FF;
	padding: 8rem 6rem;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export { Title, SubTitle, Button, BackgroundColored };
