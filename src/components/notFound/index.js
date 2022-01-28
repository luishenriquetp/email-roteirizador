import Lottie from 'react-lottie'
import truck from '../../lotties/truck.json'
import { Header } from '../header'
import { Footer } from '../footer'
import * as S from './styles'

export const NotFound = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: truck,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	}
	
	return (
		

	<S.Container>
	<S.Content>
	<Header />
	<div>
	
	<Lottie
	options={defaultOptions}
	height={400}
	width={400}
	/>
	
	</div>
	<S.Message>
	<strong>Oops! Ocorreu um problema para exibir o conteúdo solicitado!</strong>
    <p>Fique tranquilo! Estamos cientes e trabalhando na correção.</p>
	</S.Message>
	
	<Footer />
	</S.Content>
	</S.Container>
	)
}