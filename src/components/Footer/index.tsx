import {Background,Painel,Botao,Titulo} from "./style"

const FooterComponent : React.FunctionComponent = () => {
	return(
		<>
	<Background>
	<Titulo>Entre em contato</Titulo>
		<Painel type="text" required placeholder="Nome"/>
		<Painel type="email" required placeholder="E-mail"/>
		<Painel type="text" required placeholder="Telefone"/>
		<Painel type="text" required placeholder="Mensagem..."/>
    <Botao>Enviar mensagem</Botao>
	</Background>
	  </>
	)
}

export default FooterComponent;
