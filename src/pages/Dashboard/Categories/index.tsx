import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    create,
    remove,
    selectCategories,
    update,
} from 'app/slices/categories';

import ListItem from 'common/ListItem';
import { ICategory } from 'app/slices/categories/types';
import { IListItem } from 'common/ListItem/types';

const Categories = () => {
    const {
        handleSubmit,
        register,
        formState: { errors: formErrors },
        reset,
    } = useForm<ICategory>();

    const categories = useAppSelector(selectCategories);

    const dispatch = useAppDispatch();

    const onSubmitHandler: SubmitHandler<ICategory> = (data) => {
        dispatch(create(data));
        reset();
    };

    const onDeleteHandler = (data: IListItem) => {
        dispatch(remove(data as ICategory));
    };
    const onEditHandler = (_oldVal: IListItem, newVal: IListItem) => {
        dispatch(update(newVal as ICategory));
    };

    return (
        <div className="flex-col p-5 justify-between  text-gray-500">
            <div className="text-3xl text-gray-500 text-bold underline underline-offset-2">
                Manage the list of Categories.
            </div>

            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col pt-10 pb-5"
            >
                <div className="flex justify-between items-center gap-5 max-w-3xl">
                    <input
                        placeholder="new category name"
                        type="text"
                        className="border-2 px-5 py-3 rounded-md flex-1"
                        {...register('name', {
                            required: 'Category Name is required!',
                            minLength: {
                                value: 3,
                                message:
                                    'Category name must be atleast 3 character long!',
                            },
                        })}
                    />
                    <button
                        className="bg-blue-500 px-10 py-3 text-white rounded-md text-2xl"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>

            {Object.keys(formErrors).length > 0 && (
                <div className="bg-red-100 max-w-md rounded-lg px-4 py-2">
                    <span>{formErrors.name?.message}</span>
                </div>
            )}

            <div className="text-2xl text-gray-500 text-bold mt-10">
                Existing Categories
            </div>
            <ul className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {categories.map((category, index) => (
                    <ListItem
                        item={category}
                        key={index}
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Categories;
