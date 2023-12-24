import Icon from 'common/Icon';
import React from 'react';
import { IDeleteProps } from './types';

const DeleteButton: React.FC<IDeleteProps> = ({
    onDelete,
    confirmationMessage,
}) => {
    const onDeleteHandler = () => {
        if (window.confirm(confirmationMessage)) {
            onDelete();
        }
    };
    return (
        <button className="delete-button p-1 " onClick={onDeleteHandler}>
            <Icon name="Delete" size={16} />
        </button>
    );
};
export default DeleteButton;
