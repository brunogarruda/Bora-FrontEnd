import React from "react";
// import axios from "axios";
import { Input } from "./styles";

// import { api } from "../../services/api";

export default function pesquisa() {
  // const [Pesquisa, setPesquisa] = useState();

  // async function getEvento() {
  //   try {
  //     const response = await api.get("/eventos?text=bruno");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // await api
  //   .get("/eventos", {
  //     params: {
  //       text: "bruno"
  //     }
  //   })
  //   .then(res => console.log(res.data))
  //   .catch(err => console.error(err));
  // }

  return <Input placeholder="Pesquise aqui" />;
}

// export default class Pesquisa extends Component {
//   render() {
//     return (
//       <>
//         <Input placeholder="Pesquise aqui" />
//       </>
//     );
//   }
// }
