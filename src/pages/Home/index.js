import React,{Component} from 'react';
import Eventos from '../../components/Eventos';
import Pesquisa from '../../components/CampoPesquisa/index';

class Home extends Component{
//     constructor(props){
//         super(props);
//         // this.state = {

//         // }
//     }

    render(){
        return(
            <div>
                <Eventos />
                <Pesquisa />
            </div>
        );
    }
}

export default Home;