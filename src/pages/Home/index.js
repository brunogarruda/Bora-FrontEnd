import React,{Component} from 'react';
import Eventos from '../../components/Eventos';
// import Pesquisa from '../../components/CampoPesquisa/index';
import { Container,Image } from 'react-bootstrap';
import background from '../../assets/background.svg';

class Home extends Component{
    render(){
        return(
            <div>
            <Image src={background} fluid/>
                <Container>
                <Eventos />
                </Container>
            </div>
        );
    }
}

export default Home;