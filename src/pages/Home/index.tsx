import HeaderComponent from "../../components/Header/index";
import CardComponent from "../../components/Card";
import FooterComponent from "../../components/Footer";
import "../../styles/global"

const Header : React.FunctionComponent = () => {
	return (
		<>
			<HeaderComponent />
	<div className="Conteiner">
		<CardComponent/>
		<CardComponent/>
		<CardComponent/>
		<CardComponent/>
		<CardComponent/>
		<CardComponent/>
	</div>
	<FooterComponent/>
			</>
	);
}

export default Header;
