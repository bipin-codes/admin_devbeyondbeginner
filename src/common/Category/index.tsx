import Icon from 'common/Icon';
import { CategoryType } from 'pages/Dashboard/Categories';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';

const Category: FC<CategoryType> = ({ categoryName }) => {
    const [editing, setEditing] = useState(false);

    const onEditHandler = (event: MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        setEditing(!editing);
    };
    const onChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        console.log(value);
    };

    const onDeleteHandler = () => {};

    return (
        <div className="bg-gray-100 flex justify-between max-w-3xl shadow-xl my-5 p-5 rounded-lg items-center">
            {editing ? (
                <input
                    onChange={onChangeHandler}
                    className="text-xl font-medium uppercase p-2 rounded-xl"
                    autoFocus
                    type="text"
                    value={categoryName}
                />
            ) : (
                <li className="text-xl font-medium uppercase p-2">{categoryName}</li>
            )}
            <div className="flex items-center justify-center gap-x-10">
                <span onClick={onEditHandler}>{editing ? <Icon name="Done" /> : <Icon name="Edit" />}</span>
                <span onClick={onDeleteHandler}>
                    <Icon name="Delete" />
                </span>
            </div>
        </div>
    );
};

export default Category;
