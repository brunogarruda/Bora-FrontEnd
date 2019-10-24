/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Header } from "./styles";
import Modal from "../Modal";
import { useModal } from "../Modal/component/useModal";

const toggleMenu = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s `;
    }
  });
};

export default function NavBar() {
  const { open, openModal, closeModal } = useModal();
  return (
    <Header>
      <nav>
        <div className="logo">
          <h4>BORA</h4>
        </div>
        <ul className="nav-links">
          <li>
            <p onClick={openModal}>Entrar</p>
          </li>
          <li>
            <p>Cadastrar</p>
          </li>
          <li>
            <p>Avatar</p>
          </li>
        </ul>
        <div onClick={() => toggleMenu()} className="burger">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
      <Modal open={open} close={closeModal} />
    </Header>
  );
}
