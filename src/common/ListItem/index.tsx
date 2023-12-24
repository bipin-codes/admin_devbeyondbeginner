import DeleteButton from 'common/DeleteButton';
import Icon from 'common/Icon';
import { ChangeEvent, FC, useState } from 'react';
import { IListItem, IListItemProps } from './types';

const ListItem: FC<IListItemProps<IListItem>> = ({
    item,
    onDeleteHandler: onDelete,
    onEditHandler: onEdit,
}) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(
        typeof item === 'string' ? item : item.name
    );

    const onEditHandler = () => {
        if (editing) {
            const updated =
                typeof item === 'string' ? value : { id: item.id, name: value };
            onEdit(item, updated);
        }
        setEditing(!editing);
    };
    const onChangeHandler = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setValue(value);
    };

    const onDeleteHandler = () => {
        onDelete(item);
    };

    return (
        <div className="bg-gray-100 flex justify-between max-w-3xl shadow-xl my-5 py-2 px-4 rounded-lg items-center">
            {editing ? (
                <input
                    onChange={onChangeHandler}
                    className="text-xl font-medium uppercase p-2 rounded-xl"
                    autoFocus
                    type="text"
                    value={value}
                />
            ) : (
                <p className="text-xl font-medium uppercase p-2">
                    {typeof item === 'string' ? item : item.name}
                </p>
            )}
            <div className="flex items-center justify-center gap-x-10">
                <span className="cursor-pointer" onClick={onEditHandler}>
                    {editing ? <Icon name="Done" /> : <Icon name="Edit" />}
                </span>

                <DeleteButton
                    confirmationMessage="Delete this category?"
                    onDelete={onDeleteHandler}
                />
            </div>
        </div>
    );
};

export default ListItem;
