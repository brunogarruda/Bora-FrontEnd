import React from 'react';
import { ModalStyle } from './styles';
import Icon from '@material-ui/core/Icon';

export const Modal = ({ open, close }) => open ? (
    <ModalStyle>
        <div>
            <div className="modal"></div>
            <Icon onClick={close}>close</Icon>
        </div>
        <p>teste</p>
    </ModalStyle>
) : null;