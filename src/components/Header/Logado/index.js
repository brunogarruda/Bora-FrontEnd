import React, { useEffect, useState } from "react";
import {
  Navbar, NavItem, Dropdown, Button
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "../../../styles/navbar.css";
import { Avatar } from "@material-ui/core";
import { api } from "../../../services";

export default () => {
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const buscaUsuario = async () => {
      const usuario = localStorage.getItem("apelido");
      setLoading(true);
      await api
        .get(`usuarios/${usuario}`)
        .then((res) => {
          setUsuario(res.data);
          setLoad(true);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    buscaUsuario();
  }, []);

  return (
    <>
            <Navbar className="purple darken-3">
                <NavLink className="brand-logo center" to="/">
                    BORA
                </NavLink>
                <NavItem onClick={handleClick}>
                    sair
                </NavItem>
                {load ? (
                    <NavItem>
                        <Dropdown
                          trigger={(
                                <Button>
                                    {/* <Avatar
                                        src={`data:image/jpeg;base64,${usuario}`}
                                    /> */}
                                </Button>
                              )}
                        >
                            <NavItem>one</NavItem>
                            <NavItem>two</NavItem>
                            <NavItem divider />
                            <NavItem>three</NavItem>
                        </Dropdown>
                    </NavItem>
                ) : (
                    <p>loading</p>
                )}
            </Navbar>
    </>
  );
};
// <nav>
//     <div class="nav-wrapper">
//         <a href="#!" class="brand-logo">
//             <i class="material-icons">cloud</i>Logo
//         </a>
//         <ul class="right hide-on-med-and-down">
//             <li>
//                 <a href="sass.html">
//                     <i class="material-icons">search</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="badges.html">
//                     <i class="material-icons">view_module</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="collapsible.html">
//                     <i class="material-icons">refresh</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="mobile.html">
//                     <i class="material-icons">more_vert</i>
//                 </a>
//             </li>
//         </ul>
//     </div>
// </nav>
//    );
