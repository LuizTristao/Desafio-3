import imagem from "../../assets/gift1.jpg"
import { RetanguloMaior,Imagem,Title,SubTitle,RetanguloMenor } from "./style";

const CardComponent : React.FunctionComponent = () => {
	return (
		<>
		< RetanguloMaior >
			<Imagem src={imagem} alt="imagem card" />
			<RetanguloMenor>
				<Title>Produto</Title>
				<SubTitle>Presente presuntoso</SubTitle>
			</RetanguloMenor>

		</ RetanguloMaior >
		</>
	);
}


export default CardComponent;
