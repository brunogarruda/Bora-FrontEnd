import React from "react";
import Icon from "@material-ui/core/Icon";
import { ModalStyle } from "./styles";

export const Modal = ({ open, close }) =>
  open ? (
    <ModalStyle>
      <div>
        <div className="modal" />
        <Icon onClick={close}>close</Icon>
      </div>
      <p>teste</p>
    </ModalStyle>
  ) : null;
