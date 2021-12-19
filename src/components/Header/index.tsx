import { Title, SubTitle, Button, BackgroundColored } from "./style";

import GiftImage from "./../../assets/gift.svg";

const HeaderComponent : React.FunctionComponent = () => {
	return (
		<>
			<BackgroundColored>
				<div>
					<Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ Title>
					<SubTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae vero provident placeat facilis totam! At quisquam molestiae animi nemo, repudiandae eligendi sint voluptatibus vel, recusandae optio autem esse odit magnam!</SubTitle>
					<Button>Botão</ Button>
				</div>

				<img src={GiftImage} alt="Imagem de presentes" />
			</BackgroundColored>
		</>
	);
}

export default HeaderComponent;
