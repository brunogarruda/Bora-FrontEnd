import React, { useState } from "react";
import { Header } from "./styles.js";
import { Modal } from '../Modal';
import { useModal } from "../Modal/component/useModal.js";

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
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.25}s `;
    }
  });
};

export default function NavBar() {
  const {
    open,
    openModal,
    closeModal } = useModal();
  return (
    <Header>
      <nav>
        <div className="logo">
          <h4>BORA</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={openModal}>Entrar</a>
          </li>
          <li>
            <a href="google.com">Cadastrar</a>
          </li>
          <li>
            <a href="google.com">Avatar</a>
          </li>
        </ul>
        <div onClick={() => toggleMenu()} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Modal
        open={open}
        close={closeModal}
      >
      </Modal>
    </Header>
  );
}
