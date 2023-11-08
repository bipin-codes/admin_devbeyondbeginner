import Category from 'common/Category';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type CategoryType = {
    categoryName: string;
};

const Categories = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CategoryType>();

    const onSubmitHandler: SubmitHandler<CategoryType> = (data) => {
        console.log(data);
    };

    const [categories] = useState([
        { categoryName: 'node' },
        { categoryName: 'express' },
        { categoryName: 'cloud' },
        { categoryName: 'react' },
        { categoryName: 'java spring boot' },
    ]);

    return (
        <div className="flex-col p-5 justify-between  text-gray-500">
            <div className="text-3xl text-gray-500 text-bold underline underline-offset-2">Manage the list of Categories.</div>

            <form onSubmit={handleSubmit(onSubmitHandler)} className="flex items-end pt-10 pb-5">
                <div className="flex justify-center items-end gap-5">
                    <input
                        placeholder="new category name"
                        type="text"
                        className="border-2 px-5 py-3 rounded-md"
                        {...register('categoryName', { required: true, minLength: 3 })}
                    />
                    <button className="bg-blue-500 px-10 py-3 text-white rounded-md text-2xl" type="submit">
                        Create
                    </button>
                </div>
            </form>
            {Object.keys(errors).length > 0 && <div className="bg-red-200 max-w-md rounded-lg px-10 py-4">List errors here</div>}

            <div className="text-2xl text-gray-500 text-bold mt-10">Existing Categories</div>
            <ul className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {categories.map((category, index) => (
                    <Category {...category} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default Categories;
